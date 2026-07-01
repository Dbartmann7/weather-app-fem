'use client';

import Image from "next/image"
import ErrorImg from "@/public/images/icon-error.svg"

const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="max-w-150 flex flex-col gap-4 py-24 text-center items-center self-center text-white">
      <Image src={ErrorImg} alt="Drop" className="w-10"/>
      <h1 className="font-mono font-bold">Something Went Wrong</h1>
      <p className="w-4/5 text-light">{`${error.message} Please try again in a few moments`}</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}

export default Error