import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
// tslint:disable: no-shadowed-variable

interface IProps extends React.HTMLAttributes<any> {
  children?: React.ReactNode;
  screen?:
    | string
    | [
        'isDesktopLg',
        'isDesktop',
        'isTablet',
        'isMobile',
        'isMobileSm',
        'isMaxwidth',
        'isMinWidth'
      ]; // screen must be in type. If not will use default switch
  minWidth?: number;
  maxWidth?: number;
}

/*
----Usage-----
1,  <MediaQuery screen="isMinWidth" minWidth={768}>
    component....
    </MediaQuery>
    ---------------
2, <MediaQuery screen="isTablet">
    component....
   </MediaQuery>
*/

const mediaQuery: FC<IProps> = ({
  screen = 'isMinWidth',
  children,
  minWidth,
  maxWidth,
}) => {
  const DesktopLg = ({ children }) => {
    const isDesktopLg = useMediaQuery({ maxWidth: 1200 });
    return isDesktopLg ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ maxWidth: 992 });
    return isDesktop ? children : null;
  };
  const Table = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 768 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 576 });
    return isMobile ? children : null;
  };
  const MobileSm = ({ children }) => {
    const isMobileSm = useMediaQuery({ maxWidth: 480 });
    return isMobileSm ? children : null;
  };
  const MinWidth = ({ children }) => {
    const isMinWidth = useMediaQuery({ minWidth });
    return isMinWidth ? children : null;
  };
  const MaxWidth = ({ children }) => {
    const isMaxwidth = useMediaQuery({ maxWidth });
    return isMaxwidth ? children : null;
  };
  const renderSwitch = (param) => {
    switch (param) {
      case 'isDesktopLg':
        return <DesktopLg>{children}</DesktopLg>;
      case 'isDesktop':
        return <Desktop>{children}</Desktop>;
      case 'isTablet':
        return <Table>{children}</Table>;
      case 'isMobile':
        return <Mobile>{children}</Mobile>;
      case 'isMobileSm':
        return <MobileSm>{children}</MobileSm>;
      case 'isMaxwidth':
        return <MaxWidth>{children}</MaxWidth>;
      case 'isMinWidth':
        return <MinWidth>{children}</MinWidth>;
      default:
        return <Desktop>{children}</Desktop>;
    }
  };
  return <>{renderSwitch(`${screen}`)}</>;
};

export default mediaQuery;
