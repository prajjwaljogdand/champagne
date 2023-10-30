"use client";

import Button from "@/app/components/Button";
import Modal from "@/app/components/Modals";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
  label?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  src,
  label,
}) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-center items-center gap-8 px-4">
        <div className="w-80 h-60 flex flex-col justify-center items-center gap-4">
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <Image
              width={400}
              height={600}
              className="mx-auto w-auto"
              src={src}
              alt="nft"
            />
          </div>
          <div className="text-xl">{label}</div>
        </div>
        <div className="text-center flex flex-col gap-4 w-full">
          <div>Your NFT Has Been Linked &#127881;</div>
          <Button fullWidth>Successful</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
