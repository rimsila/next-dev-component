// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI4: FC<NextButtonProps> = props => {
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
      <span className={classNames('NextButtonUI4')}>
        <a
          aria-label="Thanks"
          className="h-button centered"
          data-text="Hover me"
          href="#"
        >
          <span>T</span>
          <span>h</span>
          <span>a</span>
          <span>n</span>
          <span>k</span>
          <span>s</span>
        </a>
      </span>
    </>
  );
};

export default NextButtonUI4;
