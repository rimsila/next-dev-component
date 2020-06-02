// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI9: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    btn9Type ='type1',
    isLink,
  } = props;
  return (
    <>
      <span className={classNames('NextButtonUI9', postion)}>
        <button className={classNames('button', btn9Type)}>{label}</button>
      </span>
    </>
  );
};

export default NextButtonUI9;
