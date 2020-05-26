// Generated with util/create-component.js
type postionType = 'btn_left' | 'btn_center' | 'btn_right';
type spacingType = 'spacing30' | 'top30' | 'top20';
type iconPostionType = 'icon_center';

export interface NextButtonProps {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  cusClass?: string;
  isPrimary?: boolean;
  isGhostPrimary?: boolean;
  isRound?: boolean;
  isSmall?: boolean;
  width?: string;
  height?: string;
  htmlType?: string;
  disabled?: boolean;
  active?: boolean;
  isLink?: boolean;
  url?: string;
  onClick?: any;
  postion?: postionType;
  isPostion?: boolean;
  containerSpacing?: spacingType;
  isContainerSpacing?: boolean;
  iconPostion?: iconPostionType;
}
