// Generated with util/create-component.js
import React, { FC } from 'react';
import './styles.scss';
import { NextButtonProps } from '../NextButton.types';
import classNames from 'classnames';

export const NextButtonUI11: FC<NextButtonProps> = (props) => {
  const {
    label,
    isContainerSpacing,
    containerSpacing,
    isPostion = true,
    postion = 'btn_center',
    onClick,
    isRound,
    isLink,
    labelBack,
  } = props;
  return (
    <>
      <span className={classNames('NextButtonUI11', postion)}>
        <div>
          <button className="explore">
            {label}
            <span className="icon-right" />
            <span className="icon-right after" />
          </button>
        </div>
      </span>
    </>
  );
};

export default NextButtonUI11;
