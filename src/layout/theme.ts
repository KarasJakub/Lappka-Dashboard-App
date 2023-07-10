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
    semibold: 600,
    bold: 700,
    extraBold: 800
  },
  colors: {
    "black": '#000000',
    "white": '#ffffff',
    // Primary
    "primary-pr900": "#194634",
    "primary-pr800": "#205b43",
    "primary-pr700": "#287154",
    "primary-pr600": "#369871",
    "primary-pr500": "#43be8d",
    "primary-pr400": "#69cba4",
    "primary-pr300": "#8fd8bb",
    "primary-pr200": "#bbe8d6",
    "primary-pr100": "#e1f5ed",
    "primary-pr50": "#f0faf6",
    // Dark Gray
    "dark-gray-1": "#1a2024",
    "dark-gray-2": "#252c32",
    "dark-gray-3": "#252c32",
    "dark-gray-4": "#3c464e",
    // Mid Gray
    "mid-gray-1": "#5b6871",
    "mid-gray-2": "#6e7c87",
    "mid-gray-3": "#84919a",
    "mid-gray-4": "#9aa6ac",
    "mid-gray-5": "#b0babf",
    // Light Gray
    "light-gray-1": "#d5dadd",
    "light-gray-2": "#dde2e4",
    "light-gray-3": "#e5e9eb",
    "light-gray-4": "#eef0f2",
    "light-gray-5": "#f6f7f9",
    // Red
    "red-r800": "#8d0104",
    "red-r700": "#cc0905",
    "red-r600": "#f2271c",
    "red-r500": "#f76659",
    "red-r100": "#ffefeb",
    // Status
    "status-success": "#47D16C",
    "status-focus": "#1a73e8",
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