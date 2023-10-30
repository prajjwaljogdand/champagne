"use client";
import React, { useState } from "react";
import { nftData } from "./nftData";
import NFTComponent from "./NFTComponent";
import ImageModal from "./ImageModal";

type NFT = {
  id: string;
  label: string;
  url: string;
};

export const NFTGrid = () => {
  const [selectedNFT, setSelectedNFT] = useState<NFT>();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  return (
    <div>
      <ImageModal
        src={selectedNFT?.url}
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        label={selectedNFT?.label}
      />
      <div className="flex flex-wrap gap-8 p-2 mt-6 justify-evenly">
        {nftData.map((nft) => (
          <NFTComponent
            onClick={async () => {
              setSelectedNFT(nft);
              setImageModalOpen(true);
            }}
            key={nft.id}
            id={nft.id}
            label={nft.label}
            url={nft.url}
          />
        ))}
      </div>
    </div>
  );
};
