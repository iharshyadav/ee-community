// @ts-nocheck

// "use client";

// import useSWR from "swr";
// import Select from "react-select";

// const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

// function ModelSelection() {
//   const { data: models, isLoading } = useSWR("models", fetchModels);
//   const { data: model, mutate: setModel } = useSWR("model", {
//     fallbackData: "earthemissiongpt",
//   });

//   const defaultValue = "earthemissiongpt";

//   return (
//     <div className="mt-2">
//       <Select
//         className="mt-2"
//         options={models?.modelOptions}
//         defaultValue={defaultValue}
//         placeholder="earthemissiongpt"
//         isSearchable
//         isLoading={isLoading}
//         menuPosition="absolute"
//         styles={{
//           control: (base) => ({
//             ...base,
//             backgroundColor: "#f5f6fa",
//             borderColor: "#f5f6fa",
//             ":hover": {
//               borderColor: "#f5f6fa",
//             },
//           }),
//           singleValue: (base) => ({
//             ...base,
//             color: "black",
//           }),
//           menu: (base) => ({
//             ...base,
//             backgroundColor: "#f5f6fa",
//           }),
//           option: (base) => ({
//             ...base,
//             color: "black",
//           }),
//         }}
//         onChange={(e) => setModel(e.value)}
//       />
//     </div>
//   );
// }

// export default ModelSelection;

// @ts-nocheck

"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "earthemissiongpt",
  });

  const defaultValue = "earthemissiongpt";

  const customStyles: StylesConfig<ModelOption, false> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "var(--background)",
      borderColor: state.isFocused ? "var(--green-500)" : "var(--border-color)",
      boxShadow: state.isFocused ? "0 0 0 1px var(--green-500)" : "none",
      "&:hover": {
        borderColor: "var(--green-500)",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--text-color)",
    }),
    input: (provided) => ({
      ...provided,
      color: "var(--text-color)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--background)",
      border: "1px solid var(--border-color)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "var(--hover-bg)" : "transparent",
      color: state.isFocused ? "var(--green-500)" : "var(--text-color)",
      "&:active": {
        backgroundColor: "var(--active-bg)",
      },
    }),
  };

  return (
    <div className="mt-2">
      <Select
        className="text-gray-900 dark:text-gray-100"
        classNamePrefix="react-select"
        options={models?.modelOptions}
        defaultValue={defaultValue}
        placeholder="earthemissiongpt"
        isSearchable={false}
        isLoading={isLoading}
        menuPosition="absolute"
        styles={customStyles}
        onChange={(e) => setModel(e?.value || "")}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "var(--green-500)",
            primary25: "var(--hover-bg)",
            neutral0: "var(--background)",
            neutral20: "var(--border-color)",
            neutral30: "var(--green-500)",
            neutral50: "var(--placeholder-color)",
            neutral80: "var(--text-color)",
          },
        })}
      />
      <style jsx global>{`
        :root {
          --green-500: #22c55e;
          --border-color: #d1d5db;
          --text-color: #111827;
          --background: #ffffff;
          --hover-bg: #f3f4f6;
          --active-bg: #e5e7eb;
          --placeholder-color: #6b7280;
        }
        .dark {
          --border-color: #4b5563;
          --text-color: #f3f4f6;
          --background: #1f2937;
          --hover-bg: #374151;
          --active-bg: #4b5563;
          --placeholder-color: #9ca3af;
        }
        .react-select__control:focus-within {
          box-shadow: 0 0 0 1px var(--green-500) !important;
        }
      `}</style>
    </div>
  );
}

export default ModelSelection;
