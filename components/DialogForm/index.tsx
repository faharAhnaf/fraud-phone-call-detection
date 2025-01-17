"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../core/messages/ErrorMessage";
// import { useImage } from "@/stores/audio-store";
import { useState } from "react";
import { addDataPicture } from "@/services/stream";
import { useUploadDialog } from "@/stores/upload-dialog-store";
// import { useUploadButton } from "@/stores/upload-button-store";
import { useAudio } from "@/stores/audio-store";
import { useLoadingApi } from "@/stores/loading-api-store";
import { useData } from "@/stores/data-store";

// const MAX_FILE_SIZE = 5000000;
const ACCEPTED_AUDIO_TYPES = ["audio/mpeg", "audio/wav"];

const schema = z.object({
  audio: z
    .any()
    .refine(
      (file) => file && file[0] && ACCEPTED_AUDIO_TYPES.includes(file[0].type),
      "Only .mp3 & .wav format yang dibolehkan"
    ),
});

type FormData = z.infer<typeof schema>;

export default function FormDialog() {
  const setUploadDialogModal = useUploadDialog((s) => s.setOpen);
  // const setUploadButton = useUploadButton((s) => s.setOpen);
  const setAudio = useAudio((s) => s.setAudio);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [file, setFile] = useState<File | null>(null);
  const { setLoading } = useLoadingApi();
  const { setData } = useData();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAudio(true);
        };
        // setAudio(reader.result as string);
        reader.readAsDataURL(file);
      }

      const formData = new FormData();

      // formData.append("long", data.long.toString());
      // formData.append("lat", data.lat.toString());
      if (data.audio[0]) {
        formData.append("audio", data.audio[0]);
      }

      setUploadDialogModal(false);
      const res = await addDataPicture(formData);
      if (res) {
        setData(res.data);
        setAudio(false);
      }

      console.log("Data: ", res);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="grid gap-4">
        <li>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="audio">Audio</Label>
            <Input
              id="audio"
              type="file"
              {...register("audio")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return;
                setFile(e.target.files?.[0]);
              }}
            />
            {errors.audio && (
              <ErrorMessage message={errors.audio.message as string} />
            )}
          </div>
        </li>
        <li className="flex w-full justify-end">
          <Button variant={"outline"} type="submit">
            Submit
          </Button>
        </li>
      </ul>
    </form>
  );
}
