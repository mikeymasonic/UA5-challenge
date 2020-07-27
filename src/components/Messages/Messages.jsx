import React from 'react';
import { messages, moreMessages } from '../../data/data';
import MessagesList from '../MessagesList/MessagesList';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/styles.scss';

const Messages = () => {
  const messageNodes = messages[0].quotes.map((data) => {
    return (
      <div key={data.attribution}>
        <MessagesList key={data.attribution} {...data} />
      </div>
    );
  });
  const moreMessageNodes = moreMessages[0].quotes.map((data) => {
    return (
      <div key={data.attribution}>
        <MessagesList key={data.attribution} {...data} />
      </div>
    );
  });
  return (
    <>
      <section>
        <h1>Messages</h1>
        <AwesomeSlider scssModule={AwesomeSliderStyles}>
          {messageNodes}
        </AwesomeSlider>

        <AwesomeSlider scssModule={AwesomeSliderStyles}>
          {moreMessageNodes}
        </AwesomeSlider>
      </section>
    </>
  );
};

export default Messages;
