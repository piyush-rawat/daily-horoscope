import ZodiacItem from "@/components/ZodiacItem";
import { zodiacs } from "@/data";

const Home = () => {
  return (
    <div className="p-2 pt-8 pb-12">
      <h1 className="font-pacifico text-[#FA7070] text-center text-3xl md:text-[40px] mb-6">
        Welcome to DailyHoroscope
      </h1>
      <p className="font-pacifico text-[#FA7070] text-center text-2xl mb-10">
        Select your zodiac sign
      </p>

      <div className="flex justify-center">
        <div className="inline-grid grid-cols-2 md:grid-cols-3 gap-12">
          {zodiacs.map((zodiac) => (
            <ZodiacItem key={zodiac.id} zodiac={zodiac} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
