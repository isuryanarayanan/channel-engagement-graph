import "./App.css";
import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./helpers/engagementHelper";

// Import data from assets
import channels from "./assets/channels.json";
import messageCountList from "./assets/messageCountList.json";


const EngagementMessagesOverTime = ()=>{
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options = engagementHelper.engagementMessageOverTimeChartOptions(messageCountList,channels)

	return <HighchartsReact 
    highcharts={Highcharts} 
    options={options} 
    ref={chartComponentRef}
  />
}


function App() {

  return (
    <>
      <div>
        <EngagementMessagesOverTime />
      </div>
    </>
  );
}

export default App;

