import React from "react";

const LoadingAudio = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500 mb-4"></div>
        <h1 className="text-xl font-bold text-white animate-pulse">
          Generate Hasil
        </h1>
      </div>
    </div>
  );
};

export default LoadingAudio;
