"use client";
// import LoadingAudio from "@/components/core/LoadingAudio";
import { useLoadingApi } from "@/stores/loading-api-store";
// import { useToast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { useAudio } from "@/stores/image-store";
// import { useUploadButton } from "@/stores/upload-button-store";
// import { useAudio } from "@/stores/image-store";
import { useEffect } from "react";
import LoadingAudio from "@/components/core/LoadingAudio";
// import { set } from "react-hook-form";
export default function AudioSection() {
  // const { image, setAudio } = useAudio();
  // const { toast } = useToast();
  // const setOpenUploadButton = useUploadButton((s) => s.setOpen);
  // const [imageURL, setAudioURL] = useState<string | null>(null);
  const { loading, setLoading } = useLoadingApi();

  useEffect(() => {
    // setAudio(true);
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    const loadAudios = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    loadAudios();
  }, []);

  return (
    <>
    {loading && (
      <section className="grid mx-auto lg:w-96 ">
       <LoadingAudio />
      </section>
    )}
    </>
  );
}
