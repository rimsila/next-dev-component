// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton13: FC<NextButtonProps> = (props) => {
  const {
    label = 'button',
    isContainerSpacing,
    containerSpacing = 'm-10',
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    isLink,
    labelBack,
    btn13Type = 'draw-border',
  } = props;
  return (
    <>
      <span className={classNames('NextButton13', postion, containerSpacing)}>
        <button className={classNames('btn', btn13Type)}>{label}</button>
      </span>
    </>
  );
};

export default NextButton13;
