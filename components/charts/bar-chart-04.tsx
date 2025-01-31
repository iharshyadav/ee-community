"use client";

import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData } from "chart.js";
import { chartColors } from "@/components/charts/chartjs-config"; // Ensure correct import
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatThousands } from "@/components/utils/utils";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

interface BarChart04Props {
  data: ChartData;
  width: number;
  height: number;
}

export default function BarChart04({ data, width, height }: BarChart04Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const {
    textColor,
    gridColor,
    tooltipBodyColor,
    tooltipBgColor,
    tooltipBorderColor,
  } = chartColors;

  useEffect(() => {
    const ctx = canvas.current;
    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: "bar",
      data: {
        ...data,
        datasets: data.datasets.map((dataset, index) => ({
          ...dataset,
          backgroundColor: tailwindConfig.theme.colors.green[300],
        })),
      },
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          x: {
            grid: {
              color: darkMode ? gridColor.dark : gridColor.light,
            },
            ticks: {
              color: darkMode ? textColor.dark : textColor.light,
            },
          },
          y: {
            ticks: {
              color: darkMode ? textColor.dark : textColor.light,
            },
            grid: {
              color: darkMode ? gridColor.dark : gridColor.light,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => "",
              label: (context) => formatThousands(context.parsed.y),
            },
            bodyColor: darkMode
              ? tooltipBodyColor.dark
              : tooltipBodyColor.light,
            backgroundColor: darkMode
              ? tooltipBgColor.dark
              : tooltipBgColor.light,
            borderColor: darkMode
              ? tooltipBorderColor.dark
              : tooltipBorderColor.light,
          },
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });

    return () => newChart.destroy();
  }, [data, darkMode]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}
