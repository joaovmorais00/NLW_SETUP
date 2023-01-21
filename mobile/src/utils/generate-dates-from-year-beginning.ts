import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
  const firstDayOfTheyear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];
  let compareDate = firstDayOfTheyear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
