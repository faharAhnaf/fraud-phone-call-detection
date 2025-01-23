import { useData } from "@/stores/data-store";
import HeaderTwo from "../core/HeaderTwo";

export default function TranscriptionResultRev() {
  const { data } = useData();

  const splitTranscription = (transcription: string) => {
    const regex = /\[SPEAKER_\d+\]\s*/g;
    const parts = transcription
      .split(regex)
      .filter((part) => part.trim() !== "");

    const speakers = transcription.match(regex) || [];

    return parts.map((message, index) => ({
      message: message.trim(),
      speaker: speakers[index] ? speakers[index].trim() : null,
    }));
  };

  const transcriptionData = splitTranscription(data.transcription);

  return (
    <>
      {transcriptionData.length > 0 ? (
        <div className="w-full space-y-3 bg-gray-200 text-black rounded-xl">
          <div className="border border-black rounded-xl shadow flex flex-col items-center">
            <div className="border border-black border-b-2 w-full flex rounded-t-xl items-center justify-center">
              <HeaderTwo>Transkrip Percakapan</HeaderTwo>
            </div>
            <div className="space-y-2 w-full p-4 border-black">
              {transcriptionData.map((item, i) => {
                const isSpeaker00 = item.speaker === "[SPEAKER_00]";
                const isSpeaker01 = item.speaker === "[SPEAKER_01]";
                const isSpeaker02 = item.speaker === "[SPEAKER_02]";

                return (
                  <div key={i} className={`flex justify-start`}>
                    <div className={`flex flex-col items-start`}>
                      <div className={`rounded-lg `}>
                        <p className="font-medium text-lg">
                          <span
                            className={`font-bold ${
                              isSpeaker00 && "text-blue-500"
                            } ${isSpeaker01 && "text-green-500"} ${
                              isSpeaker02 && "text-red-500"
                            }`}
                          >
                            {item.speaker}
                          </span>{" "}
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <HeaderTwo>Tidak Ada Hasil Transkrip Percakapan</HeaderTwo>
        </div>
      )}
    </>
  );
}
