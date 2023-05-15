import { TDate } from "../types";
import { User } from "./users";

// Distance is in miles, speed is in miles per hour
export type TPreviousRun = {
  id: string;
  date: TDate;
  userId: string;
  distance: number;
  speed: number;
};

export const previousRuns: TPreviousRun[] = [
  { id: "1", date: { year: 2020, month: "january", day: 1 }, userId: "1", distance: 5, speed: 60 },
  { id: "2", date: { year: 2020, month: "january", day: 1 }, userId: "1", distance: 5, speed: 10 },
  { id: "3", date: { year: 2020, month: "january", day: 1 }, userId: "1", distance: 5, speed: 10 },
  { id: "4", date: { year: 2020, month: "january", day: 1 }, userId: "1", distance: 5, speed: 10 },
];
