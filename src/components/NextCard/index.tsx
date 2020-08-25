// Generated with util/create-component.js
import React, { FC } from 'react';
import './NextCard.scss';
import { NextCardProps } from './NextCard.types';
import classNames from 'classnames';
import { Col } from 'antd';

export const NextCard: FC<NextCardProps> = (props) => {
  const {
    isLoop,
    title,
    image,
    post,
    like,
    socialCusContent,
    footerContent,
    socialList = [],
    cls_card__name,
    description,
    descriptionCusContent,
  } = props;
  return (
    <Col>
      <div className={classNames('NextCard', 'card')}>
        <img src={image} alt={image} className="card__image" />
        <p className={classNames('card__name', cls_card__name)}>{title}</p>
        <div className="grid-container">
          {description ? (
            <>
              <div className="grid-child-posts">{description.post}</div>
              <div className="grid-child-followers">{description.like}</div>
            </>
          ) : (
            descriptionCusContent || 'description'
          )}
        </div>
        <ul className="social-icons">
          {socialCusContent
            ? socialCusContent
            : socialList.map(
                (social: { icon: React.ReactNode }, key: number) => (
                  <>
                    <li key={key}>
                      <a href="#">{social.icon}</a>
                    </li>
                  </>
                )
              )}
        </ul>
        {footerContent ? (
          footerContent
        ) : (
          <>
            <h1>footer card</h1>
          </>
        )}
      </div>
    </Col>
  );
};

export default NextCard;
