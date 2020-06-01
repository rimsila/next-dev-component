// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI5: FC<NextButtonProps> = props => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    btnType = ' from-left',
  } = props;
  return (
    <>
      <span className={classNames('NextButtonUI5')}>
        <div className="wrapper">
          <a className="button">Hover me!</a>
        </div>
        {/* Filter: https://css-tricks.com/gooey-effect/ */}
        <svg
          style={{ visibility: 'hidden', position: 'absolute' }}
          width={0}
          height={0}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={10}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </span>
    </>
  );
};

export default NextButtonUI5;
