import React from 'react';
import NextButton from './NextButton';
import { Layout } from '../../layout/index';
// import NextButton from './next-dev-component';

export const Primary = () => (
  <Layout>
    <NextButton label="Primary" />
    <NextButton label=" disabled" disabled />
    <NextButton label=" Round disabled" isRound />
    <NextButton label="Round" isRound disabled />
  </Layout>
);
export const isRound = () => <NextButton label="isRound" isRound />;

export default {
  title: 'NextButton',
};
