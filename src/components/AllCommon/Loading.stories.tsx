import React from 'react';
import { Layout } from '../../layout';
import { UseMapItem } from '../../util/mapItem';
import { notificationType } from '../../util/notification';
import LoadingSpinner from '../LoadingSpinner';
import NextButton from '../NextButton';

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
  {
    item: (
      <NextButton
        label="Submitted successfully!"
        onClick={() => notificationType('contactUsSuccess')}
      />
    ),
    copyCode: `<NextButton
    label="Submitted successfully!"
    onClick={() => notificationType('contactUsSuccess')}
  />`,
  },
  {
    item: (
      <NextButton
        label="Submitted successfully!"
        onClick={() => notificationType('subscribeSuccess')}
      />
    ),
    copyCode: `<NextButton
    label="subscribeSuccess!"
    onClick={() => notificationType('subscribeSuccess')}
  />`,
  },
  {
    item: (
      <NextButton
        label="custom noti!"
        onClick={() =>
          notificationType(
            'customMsg',
            'success',
            'custom message',
            <>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amThere
              is no one who loves pain itself, who seeks after it and wants to
              have it, simply because it is pain...
            </>
          )
        }
      />
    ),
    copyCode: ` <NextButton
    label="custom noti!"
    onClick={() =>
      notificationType(
        'customMsg',
        'success',
        'custom message',
        <>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amThere
          is no one who loves pain itself, who seeks after it and wants to
          have it, simply because it is pain...
        </>
      )
    }
  />`,
  },
];

export const Loading = () => (
  <>
    <Layout>
      <UseMapItem data={component} isAntCol span={6} />
    </Layout>
  </>
);
