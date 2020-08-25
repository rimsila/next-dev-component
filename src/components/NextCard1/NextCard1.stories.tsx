// Generated with util/create-component.js
import React from 'react';
import { Layout } from '../../layout/index';
import { UseMapItem } from '../../util/mapItem';
import NextCard1 from './index';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import NextButton13 from '../NextButton13';
import { mockObj } from '../../util/mock';

const Card1 = [
  {
    item: (
      <NextCard1
        {...{
          title: mockObj().name,
          img: mockObj().image,
          desc: mockObj().desc,
          date: '10-Mon-2020',
        }}
      />
    ),
    copyCode: ` <NextCard1
    {...{
      title: mockObj().name,
      img: mockObj().image,
      desc: mockObj().desc,
      date: "10-Mon-2020"
    }}
  />`,
  },
];

export const NextCardUI1 = () => (
  <>
    <Layout gut1={35} gut2={0}>
      <UseMapItem data={Card1} isAntCol span={8} />
    </Layout>
  </>
);
export default {
  title: 'NextCard',
  parameters: {
    readme: {
      //   content: ButtonReadme,
    },
  },
};
