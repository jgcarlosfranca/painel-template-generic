import "./styles.css";
import DoughnutChart from "../../Components/Charts/DoughnutChart";
import RadarChart from "../../Components/Charts/RadarChart";
import LineChart from "../../Components/Charts/LineChart";
import ClickEvents from "../../Components/Charts/DinamicChart";

export default function Charts() {
  return (
    <div className="charts">
      {/* <div className="DinamicChart">
        <ClickEvents />
      </div>
      <div className="DoughnutChart">
        <DoughnutChart />
      </div>
      <div className="DoughnutChart">
        <RadarChart />
      </div> */}
      <div className="DoughnutChart">
        <LineChart />
      </div>
      {/* <div className="home_red"></div>
      <div className="home_blue"></div>
      <div className="home_yellow"></div>
      <div className="home_green"></div> */}
    </div>
  );
}
