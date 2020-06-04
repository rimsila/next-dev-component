// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton6: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    btn5Type,
    isLink,
  } = props;
  return (
    <>
      <span className={classNames('NextButton6', postion)}>
        {isLink ? (
          <a href="#" className="btn btn--stripe">
            {label}
          </a>
        ) : (
          <button className={classNames('btn', btn5Type)}>{label}</button>
        )}
      </span>
    </>
  );
};

export default NextButton6;
