import React from 'react';
import css from 'components/FeedbackOption/FeedbackOption.module.css';
import PropTypes from 'prop-types';

function FeedbackOption(props) {
  const { types, handleFeedBackClick } = props;

  return (
      <div className={css.BtnContainer}>
        {types.map(type => (
          <button
            className={css.BtnOption}
            type="button"
            key={type}
            onClick={() => handleFeedBackClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
  );
}

  FeedbackOption.propTypes = {
  types: PropTypes.array.isRequired,
  handleFeedBackClick: PropTypes.func.isRequired
}

export default FeedbackOption;
