// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI12: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    isLink,
    labelBack,
    btn12Type,
  } = props;
  return (
    <>
      <span className={classNames('NextButtonUI12', postion)}>
        <button className={classNames('ctrl-standard', btn12Type)}>
          {label}
        </button>
      </span>
    </>
  );
};

export default NextButtonUI12;
