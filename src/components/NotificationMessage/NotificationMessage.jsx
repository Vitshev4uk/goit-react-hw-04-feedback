import React from 'react';
import css from 'components/NotificationMessage/NotificationMessage.module.css';
import PropTypes from 'prop-types';

function NotificationMessage(props) {
  const { message } = props;

  return (
      <div>
        <p className={css.NotificationMessage}>{message}</p>
      </div>
    );
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default NotificationMessage;
