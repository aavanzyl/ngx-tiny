export interface Day {
  date: Date;
  day: number;
  month: number;
  year: number;
  inThisMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isSelectable: boolean;
  isStart: boolean;
  isEnd: boolean;
  isVisible: boolean;
}
