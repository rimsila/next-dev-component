// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI7: FC<NextButtonProps> = (props) => {
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
      <span className={classNames('NextButtonUI7', postion)}>
        <button className={btn7Type}>{label}</button>
      </span>
    </>
  );
};

export default NextButtonUI7;
