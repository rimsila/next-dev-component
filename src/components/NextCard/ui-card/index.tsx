// Generated with util/create-component.js
import React from 'react';
import './ui-card.scss'



export const NextCardLeft: React.FC = () => (
    <article className="c-card">
        <header className="c-card__header">
            <img
                src="http://placehold.it/350x200"
                className="c-card__image"
                alt="Card Image"
            />
        </header>
        <div className="c-card__body">
            <h2 className="c-card__title">Card</h2>
            <p className="c-card__subtitle">initial component</p>
            <p className="c-card__intro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
        </div>
        <footer className="c-card__footer">Footer</footer>
    </article>

);


export const NextCardCenter: React.FC = () => (

    <article className="c-card c-card--center">
        <header className="c-card__header">
            <img
                src="http://placehold.it/350x200"
                className="c-card__image"
                alt="Card Image"
            />
        </header>
        <div className="c-card__body">
            <h2 className="c-card__title">card--center</h2>
            <p className="c-card__subtitle">center modifier</p>
            <p className="c-card__intro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
        </div>
        <footer className="c-card__footer">Footer</footer>
    </article>

);

export const NextCardWide: React.FC = () => (

  <article className="c-card c-card--wide">
    
    <header className="c-card__header">
      <img src="http://placehold.it/300x250"  className="c-card__image" alt="Card Image" />
    </header>

    <div className="c-card__body">
      <h2 className="c-card__title">
        card--wide
      </h2>
      <p className="c-card__subtitle">
        wide modifier
      </p>
      <p className="c-card__intro">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      </p>
    </div>

    <footer className="c-card__footer">
      Footer
    </footer>

  </article>

);

export const NextCardFlip: React.FC = () => (

    <article className="c-card-flip">
        <div className="c-card-flip__flipper">
            <div className="c-card-flip__front">
                <img
                    src="http://placehold.it/450x250"
                    className="c-card-flip__image"
                    alt="Card Image"
                />
            </div>
            <div className="c-card-flip__back">
                <h3 className="c-card-flip__title">
                    Hi there, how are you today ?
          <br />
                    This is a separated card-flip component :)
        </h3>
            </div>
        </div>
    </article>

);

export default {
    NextCardLeft,
    NextCardCenter,
    NextCardFlip,
    NextCardWide
};