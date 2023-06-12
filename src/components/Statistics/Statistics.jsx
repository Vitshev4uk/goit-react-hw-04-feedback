import React from 'react';
import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
      <ul className={css.StatisticsList}>
        <li className={css.StatisticsListItem}>Good: {good}</li>
        <li className={css.StatisticsListItem}>Neutral: {neutral}</li>
        <li className={css.StatisticsListItem}>Bad: {bad}</li>
        <li className={css.StatisticsListItem}>Total: {total}</li>
        <li className={css.StatisticsListItem}>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired
}

export default Statistics;
