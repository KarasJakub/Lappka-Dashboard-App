const breakpoints = {
  tablet: 768,
  laptop: 1024,
  largeLaptop: 1280,
  desktop: 1536,
}

const theme = {
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  },
  colors: {
    "black": '#000000',
    "white": '#ffffff',
    // Primary
    "primaryPr900": "#194634",
    "primaryPr800": "#205b43",
    "primaryPr700": "#287154",
    "primaryPr600": "#369871",
    "primaryPr500": "#43be8d",
    "primaryPr400": "#69cba4",
    "primaryPr300": "#8fd8bb",
    "primaryPr200": "#bbe8d6",
    "primaryPr100": "#e1f5ed",
    "primaryPr50": "#f0faf6",
    // Dark Gray
    "darkGray1": "#1a2024",
    "darkGray2": "#252c32",
    "darkGray3": "#252c32",
    "darkGray4": "#3c464e",
    // Mid Gray
    "midGray1": "#5b6871",
    "midGray2": "#6e7c87",
    "midGray3": "#84919a",
    "midGray4": "#9aa6ac",
    "midGray5": "#b0babf",
    // Light Gray
    "lightGray1": "#d5dadd",
    "lightGray2": "#dde2e4",
    "lightGray3": "#e5e9eb",
    "lightGray4": "#eef0f2",
    "lightGray5": "#f6f7f9",
    // Red
    "redR800": "#8d0104",
    "redR700": "#cc0905",
    "redR600": "#f2271c",
    "redR500": "#f76659",
    "redR100": "#ffefeb",
    // Status
    "statusSuccess": "#47D16C",
    "statusFocus": "#1a73e8",
  },
  font: {
    primary: '"Inter", sans-serif',
  },
  MQ: {
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    laptop: `@media (min-width: ${breakpoints.laptop}px)`,
    largeLaptop: `@media (min-width: ${breakpoints.largeLaptop}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  }
}

export default theme