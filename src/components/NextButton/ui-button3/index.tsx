// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI3: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    btnType = ' from-left',
  } = props;
  return (
    <>
      <span className={classNames('NextButtonUI3')}>
        <div className={classNames('btn', btnType)}>{label}</div>
      </span>
    </>
  );
};

export default NextButtonUI3;
