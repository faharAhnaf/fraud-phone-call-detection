"use client";

import { useUploadDialog } from "@/stores/upload-dialog-store";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import UploadDialog from "@/components/DialogUpload";
import { useLoadingApi } from "@/stores/loading-api-store";

export default function UploadSection() {
  const setUploadDialogModal = useUploadDialog((s) => s.setOpen);
  const { loading } = useLoadingApi();

  return (
    <section className="pt-20 lg:place-items-center lg:max-w-3xl mx-auto text-center space-y-10">
      <p className="font-black lg:text-7xl text-4xl">
        Aplikasi Klasifikasi Voice Phishing Percakapan Telepon
      </p>

      {!loading && (
        <>
          <p className="lg:text-xl text-xl">
            Masukan file audio untuk dilakukan klasifikasi Phishing
          </p>
          <Button
            onClick={() => setUploadDialogModal(true)}
            variant={"outline"}
            className="mx-auto flex lg:w-44 grid-cols-2 text-black"
          >
            <Upload />
            Upload Audio
          </Button>
        </>
      )}

      <UploadDialog />
    </section>
  );
}
