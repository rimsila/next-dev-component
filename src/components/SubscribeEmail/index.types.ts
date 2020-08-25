import { ReactElement, CSSProperties } from 'react';

export interface SubscribeEmailType {
  onFinish?: () => any;
  customDecs?: React.ReactNode;
  message?: string | ReactElement;
  style?: CSSProperties;
  backgroundColor?: string;
  isRadius?: boolean;
  cusCls?: string;
}
