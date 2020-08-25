import React from 'react';
import { Layout } from '../../layout';
import { UseMapItem } from '../../util/mapItem';
import SubscribeEmail from '.';

export default {
  title: 'Common',
};

const component = [
  {
    item: (
      <>
        <h5>Default</h5>
        <br />
        <SubscribeEmail />
      </>
    ),
    copyCode: `<SubscribeEmail onFinish={onFinish}/>`,
  },
  {
    item: (
      <>
        <h5>Custom</h5>
        <br />
        <SubscribeEmail
          {...{
            isRadius: true,
            customDecs: 'lorem Collection of blog card code examples.',
            backgroundColor: 'orange',
            cusCls: 'cusCls',
          }}
        />
      </>
    ),
    copyCode: `<SubscribeEmail
    {...{
      isRadius: true,
      customDecs: 'lorem Collection of blog card code examples.',
      backgroundColor: 'orange',
      cusCls: 'cusCls',
    }} `,
  },
];

export const Subscribe = () => (
  <>
    <Layout gut1={20}>
      <UseMapItem data={component} isAntCol span={6} />
    </Layout>
  </>
);
