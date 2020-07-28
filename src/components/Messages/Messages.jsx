import React from 'react';
import { messages, moreMessages } from '../../data/data';
import MessagesList from '../MessagesList/MessagesList';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';
import styles from './Messages.css';

const Messages = () => {
  // const [viewAll, setViewAll] = useState(false);

  const titleTop = messages[0].section_title;
  let titleBottom = moreMessages[0].section_title;
  titleBottom = titleBottom.replace('!', '');

  const messageNodes = messages[0].quotes.map((data) => {
    return (
      <div key={data.attribution} data-src="../../public/images/ast-right.png">
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
      <div key={data.attribution} data-src="../../public/images/ast-left.png">
        <MessagesList
          messageColor={'#0000FF'}
          key={data.attribution}
          {...data}
        />
      </div>
    );
  });

  // if (viewAll === false) {

  //   <section className={styles.Top}>
  //       <h1 className={styles.Title}>{titleTop}</h1>
  //       <AwesomeSlider
  //         className={styles.Slider}
  //         scssModule={AwesomeSliderStyles}
  //       >
  //         {messageNodes}
  //       </AwesomeSlider>
  //       <button className={styles.Button}>VIEW ALL</button>
  //     </section>

  //     <section className={styles.Bottom}>
  //       <h1 className={styles.Title}>{titleBottom}</h1>
  //       <AwesomeSlider
  //         className={styles.Slider}
  //         scssModule={AwesomeSliderStyles}
  //       >
  //         {moreMessageNodes}
  //       </AwesomeSlider>
  //     </section>

  // }
  return (
    <>
      <section className={styles.Top}>
        <h1 className={styles.Title}>{titleTop}</h1>
        <AwesomeSlider
          className={styles.Slider}
          scssModule={AwesomeSliderStyles}
        >
          {messageNodes}
        </AwesomeSlider>
        <button className={styles.Button}>VIEW ALL</button>
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
    </>
  );
};

export default Messages;
