<template>
  <div class="bar-chart">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      chart-id="Id"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      css-classes="bar-chart"
      :styles="myStyles"
      width="1136"
      height="273"
    />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    // width: {
    //   type: Number,
    //   default: 150,
    // },
    height: {
      type: Number,
      default: 150,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {
        borderWidth: 8;
      },
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
          {
            label: "FAILED",
            backgroundColor: "#FCD3DA",
            data: [40, 39, 10, 40, 39, 70, 40],
          },
          {
            label: "SUCCESSFUL",
            backgroundColor: "#0FB177",
            data: [45, 39, 10, 80, 79, 80, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        borderRadius: 8,
        barThickness: 10,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
          },
        },
      },
    };
  },
  computed: {
    myStyles() {
      return {
        // width: `calc(100vw - 200px)`,
        position: "relative",
      };
    },
    width() {
      return;
      `calc(100vw - 192px)`;
    },
  },
};
</script>

<style scoped>
.bar-chart {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 263px;
  margin-top: 45px;
  margin-bottom: 0px;
  /* background: #1630C9; */
  /* color: #ff002ef2; */
}
@media(min-width: 1620px)
{
  .bar-chart{
    margin-bottom: 60px;
  }
}
</style>
