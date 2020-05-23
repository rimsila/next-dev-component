import React from 'react';
import NextButton from './NextButton';
import { Layout } from '../../layout/index';
import { storiesOf } from '@storybook/react';
import { UseMapItem } from '../../util/mapItem';
import { PoweroffOutlined } from '@ant-design/icons';
import ButtonReadme from './NextButton.stories.md';

export default {
  title: 'NextButton',
  parameters: {
    notes: `import {Button} from 'next-dev-component';`,
    readme: {
      // Show readme before story
      content: ButtonReadme,
      // Show readme at the addons panel
      // sidebar: ButtonReadme,
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
];
export const Primary = () => (
  <>
    <Layout>
      <UseMapItem data={button} isAntCol span={6} />
    </Layout>
  </>
);
