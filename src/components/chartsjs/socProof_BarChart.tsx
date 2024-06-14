// BarChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let chartInstance: Chart<"bar", number[], string> | null = null;

  useEffect(() => {
    const colors = [
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
      ];

      var ctx;
      if(chartRef.current){

        ctx = chartRef.current.getContext("2d");
      }

    if (chartInstance) {
        chartInstance.destroy(); // Destroy previous chart instance
      }

      if(ctx){
      chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Breakfast", "Launch", "Dinner", "Middle Meals", "Desserts", "Drinks"],
        datasets: [
          {
            label: "Number of Recipes Available",
            backgroundColor: colors,
            borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
            borderWidth: 1,
            hoverBackgroundColor: colors,
            hoverBorderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
            /*pointBackgroundColor: "blue",*/
            data: [65, 59, 80, 81, 56, 55],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
            legend: {
              labels: {
                color: "black", // Change the color of the main label in the legend
                boxWidth: 0,
                boxHeight: 0,
              },
              /*display: false,*/
            },
          },
        color: "green",
      },
    });
  }
    return () => {
        if (chartInstance) {
          chartInstance.destroy(); // Ensure chart instance is destroyed when component unmounts
        }
    };
  }, []);


  
  return <div className="BarChartDiv">
        <canvas ref={chartRef} />
  </div>
    
};

export default BarChart;