import propTypes from 'prop-types';
import data from '../Data/data.json';

const firstDataPercent = data[0].percentage;
const secondDataPercent = data[1].percentage;
const thirdDataPercent = data[2].percentage;
const fourthDataPercent = data[3].percentage;

const firstDataTitle = data[0].label;
const secondDataTitle = data[1].label;
const thirdDataTitle = data[2].label;
const fourthDataTitle = data[3].label;

export const Stats = ({ title, stats }) => (
  <>
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{firstDataTitle}</span>
          <span className="percentage"> {firstDataPercent}%</span>
        </li>
        <li className="item">
          <span className="label">{secondDataTitle}</span>
          <span className="percentage"> {secondDataPercent}%</span>
        </li>
        <li className="item">
          <span className="label">{thirdDataTitle}</span>
          <span className="percentage"> {thirdDataPercent}%</span>
        </li>
        <li className="item">
          <span className="label">{fourthDataTitle}</span>
          <span className="percentage"> {fourthDataPercent}%</span>
        </li>
      </ul>
    </section>
  </>
);

Stats.propTypes = {
  title: propTypes.string,
  stats: propTypes.number,
};

export default Stats;
