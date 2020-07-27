import React from 'react';
import { messages } from '../../data/data';
import MessagesList from '../MessagesList/MessagesList';

const Messages = () => {
  const messageNodes = messages[0].quotes.map((data) => {
    return <MessagesList key={data.attribution} {...data} />;
  });
  return (
    <>
      <section>
        <h1>Messages</h1>
        <h1>{messageNodes}</h1>
      </section>
    </>
  );
};

export default Messages;
