import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessagesList.css';

const MessagesList = ({ message, attribution, messageColor }) => {
  return (
    <div className={styles.MessagesList}>
      <blockquote>
        <p className={styles.Message} style={{ color: `${messageColor}` }}>
          {message}
        </p>
        <footer>
          <p className={styles.Attribution}>
            ——
            <br />
            {attribution}
          </p>
        </footer>
      </blockquote>
    </div>
  );
};

MessagesList.propTypes = {
  message: PropTypes.string,
  attribution: PropTypes.string,
  messageColor: PropTypes.string,
};

export default MessagesList;
