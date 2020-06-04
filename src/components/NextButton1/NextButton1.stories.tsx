import React from 'react';
import { Layout } from '../../layout/index';
import { UseMapItem } from '../../util/mapItem';
import { NextButton1 } from './index';
import { NextButton2 } from '../NextButton2';
import { NextButton3 } from '../NextButton3';
import { NextButton4 } from '../NextButton4';
import { NextButton5 } from '../NextButton5';
import { NextButton6 } from '../NextButton6';
import { NextButton7 } from '../NextButton7';
import { NextButton8 } from '../NextButton8';
import { NextButton9 } from '../NextButton9';
import { NextButton10 } from '../NextButton10';
import { NextButton11 } from '../NextButton11';
import { NextButton12 } from '../NextButton12';
import NextButton13 from '../NextButton13';

const NextButton = [
  {
    item: <NextButton13 label="border" />,
    copyCode: `<NextButton12 label="effect12" btn12Type="is-reversed fx-sliderIn" />`,
  },
  {
    item: <NextButton12 label="effect12" btn12Type="is-reversed fx-sliderIn" />,
    copyCode: `<NextButton12 label="effect12" btn12Type="is-reversed fx-sliderIn" />`,
  },
  {
    item: <NextButton12 label="effect12" btn12Type="is-reversed fx-bubbleUp" />,
    copyCode: `<NextButton12 label="effect12" btn12Type="is-reversed fx-bubbleUp" />`,
  },
  {
    item: (
      <NextButton12 label="effect12" btn12Type="is-reversed fx-bubbleDown" />
    ),
    copyCode: `<NextButton12 label="effect12" btn12Type="is-reversed fx-bubbleDown" />`,
  },
  {
    item: <NextButton12 label="effect12" btn12Type="fx-sliderIn" />,
    copyCode: `<NextButton12 label="effect12" btn12Type="fx-sliderIn" />`,
  },
  {
    item: <NextButton12 label="effect12" btn12Type="fx-bubbleUp" />,
    copyCode: `<NextButton12 label="effect12" btn12Type="fx-bubbleUp" />`,
  },
  {
    item: <NextButton12 label="effect12" btn12Type="fx-bubbleDown" />,
    copyCode: `<NextButton12 label="effect12" btn12Type="fx-bubbleDown" />`,
  },
  {
    item: <NextButton11 label="effect11" />,
    copyCode: `<NextButton11 label="effect11"  />`,
  },
  {
    item: <NextButton10 label="flip" labelBack="back" />,
    copyCode: `<NextButton10 label="flip" labelBack="back" />`,
  },
  {
    item: <NextButton9 label="effect4" btn9Type="type4" />,
    copyCode: ` <NextButton9 label="effect4" btn9Type="type4" />`,
  },
  {
    item: <NextButton9 label="effect3" btn9Type="type3" />,
    copyCode: ` <NextButton9 label="effect3" btn9Type="type3" />`,
  },
  {
    item: <NextButton9 label="effect2" btn9Type="type2" />,
    copyCode: ` <NextButton9 label="effect2" btn9Type="type2" />`,
  },
  {
    item: <NextButton9 label="effect1" btn9Type="type1" />,
    copyCode: ` <NextButton9 label="effect1" btn9Type="type1" />`,
  },
  {
    item: <NextButton8 label="MASK2" btn8Type="button-container-2" />,
    copyCode: `<NextButton8 label="MASK2" btn8Type="button-container-2" />`,
  },
  {
    item: <NextButton8 label="MASK1" btn8Type="button-container-1" />,
    copyCode: `<NextButton8 label="MASK1" btn8Type="button-container-1" />`,
  },
  {
    item: <NextButton7 label="offset" btn7Type="offset" />,
    copyCode: ` <NextButton7 label="offset" btn7Type="offset" />`,
  },
  {
    item: <NextButton7 label="slide" btn7Type="slide" />,
    copyCode: ` <NextButton7 label="slide" btn7Type="slide" />`,
  },
  {
    item: <NextButton7 label="Fill In" btn7Type="fill" />,
    copyCode: ` <NextButton7 label="Fill In" btn7Type="fill" />`,
  },
  {
    item: <NextButton7 label="pulse" btn7Type="pulse" />,
    copyCode: ` <NextButton7 label="pulse" btn7Type="pulse" />`,
  },
  {
    item: <NextButton7 label="close" btn7Type="close" />,
    copyCode: ` <NextButton7 label="close" btn7Type="close" />`,
  },
  {
    item: <NextButton7 label="raise" btn7Type="raise" />,
    copyCode: ` <NextButton7 label="raise" btn7Type="raise" />`,
  },
  {
    item: <NextButton1 label="Button_UI1" />,
    copyCode: `<NextButton1 label="Button_UI1"/>`,
  },
  {
    item: <NextButton1 label="isRound" isRound />,
    copyCode: `<NextButton1 label="Button_UI1 isRound" isRound/>`,
  },
  {
    item: <NextButton2 />,
    copyCode: `<NextButton1 label="Button_UI1 isRound" isRound/>`,
  },
  {
    item: <NextButton3 label="from-left" btnType="from-left" />,
    copyCode: `<NextButton3 label="button3" btnType="from-left" />`,
  },
  {
    item: <NextButton3 label="from-bottom" btnType="from-bottom" />,
    copyCode: `<NextButton3 label="from-bottom" btnType="from-bottom" />`,
  },
  {
    item: <NextButton3 label="from-center" btnType="from-center" />,
    copyCode: `<NextButton3 label="from-center" btnType="from-center" />`,
  },
  {
    item: <NextButton3 label="from-top" btnType="from-top" />,
    copyCode: `<NextButton3 label="from-top" btnType="from-top" />`,
  },
  {
    item: (
      <>
        <div style={{ marginBottom: '40px' }}>
          <NextButton4 label="button4" />
        </div>
      </>
    ),
    copyCode: `<NextButton4 label="button4" />`,
  },
  {
    item: <NextButton5 label="button4" />,

    copyCode: `<NextButton5 label="button4" />`,
  },
  {
    item: <NextButton6 label="button6" btn5Type="btn--stripe" />,
    copyCode: ` <NextButton6 label="button4" btn5Type="btn--stripe" />`,
  },
  {
    item: (
      <NextButton6 label="button6 round" btn5Type="btn--stripe btn--radius" />
    ),
    copyCode: `<NextButton6 label="button6 round" btn5Type="btn--stripe btn--radius" />`,
  },
  {
    item: (
      <NextButton6 label="button6 large" btn5Type="btn--stripe btn--large" />
    ),
    copyCode: `<NextButton6 label="button6 large" btn5Type="btn--stripe btn--large" />`,
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
