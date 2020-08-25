import React, { FC } from 'react';
import './NextCard1.scss';
import { NextCardProps } from './NextCard.types';
import classNames from 'classnames';
import { Col } from 'antd';
import { mockObj } from '../../util/mock';
import NextButton13 from '../NextButton13';

export const NextCard1: FC<NextCardProps> = (props) => {
  const { href = '#', img, desc, date, title, cusFooter } = props;
  return (
    <Col className={classNames('NextCard1')}>
      <a
        className="card"
        href={href}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="card-body">
          <span>
            <h1>{title}</h1>
            <p className="desc">{desc}</p>
            <div className="date">{date}</div>
            {cusFooter || <NextButton13 label="Read More" />}
          </span>
        </div>
      </a>
    </Col>
  );
};

export default NextCard1;
