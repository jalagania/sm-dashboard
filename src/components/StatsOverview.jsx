import arrayMove from "array-move";
import { useEffect, useState } from "react";
import SortableList from "react-easy-sort";
import { data } from "../data";
import SingleStats from "./SingleStats";
import "./StatsOverview.css";

function StatsOverview() {
  const [stats, setStats] = useState(data.stats);

  function onSortEnd(oldIndex, newIndex) {
    setStats((array) => arrayMove(array, oldIndex, newIndex));
  }

  useEffect(() => {
    const storedStats = JSON.parse(localStorage.getItem("STATS"));
    if (storedStats) setStats(storedStats);
  }, []);

  useEffect(() => {
    localStorage.setItem("STATS", JSON.stringify(stats));
  }, [stats]);

  return (
    <section className="overview-section">
      <div className="section-container">
        <h2 className="overview__heading">Overview - Today</h2>
        <SortableList
          className="stats-container flex-container"
          onSortEnd={onSortEnd}
          draggedItemClassName="dragged"
        >
          {stats.map((box) => (
            <SingleStats
              key={box.id}
              title={box.title}
              account={box.account}
              amount={box.amount}
              arrow={box.arrow}
              percent={box.percent}
            />
          ))}
        </SortableList>
      </div>
    </section>
  );
}

export default StatsOverview;
