// Generated with util/create-component.js
import React, { FC } from 'react';
import { Row } from 'antd';
import './Layout.scss';
interface ILayoutProps {
  children?: React.ReactNode;
}
export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Row className="layout" gutter={[0, 15]}>
      {children}
    </Row>
  );
};

export default Layout;
