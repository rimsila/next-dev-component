// Generated with util/create-component.js
import React from 'react';
import { Layout } from '../../../layout/index';
import { UseMapItem } from '../../../util/mapItem';
import NextCardUI2 from './index';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import NextButtonUI13 from '../../NextButton/ui-button13';

const Card1 = [
  {
    item: (
      <NextCardUI2
        title="card profile"
        socialList={[
          { icon: <FaFacebook /> },
          {
            icon: <FaGithub />,
          },
          {
            icon: <FaInstagram />,
          },
        ]}
        description={{
          post: (
            <>
              1114 <b></b>posts
            </>
          ),
          like: (
            <>
              1114 <b></b>likes
            </>
          ),
        }}
        footerContent={
          <>
            <NextButtonUI13 label="Follow Me!" />
            <NextButtonUI13 label="Message" />
          </>
        }
      />
    ),
    copyCode: ` <NextCardUI2
    title="card profile"
    socialList={[
      { icon: <FaFacebook /> },
      {
        icon: <FaGithub />,
      },
      {
        icon: <FaInstagram />,
      },
    ]}
  />`,
  },
];

export const NextCard2 = () => (
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
