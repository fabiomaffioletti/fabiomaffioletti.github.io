const months: Record<string, string> = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

export function toDateTime(value: string): string | undefined {
  if (/^\d{4}$/.test(value)) {
    return value;
  }

  const [month, year] = value.split(" ");

  if (year && months[month]) {
    return `${year}-${months[month]}`;
  }

  return undefined;
}
