"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../core/messages/ErrorMessage";
// import { useImage } from "@/stores/image-store";
import { useState } from "react";
import { addDataPicture } from "@/services/stream";
import { useUploadDialog } from "@/stores/upload-dialog-store";
// import { useUploadButton } from "@/stores/upload-button-store";
import { useImage } from "@/stores/image-store";
import { useLoadingApi } from "@/stores/loading-api-store";
import { useImageUrl } from "@/stores/image-url-store";
import { useData } from "@/stores/data-store";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const schema = z.object({
  long: z.number().min(-180).max(180),
  lat: z.number().min(-90).max(90),
  image: z
    .any()
    .refine(
      (file) => file?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
      "Only .jpg & .jpeg & .png formats are supported."
    ),
});

type FormData = z.infer<typeof schema>;

export default function FormDialog() {
  const setUploadDialogModal = useUploadDialog((s) => s.setOpen);
  // const setUploadButton = useUploadButton((s) => s.setOpen);
  const setImage = useImage((s) => s.setImage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [file, setFile] = useState<File | null>(null);
  const { setLoading } = useLoadingApi();
  const { setUrl } = useImageUrl();
  const { setData } = useData();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataUrl = reader.result as string;
          setImage(true);
          setUrl(imageDataUrl);
        };
        // setImage(reader.result as string);
        reader.readAsDataURL(file);
      }

      const formData = new FormData();

      formData.append("long", data.long.toString());
      formData.append("lat", data.lat.toString());
      if (data.image[0]) {
        formData.append("image", data.image[0]);
      }

      setUploadDialogModal(false);
      const res = await addDataPicture(formData);
      if (res) {
        setData(res.data);
        setUrl(res.data.original_image);
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
            <Label htmlFor="long">Longitude</Label>
            <Input
              type="text"
              id="long"
              placeholder="Input longitude..."
              {...register("long", { valueAsNumber: true })}
              onChange={(e) => {
                e.target.value = e.target.value.replace(",", ".");
              }}
            />
            {errors.long && <ErrorMessage message={errors.long.message} />}
          </div>
        </li>
        <li>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="lat">Latitude</Label>
            <Input
              type="text"
              id="lat"
              placeholder="Input latitude..."
              {...register("lat", { valueAsNumber: true })}
              onChange={(e) => {
                e.target.value = e.target.value.replace(",", ".");
              }}
            />
            {errors.lat && <ErrorMessage message={errors.lat.message} />}
          </div>
        </li>
        <li>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="image">Gambar</Label>
            <Input
              id="image"
              type="file"
              {...register("image")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return;
                setFile(e.target.files?.[0]);
              }}
            />
            {errors.image && (
              <ErrorMessage message={errors.image.message as string} />
            )}
          </div>
        </li>
        <li className="flex w-full justify-end">
          <Button
            variant={"outline"}
            type="submit"
            onClick={() => {
              // setUploadButton(false);
            }}
          >
            Submit
          </Button>
        </li>
      </ul>
    </form>
  );
}
