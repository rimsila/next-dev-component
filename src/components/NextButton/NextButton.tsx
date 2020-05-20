// Generated with util/create-component.js
import React, { FC } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { NextButtonProps } from './NextButton.types';
import './NextButton.scss';


export const NextButton: FC<NextButtonProps> = ({
  isRound,
  htmlType,
  width,
  height,
  label = 'button',
  cusClass,
  isPrimary = true,
  isGhostPrimary,
  disabled,
  onClick,
  active,
  isLink,
  isOnClick,
  url = '/',
  isPostion = true,
  postion = 'btn_center',
  containerSpacing,
  isContainerSpacing,
}) => {
  return (
    <>
      <div
        data-testid="NextButton"
        className={classNames(
          'main-button-container',
          isPostion && `${postion}`,
          isContainerSpacing && `${containerSpacing}`
        )}
      >
        <Button
          // @ts-ignore
          shape={isRound && `round`}
          // @ts-ignore
          htmlType={htmlType}
          disabled={disabled}
          // @ts-ignore
          onClick={isOnClick && onClick}
          type="primary"
          style={{ width: `${width}`, height: `${height}` }}
          className={classNames(
            isPrimary && 'mainButton',
            isGhostPrimary && 'isGhostPrimary',
            cusClass,
            active && 'active'
          )}
        >
          <>
            {isLink ? (
              <Link to={url}>
                <a>{label}</a>
              </Link>
            ) : (
              label
            )}
          </>
        </Button>
      </div>
    </>
  );
};

export default NextButton;
