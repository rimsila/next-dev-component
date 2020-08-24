import React, { FC } from 'react';
import './NextCard1.scss';
import { NextCardProps } from './NextCard.types';
import classNames from 'classnames';
import { Col } from 'antd';

export const NextCard: FC<NextCardProps> = (props) => {
  const {} = props;
  return (
    <Col>
      <div className={classNames('NextCardUI1')}>
        <a
          className="card"
          href="https://codetheweb.blog/2017/10/06/html-syntax/"
          style={{
            backgroundImage:
              'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)',
          }}
        >
          <div>
            <h1>HTML Syntax</h1>
            <p>
              The syntax of a language is how it works. How to actually write
              it. Learn HTML syntax…
            </p>
            <div className="date">6 Oct 2017</div>
            <div className="tags">
              <div className="tag">HTML</div>
            </div>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default NextCard;
