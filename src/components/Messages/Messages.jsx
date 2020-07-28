import React, { useState } from 'react';
import { messages, moreMessages } from '../../data/data';
import MessagesList from '../MessagesList/MessagesList';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';
import styles from './Messages.css';
import imageTop from '../../../public/images/ast-right.png';
import imageBottom from '../../../public/images/ast-left.png';

const Messages = () => {
  const [viewAll, setViewAll] = useState(false);

  const titleTop = messages[0].section_title;
  let titleBottom = moreMessages[0].section_title;
  titleBottom = titleBottom.replace('!', '');

  const messageNodes = messages[0].quotes.map((data) => {
    return (
      <div key={data.attribution} data-src={imageTop}>
        <MessagesList
          messageColor={'#00000'}
          key={data.attribution}
          {...data}
        />
      </div>
    );
  });

  const moreMessageNodes = moreMessages[0].quotes.map((data) => {
    return (
      <div key={data.attribution} data-src={imageBottom}>
        <MessagesList
          messageColor={'#0000FF'}
          key={data.attribution}
          {...data}
        />
      </div>
    );
  });

  const handleClick = () => {
    setViewAll(!viewAll);
  };

  if (viewAll === false) {
    return (
      <>
        <section className={styles.Top}>
          <h1 className={styles.TitleTop}>{titleTop}</h1>
          <AwesomeSlider
            className={styles.Slider}
            scssModule={AwesomeSliderStyles}
          >
            {messageNodes}
          </AwesomeSlider>
          <button className={styles.Button} onClick={handleClick}>
            VIEW ALL
          </button>
        </section>

        <section className={styles.Bottom}>
          <h1 className={styles.TitleBottom}>{titleBottom}</h1>
          <AwesomeSlider
            className={styles.Slider}
            scssModule={AwesomeSliderStyles}
          >
            {moreMessageNodes}
          </AwesomeSlider>
        </section>
      </>
    );
  }

  if (viewAll === true) {
    return (
      <>
        <button className={styles.ButtonBack} onClick={handleClick}>
          BACK
        </button>
        <section className={styles.ViewAllMessages}>{messageNodes}</section>
      </>
    );
  }
};

export default Messages;
