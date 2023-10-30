import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

function Banner() {
  return (
    <div
      className="
    w-full 
    text-center 
    h-64 
    dark:bg-gray-700 
    bg-gray-300
    rounded-2xl
    flex
    justify-start
    p-16
    items-center
    gap-8
    "
    >
      <div className="border-[1px]  h-52 w-48">
        <Image
          width={400}
          height={600}
          className="mx-auto w-auto"
          src="/images/nft-placeholder.png"
          alt="nft"
        />
      </div>
      <div className="p-2 mt-12 h-64 w-92 text-left text-xl flex flex-col gap-2 basis-1/3 text-gray-700 dark:text-white">
        <div>1. Select An NFT & Click Download</div>
        <div>2. Comeback & Click Confirm</div>
        <div className="flex flex-col gap-4 mt-4">
          <Button>1. Download NFT</Button>
          <Button>2. Confirm PFP</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
