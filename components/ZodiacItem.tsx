import { getZodiacImage } from "@/utils/globalFunctions";
import Image from "next/image";
import Link from "next/link";

import { Zodiac } from "@/utils/types";

const ZodiacItem = ({ zodiac }: { zodiac: Zodiac }) => {
  return (
    <Link
      href={`/${zodiac.name.toLowerCase()}?category=general&range=today`}
      className="w-[140px] sm:w-[180px] h-[180px] flex flex-col justify-center items-center hover:shadow-lg transition-all rounded-xl"
    >
      <div className="h-[100px] w-[100px] flex justify-center items-center bg-gradient-to-r from-[#FF9A9E] to-[#FAD0C4] rounded-full border border-[#fa707066]">
        <Image
          src={getZodiacImage(zodiac.name.toLowerCase())}
          alt="zodiac-img"
          width={80}
          height={80}
        />
      </div>
      <p className="font-pacifico text-center text-gray-700">{zodiac.name}</p>
      <p className="font-bebasNeue text-center text-gray-700">{zodiac.dates}</p>
    </Link>
  );
};

export default ZodiacItem;
