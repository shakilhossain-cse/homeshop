function getCategoryValuesFromUrl(): string[] {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");
  if (categoryParam) {
    return categoryParam.split(",").map((c) => c.replace("%2C", ","));
  }
  return [];
}

export { getCategoryValuesFromUrl };
