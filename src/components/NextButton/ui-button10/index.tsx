// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI10: FC<NextButtonProps> = (props) => {
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
    labelBack
  } = props;
  return (
    <>
      <span className={classNames('NextButtonUI10', postion)}>
     
        <div className="flip">
          <a >
            <div className="front">{label}</div>
            <div className="back">{labelBack}</div>
          </a>
        </div>
      </span>
    </>
  );
};

export default NextButtonUI10;
