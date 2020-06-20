import React from 'react';
import { Layout } from '../../layout';
import { UseMapItem } from '../../util/mapItem';
import SubscribeEmail from '.';

export default {
  title: 'Common',
};

const component = [
  {
    item: <SubscribeEmail />,
    copyCode: `<SubscribeEmail onFinish={onFinish}/>`,
  },
];

export const Subscribe = () => (
  <>
    <Layout>
      <UseMapItem data={component} isAntCol span={6} />
    </Layout>
  </>
);
