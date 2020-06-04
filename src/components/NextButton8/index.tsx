// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton/NextButton.types';
import classNames from 'classnames';

export const NextButton8: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    btn8Type = 'button-container-1',
    isLink,
  } = props;
  return (
    <>
      <span className={classNames('NextButton8', postion)}>
        <div className={btn8Type}>
          <span className="mas">{label}</span>
          <button id="work" type="button" name="Hover">
            {label}
          </button>
        </div>
      </span>
    </>
  );
};

export default NextButton8;
