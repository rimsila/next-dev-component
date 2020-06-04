// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton7: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    btn7Type = 'fill',
    isLink,
  } = props;
  return (
    <>
      <span className={classNames('NextButton7', postion)}>
        <button className={btn7Type}>{label}</button>
      </span>
    </>
  );
};

export default NextButton7;
