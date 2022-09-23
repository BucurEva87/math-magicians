import React from 'react';

import style from '../styles/Quote.module.scss';

const Quote = () => (
  <section className={style['container-section']} data-testid="quote">
    <article data-testid="quote-article">
      <blockquote data-testid="quote-blockquote">
        <p data-testid="quote-p">
          <em data-testid="quote-em">
            Mathematics is not about numbers, equations, computations or algorithms. It is about
            understanding.
          </em>
        </p>
        <footer data-testid="quote-footer">William Paul Thurstone</footer>
      </blockquote>
    </article>
  </section>
);

export default Quote;
