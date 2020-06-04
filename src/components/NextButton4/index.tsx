// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton4: FC<NextButtonProps> = (props) => {
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
      <span className={classNames('NextButton4')}>
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

export default NextButton4;
