import { isSameDay, isSameMonth, isSameYear } from 'date-fns';

export const isSameDate = (date: Date, current: Date): boolean => (
  isSameDay(date, current) && isSameMonth(date, current) && isSameYear(date, current)
);
