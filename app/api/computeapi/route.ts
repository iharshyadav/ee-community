// @ts-ignore
// import csvtojson from "csvtojson";
// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import { auth } from "@clerk/nextjs/server";
// import * as XLSX from "xlsx";
// // import { json } from "body-parser";

// const prisma = new PrismaClient();

// const requiredHeaders: { [key: string]: string[] } = {
//   cloud_cpu: [
//     "Name",
//     "sector",
//     "category",
//     "provider",
//     "year",
//     "cpu_load",
//     "region",
//     "duration",
//     "duration_unit",
//     "cpu_count",
//     "label",
//   ],
//   cloud_storage: [
//     "Name",
//     "sector",
//     "category",
//     "provider",
//     "year",
//     "region",
//     "duration",
//     "duration_unit",
//     "data",
//     "data_unit",
//     "storage_type",
//     "label",
//   ],
//   cloud_networking: [
//     "Name",
//     "sector",
//     "category",
//     "provider",
//     "year",
//     "region",
//     "data",
//     "data_unit",
//     "label",
//   ],
//   cloud_memory: [
//     "Name",
//     "sector",
//     "category",
//     "provider",
//     "year",
//     "region",
//     "data",
//     "data_unit",
//     "duration",
//     "duration_unit",
//     "label",
//   ],
//   // Add more sheet names and required headers here as needed
// };

// interface JsonRecord {
//   [key: string]: string;
// }
// // const LABEL = "default_label";
// const METHODOLOGY = "default_methodology";

// async function sendDataToAPI(
//   data: JsonRecord[],
//   metric: string,
//   provider: string
// ) {
//   // console.log(JSON.stringify(data),"efef");
//   const { userId } = auth();

//   console.log(userId);
//   const response = await fetch(
//     // `http://localhost:3000/api/compute/bulk/${provider}/${metric}`,
//     `https://app.earthemission.com/api/compute/bulk/${provider}/${metric}`,
//     {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   console.log(data);

//   const jsonResponse = await response.json();

//   console.log(jsonResponse, "ee");

//   if (!response.ok) {
//     const errorText = await response.text(); // Read response as text for debugging
//     console.error("API response error:", errorText);
//     throw new Error("Failed to fetch API data");
//   }
//   console.log("hello", JSON.stringify(data));

//   const flattenedData = jsonResponse.map((item: any) => {
//     const { activity_data, ...rest } = item;
//     return {
//       ...rest,
//       activity_data_value: activity_data.activity_value,
//       activity_data_unit: activity_data.activity_unit,
//     };
//   });

//   console.log(flattenedData);

//   // console.log("hitted")
//   // console.log(flattenedData)
//   try {
//     await prisma.co2e_emissions.createMany({
//       data: flattenedData.map((item: any) => ({
//         Name: item.Name,
//         sector: item.sector,
//         category: item.category,
//         methodology: METHODOLOGY,
//         year: parseInt(item.year),
//         region: item.region,
//         co2e_unit: item.co2e_unit,
//         co2e: parseFloat(item.co2e),
//         userId: userId, // You can set this dynamically if needed
//         Label: item.label,
//         requestbody: item,
//         responsebody: JSON.parse(
//           JSON.stringify({
//             responsebody: {
//               co2e: parseFloat(item.co2e),
//               co2e_unit: item.co2e_unit,
//             },
//             // activity_data: {
//             //   "activity_unit": item.activity_data.activity_unit,
//             //   "activity_value": item.activity_data.activity_value,
//             // },
//           })
//         ),
//       })),
//     });
//     // console.log("happend")
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { error: "Failed to save data to database" },
//       { status: 500 }
//     );
//   }
//   // console.log("Response data:", jsonResponse);
// }

// async function parseCSV(fileContent: string): Promise<JsonRecord[]> {
//   return csvtojson({
//     noheader: false,
//     trim: true,
//     output: "json",
//   }).fromString(fileContent);
// }

