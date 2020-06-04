// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton1: FC<NextButtonProps> = (props) => {
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
          'NextButton1',
          isPostion && `${postion}`,
          isContainerSpacing && `${containerSpacing}`
        )}
      >
        <nav onClick={onClick}>
          <ul>
            <li className={classNames(isRound && 'btnRound')}>
              {label}
              <span />
              <span />
              <span />
              <span />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NextButton1;
