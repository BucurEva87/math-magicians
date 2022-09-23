import React from 'react';

import style from '../styles/Home.module.scss';

const Home = () => (
  <section className={style['container-section']} data-testid="home-section">
    <h1 data-testid="home-h1">Welcome to our page!</h1>

    <p data-testid="home-p-first">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum esse quos voluptate sit
      tenetur aliquam placeat. In voluptas dolorem et voluptatibus aut. Error provident magni
      doloremque suscipit dignissimos iusto incidunt repellendus temporibus tempore, quidem ducimus
      laudantium repudiandae animi tenetur, id odio aliquam! Ipsa, veniam! Officia assumenda facilis
      ut odit eum eligendi in quod quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Earum esse quos voluptate sit tenetur aliquam placeat. In voluptas dolorem et voluptatibus
      aut. Error provident magni doloremque suscipit dignissimos iusto incidunt repellendus
      temporibus tempore, quidem ducimus laudantium repudiandae animi tenetur, id odio aliquam!
      Ipsa, veniam! Officia assumenda facilis ut odit eum eligendi in quod quasi!
    </p>

    <p data-testid="home-p-second">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eius. Accusamus repellat
      voluptates enim qui autem quidem itaque ad ut veniam, facilis, corrupti commodi atque
      quisquam. Ducimus dolorum asperiores numquam ex ullam dolores, aliquam at esse ut quibusdam
      pariatur possimus consequuntur exercitationem tempore, voluptatibus in laudantium inventore
      autem quos qui dolorem nam, quis temporibus! Distinctio, dolor officiis excepturi eligendi eos
      deleniti natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eius. Accusamus
      repellat voluptates enim qui autem quidem itaque ad ut veniam, facilis, corrupti commodi atque
      quisquam. Ducimus dolorum asperiores numquam ex ullam dolores, aliquam at esse ut quibusdam
      pariatur possimus consequuntur exercitationem tempore, voluptatibus in laudantium inventore
      autem quos qui dolorem nam, quis temporibus! Distinctio, dolor officiis excepturi eligendi eos
      deleniti natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eius. Accusamus
      repellat voluptates enim qui autem quidem itaque ad ut veniam, facilis, corrupti commodi atque
      quisquam. Ducimus dolorum asperiores numquam ex ullam dolores, aliquam at esse ut quibusdam
      pariatur possimus consequuntur exercitationem tempore, voluptatibus in laudantium inventore
      autem quos qui dolorem nam, quis temporibus! Distinctio, dolor officiis excepturi eligendi eos
      deleniti natus.
    </p>
  </section>
);

export default Home;
