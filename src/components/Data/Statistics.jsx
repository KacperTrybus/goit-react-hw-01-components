import propTypes from 'prop-types';
import '../Data/Statistics.css';

export const Stats = ({ title, statistics }) => {
  const firstDataPercent = statistics[0].percentage;
  const secondDataPercent = statistics[1].percentage;
  const thirdDataPercent = statistics[2].percentage;
  const fourthDataPercent = statistics[3].percentage;

  const firstDataTitle = statistics[0].label;
  const secondDataTitle = statistics[1].label;
  const thirdDataTitle = statistics[2].label;
  const fourthDataTitle = statistics[3].label;
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