// async function parseXLSX(
//   fileBuffer: ArrayBuffer
// ): Promise<{ [key: string]: JsonRecord[] }> {
//   const workbook = XLSX.read(fileBuffer, { type: "buffer" });
//   const data: { [key: string]: JsonRecord[] } = {};

//   workbook.SheetNames.forEach((sheetName) => {
//     const sheet = workbook.Sheets[sheetName];
//     // console.log(sheet)
//     const json = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as Array<any[]>;
//     const headers = json[0] as string[];
//     const rows = json.slice(1);
//     data[sheetName] = rows.map((row) => {
//       const record: JsonRecord = {};
//       headers.forEach((header, index) => {
//         record[header] =
//           row[index] !== undefined && row[index] !== null
//             ? row[index].toString()
//             : "";
//       });
//       //  console.log(record)
//       return record;
//     });
//   });
//   //console.log(data)
//   return data;
// }

// function validateHeaders(headers: string[], sheetName: string): boolean {
//   const required = requiredHeaders[sheetName];
//   if (!required) return false;
//   return required.every((header) => headers.includes(header));
// }

// export async function POST(request: NextRequest) {
//   const data = await request.formData();
//   const file = data.get("file") as File;
//   if (!file) {
//     return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
//   }

//   const fileBuffer = await file.arrayBuffer();
//   const fileType = file.name.split(".").pop();

//   let parsedData: { [key: string]: JsonRecord[] } | JsonRecord[];

//   try {
//     if (fileType === "csv") {
//       const fileContent = Buffer.from(fileBuffer).toString("utf-8");
//       parsedData = await parseCSV(fileContent);
//     } else if (fileType === "xlsx") {
//       parsedData = await parseXLSX(fileBuffer);
//     } else {
//       return NextResponse.json(
//         { error: "Unsupported file type" },
//         { status: 400 }
//       );
//     }
//   } catch (error) {
//     console.error("Error parsing file:", error);
//     return NextResponse.json(
//       { error: "Failed to parse file" },
//       { status: 500 }
//     );
//   }

//   try {
//     if (fileType === "csv") {
//       const headers = Object.keys((parsedData as JsonRecord[])[0]);
//       if (!validateHeaders(headers, "default")) {
//         return NextResponse.json(
//           { error: "Invalid CSV headers" },
//           { status: 400 }
//         );
//       }
//       //   await prisma.order.createMany({ data: parsedData });
//     } else if (fileType === "xlsx") {
//       for (const [sheetName, records] of Object.entries(parsedData)) {
//         const headers = Object.keys(records[0]);
//         if (!validateHeaders(headers, sheetName)) {
//           return NextResponse.json(
//             { error: `Invalid headers in sheet: ${sheetName}` },
//             { status: 400 }
//           );
//         }

//         const categoryHeader = sheetName.split("_")[1];
//         console.log(categoryHeader);

//         const filterProvider = records.map((i: JsonRecord) => i.provider);
//         console.log(filterProvider);

//         const names = records.map((record: any) => record.Name);
//         console.log(names);

//         // const uniqueName = await prisma.co2e_emissions.findUnique({
//         //   where: {
//         //     Name: names,
//         //   },
//         // });

//         // console.log(uniqueName);

//         // if (uniqueName) {
//         //   console.log(uniqueName);
//         //   return NextResponse.json({
//         //     error: "Failed to add. Emission name already exists!!!",
//         //   });
//         // }

//         // console.log(records);
//         await sendDataToAPI(records, categoryHeader, filterProvider);
//         // await prisma[sheetName].createMany({ data: records });
//       }
//     }
//   } catch (error) {
//     console.error("Error saving data to database:", error);
//     return NextResponse.json(
//       { error: "Failed to save data to database" },
//       { status: 500 }
//     );
//   }

//   return NextResponse.json({
//     message: "File uploaded and data saved to database",
//   });
// }

import csvtojson from "csvtojson";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as XLSX from "xlsx";
import { json } from "body-parser";
import { addCo2eEmissions } from "@/app/lib/actions";

const prisma = new PrismaClient();

