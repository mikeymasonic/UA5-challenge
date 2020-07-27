import React from 'react';
import PropTypes from 'prop-types';

const MessagesList = ({ message, attribution }) => {
  return (
    <div>
      <h3>{message}</h3>
      <h4>{attribution}</h4>
    </div>
  );
};

MessagesList.propTypes = {
  message: PropTypes.string,
  attribution: PropTypes.string,
};

export default MessagesList;
