//@ts-nocheck

import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(...registerables);

const RealtimeChart = ({
  data,
  width,
  height,
}: {
  data: any;
  width: number;
  height: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy previous chart before creating a new one
    }

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          x: {
            type: "category",
            title: {
              display: false,
            },
            ticks: {
              autoSkip: true, // Ensure all months are shown
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: false,
              text: "CO2e (kg)",
            },
            grace: "5%", // Increase height of y-scale slightly
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend if unnecessary
          },
        },
        animation: {
          duration: 1000, // Smooth transition
          easing: "easeInOutQuad", // Smooth curves
        },
      },
    });
  }, [data]);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default RealtimeChart;
