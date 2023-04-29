import { SortableItem } from "react-easy-sort";
import "./SingleStats.css";

function SingleStats(props) {
  return (
    <SortableItem>
      <div className="stats-box">
        <p className="stats-box__title">{props.title}</p>
        <img src={`./images/icon-${props.account}.svg`} alt={props.account} className="sm-icon" />
        <p className="stats-box__amount">{props.amount}</p>
        <div className="stats-box__stats">
          <img
            src={`./images/icon-${props.arrow}.svg`}
            alt={`${props.arrow} arrow`}
            className="icon-arrow"
          />
          <p className={`percent-text ${props.arrow}`}>{props.percent}%</p>
        </div>
      </div>
    </SortableItem>
  );
}

export default SingleStats;
