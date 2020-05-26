// Generated with util/create-component.js
import React, { FC } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { NextButtonProps } from './NextButton.types';
import { PoweroffOutlined } from '@ant-design/icons';
import './NextButton.scss';

export const NextButton: FC<NextButtonProps> = ({
  icon,
  isRound,
  htmlType,
  width = '180px',
  height = '',
  label = '',
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
  iconPostion,
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
            iconPostion,
            isPrimary && 'mainButton',
            isGhostPrimary && 'isGhostPrimary',
            cusClass,
            active && 'active'
          )}
        >
          <>{label}</>
        </Button>
      </div>
    </>
  );
};

export default NextButton;
