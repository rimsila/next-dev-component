import React from 'react';
import Mock from '.';
import { UseMapItem } from '../../util/mapItem';
import { Layout } from 'antd';

export default {
  title: 'Common',
};

const component = [
  {
    item: <Mock />,
    copyCode: `mockArr() or mockObj()`,
  },
];

export const MockData = () => (
  <>
    <Layout>
      <UseMapItem data={component} isAntCol span={24} />
    </Layout>
  </>
);
