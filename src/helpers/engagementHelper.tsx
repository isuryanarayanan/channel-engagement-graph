import Highcharts from "highcharts";

const engagementMessageOverTimeChartOptions = (messageCountList: any, channels:any): Highcharts.Options => {
    console.log("messageCountList", messageCountList)
    console.log("channels", channels)
    return  {
        title: {
            text: 'My chart'
        },
        series: [{
            type: 'line',
            data: [1, 2, 3]
        }]
    };
}
   
export default {
    engagementMessageOverTimeChartOptions
}