import { useWindowSize } from "@react-hook/window-size";

const useResponsiveProps = () => {
  const [windowWidth] = useWindowSize();

  let stringToShow = "";

  if (windowWidth < 768) {
    stringToShow = "Medium";
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    stringToShow = "Large";
  } else {
    stringToShow = "XLarge";
  }

  return stringToShow;
};

export default useResponsiveProps;
