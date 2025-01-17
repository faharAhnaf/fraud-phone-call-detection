import { useData } from "@/stores/data-store";
import HeaderTwo from "../core/HeaderTwo";

export default function TranscriptionResult() {
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
        <div className="w-full space-y-3">
          <div className="border rounded-xl shadow flex flex-col items-center">
            <div className="border border-b-2 w-full flex rounded-t-xl items-center justify-center">
              <HeaderTwo>Transkrip Percakapan</HeaderTwo>
            </div>
            <div className="space-y-2 w-full p-4">
              {transcriptionData.map((item, i) => {
                const isSpeaker00 = item.speaker === "[SPEAKER_00]";
                const isSpeaker01 = item.speaker === "[SPEAKER_01]";
                const isSpeaker02 = item.speaker === "[SPEAKER_02]";

                let speakerLabel = "";
                if (isSpeaker00) speakerLabel = "Speaker 00";
                else if (isSpeaker01) speakerLabel = "Speaker 01";
                else if (isSpeaker02) speakerLabel = "Speaker 02";

                return (
                  <div
                    key={i}
                    className={`flex ${
                      isSpeaker01 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-start ${
                        isSpeaker01 ? "items-end" : "items-start"
                      }`}
                    >
                      <span className="text-xs text-gray-400">
                        {speakerLabel}
                      </span>
                      <div
                        className={`max-w-xs p-2 m-1 rounded-lg text-white ${
                          isSpeaker00 || isSpeaker02
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      >
                        <p className="font-medium">{item.message}</p>
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
