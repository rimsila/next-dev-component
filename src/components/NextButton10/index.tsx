// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton10: FC<NextButtonProps> = (props) => {
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
    labelBack,
  } = props;
  return (
    <>
      <span className={classNames('NextButton10', postion)}>
        <div className="flip">
          <a>
            <div className="front">{label}</div>
            <div className="back">{labelBack}</div>
          </a>
        </div>
      </span>
    </>
  );
};

export default NextButton10;
