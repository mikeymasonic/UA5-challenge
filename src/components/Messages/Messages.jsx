import React from 'react';
import { messages, moreMessages } from '../../data/data';
import MessagesList from '../MessagesList/MessagesList';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';
import styles from './Messages.css';

const Messages = () => {
  const titleTop = messages[0].section_title;
  let titleBottom = moreMessages[0].section_title;
  titleBottom = titleBottom.replace('!', '');

  const sectionTitleTop = messages[0].section_title;
  const sectionTitleBottom = moreMessages[0].section_title;

  const messageNodes = messages[0].quotes.map((data) => {
    return (
      <div
        key={data.attribution}
        data-src="https://pbs.twimg.com/profile_images/524717947931996160/g0kMdxBX.png"
      >
        <MessagesList
          key={data.attribution}
          {...data}
          sectionTitle={sectionTitleTop}
        />
      </div>
    );
  });

  const moreMessageNodes = moreMessages[0].quotes.map((data) => {
    return (
      <div
        key={data.attribution}
        data-src="https://pbs.twimg.com/profile_images/524717947931996160/g0kMdxBX.png"
      >
        <MessagesList
          key={data.attribution}
          {...data}
          sectionTitle={sectionTitleBottom}
        />
      </div>
    );
  });
  return (
    <>
      <section className={styles.Messages}>
        <section className={styles.Top}>
          <h1 className={styles.Title}>{titleTop}</h1>
          <AwesomeSlider
            className={styles.Slider}
            scssModule={AwesomeSliderStyles}
          >
            {messageNodes}
          </AwesomeSlider>
        </section>
        <section className={styles.Bottom}>
          <h1 className={styles.Title}>{titleBottom}</h1>
          <AwesomeSlider
            className={styles.Slider}
            scssModule={AwesomeSliderStyles}
          >
            {moreMessageNodes}
          </AwesomeSlider>
        </section>
      </section>
    </>
  );
};

export default Messages;