const requiredHeaders: { [key: string]: string[] } = {
  cloud_cpu: [
    "Name",
    "sector",
    "category",
    "provider",
    "year",
    "cpu_load",
    "region",
    "duration",
    "duration_unit",
    "cpu_count",
    "label",
  ],
  cloud_storage: [
    "Name",
    "sector",
    "category",
    "provider",
    "year",
    "region",
    "duration",
    "duration_unit",
    "data",
    "data_unit",
    "storage_type",
    "label",
  ],
  cloud_networking: [
    "Name",
    "sector",
    "category",
    "provider",
    "year",
    "region",
    "data",
    "data_unit",
    "label",
  ],
  cloud_memory: [
    "Name",
    "sector",
    "category",
    "provider",
    "year",
    "region",
    "data",
    "data_unit",
    "duration",
    "duration_unit",
    "label",
  ],
  sector_transport_road: [
    "Name",
    "sector",
    "category",
    "source_city",
    "source_country",
    "transport_mode",
    "vehicle_type",
    "destination_city",
    "destination_country",
    "weight",
    "weight_unit",
    "scope",
    "load_type",
    "fuel_source",
    "vehicle_weight",
    "intermediate_city",
    "intermediate_country",
  ],
  sector_transport_sea: [
    "Name",
    "sector",
    "category",
    "source_city",
    "transport_mode",
    "vessel_type",
    "destination_city",
    "weight",
    "weight_unit",
    "scope",
    "intermediate_locode",
  ],
  sector_transport_air: [
    "Name",
    "sector",
    "category",
    "source_iata",
    "transport_mode",
    "aircraft_type",
    "destination_iata",
    "methodology",
    "weight_unit",
    "scope",
    "intermediate_locode",
    "weight",
  ],
  sector_transport_rail: [
    "Name",
    "sector",
    "category",
    "source_city",
    "source_country",
    "transport_mode",
    "fuel_type",
    "destination_city",
    "destination_country",
    "weight",
    "weight_unit",
    "scope",
    "load_type",
    "vehicle_weight",
    "distance_km",
    "intermediate_city",
    "intermediate_country",
  ],
  // Add more sheet names and required headers here as needed
};

interface JsonRecord {
  [key: string]: string;
}
// const LABEL = "default_label";
const METHODOLOGY = "default_methodology";

