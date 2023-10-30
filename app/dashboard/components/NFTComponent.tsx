import React from "react";
import Image from "next/image";

interface NFTComponentProps {
  id: string;
  label: string;
  url: string;
  onClick: () => {};
}

const NFTComponent: React.FC<NFTComponentProps> = ({
  id,
  label,
  url,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="shadow-md cursor-pointer flex flex-col justify-center items-center min-w-64 p-3 rounded-xl gap-2 bg-white dark:bg-gray-700 border-[1px] dark:border-gray-500 "
    >
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <Image
          width={400}
          height={600}
          className="mx-auto w-auto max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={url}
          alt="nft"
        />
      </div>
      <div>{label}</div>
    </div>
  );
};

export default NFTComponent;
