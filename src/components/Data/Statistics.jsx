import propTypes from 'prop-types';
import data from '../Data/data.json';
import '../Data/Statistics.css';
const firstDataPercent = data[0].percentage;
const secondDataPercent = data[1].percentage;
const thirdDataPercent = data[2].percentage;
const fourthDataPercent = data[3].percentage;

const firstDataTitle = data[0].label;
const secondDataTitle = data[1].label;
const thirdDataTitle = data[2].label;
const fourthDataTitle = data[3].label;

export const Stats = ({ title, statistics }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          <li className="item">
            <span className="label">{firstDataTitle}&nbsp;</span>
            <span className="percentage"> {firstDataPercent}%</span>
          </li>
          <li className="item">
            <span className="label">{secondDataTitle}&nbsp;</span>
            <span className="percentage"> {secondDataPercent}%</span>
          </li>
          <li className="item">
            <span className="label">{thirdDataTitle}&nbsp;</span>
            <span className="percentage"> {thirdDataPercent}%</span>
          </li>
          <li className="item">
            <span className="label">{fourthDataTitle}&nbsp;</span>
            <span className="percentage"> {fourthDataPercent}%</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

Stats.propTypes = {
  title: propTypes.string.isRequired,
  statistics: propTypes.array.isRequired,
};

export default Stats;
