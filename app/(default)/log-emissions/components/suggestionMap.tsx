"use client";
import React, { FC, useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { icon } from "leaflet";
import { COORDINATES, CPU_PROVIDERS_REGION } from "@/app/lib/coordinates";
import { co2Emission } from "../log-emissions-table";
import { fetchData } from "@/app/lib/actions";
import { exportAllRegionData } from "@/app/lib/data";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const customGreenIcon = new L.Icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/011/349/258/non_2x/blank-board-icon-png.png",
  iconSize: [20, 20],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const customLightGreenIcon = new L.Icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/050/738/732/non_2x/a-green-christmas-ball-with-a-snowflake-png.png",
  iconSize: [20, 20],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const customDarkGreenIcon = new L.Icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/050/738/732/non_2x/a-green-christmas-ball-with-a-snowflake-png.png",
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const customBlueIcon = new L.Icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/021/815/780/non_2x/transparent-circle-icon-background-png.png",
  iconSize: [20, 20],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const customLightRedIcon = new L.Icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/028/084/252/non_2x/red-circle-of-japan-flag-illustration-png.png",
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const customRedIcon = new L.Icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/014/615/035/non_2x/red-basic-shape-for-new-product-stickers-special-offer-label-png.png",
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const icons = [
  customGreenIcon,
  // customLightGreenIcon,
  customDarkGreenIcon,
  customLightRedIcon,
  customRedIcon,
];

interface AsiaMapProps {
  suggestions: string;
  calculateIntensity: (
    value: number,
    greenLocations: number,
    redLocation: number
  ) => void;
  differentCo2eValue: any;
}

const AsiaMap: FC<AsiaMapProps> = ({
  suggestions,
  calculateIntensity,
  differentCo2eValue,
}) => {
  const [location, setlocation] = useState("");
  const [coordinates, setCoordinates] = useState<
    { region: string; latitude: number | null; longitude: number | null }[]
  >([{ region: "", latitude: null, longitude: null }]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [allRegions, setallRegions] = useState<
    { region: string; co2e: number | null }[]
  >([{ region: "", co2e: null }]);
  const [filterLocations, setfilterLocations] = useState<
    {
      greenLocation: {
        latitude: number | null;
        longitude: number | null;
        region: string;
        co2e: number | null;
      };
      redLocation: {
        latitude: number | null;
        longitude: number | null;
        region: string;
        co2e: number | null;
      };
    }[]
  >([
    {
      greenLocation: {
        latitude: null,
        longitude: null,
        region: "",
        co2e: null,
      },
      redLocation: { latitude: null, longitude: null, region: "", co2e: null },
    },
  ]);
  const [co2eValue, setco2eValue] = useState<number | null>(null);
  const [differentValueMap, setDifferentValueMap] = useState<
    { start: null | number; end: null | number; icon: any }[]
  >([
    {
      start: null,
      end: null,
      icon: "",
    },
  ]);

  // useEffect(() => {
  //   console.log(differentValueMap)
  // },[differentValueMap])

  const loadDataFromLocalStorage = () => {
    const localData = localStorage.getItem("filterLocations");
    console.log("Loaded from localStorage:", localData);
    if (localData) {
      try {
        const parsedData = JSON.parse(localData);
        const matchedData = parsedData.find(
          (item: { name: string; data: any }) => item.name === suggestions
        );
        if (matchedData) {
          setco2eValue(matchedData.originalCo2eValue);
          setfilterLocations(matchedData.data);

          let totalSum = 0;

          if (
            filterLocations &&
            filterLocations.map((item: any) => {
              if (item.greenLocation.co2e) {
                totalSum += item.greenLocation.co2e;
              } else if (item.redLocation.co2e) {
                totalSum += item.redLocation.co2e;
              }
            })
          ) {
            console.log(totalSum);
            const range = (totalSum / 4).toFixed(2);

            const sections = [];
            for (let i = 0; i < 4; i++) {
              sections.push({
                start: i * Number(range),
                end: (i + 1) * Number(range),
                icon: icons[i],
              });
            }

            console.log(sections);
            setDifferentValueMap(sections);
            differentCo2eValue(sections);
          }

          const handleIntensity = () => {
            console.log("first");
            calculateIntensity(
              filterLocations.length as number,
              filterLocations.filter((item) => item.greenLocation.co2e !== null)
                .length,
              filterLocations.filter((item) => item.redLocation.co2e !== null)
                .length
            );
          };
          handleIntensity();
          console.log(filterLocations);
          return true;
        }
      } catch (error) {
        console.error("Failed to parse localStorage data:", error);
      }
    }
    return false;
  };

  const saveDataToLocalStorage = (data: any, co2eValue: number | null) => {
    try {
      if (data.length === 0) return;
      const localData = localStorage.getItem("filterLocations");
      const parsedData = localData ? JSON.parse(localData) : [];
      const updatedData = parsedData.filter(
        (item: any) => item.data.length > 0
      );
      updatedData.push({
        name: suggestions,
        data,
        originalCo2eValue: co2eValue,
      });
      localStorage.setItem("filterLocations", JSON.stringify(updatedData));
      console.log("Saved to localStorage:", updatedData); // Debugging line
    } catch (error) {
      console.error("Failed to save data to localStorage:", error);
    }
  };

  useEffect(() => {
    const fetchAllRegion = async (suggestions: string) => {
      if (!loadDataFromLocalStorage()) {
        const value = await exportAllRegionData(suggestions);
        if (value) {
          setallRegions(value);
        }
      }
    };
    fetchAllRegion(suggestions);
  }, []);

  useEffect(() => {
    const data = async () => {
      const res = await fetchData(suggestions);
      setlocation(res.region);
    };
    data();
  }, []);

  useEffect(() => {
    const filterRegion = COORDINATES.filter(
      (coordinates) =>
        location?.toLowerCase() === coordinates.region.toLowerCase()
    );
    setLatitude(Number(filterRegion[0]?.latitude) || null);
    setLongitude(Number(filterRegion[0]?.longitude) || null);

    const findLatitudeAndLongitude = COORDINATES.filter((item) => {
      return allRegions.some(
        (i) => i.region.toLowerCase() === item.region.toLowerCase()
      );
    });
    setCoordinates(findLatitudeAndLongitude);

    const filtername = coordinates.filter(
      (coordinates) =>
        location?.toLowerCase() === coordinates.region.toLowerCase()
    );

    const filterRedAndGreenLocations = allRegions.filter((item) => {
      return filtername[0]?.region === item.region;
    })[0]?.co2e;

    setco2eValue(filterRedAndGreenLocations);

    const getLatitudeFromRegion = (region: string) => {
      const regionData = findLatitudeAndLongitude.find(
        (item) => item.region === region
      );
      return regionData ? regionData.latitude : null;
    };

    const getLongitudeFromRegion = (region: string) => {
      const regionData = findLatitudeAndLongitude.find(
        (item) => item.region === region
      );
      return regionData ? regionData.longitude : null;
    };

    if (!loadDataFromLocalStorage()) {
      const newFilterLocations = allRegions
        .map((item) => {
          if (
            item.co2e &&
            filterRedAndGreenLocations &&
            item.co2e < filterRedAndGreenLocations
          ) {
            return {
              greenLocation: {
                latitude: getLatitudeFromRegion(item.region),
                longitude: getLongitudeFromRegion(item.region),
                region: item.region,
                co2e: item.co2e,
              },
              redLocation: {
                latitude: null,
                longitude: null,
                region: "",
                co2e: null,
              },
            };
          } else if (
            item.co2e &&
            filterRedAndGreenLocations &&
            item.co2e > filterRedAndGreenLocations
          ) {
            return {
              greenLocation: {
                latitude: null,
                longitude: null,
                region: "",
                co2e: null,
              },
              redLocation: {
                latitude: getLatitudeFromRegion(item.region),
                longitude: getLongitudeFromRegion(item.region),
                region: item.region,
                co2e: item.co2e,
              },
            };
          }
          return null;
        })
        .filter(Boolean);

      setfilterLocations(newFilterLocations as any);

      let totalSum = 0;

      if (
        filterLocations &&
        filterLocations.map((item: any) => {
          if (item.greenLocation.co2e) {
            totalSum += item.greenLocation.co2e;
          } else if (item.redLocation.co2e) {
            totalSum += item.redLocation.co2e;
          }
        })
      ) {
        console.log(totalSum);
        const range = (totalSum / 4).toFixed(2);

        const sections = [];
        for (let i = 0; i < 4; i++) {
          sections.push({
            start: i * Number(range),
            end: (i + 1) * Number(range),
            icon: icons[i],
          });
        }

        console.log(sections);
        setDifferentValueMap(sections);
        differentCo2eValue(sections);
      }

      // calculateIntensity(filterRedAndGreenLocations);
      if (co2eValue && newFilterLocations.length > 0) {
        const handleIntensity = () => {
          console.log("first");
          // @ts-ignore
          calculateIntensity(
            newFilterLocations.length as number,
            newFilterLocations.filter(
              (item: any) => item.greenLocation.co2e !== null
            ).length,
            newFilterLocations.filter(
              (item: any) => item.redLocation.co2e !== null
            ).length
          );
        };
        handleIntensity();
        saveDataToLocalStorage(newFilterLocations, co2eValue);
      }
    }
  }, [location, allRegions, co2eValue]);

  const getIconForCo2e = useCallback(
    (co2e: number | null) => {
      console.log(co2eValue);
      console.log(differentValueMap[0].icon);
      if (differentValueMap.length === 4) {
        if (co2e && co2eValue && co2e < co2eValue) {
          return icons[0];
        }

        if (co2e === co2eValue) {
          return icons[1];
        }

        if (co2e && co2eValue && co2e > (co2eValue + co2e) / 2) {
          //   const matchedRange = differentValueMap.find(
          //     (range) => range.start !== null && range.end !== null && co2e >= range.start && co2e < range.end
          //   );
          //  console.log(matchedRange?.icon)
          return icons[3];
        }

        if (co2e && co2eValue && co2e < (co2eValue + co2e) / 2) {
          return icons[2];
        }
      }
    },
    [differentValueMap, co2eValue]
  );

  if (latitude === 0 || longitude === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: "500px", width: "100%", overflow: "hidden" }}>
      {latitude !== null && longitude !== null ? (
        <MapContainer
          dragging
          zoomAnimation
          center={[latitude, longitude]}
          zoom={2}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
          className="z-10"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">EarthEmission</a>'
          />
          <Marker position={[latitude, longitude]} icon={customBlueIcon}>
            <Tooltip permanent>
              {location && co2eValue && (
                <>
                  <span className="font-semibold ml-2">{location}</span>
                  <br />
                  <span className="ml-2">Co2e : {co2eValue}</span>
                </>
              )}
            </Tooltip>
          </Marker>
          {filterLocations
            ? filterLocations.map((item, index) => {
                const greenPercentageDifference =
                  co2eValue && item.greenLocation.co2e !== null
                    ? ((co2eValue - item.greenLocation.co2e) / co2eValue) * 100
                    : 0;
                const redPercentageDifference = co2eValue
                  ? item.redLocation.co2e !== null
                    ? ((item.redLocation.co2e - co2eValue) / co2eValue) * 100
                    : 0
                  : 0;

                return (
                  <React.Fragment key={index}>
                    {item.greenLocation.latitude != null &&
                      item.greenLocation.longitude != null &&
                      item.greenLocation.co2e &&
                      differentValueMap.length > 0 &&
                      item.redLocation.co2e === null && (
                        <Marker
                          position={[
                            item.greenLocation.latitude,
                            item.greenLocation.longitude,
                          ]}
                          icon={getIconForCo2e(item.greenLocation.co2e)}
                        >
                          <Popup>
                            <span className="text-green-600 font-semibold ">
                              {item.greenLocation.region}
                            </span>
                            <br />
                            <span className="text-green-600">
                              Co2e : {item.greenLocation.co2e}
                            </span>
                            <br />
                          </Popup>
                          <Tooltip
                            permanent
                            className="bg-white rounded-lg shadow-md"
                          >
                            <span className="text-green-600 ml-2">
                              {greenPercentageDifference.toFixed(2)}%
                            </span>
                          </Tooltip>
                        </Marker>
                      )}
                    {item.redLocation.latitude != null &&
                      item.redLocation.longitude != null &&
                      item.redLocation.co2e &&
                      differentValueMap.length > 0 &&
                      item.greenLocation.co2e === null && (
                        <Marker
                          position={[
                            item.redLocation.latitude,
                            item.redLocation.longitude,
                          ]}
                          icon={getIconForCo2e(item.redLocation.co2e)}
                        >
                          <Popup>
                            <span className="text-red-600 font-semibold">
                              {item.redLocation.region}
                            </span>
                            <br />
                            <span className="text-red-600">
                              Co2e : {item.redLocation.co2e}
                            </span>
                            <br />
                          </Popup>
                          <Tooltip
                            permanent
                            className="bg-white rounded-lg shadow-md"
                          >
                            <span className="text-red-600 ml-2">
                              {redPercentageDifference.toFixed(2)}%
                            </span>
                          </Tooltip>
                        </Marker>
                      )}
                  </React.Fragment>
                );
              })
            : null}
        </MapContainer>
      ) : (
        <div className="flex flex-col justify-center items-center h-full w-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-lg font-semibold">Loading map...</p>
        </div>
      )}
    </div>
  );
};

export default AsiaMap;
