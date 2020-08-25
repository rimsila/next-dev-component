import React, { FC } from 'react';
import './styles.scss';
import { Form, Input } from 'antd';
import NextButton from '../NextButton';
import { SubscribeEmailType } from './index.types';
import classNames from 'classnames';

export const SubscribeEmail: FC<SubscribeEmailType> = ({
  onFinish,
  customDecs,
  message,
  backgroundColor = '#151515',
  isRadius,
  style,
  cusCls,
}) => {
  return (
    <div className={classNames('subscribe-email', cusCls)}>
      <div
        className="newsletter"
        style={{
          backgroundColor,
          borderRadius: isRadius && 10,
          ...style,
        }}
      >
        <p>
          {customDecs || (
            <>
              Join our subscribes list to get the latest news and special offers
            </>
          )}
        </p>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: message || 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <div className="form-group">
            <NextButton
              width="100%"
              height="40px"
              htmlType="submit"
              label="Subscribe"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SubscribeEmail;
