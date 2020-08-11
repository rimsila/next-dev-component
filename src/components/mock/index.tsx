import React, { FC } from 'react';
import { mockArr } from '../../util/mock';

export const LoadingSpinner: FC = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 20,
        }}
      >
        <h3>
          This is mock data has arr and object data for mock with random data
          using faker
        </h3>
        <img
          src={mockArr()[0].image}
          width="80px"
          style={{
            borderRadius: '5em',
            margin: '1rem',
          }}
        />
        <code>{JSON.stringify(mockArr()).substring(0, 500)}</code>
      </div>
    </>
  );
};
export default LoadingSpinner;
