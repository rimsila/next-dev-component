// Generated with util/create-component.js
import React, { FC } from 'react';
import { Row } from 'antd';
import { LayoutProps } from './Layout.types';
import './Layout.scss';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Row className="layout" gutter={[0, 15]}>
      {children}
    </Row>
  );
};

export default Layout;
