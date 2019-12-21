import { DateRange } from '../models';

export const createDateRange = (start: Date, end: Date): DateRange => ({
  start: start ? new Date(start.getTime()) : null,
  end: end ? new Date(end.getTime()) : null,
});
