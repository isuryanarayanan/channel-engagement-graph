import Highcharts from "highcharts";

const engagementMessageOverTimeChartOptions = (
  messageCountList: any,
  channels: any
): Highcharts.Options => {
  const generalChannelId = "825030076239577109";

  const generalChannelMessages = messageCountList.filter(
    (message: { channelId: string; }) => message.channelId === generalChannelId
  );

  const data = generalChannelMessages.map((message: { timeBucket: string | number | Date; count: string; }) => ({
    x: new Date(message.timeBucket).getTime(),
    y: parseInt(message.count),
  }));

  const channelName = channels.find((channel: { value: string; }) => channel.value === generalChannelId)?.name;


  return {
    title: {
      text: "Discord server statistics",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Number of Messages",
      },
    },
    series: [
      {
        name: channelName,
        type: "spline",
        data: data,
      },
    ],
  };
};

export default {
  engagementMessageOverTimeChartOptions,
};
