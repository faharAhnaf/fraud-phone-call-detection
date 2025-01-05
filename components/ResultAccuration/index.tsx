import { useData } from "@/stores/data-store";
import HeaderTwo from "../core/HeaderTwo";

export default function AccurationResult() {
  const { data } = useData();

  return (
    <>
      {data.prediction_confidance.length > 0 &&
      data.similarity_score.length > 0 ? (
        <div className="flex flex-col justify-between mx-auto space-y-4">
          <div className="w-full space-y-3">
            <div className="border rounded-xl shadow flex flex-col items-center">
              <div className="border border-b-2 w-full flex items-center justify-center">
                <HeaderTwo>Prediction Confidence</HeaderTwo>
              </div>
              <div className="space-y-2 w-full p-4">
                {data.prediction_confidance.map((predict, i) => {
                  const resultKeys = Object.keys(predict);

                  return (
                    <div key={i}>
                      {resultKeys.map((key, j) => {
                        const resultValues = predict[key][j];
                        const maxValue = Math.max(...resultValues);

                        const percentage = maxValue * 100;
                        const index = parseInt(key.split("-")[1], 10);
                        const label = data.prediction_labeling;

                        return (
                          <div
                            key={key}
                            className="flex items-center justify-between"
                          >
                            <p className=" font-medium">
                              {key.replace(
                                `Result-${index}`,
                                `Hasil ${index + 1}`
                              )}{" "}
                              - {label[index]}
                            </p>
                            <p className="font-bold text-blue-600">
                              {percentage.toFixed(2)}%
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full space-y-3">
            <div className="border rounded-xl shadow flex flex-col items-center">
              <div className="border border-b-2 w-full flex items-center justify-center">
                <HeaderTwo>Similarity Score</HeaderTwo>
              </div>
              <div className="space-y-2 w-full p-4">
                {data.similarity_score.map((similar, i) => {
                  const resultKeys = Object.keys(similar);

                  return (
                    <div key={i}>
                      {resultKeys.map((key) => {
                        const resultObject = similar[key];
                        const maxValue = Math.max(
                          ...Object.values(resultObject)
                        );
                        const keyObject =
                          Object.keys(resultObject)[
                            Object.values(resultObject).indexOf(maxValue)
                          ];
                        const percentage = maxValue * 100;
                        const index = parseInt(key.split("-")[1], 10);

                        return (
                          <div
                            key={key}
                            className="flex items-center justify-between"
                          >
                            <p className="font-medium">
                              {key.replace(
                                `Result-${index}`,
                                `Hasil ${index + 1}`
                              )}{" "}
                              - {keyObject}
                            </p>
                            <p className="font-bold text-blue-600">
                              {percentage.toFixed(2)}%
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <HeaderTwo>Tidak Ada Hasil Akurasi</HeaderTwo>
        </div>
      )}
    </>
  );
}
