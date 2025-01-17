import NavbarSection from "@/containers/navbar-section";
import UploadSection from "@/containers/home-page/upload-section";
import { Toaster } from "@/components/ui/toaster";
import ResultSection from "@/containers/home-page/result-section";
import AudioSection from "@/containers/home-page/audio-section";

export default function HomePage() {
  return (
    <main className="relative mx-auto grid min-h-screen">
      <NavbarSection />
      <UploadSection />
      <AudioSection />
      <ResultSection />
      <Toaster />
    </main>
  );
}
