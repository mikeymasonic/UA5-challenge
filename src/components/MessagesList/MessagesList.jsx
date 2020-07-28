import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessagesList.css';

const MessagesList = ({ message, attribution, messageColor }) => {
  return (
    <div className={styles.MessagesList}>
      <blockquote>
        <h3 className={styles.Message} style={{ color: `${messageColor}` }}>
          {message}
        </h3>
        <footer>
          <h4 className={styles.Attribution}>
            ——
            <br />
            {attribution}
          </h4>
        </footer>
      </blockquote>
    </div>
  );
};

MessagesList.propTypes = {
  message: PropTypes.string,
  attribution: PropTypes.string,
  sectionTitle: PropTypes.string,
  messageColor: PropTypes.string,
};

export default MessagesList;
