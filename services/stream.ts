import instance from "@/lib/axios";

export const addDataPicture = async (formData: FormData) => {
  try {
    const res = await instance.post("/stream", formData);
    return res;
  } catch (error) {
    console.log(error);
  }
};
