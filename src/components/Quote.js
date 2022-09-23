import React from 'react';

import style from '../styles/Quote.module.scss';

const Quote = () => (
  <section className={style['container-section']}>
    <article>
      <blockquote>
        <p>
          <em>
            Mathematics is not about numbers, equations, computations or algorithms.
            It is about understanding.
          </em>
        </p>
        <footer>William Paul Thurstone</footer>
      </blockquote>
    </article>
  </section>
);

export default Quote;
