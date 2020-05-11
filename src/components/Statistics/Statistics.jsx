import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const {
    statistics, sectionTitle, statList, item, labelStyle, percentageStyle,
  } = styles;
  return (
    <section className={statistics}>
      {!!title.length && <h2 className={sectionTitle}>{title}</h2>}
      <ul className={statList}>
        {stats.map((elem) => {
          const { id, label, percentage } = elem;
          return (
            <li
              key={id}
              className={item}
              style={{ backgroundColor: getRandColor() }}
            >
              <span className={labelStyle}>{label}</span>
              <span className={percentageStyle}>
                {percentage}
                %
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandColor() {
    const getRandNumber = () => Math.floor(Math.random() * Math.floor(255));
    return `rgb(${getRandNumber()}, ${getRandNumber()}, ${getRandNumber()})`;
  }

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;