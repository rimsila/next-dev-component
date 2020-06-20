import React from 'react';
import { Layout } from '../../layout';
import { UseMapItem } from '../../util/mapItem';
import LoadingSpinner from '../LoadingSpinner';

export default {
  title: 'Common',
  parameters: {
    // readme: {
    //   content: ButtonReadme,
    // },
  },
};

const component = [
  {
    item: <LoadingSpinner />,
    copyCode: `<LoadingSpinner />`,
  },
];

export const Loading = () => (
  <>
    <Layout>
      <UseMapItem data={component} isAntCol span={6} />
    </Layout>
  </>
);
