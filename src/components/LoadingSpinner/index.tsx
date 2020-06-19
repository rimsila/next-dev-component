import React, { FC } from 'react';
import './styles.scss';
import { Spin } from 'antd';
import { LoadingType } from './Loading.types';

export const LoadingSpinner: FC<LoadingType> = ({
  size = 'large',
  tip,
  style,
  className,
}) => (
  <div className="loading-spinner">
    <Spin size={size} tip={tip} style={style} className={className} />
  </div>
);
export default LoadingSpinner;
