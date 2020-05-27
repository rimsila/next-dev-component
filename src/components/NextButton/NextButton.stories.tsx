import React from 'react';
import NextButton from './';
import { Layout } from '../../layout/index';
import { UseMapItem } from '../../util/mapItem';
import { PoweroffOutlined } from '@ant-design/icons';
import ButtonReadme from './NextButton.stories.md';

export default {
  title: 'NextButton',
  parameters: {
    notes: `import {Button} from 'next-dev-component';`,
    readme: {
      content: ButtonReadme,
    },
  },
};

const button = [
  {
    item: <NextButton label="Primary Icon" icon={<PoweroffOutlined />} />,
    copyCode: `<NextButton label="Primary Icon" icon={<PoweroffOutlined />} />`,
  },
  {
    item: <NextButton label="Primary" />,
    copyCode: `<NextButton label="Primary" />`,
  },
  {
    item: <NextButton label="disabled" disabled />,
    copyCode: `<NextButton label="disabled" disabled />`,
  },
  {
    item: <NextButton label=" Round disabled" isRound />,
    copyCode: `<NextButton label=" Round disabled" isRound />`,
  },
  {
    item: <NextButton label=" Round" isRound />,
    copyCode: `<NextButton label=" Round" isRound />`,
  },
  {
    item: (
      <NextButton
        iconPostion="icon_center"
        icon={<PoweroffOutlined />}
        width="40px"
        height="40px"
        isRound
      />
    ),
    copyCode: `NextButton iconPostion='icon_center'  icon={<PoweroffOutlined/>} 
    width="40px" height="40px" isRound/`,
  },
  {
    item: (
      <NextButton
        iconPostion="icon_center"
        icon={<PoweroffOutlined />}
        width="40px"
        height="40px"
      />
    ),
    copyCode: `NextButton iconPostion='icon_center'  icon={<PoweroffOutlined/>} 
    width="40px" height="40px"/`,
  },
];
export const Primary = () => (
  <>
    <Layout>
      <UseMapItem data={button} isAntCol span={6} />
    </Layout>
  </>
);
