// Generated with util/create-component.js
type postionType = 'btn_left' | 'btn_center' | 'btn_right';
type spacingType = 'spacing30' | 'top30' | 'top20';
type iconPostionType = 'icon_center';
type btnType =
  | 'from-top'
  | 'from-left'
  | 'from-righ'
  | 'from-center'
  | 'from-bottom';
type btn5Type =
  | 'btn--stripe'
  | 'btn--stripe btn--radius'
  | 'btn--stripe btn--large';
type btn7Type =
  | 'fill'
  | 'pulse'
  | 'close'
  | 'raise'
  | 'slide'
  | 'offset';

type btn8Type =
  | 'button-container-1'
  | 'button-container-2';
type btn9Type =
  | 'type1'
  | 'type2'
  | 'type3'
  | 'type4';
type btn12Type =
  | 'fx-bubbleDown'
  | 'fx-bubbleUp'
  | 'fx-sliderIn'
  | 'is-reversed fx-bubbleDown'
  | 'is-reversed fx-bubbleUp'
  | 'is-reversed fx-sliderIn';

export interface NextButtonProps {
  labelBack?: string;
  btn12Type?: btn12Type;
  btn9Type?: btn9Type;
  btn8Type?: btn8Type;
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
  btnType?: btnType;
  btn5Type?: btn5Type;
  btn7Type?: btn7Type;
}
