import React from 'react';
import { notification } from 'antd';

type antNoti = 'success' | 'info' | 'warning' | 'error';
enum messagetypes {
  subscribe = 'Subscribed successfully!',
  subscribeDes = 'Your email has been subscribed successfully. We will send you interested news vai email box.',
  submitContact = 'Submitted successfully!',
  submitContactDesc = 'Thanks for contacting us through our website! We will contact you shortly.',
}

type notificationTypes = 'subscribeSuccess' | 'contactUsSuccess' | 'customMsg';

const subscribeSuccess = () => {
  notification.success({
    message: messagetypes.subscribe,
    description: messagetypes.subscribeDes,
  });
};

const contactUsSuccess = () => {
  notification.success({
    message: messagetypes.submitContact,
    description: messagetypes.submitContactDesc,
  });
};

const notificationCusType = (
  type: antNoti,
  message: React.ReactNode,
  description: React.ReactNode
) => {
  notification[type]({
    message,
    description,
  });
};
export const notificationType = (
  type?: notificationTypes,
  antType?: antNoti,
  message?: React.ReactNode,
  description?: React.ReactNode
) => {
  switch (type) {
    case 'customMsg':
      return notificationCusType(antType, message, description);
    case 'subscribeSuccess':
      return subscribeSuccess();
    case 'contactUsSuccess':
      return contactUsSuccess();
    default:
      return;
  }
};

export default notificationType;