async function sendDataToAPI(
  data: JsonRecord[],
  metric: string,
  provider: string | ""
) {
  // console.log(JSON.stringify(data),"efef");
  // console.log(data.map((i) => i.provider));
  // console.log(metric)
  if (provider == undefined) {
    const response = await fetch(
      `http://localhost:3000/api/compute/bulk/${provider}/${metric}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const jsonResponse = await response.json();

    console.log(jsonResponse, "ee");

    if (!response.ok) {
      const errorText = await response.text(); // Read response as text for debugging
      console.error("API response error:", errorText);
      throw new Error("Failed to fetch API data");
    }
    // console.log("hello",JSON.stringify(data))

    console.log("hitted");

    const flattenedData = jsonResponse.map((item: any) => {
      const { activity_data, ...rest } = item;
      return {
        ...rest,
        activity_data_value: activity_data.activity_value,
        activity_data_unit: activity_data.activity_unit,
      };
    });

    console.log(flattenedData);

    // console.log("hitted")
    // console.log(flattenedData)
    try {
      await prisma.co2e_emissions.createMany({
        data: flattenedData.map((item: any) => ({
          Name: item.Name,
          sector: item.sector,
          category: item.category,
          methodology: METHODOLOGY,
          year: parseInt(item.year),
          region: item.region,
          co2e_unit: item.co2e_unit,
          co2e: parseFloat(item.co2e),
          userId: "some_user_id", // You can set this dynamically if needed
          Label: item.label,
          requestbody: item,
          responsebody: JSON.parse(
            JSON.stringify({
              responsebody: {
                co2e: parseFloat(item.co2e),
                co2e_unit: item.co2e_unit,
              },
              // activity_data: {
              //   "activity_unit": item.activity_data.activity_unit,
              //   "activity_value": item.activity_data.activity_value,
              // },
            })
          ),
        })),
      });
      // console.log("happend")
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: "Failed to save data to database" },
        { status: 500 }
      );
    }
  } else {
    const response = await fetch(
      `http://localhost:3000/api/compute/bulkfrieght`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const jsonResponse = await response.json();

    console.log(jsonResponse, "ee");

    if (!response.ok) {
      const errorText = await response.text(); // Read response as text for debugging
      console.error("API response error:", errorText);
      throw new Error("Failed to fetch API data");
    }

    const frieghtData = jsonResponse.map((item: any) => {
      return {
        ...item,
      };
    });

    console.log(frieghtData);

    try {
      // await prisma.road_freight.createMany({
      //   data: frieghtData.map((item: any) => ({
      //     name: item.Name,
      //     sector: item.sector,
      //     category: item.category,
      //     methodology: METHODOLOGY,
      //     co2e_unit: item.co2e_unit,
      //     co2e: parseFloat(item.co2e),
      //     userId: "some_user_id",
      //     scope: item.scope,
      //     requestbody: item,
      //     weight: item.weight,
      //     weight_unit: item.weight_unit,
      //     source_city: item.source_city,
      //     source_country: item.source_country,
      //     transport_mode: item.transport_mode,
      //     vehicle_type: item.vehicle_type,
      //     destination_city: item.destination_city,
      //     destination_country: item.destination_country,
      //     responsebody: JSON.parse(
      //       JSON.stringify({
      //         responsebody: {
      //           co2e: parseFloat(item.co2e),
      //           co2e_unit: item.co2e_unit,
      //         },
      //       })
      //     ),
      //     year : item.year
      //   })),
      // });

      // await prisma.road_frieght_intermediate_locations.createMany({
      //   data : frieghtData.map((item:any) => ({
      //     road_freight_name : item.Name,
      //     intermediate_city : item.intermediate_city,
      //     intermediate_country : item.intermediate_country
      //   }))
      // })

      console.log(frieghtData);
      // if(frieghtData){
      //   return;
      // }

      for (const item of frieghtData) {
        console.log(item);
        await addCo2eEmissions({
          Name: item.Name,
          sector: item.sector,
          category: item.category,
          year: item.year,
          region: item.region,
          co2e_unit: item.co2e_unit,
          co2e: parseFloat(item.co2e),
          requestbody: item,
          responsebody: JSON.parse(
            JSON.stringify({
              responsebody: {
                co2e: parseFloat(item.co2e),
                co2e_unit: item.co2e_unit,
              },
            })
          ),
          Scope: item.scope,
        }).then((clg) => {
          console.log(clg);
        });
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: "Failed to save data to database" },
        { status: 500 }
      );
    }
    2;
  }
}

function parseIntermediateFields(record: JsonRecord): JsonRecord {
  console.log(record);
  if (record.intermediate_city) {
    record.intermediate_city = record.intermediate_city
      .split(",")
      .map((city) => city.trim())
      .join(",");
  }
  if (record.intermediate_country) {
    record.intermediate_country = record.intermediate_country
      .split(",")
      .map((country) => country.trim())
      .join(",");
  }
  if (record.load_type) {
    record.load_type = record.load_type
      .split(",")
      .map((type) => type.trim())
      .join(",");
  }
  if (record.fuel_source) {
    record.fuel_source = record.fuel_source
      .split(",")
      .map((fuel) => fuel.trim())
      .join(",");
  }
  if (record.vehicle_type) {
    record.vehicle_type = record.vehicle_type
      .split(",")
      .map((type) => type.trim())
      .join(",");
  }
  if (record.vehicle_weight) {
    record.vehicle_weight = record.vehicle_weight
      .split(",")
      .map((weight) => weight.trim())
      .join(",");
  }
  if (record.intermediate_locode) {
    record.intermediate_locode = record.intermediate_locode
      .split(",")
      .map((locode) => locode.trim())
      .join(",");
  }
  if (record.fuel_type) {
    record.fuel_type = record.fuel_type
      .split(",")
      .map((locode) => locode.trim())
      .join(",");
  }
  if (record.transport_mode) {
    record.transport_mode = record.transport_mode
      .split(",")
      .map((locode) => locode.trim())
      .join(",");
  }
  return record;
}

