import React from 'react';
import PropTypes from 'prop-types';

const MessagesList = (message, attribution) => {
  return (
    <section>
      <h1>Messages List</h1>
      <h3>{message}</h3>
      <h3>{attribution}</h3>
    </section>
  );
};

MessagesList.propTypes = {
  message: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
};

export default MessagesList;
