import React from 'react';
import css from 'components/Section/Section.module.css';
import PropTypes from 'prop-types';

function Section(props) {
  const { title, children } = props;

  return (
      <div className={css.SectionContainer}>
        <h2 className={css.Title}>{title}</h2>
        {children}
      </div>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section;
