import { useData } from "@/stores/data-store";
import HeaderTwo from "../core/HeaderTwo";

export default function PredictionResult() {
  const { data } = useData();

  return (
    <>
      {data.predicted_labels.length > 0 ? (
        <div className="w-full space-y-3">
          <div className="border rounded-xl shadow flex flex-col items-center">
            <div className="border border-b-2 w-full flex rounded-t-xl items-center justify-center">
              <HeaderTwo>Label Prediksi</HeaderTwo>
            </div>
            <div className="space-y-2 w-full p-4">
              {data.predicted_labels.map((predict, i) => {
                switch (predict) {
                  case "1_p_p_o":
                    predict = "Penipuan Pinjaman Online Ilegal";
                    break;
                  case "2_p_b_k_k":
                    predict = "Penipuan berkedok krisis keluarga";
                    break;
                  case "3_p_i_i":
                    predict = "Penipuan Investasi Ilegal";
                    break;
                  case "4_p_j_b_j":
                    predict = "Penipuan Jual beli (Barang/Jasa)";
                    break;
                  case "5_p_h":
                    predict = "Penipuan berkedok hadiah";
                    break;
                  case "6_n_p":
                    predict = "Non-Phishing";
                    break;
                }
                let key = "";
                switch (i) {
                  case 0:
                    key = "Modus Phishing 1 :";
                    break;
                  case 1:
                    key = "Modus Phishing 2 :";
                    break;
                  case 2:
                    key = "Modus Phishing 3 :";
                    break;
                  case 3:
                    key = "Modus Phishing 4 :";
                    break;
                  case 4:
                    key = "Modus Phishing 5 :";
                    break;
                  case 5:
                    key = "Non Phising :";
                    break;
                }

                return (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        {key} <span className="font-bold"> {predict} </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <HeaderTwo>Tidak Ada Hasil Label Prediksi</HeaderTwo>
        </div>
      )}
    </>
  );
}
