// Generated with util/create-component.js
import React from 'react';
import { Layout } from '../../../layout/index';
import { UseMapItem } from '../../../util/mapItem';
import {
  NextCardLeft,
  NextCardCenter,
  NextCardFlip,
  NextCardWide,
} from './index';

export default {
  title: 'NextCard',
  parameters: {
    readme: {
      //   content: ButtonReadme,
    },
  },
};

const Card1 = [
  {
    item: <NextCardLeft />,
    copyCode: `<NextCardLeft />`,
  },
  {
    item: <NextCardCenter />,
    copyCode: `<NextCardCenter />`,
  },
  {
    item: <NextCardFlip />,
    copyCode: `<NextCardFlip />`,
  },
];
const Card2 = [
  {
    item: <NextCardWide />,
    copyCode: `<NextCardWide />`,
  },
];
export const Primary = () => (
  <>
    <Layout gut1={35} gut2={0}>
      <UseMapItem data={Card1} isAntCol span={8} />
    </Layout>
    <Layout>
      <UseMapItem data={Card2} isAntCol span={8} />
    </Layout>
  </>
);
