// Generated with util/create-component.js
import React, { FC } from 'react';
import { Row, Col, Typography } from 'antd';
import './Layout.scss';

export const Layout: FC<LayoutProps> = ({
  children,
  title = 'Component',
  docs,
}) => {
  const { Title, Paragraph } = Typography;
  return (
    <Row justify="center" className="layout">
      <Title level={4} className="layout-head">
        {title}
      </Title>
      <Col span={24} className="layout-content">
        {children}
      </Col>
      <Col span={24} className="layout-footer">
        {docs && <Paragraph copyable> {docs}</Paragraph>}
      </Col>
    </Row>
  );
};

export default Layout;
