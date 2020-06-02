import React from 'react';
import { NextButtonUi1 } from './index';
import { Layout } from '../../../layout/index';
import { UseMapItem } from '../../../util/mapItem';
import { NextButtonUI2 } from '../ui-button2';
import { NextButtonUI3 } from '../ui-button3';
import { NextButtonUI4 } from '../ui-button4';
import { NextButtonUI5 } from '../ui-button5';
import { NextButtonUI6 } from '../ui-button6';
import { NextButtonUI7 } from '../ui-button7';
import { NextButtonUI8 } from '../ui-button8';
import { NextButtonUI9 } from '../ui-button9';
import { NextButtonUI10 } from '../ui-button10';
import { NextButtonUI11 } from '../ui-button11';
import { NextButtonUI12 } from '../ui-button12';

const NextButton = [
  {
    item: (
      <NextButtonUI12 label="effect12" btn12Type="is-reversed fx-sliderIn" />
    ),
    copyCode: `<NextButtonUI12 label="effect12" btn12Type="is-reversed fx-sliderIn" />`,
  },
  {
    item: (
      <NextButtonUI12 label="effect12" btn12Type="is-reversed fx-bubbleUp" />
    ),
    copyCode: `<NextButtonUI12 label="effect12" btn12Type="is-reversed fx-bubbleUp" />`,
  },
  {
    item: (
      <NextButtonUI12 label="effect12" btn12Type="is-reversed fx-bubbleDown" />
    ),
    copyCode: `<NextButtonUI12 label="effect12" btn12Type="is-reversed fx-bubbleDown" />`,
  },
  {
    item: <NextButtonUI12 label="effect12" btn12Type="fx-sliderIn" />,
    copyCode: `<NextButtonUI12 label="effect12" btn12Type="fx-sliderIn" />`,
  },
  {
    item: <NextButtonUI12 label="effect12" btn12Type="fx-bubbleUp" />,
    copyCode: `<NextButtonUI12 label="effect12" btn12Type="fx-bubbleUp" />`,
  },
  {
    item: <NextButtonUI12 label="effect12" btn12Type="fx-bubbleDown" />,
    copyCode: `<NextButtonUI12 label="effect12" btn12Type="fx-bubbleDown" />`,
  },
  {
    item: <NextButtonUI11 label="effect11" />,
    copyCode: `<NextButtonUI11 label="effect11"  />`,
  },
  {
    item: <NextButtonUI10 label="flip" labelBack="back" />,
    copyCode: `<NextButtonUI10 label="flip" labelBack="back" />`,
  },
  {
    item: <NextButtonUI9 label="effect4" btn9Type="type4" />,
    copyCode: ` <NextButtonUI9 label="effect4" btn9Type="type4" />`,
  },
  {
    item: <NextButtonUI9 label="effect3" btn9Type="type3" />,
    copyCode: ` <NextButtonUI9 label="effect3" btn9Type="type3" />`,
  },
  {
    item: <NextButtonUI9 label="effect2" btn9Type="type2" />,
    copyCode: ` <NextButtonUI9 label="effect2" btn9Type="type2" />`,
  },
  {
    item: <NextButtonUI9 label="effect1" btn9Type="type1" />,
    copyCode: ` <NextButtonUI9 label="effect1" btn9Type="type1" />`,
  },
  {
    item: <NextButtonUI8 label="MASK2" btn8Type="button-container-2" />,
    copyCode: `<NextButtonUI8 label="MASK2" btn8Type="button-container-2" />`,
  },
  {
    item: <NextButtonUI8 label="MASK1" btn8Type="button-container-1" />,
    copyCode: `<NextButtonUI8 label="MASK1" btn8Type="button-container-1" />`,
  },
  {
    item: <NextButtonUI7 label="offset" btn7Type="offset" />,
    copyCode: ` <NextButtonUI7 label="offset" btn7Type="offset" />`,
  },
  {
    item: <NextButtonUI7 label="slide" btn7Type="slide" />,
    copyCode: ` <NextButtonUI7 label="slide" btn7Type="slide" />`,
  },
  {
    item: <NextButtonUI7 label="Fill In" btn7Type="fill" />,
    copyCode: ` <NextButtonUI7 label="Fill In" btn7Type="fill" />`,
  },
  {
    item: <NextButtonUI7 label="pulse" btn7Type="pulse" />,
    copyCode: ` <NextButtonUI7 label="pulse" btn7Type="pulse" />`,
  },
  {
    item: <NextButtonUI7 label="close" btn7Type="close" />,
    copyCode: ` <NextButtonUI7 label="close" btn7Type="close" />`,
  },
  {
    item: <NextButtonUI7 label="raise" btn7Type="raise" />,
    copyCode: ` <NextButtonUI7 label="raise" btn7Type="raise" />`,
  },
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
export default {
  title: 'NextButton',
  parameters: {
    readme: {
      // content: ButtonReadme,
    },
  },
};
