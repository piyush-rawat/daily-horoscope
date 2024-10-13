"use client";

import IMAGES from "@/utils/images";
import Image from "next/image";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer flex items-center gap-2"
      onClick={() => {
        router.push("/");
      }}
    >
      <Image
        src={IMAGES.backArrow}
        alt="back-arrow"
        width={50}
        height={50}
        className="shadow-lg rounded-[18px]"
      />
      <p className="font-bebasNeue text-gray-700">Go Back</p>
    </div>
  );
};

export default BackButton;
