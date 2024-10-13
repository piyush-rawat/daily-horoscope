import IMAGES from "@/utils/images";

export const getZodiacImage = (name: string) => {
  switch (name) {
    case "aries":
      return IMAGES.aries;
    case "taurus":
      return IMAGES.taurus;
    case "gemini":
      return IMAGES.gemini;
    case "cancer":
      return IMAGES.cancer;
    case "leo":
      return IMAGES.leo;
    case "virgo":
      return IMAGES.virgo;
    case "libra":
      return IMAGES.libra;
    case "scorpio":
      return IMAGES.scorpio;
    case "sagittarius":
      return IMAGES.sagittarius;
    case "capricorn":
      return IMAGES.capricorn;
    case "aquarius":
      return IMAGES.aquarius;
    case "pisces":
      return IMAGES.pisces;
    default:
      return "";
  }
};

export const getURL = (query: {
  sign: number;
  category: string;
  timeline: string;
  relationType?: string;
}) => {
  const {
    sign,
    category = "general",
    timeline = "today",
    relationType = "single",
  } = query;

  let baseURL = "https://www.horoscope.com/us/horoscopes/";

  switch (category) {
    case "general":
      baseURL += "general/horoscope-general";
      break;
    case "career":
      baseURL += "career/horoscope-career";
      break;
    case "money":
      baseURL += "money/horoscope-money";
      break;
    case "health":
      baseURL += "wellness/horoscope-wellness";
      break;
    case "love":
      baseURL += "love/horoscope-love";
      break;
    default:
      baseURL += "general/horoscope-general";
  }

  switch (timeline) {
    case "today":
      baseURL += "-daily-today";
      break;
    case "tomorrow":
      baseURL += "-daily-tomorrow";
      break;
    case "weekly":
      if (category == "love") {
        if (relationType == "single") {
          baseURL += "-weekly-single";
          break;
        }
        if (relationType == "couple") {
          baseURL += "-weekly-couple";
          break;
        }
      } else {
        baseURL += "-weekly";
        break;
      }
    case "monthly":
      if (category == "love") {
        if (relationType == "single") {
          baseURL += "-monthly-single";
          break;
        }
        if (relationType == "couple") {
          baseURL += "-monthly-couple";
          break;
        }
      } else {
        baseURL += "-monthly";
        break;
      }
    case "yearly":
      baseURL += "";
      break;
    default:
      baseURL += "-daily-today";
  }

  baseURL += `.aspx?sign=${sign}`;

  // console.log(baseURL);

  return baseURL;
};
