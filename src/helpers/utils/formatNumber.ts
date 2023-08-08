export const formatNumber = (number: string | number): string => {
  const numberFormatter = new Intl.NumberFormat("pl-PL")

  const convertedNumber =
    typeof number === "string" ? parseFloat(number) : number
  if (isNaN(convertedNumber)) {
    return "Niepoprawna liczba"
  }

  if (convertedNumber >= 1000 && convertedNumber < 1000000) {
    const formattedNumber = (convertedNumber / 1000).toFixed(1)
    const formattedString = formattedNumber.endsWith(".0")
      ? formattedNumber.slice(0, -2)
      : formattedNumber
    return numberFormatter.format(parseFloat(formattedString)) + " tyś"
  } else if (convertedNumber >= 1000000) {
    const formattedNumber = (convertedNumber / 1000000).toFixed(1)
    const formattedString = formattedNumber.endsWith(".0")
      ? formattedNumber.slice(0, -2)
      : formattedNumber
    return numberFormatter.format(parseFloat(formattedString)) + " mln"
  } else {
    return numberFormatter.format(convertedNumber)
  }
}
