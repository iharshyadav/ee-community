import DashboardAvatars from "./dashboard-avatars";
import Datepicker from "@/components/datepicker";
import DashboardCard01 from "./dashboard-card-01";
import DashboardCard02 from "./dashboard-card-02";
import DashboardCard03 from "./dashboard-card-03";
import DashboardCard04 from "./dashboard-card-04";
import DashboardCard05 from "./dashboard-card-05";
import DashboardCard06 from "./dashboard-card-06";
import DashboardCard07 from "./dashboard-card-07";
import DashboardCard08 from "./dashboard-card-08";
import DashboardCard09 from "./dashboard-card-09";
import DashboardCard10 from "./dashboard-card-10";
import DashboardCard13 from "./dashboard-card-13";
import LocationDropdown from "@/components/location-filter";
import SectorDropdown from "@/components/sector-filter";
import { getCo2eEmissionsData } from "@/app/lib/data";

export default async function Dashboard() {
  const data = await getCo2eEmissionsData();
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Avatars */}
        <DashboardAvatars />
        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button */}

          <Datepicker align="right" />
          {/* Display total CO2e emissions */}
          <LocationDropdown />
          <SectorDropdown />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Line chart (Acme Plus) */}
        <DashboardCard01 initialData={data} />
        {/* Line chart (Acme Advanced) */}
        <DashboardCard02 initialData={data} />
        {/* Line chart (Acme Professional) */}
        <DashboardCard03 initialData={data} />
        {/* Bar chart (Direct vs Indirect) */}
        <DashboardCard04 initialData={data} />
        {/* Line chart (Real Time Value) */}
        <DashboardCard05 initialData={data}/>
        {/* Doughnut chart (Top Countries) */}
        <DashboardCard06 initialData={data} />
        {/* Table (Top Channels) */}
        <DashboardCard07 initialData={data} />
        {/* Line chart (Sales Over Time) */}
        <DashboardCard08 initialData={data} />
        {/* Stacked bar chart (Sales VS Refunds) */}
        <DashboardCard09 initialData={data}  />
        {/* Card (Recent Activity) */}
        <DashboardCard13 initialData={data} />
        {/* Card (Recent Activity) */}
        <DashboardCard09 initialData={data} />
        {/* Card (Recent Activity) */}
        <div className="col-span-full bg-transparent shadow-lg dark:bg-gray-800 overflow-x-auto">
          <DashboardCard10 />
        </div>
      </div>
    </div>
  );
}
