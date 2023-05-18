export type TDate = {
  year: number;
  month: TMonth;
  day: number;
};

export type TMonth =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";

export type TUnitSpeed = "mph" | "km/h" | "m/s";
export type TUnitDistance = "meters" | "feet" | "yards";
export type TLanguage = "en" | "es" | "fr";
export type BallType = "baseball" | "softball" | "tennis-ball" | "soccer-ball";
