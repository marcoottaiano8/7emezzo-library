import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  
  const isDesktop = useMediaQuery({ minWidth: 650 });

  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 992 });
    return isNotMobile ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 });
    return isMobile ? children : null;
  };

  return [Mobile, Default, isDesktop];
};

export default useResponsive;
