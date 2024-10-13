import BackButton from "@/components/BackButton";
import CategoryButton from "@/components/CategoryButton";
import { zodiacs } from "@/data";
import { getURL, getZodiacImage } from "@/utils/globalFunctions";
import * as cheerio from "cheerio";
import Image from "next/image";

export const dynamic = "force-dynamic";

const getData = async ({
  sign,
  category,
  range,
  relationType,
}: {
  sign: number;
  category: string;
  range: string;
  relationType?: string | undefined;
}) => {
  try {
    const response = await fetch(
      getURL({ sign, category, timeline: range, relationType: relationType }),
      {
        cache: "no-store",
      }
    );
    const html = await response.text();

    const $ = cheerio.load(html);
    const description = $("p:first").text();

    // console.log(description);

    return description;
  } catch (error) {
    console.log(error);
  }
};

const timelines = ["today", "tomorrow", "weekly", "monthly"];
const categories = ["general", "career", "money", "health", "love"];

const Zodiac = async (props: {
  params: { zodiac: any };
  searchParams: { category: any; range: any; relation: any };
}) => {
  const { zodiac } = props.params;
  const { category, range, relation } = props.searchParams;

  const selectedZodiac = zodiacs.find(
    (item) => item.name.toLowerCase() === zodiac
  );

  if (!selectedZodiac) return;

  const description = await getData({
    sign: selectedZodiac?.id,
    category: category,
    range: range,
    relationType: relation,
  });

  const href = (
    zodiac: any,
    category: string,
    range: string,
    relation = "single"
  ) => {
    let href = `/${zodiac}?category=${category}&range=${range}`;

    if (category === "love") {
      href += `&relation=${relation}`;
    }

    return href;
  };

  return (
    <div className="px-4 py-12 sm:p-20 flex flex-col gap-6">
      <div className="flex">
        <BackButton />
      </div>

      <div className="borde">
        <div className="flex items-center gap-2 borde">
          <div>
            <h1 className="font-bebasNeue text-[64px] leading-none bg-gradient-to-b from-[#243949] to-[#517fa4] bg-clip-text text-transparent borde">
              {zodiac.toUpperCase()}
            </h1>
          </div>
          <Image
            src={getZodiacImage(zodiac.toLowerCase())}
            alt="zodiac-img"
            width={64}
            height={64}
            className="borde"
          />
        </div>
        <p className="font-bebasNeue borde text-gray-700">
          {selectedZodiac?.dates}
        </p>
      </div>

      <div className="flex gap-4 borde">
        {timelines.map((item, index) => (
          <a
            key={index}
            href={href(
              zodiac,
              category === "money" ? "general" : category,
              item
            )}
          >
            <p
              className={`font-bebasNeue text-lg ${
                range === item
                  ? "bg-gradient-to-t from-[#fa7070] to-[#FAD0C4] bg-clip-text text-transparent"
                  : "text-gray-700"
              }`}
            >
              {item}
            </p>
          </a>
        ))}
      </div>

      <div className="borde flex flex-wrap gap-3">
        {categories.map((item, index) => {
          // Money categoery will only show on weekly
          if (item === "money" && range !== "weekly") {
            return;
          }

          return (
            <a key={index} href={href(zodiac, item, range)}>
              <CategoryButton
                label={item[0].toUpperCase() + item.slice(1)}
                isselected={category === item}
              />
            </a>
          );
        })}
      </div>

      <div>
        {category === "love" && (range === "weekly" || range === "monthly") && (
          <div className="flex gap-3">
            {["single", "couple"].map((item, index) => (
              <a key={index} href={href(zodiac, category, range, item)}>
                <CategoryButton label={item} isselected={relation === item} />
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="font-indieFlower text-xl borde text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default Zodiac;
