"use client";

import { useUploadDialog } from "@/stores/upload-dialog-store";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import UploadDialog from "@/components/DialogUpload";
// import { useUploadButton } from "@/stores/upload-button-store";
// import { useEffect } from "react";
// import { useImageUrl } from "@/stores/image-url-store";

export default function UploadSection() {
  // const { open } = useUploadButton();
  const setUploadDialogModal = useUploadDialog((s) => s.setOpen);
  // const [imageURL, setImageURL] = useState<string | null>(null);
  // const { url, setUrl } = useImageUrl();

  // useEffect(() => {
  //   const imageURL = localStorage.getItem("imageFile");
  //   setUrl(imageURL as string);
  // }, [setUrl]);

  return (
    <section className="pt-20 grid lg:place-items-center lg:max-w-2xl mx-auto text-center space-y-5">
      <p className="font-black lg:text-7xl text-3xl">
        Jalan Rusak? Cek Keparahannya!
      </p>
      <p className="lg:text-xl text-sm mx-10">
        Melihat tingkat kerusakan jalan dan menilai dampaknya, untuk kenyamanan
        dan keselamatan berkendara.
      </p>

      {/* {open && ( */}
      <Button
        onClick={() => setUploadDialogModal(true)}
        variant={"outline"}
        className="mx-auto flex lg:w-44 grid-cols-2"
      >
        <Upload />
        Upload Gambar ✨
      </Button>
      {/* )} */}

      <UploadDialog />
    </section>
  );
}