async function parseCSV(fileContent: string): Promise<JsonRecord[]> {
  const parsedData = await csvtojson({
    noheader: false,
    trim: true,
    output: "json",
  }).fromString(fileContent);
  return parsedData.map(parseIntermediateFields);
}

async function parseXLSX(
  fileBuffer: ArrayBuffer
): Promise<{ [key: string]: JsonRecord[] }> {
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });
  const data: { [key: string]: JsonRecord[] } = {};

  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    // console.log(sheet)
    const json = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as Array<any[]>;
    const headers = json[0] as string[];
    const rows = json.slice(1);
    data[sheetName] = rows.map((row) => {
      const record: JsonRecord = {};
      headers.forEach((header, index) => {
        record[header] =
          row[index] !== undefined && row[index] !== null
            ? row[index].toString()
            : "";
      });
      console.log(record);
      return parseIntermediateFields(record);
    });
  });
  //console.log(data)
  return data;
}

function validateHeaders(headers: string[], sheetName: string): boolean {
  const required = requiredHeaders[sheetName];
  console.log(required.filter((item) => item[1] == "sector"));
  if (!required) return false;
  return required.every((header) => headers.includes(header));
}

export async function POST(request: NextRequest) {
  const data = await request.formData();
  console.log(data);
  const file = data.get("file") as File;
  if (!file) {
    return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
  }

  const fileBuffer = await file.arrayBuffer();
  const fileType = file.name.split(".").pop();

  // console.log("fileType")

  let parsedData: { [key: string]: JsonRecord[] } | JsonRecord[];

  try {
    if (fileType === "csv") {
      const fileContent = Buffer.from(fileBuffer).toString("utf-8");
      parsedData = await parseCSV(fileContent);
    } else if (fileType === "xlsx") {
      parsedData = await parseXLSX(fileBuffer);
    } else {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error parsing file:", error);
    return NextResponse.json(
      { error: "Failed to parse file" },
      { status: 500 }
    );
  }

  try {
    if (fileType === "csv") {
      const headers = Object.keys((parsedData as JsonRecord[])[0]);
      if (!validateHeaders(headers, "default")) {
        return NextResponse.json(
          { error: "Invalid CSV headers" },
          { status: 400 }
        );
      }
      //   await prisma.order.createMany({ data: parsedData });
    } else if (fileType === "xlsx") {
      for (const [sheetName, records] of Object.entries(parsedData)) {
        const headers = Object.keys(records[0]);
        console.log(sheetName);
        if (
          !validateHeaders(headers, sheetName) &&
          sheetName !== "sector_transport_road" &&
          sheetName !== "sector_transport_sea" &&
          sheetName !== "sector_transport_air" &&
          sheetName !== "sector_transport_rail"
        ) {
          return NextResponse.json(
            { error: `Invalid headers in sheet: ${sheetName}` },
            { status: 400 }
          );
        }
        // const headersq = Object.keys(records[1]);
        // console.log(headersq)
        const categoryHeader = sheetName.split("_")[1];
        console.log(categoryHeader);

        console.log(records);

        const filterProvider = records.map((i: JsonRecord) => i.provider);
        console.log(filterProvider);
        const names = records.map((record: any) => record.Name);
        console.log(names);

        //  const uniqueName = await checkUniqueName(names)

        //   if(uniqueName){
        //     return NextResponse.json ({
        //       error : "Failed to add. Emission name already exists!!!"
        //     })
        //   }

        console.log(records, categoryHeader, filterProvider);
        await sendDataToAPI(records, categoryHeader, filterProvider);
        // await prisma[sheetName].createMany({ data: records });
      }
    }
  } catch (error) {
    console.error("Error saving data to database:", error);
    return NextResponse.json(
      { error: "Failed to save data to database" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "File uploaded and data saved to database",
  });
}
