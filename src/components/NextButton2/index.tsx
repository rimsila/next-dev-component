// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton2: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
  } = props;
  return (
    <>
      <div
        className={classNames(
          'NextButton2',
          isPostion && `${postion}`,
          isContainerSpacing && `${containerSpacing}`
        )}
      >
        <a href="#" className="cta">
          <span>Click me</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </>
  );
};

export default NextButton2;
