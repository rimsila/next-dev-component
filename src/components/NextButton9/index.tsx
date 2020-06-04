// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton9: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    btn9Type = 'type1',
    isLink,
  } = props;
  return (
    <>
      <span className={classNames('NextButton9', postion)}>
        <button className={classNames('button', btn9Type)}>{label}</button>
      </span>
    </>
  );
};

export default NextButton9;
