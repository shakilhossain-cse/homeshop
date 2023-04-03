export const dateFormate = (foredate: string) => {
  const date = new Date(foredate);
  const options: any = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
