// Generated with util/create-component.js
import React, { FC } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { NextButtonProps } from './NextButton.types';
import { PoweroffOutlined } from '@ant-design/icons';
import './NextButton.scss';

export const NextButton: FC<NextButtonProps> = ({
  icon,
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
          icon={icon}
          // @ts-ignore
          shape={isRound && `round`}
          // @ts-ignore
          htmlType={htmlType}
          disabled={disabled}
          onClick={onClick}
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
