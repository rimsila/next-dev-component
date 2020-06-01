// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI6: FC<NextButtonProps> = props => {
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
      <span className={classNames('NextButtonUI6', postion)}>
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

export default NextButtonUI6;
