
export function getButtonPaddingSize(size: string | undefined) {
  switch (size) {
    case "Medium":
      return ".4rem 1.2rem";
    case "Large":
      return ".8rem 1.6rem";
    case "XLarge":
      return "1.2rem 1.6rem";

    default:
      return "0";
  }
}

export function getButtonMarginSize(margin: string | undefined) {
  switch (margin) {
    case "Medium":
      return "1.6rem 0 0 0";
    case "Large":
      return "2.4rem 0 0 0";
    case "XLarge":
      return "3.2rem 0 0 0"

    default:
      return "0";
  }
}

export function getInputPaddingSize(padding: string | undefined) {
  switch (padding) {
    case "Medium":
      return ".4rem 1.2rem";
    case "Large":
      return ".8rem 1.6rem";
    case "XLarge":
      return "1.2rem 1.6rem"

    default:
      return "0";
  }
}

export function getInputMarginSize(margin: string | undefined) {
  switch (margin) {
    case "Medium":
      return "0 0 1.6rem 0";

    default:
      return "0";
  }
}

export function getTypographyMarginSize(margin: string | undefined) {
  switch (margin) {
    case "Medium":
      return "0 0 .4rem 0";
    case "Large":
      return "2.4rem 0 0 0";
    case "XLarge":
      return "3.2rem 0 0 0"

    default:
      return "0";
  }
}