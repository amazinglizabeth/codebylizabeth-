export function formatYears(startYear: number) {
  const now = new Date().getFullYear()
  return now - startYear
}
