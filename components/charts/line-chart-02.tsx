//@ts-nocheck

import { Chart, registerables } from "chart.js";
import { useEffect, useRef, useState } from "react";

Chart.register(...registerables);

const LineChart02 = ({ data }: { data: any }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  // Initialize all datasets
  const initialVisibleDatasets = data.datasets.map((_, index) => index);
  const [visibleDatasets, setVisibleDatasets] = useState<number[]>(
    initialVisibleDatasets
  );

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const tailwindGreenColors = [
      "rgba(134, 239, 172, 1)",
      "#4ade80",
      "rgba(34, 197, 94, 1)",
      "rgba(22, 163, 74, 1)",
      "rgba(21, 128, 61, 1)",
      "rgba(20, 83, 45, 1)",
    ];

    const datasets = data.datasets.map((dataset, index) => {
      dataset.borderColor =
        tailwindGreenColors[index % tailwindGreenColors.length];
      dataset.backgroundColor =
        tailwindGreenColors[index % tailwindGreenColors.length];
      dataset.hidden = !visibleDatasets.includes(index);
      dataset.borderWidth = 3;
      return dataset;
    });

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets,
      },
      options: {
        layout: {
          padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          },
        },
        scales: {
          x: {
            type: "category",
            title: {
              display: false,
            },
            ticks: {
              autoSkip: true,
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: false,
              text: "CO2e (kg)",
            },
            grace: "5%",
            ticks: {
              callback: function (value) {
                if (value >= 1000) {
                  return value / 1000 + "k";
                }
                return value;
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Disable default legend
          },
        },
        animation: {
          duration: 1000,
          easing: "easeInOutQuad",
          // Animate from zero instead of from the top
          onProgress: (animation) => {
            const chart = animation.chart;
            chart.data.datasets.forEach((dataset) => {
              const meta = chart.getDatasetMeta(dataset.index);
              if (meta && meta.data) {
                dataset.data.forEach((_, index) => {
                  if (animation.currentStep === 0 && meta.data[index]) {
                    meta.data[index].y = chart.scales.y.getPixelForValue(0);
                  }
                });
              }
            });
          },
        },
      },
    });

    setVisibleDatasets(initialVisibleDatasets);
  }, [data]);
  console.log(data);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.datasets.forEach((dataset, index) => {
        dataset.hidden = !visibleDatasets.includes(index);
      });
      chartRef.current.update();
    }
  }, [visibleDatasets]);

  const toggleDataset = (index: number) => {
    setVisibleDatasets((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <>
      <div className="flex justify-between mb-2">
        {data.datasets.map((dataset, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer"
            onClick={() => toggleDataset(index)}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: `3px solid ${dataset.borderColor}`,
                opacity: visibleDatasets.includes(index) ? 1 : 0.5,
              }}
            />
            <span
              className="ml-2 text-black"
              style={{ opacity: visibleDatasets.includes(index) ? 1 : 0.5 }}
            >
              {dataset.label}
            </span>
          </div>
        ))}
      </div>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default LineChart02;
