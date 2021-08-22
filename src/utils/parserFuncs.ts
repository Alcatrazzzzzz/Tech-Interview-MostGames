import { vowels } from "../constants/vowels";

export const parseStringToIDS = (str: string): number[] => {
  const idsArrr: string[] = str.split(/,|;/);
  let result: number[] = [];

  //check form num and interval
  idsArrr.forEach((id) => {
    if (isIdValid(id)) {
      result.push(+id);
    }
  });

  //return only unique elements
  return Array.from(new Set(result));
};

export const getWordsAmount = (str: string): number => {
  return str.split(" ").length;
};

export const getVowelsAmount = (str: string): number => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      counter += 1;
    }
  }

  return counter;
};

//make some elements glow red in editable div
export const validateSearch = (str: string): string => {
  const idsArrr: string[] = str.split(/,|;/);

  if (str.length === 0) return str;

  const validatedParts = idsArrr.map((id) => {
    if (id !== "" && id !== " ") {
      if (isIdValid(id) || id.includes("span")) {
        return id;
      } else {
        return `<span class='color-red'>${id}</span>`;
      }
    } else {
      return null;
    }
  });
  console.log(validatedParts);
  return validatedParts.join(",");
};

const isIdValid = (id: string): boolean => {
  return Number.isFinite(+id) && +id > 0 && +id <= 20;
};
