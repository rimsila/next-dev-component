// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton3: FC<NextButtonProps> = (props) => {
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
      <span className={classNames('NextButton3')}>
        <div className={classNames('btn', btnType)}>{label}</div>
      </span>
    </>
  );
};

export default NextButton3;
