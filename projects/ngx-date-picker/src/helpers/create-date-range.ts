import { DateRange } from '../models';

export const createDateRange = (start: Date, end: Date): DateRange => ({
  start: new Date(start.getTime()),
  end: new Date(end.getTime()),
});
