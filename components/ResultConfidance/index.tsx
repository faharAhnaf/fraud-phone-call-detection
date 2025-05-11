import { useData } from "@/stores/data-store";
import HeaderTwo from "../core/HeaderTwo";

const LABEL_MAP: Record<string, string> = {
  "1_p_p_o": "Penipuan Pinjaman Online Ilegal",
  "2_p_b_k_k": "Penipuan Berkedok Krisis Keluarga",
  "3_p_i_i": "Penipuan Investasi Ilegal",
  "4_p_j_b_j": "Penipuan Jual Beli (Barang/Jasa)",
  "5_p_h": "Penipuan Berkedok Hadiah",
  "6_n_p": "Non-Phishing",
};

export default function ConfidanceResult() {
  const { data } = useData();

  // Gabungkan label dan score
  const results = data.predicted_labels.map((label, i) => {
    // Ubah string persen ke number
    const scoreStr = data.confidence_scores[i]
      ?.replace("%", "")
      .replace(",", ".");
    const score = parseFloat(scoreStr || "0");
    return {
      label,
      labelName: LABEL_MAP[label] || label,
      score,
      scoreStr: data.confidence_scores[i] || "0%",
    };
  });

  // Filter score >= 60
  const filtered = results.filter((item) => item.score >= 60);

  return (
    <>
      {data.confidence_scores.length > 0 ? (
        <div className="w-1/2 mx-auto space-y-3">
          <div className="border rounded-xl shadow flex flex-col items-center relative">
            <div className="border border-b-2 w-full rounded-t-xl flex items-center justify-center">
              <HeaderTwo>Hasil Klasifikasi Modus Voice Phishing</HeaderTwo>
            </div>
            <div className="space-y-2 w-full p-4">
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>{item.labelName} :</span>
                      <span>{item.scoreStr.replace(".", ",")}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-lg font-bold">
                  Belum Terklasifikasi
                </div>
              )}
            </div>
            {/* Note kiri bawah */}
            <div className="text-xs text-white/50 w-full p-4">
              Note: Persentase yang muncul merupakan nilai confidence
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <HeaderTwo>Tidak Ada Hasil Nilai Akurasi</HeaderTwo>
        </div>
      )}
    </>
  );
}
