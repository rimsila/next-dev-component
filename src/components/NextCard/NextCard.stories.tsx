// Generated with util/create-component.js
import React from 'react';
import { Layout } from '../../layout/index';
import { UseMapItem } from '../../util/mapItem';
import { NextCard } from './index';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import NextButton13 from '../NextButton13';

const Card1 = [
  {
    item: (
      <NextCard
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
            <NextButton13 label="Follow Me!" />
            <NextButton13 label="Message" />
          </>
        }
      />
    ),
    copyCode: `  <NextCard
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
        <NextButton13 label="Follow Me!" />
        <NextButton13 label="Message" />
      </>
    }
  />
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
      //   content: ButtonReadme, readme.md here
    },
  },
};
