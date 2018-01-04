export const getPercentage = (value, total, digits=2) => {
  return +((value/total) * 100).toFixed(digits)
}
