export interface NextCardProps {
  title?: React.ReactNode;
  image?: string;
  post?: string | number;
  like?: string | number;
  socialCusContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  isLoop?: boolean;
  data?: any[];
  socialList?: any[];
  cls_card__name?: string;
  description?: { post?: React.ReactNode; like?: React.ReactNode };
  descriptionCusContent?: React.ReactNode;
}
