import React from 'react';
import { NextButtonUi1 } from './index';
import { Layout } from '../../../layout/index';
import { UseMapItem } from '../../../util/mapItem';
import { NextButtonUI2 } from '../ui-button2';
import { NextButtonUI3 } from '../ui-button3';
import { NextButtonUI4 } from '../ui-button4';
import { NextButtonUI5 } from '../ui-button5';
import { NextButtonUI6 } from '../ui-button6';

export default {
  title: 'NextButton',
  parameters: {
    readme: {
      // content: ButtonReadme,
    },
  },
};

const NextButton = [
  {
    item: <NextButtonUi1 label="Button_UI1" />,
    copyCode: `<NextButtonUi1 label="Button_UI1"/>`,
  },
  {
    item: <NextButtonUi1 label="isRound" isRound />,
    copyCode: `<NextButtonUi1 label="Button_UI1 isRound" isRound/>`,
  },
  {
    item: <NextButtonUI2 />,
    copyCode: `<NextButtonUi1 label="Button_UI1 isRound" isRound/>`,
  },
  {
    item: <NextButtonUI3 label="from-left" btnType="from-left" />,
    copyCode: `<NextButtonUI3 label="button3" btnType="from-left" />`,
  },
  {
    item: <NextButtonUI3 label="from-bottom" btnType="from-bottom" />,
    copyCode: `<NextButtonUI3 label="from-bottom" btnType="from-bottom" />`,
  },
  {
    item: <NextButtonUI3 label="from-center" btnType="from-center" />,
    copyCode: `<NextButtonUI3 label="from-center" btnType="from-center" />`,
  },
  {
    item: <NextButtonUI3 label="from-top" btnType="from-top" />,
    copyCode: `<NextButtonUI3 label="from-top" btnType="from-top" />`,
  },
  {
    item: (
      <>
        <div style={{ marginBottom: '40px' }}>
          <NextButtonUI4 label="button4" />
        </div>
      </>
    ),
    copyCode: `<NextButtonUI4 label="button4" />`,
  },
  {
    item: <NextButtonUI5 label="button4" />,

    copyCode: `<NextButtonUI5 label="button4" />`,
  },
  {
    item: <NextButtonUI6 label="button6" btn5Type="btn--stripe" />,
    copyCode: ` <NextButtonUI6 label="button4" btn5Type="btn--stripe" />`,
  },
  {
    item: (
      <NextButtonUI6 label="button6 round" btn5Type="btn--stripe btn--radius" />
    ),
    copyCode: `<NextButtonUI6 label="button6 round" btn5Type="btn--stripe btn--radius" />`,
  },
  {
    item: (
      <NextButtonUI6 label="button6 large" btn5Type="btn--stripe btn--large" />
    ),
    copyCode: `<NextButtonUI6 label="button6 large" btn5Type="btn--stripe btn--large" />`,
  },
];
export const ButtonUI = () => (
  <>
    <Layout gut1={40} gut2={30}>
      <UseMapItem data={NextButton} isAntCol span={6} />
    </Layout>
  </>
);
