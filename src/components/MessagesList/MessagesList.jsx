import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessagesList.css';

const MessagesList = ({ message, attribution, sectionTitle }) => {
  const messageTop = <h3 className={styles.TopMessage}>{message}</h3>;
  const messageBottom = <h3 className={styles.BottomMessage}>{message}</h3>;

  return (
    <div className={styles.MessagesList}>
      {sectionTitle === 'Congratulatory Messages' && messageTop}
      {sectionTitle === 'More Messages!' && messageBottom}
      <h4>{attribution}</h4>
    </div>
  );
};

MessagesList.propTypes = {
  message: PropTypes.string,
  attribution: PropTypes.string,
  sectionTitle: PropTypes.string,
};

export default MessagesList;
