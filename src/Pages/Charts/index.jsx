import "./styles.css";

import LineChart from "../../Components/Charts/LineChart";
import BumpChart from "../../Components/Charts/BumpChart";
import DoughnutChart from "../../Components/Charts/DoughnutChart";
import RadarChart from "../../Components/Charts/RadarChart";
import dataLineChart from "../../utils/ChartDatas/line";
import dataBump from "../../utils/ChartDatas/bump";
import dataDoughnutChart from "../../utils/ChartDatas/doughnut";
import dataRadarChart from "../../utils/ChartDatas/radar";
import { FormHeader } from "../../Components/FormBasics/FormLayout/FormHeader"


export default function Charts() {
  return (
    <div className="charts">
      <div className="LineChart">
        <FormHeader titulo="Line Chart" />
        <LineChart data={dataLineChart} />
      </div>
      <div className="BumpChart">
        <BumpChart data={dataBump} />
      </div>
      <div className="DoughnutChart">
        <DoughnutChart data={dataDoughnutChart} />
      </div>
      <div className="RadarChart">
        <RadarChart data={dataRadarChart} />
      </div>
    </div>
  );
}
