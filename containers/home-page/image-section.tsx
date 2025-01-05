"use client";
import LoadingImage from "@/components/core/LoadingImage";
import { useLoadingApi } from "@/stores/loading-api-store";
// import { useToast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { useImage } from "@/stores/image-store";
import Image from "next/image";
// import { useUploadButton } from "@/stores/upload-button-store";
// import { useImage } from "@/stores/image-store";
import { useEffect } from "react";
import { useImageUrl } from "@/stores/image-url-store";
// import { set } from "react-hook-form";
export default function ImageSection() {
  // const { image, setImage } = useImage();
  // const { toast } = useToast();
  // const setOpenUploadButton = useUploadButton((s) => s.setOpen);
  // const [imageURL, setImageURL] = useState<string | null>(null);
  const { loading, setLoading } = useLoadingApi();
  const { url } = useImageUrl();

  useEffect(() => {
    // setImage(true);
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    const loadImages = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    loadImages();
  }, []);

  return (
    <section className="grid mx-auto lg:w-96 px-5 pt-10">
      {url && loading && <LoadingImage imageURL={url} />}
      {url && !loading && (
        <>
          <Image
            src={url}
            alt="road"
            width={500}
            height={500}
            className="rounded-xl "
          ></Image>
        </>
      )}
    </section>
  );
}
