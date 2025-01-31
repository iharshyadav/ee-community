"use client";

import { useState } from "react";
import {
  BoltIcon,
  DocumentIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const handleGenerateReport = async (
  setPdfUrl: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const response = await fetch("/api/generateReport");
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  setPdfUrl(url);
};

const handleDownload = (pdfUrl: string) => {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "GHG_Emissions_Report.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export default function GHGEmissionsReport() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-600 dark:text-green-400 mb-8">
            Greenhouse Gas (GHG) Emissions Report
          </h1>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => handleGenerateReport(setPdfUrl)}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 flex items-center"
            >
              <BoltIcon className="h-5 w-5 mr-2" />
              Generate Report
            </button>
          </div>

          {pdfUrl && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => window.open(pdfUrl, "_blank")}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <DocumentIcon className="h-5 w-5 mr-2" />
                  View PDF
                </button>
                <button
                  onClick={() => handleDownload(pdfUrl)}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download PDF
                </button>
              </div>

              <div
                className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg"
                style={{ height: "90vh" }}
              >
                <iframe
                  src={pdfUrl}
                  title="GHG Emissions Report"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
