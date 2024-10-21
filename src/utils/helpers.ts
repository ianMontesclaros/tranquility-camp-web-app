import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const subtractDates = (dateStr1: string, dateStr2: string) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// supabase needs an ISO date string
export const getToday = function (options = { end: false }) {
  const today = new Date();

  // set the date to be END of the day when comparing with earlier dates
  if (options?.end)
    // set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "EUR" }).format(
    value
  );
