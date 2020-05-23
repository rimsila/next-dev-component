// Generated with util/create-component.js
import React, { FC, useState } from 'react';
import { Col, Popover } from 'antd';
import { Typography } from 'antd';
import { CodeSandboxOutlined } from '@ant-design/icons';

interface IUseMapItem {
  data: any[];
  children?: React.ReactNode;
  span?: number;
  isAntCol?: boolean;
}

const { Paragraph } = Typography;

export const UseMapItem: FC<IUseMapItem> = ({ isAntCol, data = [], span }) => {
  return (
    <>
      {data.map((item, key: number) => (
        <>
          {isAntCol && (
            <>
              <Col key={key} span={span}>
                {item.item}
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}
                >
                  <Paragraph
                    style={{ justifyContent: 'center', marginBottom: 6 }}
                    copyable={{ text: item.copyCode }}
                  />
                  <Popover
                    content={
                      <>
                        <Paragraph code copyable style={{ color: '#c41d7f' }}>
                          {item.copyCode}
                        </Paragraph>
                      </>
                    }
                  >
                    <CodeSandboxOutlined style={{ marginLeft: 4 }} />
                  </Popover>
                </span>
              </Col>
            </>
          )}
        </>
      ))}
    </>
  );
};

export default UseMapItem;
