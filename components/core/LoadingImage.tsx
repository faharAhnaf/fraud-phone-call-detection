import React from "react";
import Image from "next/image";

const LoadingImage = ({ imageURL }: { imageURL: string }) => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <Image
        src={imageURL}
        width={500}
        height={500}
        alt="Loading"
        className="filter blur-sm"
      />

      <div className="absolute z-10 flex flex-col items-center justify-center">
        {" "}
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500 mb-4"></div>
        <h1 className="text-xl font-bold text-white animate-pulse">
          Generate Hasil
        </h1>
      </div>
    </div>
  );
};

export default LoadingImage;
