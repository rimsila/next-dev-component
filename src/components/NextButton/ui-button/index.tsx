// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUi1: FC<NextButtonProps> = props => {
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
          'NextButtonUi1',
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

export default NextButtonUi1;
