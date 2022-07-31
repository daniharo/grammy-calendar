import { type InlineKeyboardButton } from "./deps.deno.ts";

export interface CalendarOptions {
  defaultDate?: Date;
  startWeekDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  weekDayNames?: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  monthNames?: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  minDate?: Date;
  maxDate?: Date;
  hideIgnoredWeeks?: boolean;
  ignoreWeekDays?: readonly number[];
  shortcutButtons?: InlineKeyboardButton[];
}

export type CalendarContext = {
  calendarSelectedDate?: Date;
};
