export const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Data", path: "/data" },
  { name: "Resources", path: "https://beta.api.earthemission.com/redoc" },
  { name: "Contact", path: "http://localhost:3000/#contact us" },
];

export const cloud_providers = [
  { label: "Azure", value: "azure", description: "azure" },
  { label: "AWS", value: "aws", description: "aws" },
  { label: "GCP", value: "gcp", description: "gcp" },
];

export const Scopes = [
  { label: "Scope-1", value: "Scope-1", description: "Scope-1" },
  { label: "Scope-2", value: "Scope-2", description: "Scope-2" },
  { label: "Scope-3", value: "Scope-3", description: "Scope-3" },
];

export const data_units = [
  { label: "GB", value: "GB", description: "GB" },
  { label: "KB", value: "KB", description: "KB" },
  { label: "MB", value: "MB", description: "MB" },
  { label: "PB", value: "PB", description: "PB" },
  { label: "TB", value: "TB", description: "TB" },
];

export const cloud_storage_type = [
  { label: "hdd", value: "hdd", description: "hdd" },
  { label: "ssd", value: "ssd", description: "ssd" },
];

export const cloud_cpu_duration_unit = [
  { label: "min", value: "min", description: "min" },
  { label: "hour", value: "hour", description: "hour" },
];

export const cloud_cpu_year = [
  { label: "2021", value: "2021", description: "2021" },
  { label: "2022", value: "2022", description: "2022" },
];

export const cloud_memory_year = [
  { label: "2021", value: "2021", description: "2021" },
  { label: "2022", value: "2022", description: "2022" },
];
export const cloud_cpu_load = [
  { label: "25 %", value: "0.25", description: "25%" },
  { label: "50 %", value: "0.50", description: "50%" },
  { label: "75 %", value: "0.75", description: "75%" },
  { label: "100 %", value: "1", description: "100%" },
];

export const sectors = [
  {
    label: "Water",
    value: "water",
    description: "Essential for life and various industrial processes",
  },
  {
    label: "Waste",
    value: "waste",
    description:
      "Refuse and discarded materials, often requiring management and disposal",
  },
  {
    label: "Transport",
    value: "transport",
    description: "Movement of people and goods from one place to another",
  },
  {
    label: "Restaurants and Accommodation",
    value: "restaurants_accommodation",
    description: "Services related to dining and lodging for travelers",
  },
  {
    label: "Refrigerants and Fugitive Gases",
    value: "refrigerants_fugitive_gases",
    description:
      "Chemicals used in cooling systems and emissions from various sources",
  },
  {
    label: "Organizational Activities",
    value: "organizational_activities",
    description:
      "Actions and operations conducted within an organization or institution",
  },
  {
    label: "Materials and Manufacturing",
    value: "materials_manufacturing",
    description: "Processes related to the production of goods and materials",
  },
  {
    label: "Insurance and Financial Services",
    value: "insurance_financial_services",
    description: "Services providing financial protection and assistance",
  },
  {
    label: "Information and Communication",
    value: "information_communication",
    description: "Transmission and exchange of data and messages",
  },
  {
    label: "Health and Social Care",
    value: "health_social_care",
    description: "Services related to medical treatment and social assistance",
  },
  {
    label: "Equipment",
    value: "equipment",
    description: "Tools and machinery used for various purposes",
  },
  {
    label: "Energy",
    value: "energy",
    description:
      "Power derived from various sources for use in different applications",
  },
  {
    label: "Education",
    value: "education",
    description: "Process of acquiring knowledge, skills, and values",
  },
  {
    label: "Consumer Goods and Services",
    value: "consumer_goods_services",
    description:
      "Products and services intended for personal use or consumption",
  },
  {
    label: "Buildings and Infrastructure",
    value: "buildings_infrastructure",
    description:
      "Structures and systems that support human activities and communities",
  },
  {
    label: "Agriculture/Hunting/Forestry/Fishing",
    value: "agriculture_hunting_forestry_fishing",
    description:
      "Activities related to food production, resource extraction, and land management",
  },
];

export const categories = [
  {
    label: "Wholesale Trade",
    value: "wholesale_trade",
    description:
      "Buying and selling goods in large quantities to retailers or other businesses",
  },
  {
    label: "Water Treatment",
    value: "water_treatment",
    description: "Processes to purify water for various uses",
  },
  {
    label: "Water Supply",
    value: "water_supply",
    description:
      "Distribution of treated water for domestic, industrial, or commercial purposes",
  },
  {
    label: "Waste Management",
    value: "waste_management",
    description:
      "Handling, collection, transport, and disposal of waste materials",
  },
  {
    label: "Vehicles",
    value: "vehicles",
    description:
      "Various types of transportation means powered by engines or motors",
  },
  {
    label: "Vehicle Parts",
    value: "vehicle_parts",
    description:
      "Components and accessories used in the assembly or maintenance of vehicles",
  },
  {
    label: "Vehicle Maintenance and Services",
    value: "vehicle_maintenance_services",
    description: "Repair, upkeep, and related services for vehicles",
  },
  {
    label: "Utilities",
    value: "utilities",
    description:
      "Services providing essential public goods such as electricity, gas, and water",
  },
  {
    label: "Transport Services and Warehousing",
    value: "transport_services_warehousing",
    description: "Services related to transportation and storage of goods",
  },
  {
    label: "Timber and Forestry Products",
    value: "timber_forestry_products",
    description:
      "Wood and related products obtained from forests or tree farming",
  },
  {
    label: "Tickets and Passes",
    value: "tickets_passes",
    description:
      "Documentary evidence of entitlement to travel or attend events",
  },
  {
    label: "Textiles",
    value: "textiles",
    description: "Materials and products made from fibers or yarns",
  },
  {
    label: "Social Care",
    value: "social_care",
    description:
      "Services aimed at supporting individuals or groups with social needs or disabilities",
  },
  {
    label: "Sea Travel",
    value: "sea_travel",
    description: "Journeys undertaken over water, typically by boat or ship",
  },
  {
    label: "Sea Freight",
    value: "sea_freight",
    description: "Transportation of goods by sea in cargo ships or vessels",
  },
  {
    label: "Road Travel",
    value: "road_travel",
    description: "Travel by land using roads or highways, often by vehicles",
  },
  {
    label: "Road Freight",
    value: "road_freight",
    description:
      "Transportation of goods by road using trucks or other vehicles",
  },
  {
    label: "Restaurants and Accommodation",
    value: "restaurants_accommodation",
    description: "Services providing food and lodging for travelers or diners",
  },
  {
    label: "Refrigerants and Fugitive Gases",
    value: "refrigerants_fugitive_gases",
    description:
      "Chemicals used in cooling systems and emissions from various sources",
  },
  {
    label: "Recreation and Culture",
    value: "recreation_culture",
    description:
      "Activities and experiences related to leisure and artistic expression",
  },
  {
    label: "Real Estate",
    value: "real_estate",
    description:
      "Property consisting of land and buildings, bought and sold for residential or commercial purposes",
  },
  {
    label: "Rail Travel",
    value: "rail_travel",
    description: "Journeys made by train or rail transportation systems",
  },
  {
    label: "Rail Freight",
    value: "rail_freight",
    description: "Transportation of goods by train or rail cargo services",
  },
  {
    label: "Professional Services and Activities",
    value: "professional_services_activities",
    description:
      "Specialized services provided by trained professionals in various fields",
  },
  {
    label: "Plastics and Rubber Products",
    value: "plastics_rubber_products",
    description:
      "Goods made from synthetic polymers or natural rubber materials",
  },
  {
    label: "Plastic Waste",
    value: "plastic_waste",
    description:
      "Discarded plastic materials requiring management and disposal",
  },
  {
    label: "Personal Care and Accessories",
    value: "personal_care_accessories",
    description:
      "Products and services related to hygiene, grooming, and personal appearance",
  },
  {
    label: "Pavement and Surfacing",
    value: "pavement_surfacing",
    description:
      "Construction and maintenance of roads, paths, and outdoor surfaces",
  },
  {
    label: "Paper Products",
    value: "paper_products",
    description: "Items made from paper or cardboard materials",
  },
  {
    label: "Paper and Cardboard Waste",
    value: "paper_cardboard_waste",
    description:
      "Disposed paper and cardboard materials requiring management and recycling",
  },
  {
    label: "Paper and Cardboard",
    value: "paper_cardboard",
    description: "Raw materials and products derived from paper or cardboard",
  },
  {
    label: "Other Materials",
    value: "other_materials",
    description: "Various materials not classified under specific categories",
  },
  {
    label: "Organizational Activities",
    value: "organizational_activities",
    description:
      "Actions and operations conducted within an organization or institution",
  },
  {
    label: "Organic Products",
    value: "organic_products",
    description:
      "Goods produced using organic farming methods or natural ingredients",
  },
  {
    label: "Operational Activities",
    value: "operational_activities",
    description:
      "Tasks and processes essential for the functioning of an organization or system",
  },
  {
    label: "Office Equipment",
    value: "office_equipment",
    description: "Tools, devices, and machines used in office settings",
  },
  {
    label: "Non-profit Activities",
    value: "non_profit_activities",
    description:
      "Services and initiatives undertaken by organizations for charitable or social purposes",
  },
  {
    label: "Mining",
    value: "mining",
    description:
      "Extraction of valuable minerals or other geological materials from the earth",
  },
  {
    label: "Mined Materials",
    value: "mined_materials",
    description: "Resources obtained through mining processes",
  },
  {
    label: "Metals",
    value: "metals",
    description:
      "Elements or alloys with metallic properties, often used in manufacturing",
  },
  {
    label: "Metal Waste",
    value: "metal_waste",
    description:
      "Scrap or discarded metal materials requiring management and recycling",
  },
  {
    label: "Manufacturing",
    value: "manufacturing",
    description: "Production of goods in factories or industrial settings",
  },
  {
    label: "Maintenance and Repair",
    value: "maintenance_repair",
    description:
      "Services related to the upkeep and fixing of equipment, structures, or systems",
  },
  {
    label: "Machinery",
    value: "machinery",
    description:
      "Mechanical devices or equipment used in various industries or applications",
  },
  {
    label: "Livestock Farming",
    value: "livestock_farming",
    description:
      "Raising animals for food, fiber, or other agricultural purposes",
  },
  {
    label: "Insurance Services",
    value: "insurance_services",
    description:
      "Products and services providing financial protection against risks",
  },
  {
    label: "Infrastructure",
    value: "infrastructure",
    description:
      "Basic physical and organizational structures and facilities needed for society to function",
  },
  {
    label: "Information and Communication Services",
    value: "information_communication_services",
    description:
      "Services related to the transmission and processing of information",
  },
  {
    label: "Housing",
    value: "housing",
    description: "Shelter or accommodation for individuals or families",
  },
  {
    label: "Homeworking",
    value: "homeworking",
    description:
      "Work carried out from a person's home, often facilitated by technology",
  },
  {
    label: "Heat and Steam",
    value: "heat_steam",
    description:
      "Thermal energy used for heating, industrial processes, or power generation",
  },
  {
    label: "Health Care",
    value: "health_care",
    description:
      "Services related to medical treatment, prevention, and healthcare management",
  },
  {
    label: "Health and Social Care",
    value: "health_social_care",
    description: "Services related to medical treatment and social assistance",
  },
  {
    label: "Government Activities",
    value: "government_activities",
    description: "Functions and services provided by governmental institutions",
  },
  {
    label: "Glass Waste",
    value: "glass_waste",
    description: "Discarded glass materials requiring management and recycling",
  },
  {
    label: "Glass Products",
    value: "glass_products",
    description:
      "Items made from glass materials, often for commercial or industrial use",
  },
  {
    label: "Glass and Glass Products",
    value: "glass_glass_products",
    description:
      "Items made from glass materials, often for commercial or industrial use",
  },
  {
    label: "General Waste",
    value: "general_waste",
    description:
      "Various types of waste materials not classified under specific categories",
  },
  {
    label: "General Retail",
    value: "general_retail",
    description:
      "Sale of consumer goods to the general public through retail outlets",
  },
  {
    label: "Furnishings and Household",
    value: "furnishings_household",
    description:
      "Items and goods used to decorate or furnish homes and living spaces",
  },
  {
    label: "Fuel",
    value: "fuel",
    description:
      "Substances used to produce energy through combustion or other processes",
  },
  {
    label: "Food/Beverages/Tobacco",
    value: "food_beverages_tobacco",
    description:
      "Items related to the production, distribution, and consumption of food, beverages, and tobacco products",
  },
  {
    label: "Food and Organic Waste",
    value: "food_organic_waste",
    description:
      "Discarded food and organic materials requiring management and recycling",
  },
  {
    label: "Food and Beverage Services",
    value: "food_beverage_services",
    description:
      "Catering and dining services providing food and beverages to customers",
  },
  {
    label: "Fishing/Aquaculture/Hunting",
    value: "fishing_aquaculture_hunting",
    description:
      "Activities related to capturing or cultivating aquatic organisms for food or other purposes",
  },
  {
    label: "Financial Services",
    value: "financial_services",
    description:
      "Services related to banking, investment, and monetary transactions",
  },
  {
    label: "Facility",
    value: "facility",
    description:
      "Buildings or structures designed for a specific purpose or function",
  },
  {
    label: "Fabricated Metal Products",
    value: "fabricated_metal_products",
    description:
      "Items made from metal materials through fabrication processes",
  },
  {
    label: "Equipment Repair",
    value: "equipment_repair",
    description:
      "Services for fixing and restoring various types of equipment and machinery",
  },
  {
    label: "Equipment Rental",
    value: "equipment_rental",
    description: "Temporary use of equipment or machinery for a fee",
  },
  {
    label: "Energy Services",
    value: "energy_services",
    description:
      "Services related to the production, distribution, and management of energy resources",
  },
  {
    label: "Electronics",
    value: "electronics",
    description:
      "Devices and systems using electronic components for various purposes",
  },
  {
    label: "Electricity",
    value: "electricity",
    description: "Form of energy derived from the flow of electrical charge",
  },
  {
    label: "Electrical Waste",
    value: "electrical_waste",
    description:
      "Discarded electrical or electronic devices requiring management and recycling",
  },
  {
    label: "Electrical Equipment",
    value: "electrical_equipment",
    description: "Devices and appliances powered by electricity",
  },
  {
    label: "Education",
    value: "education",
    description: "Process of acquiring knowledge, skills, and values",
  },
  {
    label: "Domestic Services",
    value: "domestic_services",
    description:
      "Services related to household chores, maintenance, and assistance",
  },
  {
    label: "DIY and Gardening Equipment",
    value: "diy_gardening_equipment",
    description:
      "Tools and machinery used for do-it-yourself projects and gardening activities",
  },
  {
    label: "Consumer Goods Rental",
    value: "consumer_goods_rental",
    description: "Temporary use of consumer products or goods for a fee",
  },
  {
    label: "Construction Waste",
    value: "construction_waste",
    description:
      "Discarded materials from construction and demolition activities requiring management and recycling",
  },
  {
    label: "Construction",
    value: "construction",
    description:
      "Process of building or erecting structures and infrastructure",
  },
  {
    label: "Cloud Computing - Storage",
    value: "cloud_computing_storage",
    description:
      "Remote storage services provided over the internet for data and files",
  },
  {
    label: "Cloud Computing - Networking",
    value: "cloud_computing_networking",
    description:
      "Networking services and infrastructure provided through cloud computing technology",
  },
  {
    label: "Cloud Computing - Memory",
    value: "cloud_computing_memory",
    description:
      "Memory resources and services provided through cloud computing technology",
  },
  {
    label: "Cloud Computing - CPU",
    value: "cloud_computing_cpu",
    description:
      "Central processing unit resources and services provided through cloud computing technology",
  },
  {
    label: "Clothing and Footwear",
    value: "clothing_footwear",
    description: "Apparel and footwear items for personal wear or fashion",
  },
  {
    label: "Chemical Products",
    value: "chemical_products",
    description:
      "Substances produced through chemical processes for various industrial or consumer applications",
  },
  {
    label: "Ceramic Goods",
    value: "ceramic_goods",
    description:
      "Products made from ceramic materials, often used in construction or art",
  },
  {
    label: "Building Materials",
    value: "building_materials",
    description:
      "Materials used in the construction or renovation of buildings and structures",
  },
  {
    label: "Arable Farming",
    value: "arable_farming",
    description:
      "Cultivation of crops on arable land for food, feed, or fiber production",
  },
  {
    label: "Air Travel",
    value: "air_travel",
    description:
      "Journeys made by aircraft or aviation transportation services",
  },
  {
    label: "Air Freight",
    value: "air_freight",
    description:
      "Transportation of goods by air using aircraft or cargo services",
  },
  {
    label: "Agriculture/Hunting/Forestry/Fishing",
    value: "agriculture_hunting_forestry_fishing",
    description:
      "Activities related to food production, resource extraction, and land management",
  },
  {
    label: "Accommodation",
    value: "accommodation",
    description: "Provision of lodging or housing for travelers or residents",
  },
];

export const regions = [
  {
    label: "Frankfurt am Main, HE, DE",
    value: "frankfurt_am_main_he_de",
    description: "City in the state of Hesse, Germany",
  },
  {
    label: "Mexico",
    value: "mexico",
    description:
      "Country in North America, known for its rich history and culture",
  },
  {
    label: "United Kingdom",
    value: "united_kingdom",
    description:
      "Sovereign country consisting of four constituent countries: England, Scotland, Wales, and Northern Ireland",
  },
  {
    label: "Global",
    value: "global",
    description: "Worldwide scope or coverage",
  },
  {
    label: "Belgium",
    value: "belgium",
    description:
      "Country in Western Europe, known for its chocolates, waffles, and beer",
  },
  {
    label: "Italy",
    value: "italy",
    description:
      "Country in Southern Europe, known for its rich history, art, and cuisine",
  },
  {
    label: "Latvia",
    value: "latvia",
    description:
      "Baltic country in Northern Europe, known for its beaches, forests, and medieval architecture",
  },
  {
    label: "United States",
    value: "united_states",
    description:
      "Federal republic in North America, known for its diverse culture, economy, and landscapes",
  },
  {
    label: "Finland",
    value: "finland",
    description:
      "Nordic country in Northern Europe, known for its lakes, forests, and saunas",
  },
  {
    label: "North America",
    value: "north_america",
    description:
      "Continent comprising Canada, the United States, Mexico, and other countries in the Caribbean and Central America",
  },
  {
    label: "South Africa",
    value: "south_africa",
    description:
      "Country on the southernmost tip of Africa, known for its diverse cultures, wildlife, and landscapes",
  },
  {
    label: "India",
    value: "india",
    description:
      "South Asian country known for its ancient civilizations, diverse cultures, and Bollywood film industry",
  },
  {
    label: "Europe and South America",
    value: "europe_south_america",
    description:
      "Continents of Europe and South America, representing a wide geographical area with diverse cultures and economies",
  },
  {
    label: "European Union",
    value: "european_union",
    description:
      "Political and economic union of European countries, promoting cooperation and integration",
  },
  {
    label: "Asia and Africa",
    value: "asia_africa",
    description:
      "Continents of Asia and Africa, representing a significant portion of the world's population and diverse cultures",
  },
  {
    label: "Slovakia",
    value: "slovakia",
    description:
      "Landlocked country in Central Europe, known for its medieval towns, castles, and Carpathian Mountains",
  },
  {
    label: "Latin America except Brazil",
    value: "latin_america_except_brazil",
    description:
      "Region comprising the countries of Latin America, excluding Brazil, known for its rich cultural heritage, diverse ecosystems, and historical significance",
  },
  {
    label: "Belarus",
    value: "belarus",
    description:
      "Landlocked country in Eastern Europe, known for its dense forests, grand castles, and Soviet heritage",
  },
  {
    label: "Bulgaria",
    value: "bulgaria",
    description:
      "Southeastern European country known for its Black Sea coastline, Orthodox churches, and historical landmarks",
  },
  {
    label: "Argentina",
    value: "argentina",
    description:
      "South American country known for its tango, beef, wine, and vast landscapes ranging from the Andes mountains to the Pampas plains",
  },
  {
    label: "Austria",
    value: "austria",
    description:
      "German-speaking country in Central Europe, known for its historic cities, alpine landscapes, and classical music heritage",
  },
  {
    label: "Slovenia",
    value: "slovenia",
    description:
      "Central European country known for its mountains, ski resorts, and lakes, as well as its rich cultural heritage",
  },
  {
    label: "Denmark",
    value: "denmark",
    description:
      "Scandinavian country known for its historic cities, Viking history, and progressive social policies",
  },
  {
    label: "Sweden",
    value: "sweden",
    description:
      "Scandinavian country known for its stunning landscapes, vibrant cities, and innovative design",
  },
  {
    label: "Greece",
    value: "greece",
    description:
      "Country in southeastern Europe known for its ancient history, archaeological sites, and Mediterranean beaches",
  },
  {
    label: "British Columbia, CA",
    value: "british_columbia_ca",
    description:
      "Province in Canada known for its stunning natural landscapes, including mountains, forests, and coastline",
  },
  {
    label: "Hamina (Fredrikshamn), 09, FI",
    value: "hamina_fredrikshamn_09_fi",
    description:
      "Town in Finland known for its historic fortress, maritime heritage, and proximity to the Russian border",
  },
  {
    label: "Portugal",
    value: "portugal",
    description:
      "Country in Southern Europe known for its historic cities, picturesque beaches, and port wine",
  },
  {
    label: "Africa except Egypt and South Africa",
    value: "africa_except_egypt_south_africa",
    description:
      "Region of Africa excluding Egypt and South Africa, known for its diverse cultures, wildlife, and natural landscapes",
  },
  {
    label: "Korea, Republic of",
    value: "korea_republic_of",
    description:
      "Officially known as South Korea, this East Asian country is known for its modern cities, pop culture, and demilitarized zone",
  },
  {
    label: "Middle East",
    value: "middle_east",
    description:
      "Region spanning Western Asia and parts of North Africa, known for its rich history, cultural diversity, and geopolitical significance",
  },
  {
    label: "Los Angeles, CA, US",
    value: "los_angeles_ca_us",
    description:
      "City in California, United States, known for its entertainment industry, diverse culture, and Mediterranean climate",
  },
  {
    label: "Lithuania",
    value: "lithuania",
    description:
      "Baltic country in Northern Europe, known for its medieval architecture, pristine lakes, and amber",
  },
  {
    label: "Netherlands",
    value: "netherlands",
    description:
      "Country in Western Europe known for its flat landscape, extensive canal systems, windmills, and tulip fields",
  },
  {
    label: "Japan",
    value: "japan",
    description:
      "Island nation in East Asia known for its rich history, cutting-edge technology, and traditional culture",
  },
  {
    label: "Russian Federation",
    value: "russian_federation",
    description:
      "Largest country in the world, spanning Eastern Europe and Northern Asia, known for its vast landscapes, diverse culture, and history",
  },
  {
    label: "France",
    value: "france",
    description:
      "Western European country known for its art, fashion, cuisine, and landmarks such as the Eiffel Tower and Louvre Museum",
  },
  {
    label: "Tennessee, US",
    value: "tennessee_us",
    description:
      "State in the southeastern United States, known for its country music heritage, Great Smoky Mountains, and vibrant cities like Nashville and Memphis",
  },
  {
    label: "Al Manamah, 13, BH",
    value: "al_manamah_13_bh",
    description:
      "Capital city of Bahrain, known for its modern architecture, Arabian Gulf coastline, and rich history",
  },
  {
    label: "Norway",
    value: "norway",
    description:
      "Scandinavian country known for its stunning fjords, northern lights, Viking history, and high quality of life",
  },
  {
    label: "Montreal, QC, CA",
    value: "montreal_qc_ca",
    description:
      "City in Quebec, Canada, known for its vibrant arts scene, historic architecture, and cultural diversity",
  },
  {
    label: "Estonia",
    value: "estonia",
    description:
      "Baltic country in Northern Europe known for its diverse landscapes, medieval architecture, and digital innovation",
  },
  {
    label: "Bosnia and Herzegovina",
    value: "bosnia_and_herzegovina",
    description:
      "Country in Southeast Europe known for its diverse culture, Ottoman and Austro-Hungarian heritage, and scenic landscapes",
  },
  {
    label: "Luxembourg",
    value: "luxembourg",
    description:
      "Landlocked country in Western Europe known for its medieval castles, lush valleys, and status as a financial hub",
  },
  {
    label: "Czech Republic",
    value: "czech_republic",
    description:
      "Central European country known for its historic cities, castles, beer, and Bohemian culture",
  },
  {
    label: "Cyprus",
    value: "cyprus",
    description:
      "Island country in the Eastern Mediterranean, known for its ancient ruins, sandy beaches, and vibrant culture",
  },
  {
    label: "Middle East, Asia and Egypt",
    value: "middle_east_asia_egypt",
    description:
      "Region encompassing the Middle East, Asia, and Egypt, representing a diverse area with significant historical, cultural, and geopolitical importance",
  },
  {
    label: "Taiwan, Province of China",
    value: "taiwan_province_of_china",
    description:
      "Island nation in East Asia known for its modern cities, traditional Chinese temples, and scenic landscapes",
  },
  {
    label: "Turkey",
    value: "turkey",
    description:
      "Transcontinental country bridging Eastern Europe and Western Asia, known for its rich history, cultural heritage, and diverse landscapes",
  },
  {
    label: "SPP North, US",
    value: "spp_north_us",
    description:
      "Region in the United States served by the Southwest Power Pool, encompassing several states in the central and northern part of the country",
  },
  {
    label: "Hong Kong, HK",
    value: "hong_kong_hk",
    description:
      "Special Administrative Region of China known for its skyline, deep natural harbor, and vibrant economy",
  },
  {
    label: "Croatia",
    value: "croatia",
    description:
      "European country known for its stunning Adriatic coastline, medieval cities, and diverse landscapes",
  },
  {
    label: "Malta",
    value: "malta",
    description:
      "Southern European island country known for its historic sites, crystal-clear waters, and sunny Mediterranean climate",
  },
  {
    label: "Hungary",
    value: "hungary",
    description:
      "Central European country known for its thermal baths, historic architecture, and rich cultural heritage",
  },
  {
    label: "São Paulo, SP, BR",
    value: "sao_paulo_sp_br",
    description:
      "City in Brazil known for its cultural diversity, vibrant nightlife, and economic significance as a financial hub",
  },
  {
    label: "Ghana",
    value: "ghana",
    description:
      "Country in West Africa known for its diverse wildlife, rich culture, and historical significance as a former colonial power",
  },
  {
    label: "Hawaii, US",
    value: "hawaii_us",
    description:
      "US state located in the Pacific Ocean known for its tropical climate, stunning beaches, and volcanic landscapes",
  },
  {
    label: "Germany",
    value: "germany",
    description:
      "Central European country known for its historic landmarks, cultural heritage, and economic strength",
  },
  {
    label: "West Virginia, US",
    value: "west_virginia_us",
    description:
      "US state located in the Appalachian region known for its rolling hills, coal mining heritage, and outdoor recreational opportunities",
  },
  {
    label: "Mumbai (ex Bombay), MH, IN",
    value: "mumbai_ex_bombay_mh_in",
    description:
      "City on the west coast of India known for its Bollywood film industry, colonial architecture, and bustling street life",
  },
  {
    label: "Switzerland",
    value: "switzerland",
    description:
      "Central European country known for its stunning Alpine landscapes, high quality of life, and financial services industry",
  },
  {
    label: "London, LND, GB",
    value: "london_lnd_gb",
    description:
      "Capital city of the United Kingdom, known for its rich history, iconic landmarks, and cultural diversity",
  },
  {
    label: "New Zealand",
    value: "new_zealand",
    description:
      "Island country in the southwestern Pacific Ocean known for its stunning natural landscapes, Maori culture, and adventure tourism",
  },
  {
    label: "Texas, US",
    value: "texas_us",
    description:
      "US state located in the southern region known for its vast landscapes, cowboy culture, and vibrant cities",
  },
  {
    label: "Canada",
    value: "canada",
    description:
      "Northern North American country known for its stunning natural beauty, multicultural cities, and strong economy",
  },
  {
    label: "Jakarta, Java, JK, ID",
    value: "jakarta_java_jk_id",
    description:
      "Capital city of Indonesia located on the island of Java, known for its bustling streets, historic sites, and vibrant culture",
  },
  {
    label: "Seoul, 11, KR",
    value: "seoul_11_kr",
    description:
      "Capital city of South Korea known for its modern skyscrapers, pop culture, and historic palaces",
  },
  {
    label: "Northwest Territories, CA",
    value: "northwest_territories_ca",
    description:
      "Territory in Northern Canada known for its vast wilderness, Arctic landscapes, and indigenous cultures",
  },
  {
    label: "Australia",
    value: "australia",
    description:
      "Country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands, known for its unique wildlife, stunning landscapes, and vibrant cities",
  },
  {
    label: "Central Asia and Pacific Asia, Oceania, Antarctica",
    value: "central_asia_pacific_asia_oceania_antarctica",
    description:
      "Region encompassing Central Asia, Pacific Asia, Oceania, and Antarctica, representing a vast area with diverse cultures, landscapes, and ecosystems",
  },
  {
    label: "Romania",
    value: "romania",
    description:
      "Southeastern European country known for its medieval castles, lush forests, and diverse culture",
  },
  {
    label: "Maryland, US",
    value: "maryland_us",
    description:
      "US state on the Atlantic coast known for its Chesapeake Bay, historic cities, and role in American history",
  },
  {
    label: "Nova Scotia, CA",
    value: "nova_scotia_ca",
    description:
      "Canadian province known for its rugged coastline, historic towns, and maritime culture",
  },
  {
    label: "Gilroy, CA, US",
    value: "gilroy_ca_us",
    description:
      'City in California known as the "Garlic Capital of the World," famous for its garlic production and annual Garlic Festival',
  },
  {
    label: "Victoria, AU",
    value: "victoria_au",
    description:
      "State in southeastern Australia known for its capital city Melbourne, stunning coastline, and diverse landscapes",
  },
  {
    label: "NPCC NYC/Westchester, US",
    value: "npcc_nyc_westchester_us",
    description:
      "Region in the United States served by the Northeast Power Coordinating Council, including New York City and Westchester County",
  },
  {
    label: "Spain",
    value: "spain",
    description:
      "Country in southwestern Europe known for its diverse cultures, historic cities, and vibrant festivals",
  },
  {
    label: "Poland",
    value: "poland",
    description:
      "Central European country known for its medieval architecture, hearty cuisine, and resilient history",
  },
  {
    label: "Alabama, US",
    value: "alabama_us",
    description:
      "Southern US state known for its Civil Rights history, Southern hospitality, and diverse landscapes",
  },
  {
    label: "Ireland",
    value: "ireland",
    description:
      "Island country in Northwestern Europe known for its lush landscapes, Celtic heritage, and friendly people",
  },
  {
    label: "HICC Oahu, US",
    value: "hicc_oahu_us",
    description:
      "Hawaiian Island of Oahu, known for its capital city Honolulu, iconic Waikiki Beach, and historic Pearl Harbor",
  },
  {
    label: "Saudi Arabia",
    value: "saudi_arabia",
    description:
      "Middle Eastern country known for its vast deserts, ancient ruins, and modern cities",
  },
  {
    label: "Brazil",
    value: "brazil",
    description:
      "Largest country in South America, known for its Amazon rainforest, vibrant cities, and diverse culture",
  },
  {
    label: "Iowa, US",
    value: "iowa_us",
    description:
      "Midwestern US state known for its rolling plains, agriculture, and role in American presidential elections",
  },
  {
    label: "Serbia",
    value: "serbia",
    description:
      "Landlocked country in Southeast Europe known for its history, Orthodox monasteries, and vibrant culture",
  },
  {
    label: "SERC Mississippi Valley, US",
    value: "serc_mississippi_valley_us",
    description:
      "Region in the United States served by the Southeastern Electric Reliability Council, encompassing the Mississippi Valley area",
  },
  {
    label: "Osaka, 27, JP",
    value: "osaka_27_jp",
    description:
      "Prefecture in Japan known for its vibrant nightlife, street food, and historical landmarks",
  },
  {
    label: "Indonesia",
    value: "indonesia",
    description:
      "Southeast Asian archipelago known for its diverse cultures, stunning beaches, and rich biodiversity",
  },
  {
    label: "Quebec, CA",
    value: "quebec_ca",
    description:
      "Canadian province known for its French heritage, historic cities, and stunning natural landscapes",
  },
  {
    label: "Iceland",
    value: "iceland",
    description:
      "Nordic island country known for its stunning landscapes, geothermal activity, and Viking heritage",
  },
  {
    label: "Melbourne, VIC, AU",
    value: "melbourne_vic_au",
    description:
      "Capital city of the Australian state of Victoria, known for its arts scene, multiculturalism, and coffee culture",
  },
  {
    label: "Oregon, US",
    value: "oregon_us",
    description:
      "US state in the Pacific Northwest known for its diverse landscapes, including forests, mountains, and coastline",
  },
  {
    label: "Malaysia",
    value: "malaysia",
    description:
      "Southeast Asian country known for its diverse culture, vibrant cities, and stunning natural beauty",
  },
  {
    label: "Washington, US",
    value: "washington_us",
    description:
      "US state in the Pacific Northwest known for its tech industry, coffee culture, and stunning national parks",
  },
  {
    label: "Las Vegas, NV, US",
    value: "las_vegas_nv_us",
    description:
      "City in Nevada, United States known for its vibrant nightlife, entertainment industry, and casino resorts",
  },
  {
    label: "Canberra, ACT, AU",
    value: "canberra_act_au",
    description:
      "Capital city of Australia known for its planned layout, national monuments, and cultural institutions",
  },
  {
    label: "Queensland, AU",
    value: "queensland_au",
    description:
      "Australian state known for its stunning beaches, tropical climate, and Great Barrier Reef",
  },
  {
    label: "Egypt",
    value: "egypt",
    description:
      "Transcontinental country linking Northeast Africa with the Middle East, known for its ancient civilization, iconic monuments, and Nile River",
  },
  {
    label: "East Europe and Iceland",
    value: "east_europe_iceland",
    description:
      "Region encompassing Eastern Europe and Iceland, representing a diverse area with rich cultural heritage and varied landscapes",
  },
  {
    label: "Maldives",
    value: "maldives",
    description:
      "South Asian island nation known for its stunning beaches, coral reefs, and luxury resorts",
  },
  {
    label: "Ohio, US",
    value: "ohio_us",
    description:
      "Midwestern US state known for its industrial heritage, diverse cities, and contributions to American history and culture",
  },
  {
    label: "Warszawa, 14, PL",
    value: "warszawa_14_pl",
    description:
      "Capital city of Poland, known for its historic Old Town, vibrant nightlife, and cultural institutions",
  },
  {
    label: "Louisiana, US",
    value: "louisiana_us",
    description:
      "Southern US state known for its Cajun and Creole culture, jazz music, and French colonial heritage",
  },
  {
    label: "Florida, US",
    value: "florida_us",
    description:
      "Southern US state known for its sunshine, theme parks, retirement communities, and diverse ecosystems",
  },
  {
    label: "Maine, US",
    value: "maine_us",
    description:
      "New England state known for its rugged coastline, lobster industry, and outdoor recreational opportunities",
  },
  {
    label: "NPCC New England, US",
    value: "npcc_new_england_us",
    description:
      "Region in the United States served by the Northeast Power Coordinating Council, encompassing the New England states",
  },
  {
    label: "China",
    value: "china",
    description:
      "East Asian country known for its ancient civilization, vast population, and rapid economic growth",
  },
  {
    label: "Zurich, ZH, CH",
    value: "zurich_zh_ch",
    description:
      "Largest city in Switzerland known for its banking sector, historic old town, and scenic location on Lake Zurich",
  },
  {
    label: "Tajikistan",
    value: "tajikistan",
    description:
      "Landlocked country in Central Asia known for its rugged mountains, ancient Silk Road cities, and Persian-influenced culture",
  },
  {
    label: "NPCC Upstate NY, US",
    value: "npcc_upstate_ny_us",
    description:
      "Region in the United States served by the Northeast Power Coordinating Council, encompassing Upstate New York",
  },
  {
    label: "Kazakhstan",
    value: "kazakhstan",
    description:
      "Central Asian country known for its vast steppes, nomadic heritage, and rich energy resources",
  },
  {
    label: "Latin America",
    value: "latin_america",
    description:
      "Region comprising the countries of Central and South America, known for its diverse cultures, languages, and ecosystems",
  },
  {
    label: "Toronto, ON, CA",
    value: "toronto_on_ca",
    description:
      "Capital city of the Canadian province of Ontario, known for its diverse population, cultural institutions, and vibrant neighborhoods",
  },
  {
    label: "Saint-Ghislain, WHT, BE",
    value: "saint_ghislain_wht_be",
    description:
      "Municipality in Belgium known for its industrial heritage, including data centers and telecommunications infrastructure",
  },
  {
    label: "Africa",
    value: "africa",
    description:
      "Second-largest continent in the world, known for its diverse cultures, wildlife, and landscapes",
  },
  {
    label: "WECC Southwest, US",
    value: "wecc_southwest_us",
    description:
      "Region in the United States served by the Western Electricity Coordinating Council, encompassing several southwestern states",
  },
  {
    label: "Chennai (ex Madras), TN, IN",
    value: "chennai_ex_madras_tn_in",
    description:
      "Capital city of the Indian state of Tamil Nadu, known for its vibrant culture, historic temples, and IT industry",
  },
  {
    label: "RFC East, US",
    value: "rfc_east_us",
    description:
      "Region in the United States served by the ReliabilityFirst Corporation, covering the eastern part of the country",
  },
  {
    label: "Saskatchewan, CA",
    value: "saskatchewan_ca",
    description:
      "Canadian province known for its prairie landscapes, boreal forests, and strong agriculture and mining sectors",
  },
  {
    label: "Illinois, US",
    value: "illinois_us",
    description:
      "Midwestern US state known for its major cities, including Chicago, as well as its agriculture, industry, and cultural institutions",
  },
  {
    label: "Virginia, US",
    value: "virginia_us",
    description:
      "Southern US state known for its historic landmarks, including colonial sites and Civil War battlefields, as well as its modern cities and scenic landscapes",
  },
  {
    label: "Jordan",
    value: "jordan",
    description:
      "Middle Eastern country known for its ancient ruins, including Petra and Jerash, as well as its modern capital city, Amman",
  },
  {
    label: "SPP South, US",
    value: "spp_south_us",
    description:
      "Region in the United States served by the Southwest Power Pool, encompassing several southern states",
  },
  {
    label: "Sudan",
    value: "sudan",
    description:
      "Country in northeastern Africa known for its ancient civilization, diverse cultures, and Nile River",
  },
  {
    label: "Montenegro",
    value: "montenegro",
    description:
      "Balkan country known for its rugged mountains, medieval villages, and Adriatic coastline",
  },
  {
    label: "HICC Miscellaneous, US",
    value: "hicc_miscellaneous_us",
    description:
      "Hawaiian Island of Oahu, serving as a hub for various events and activities in the United States",
  },
  {
    label: "SERC Tennessee Valley, US",
    value: "serc_tennessee_valley_us",
    description:
      "Region in the United States served by the Southeastern Electric Reliability Council, encompassing the Tennessee Valley area",
  },
  {
    label: "Singapore",
    value: "singapore",
    description:
      "Southeast Asian city-state known for its modern skyline, multiculturalism, and efficient transportation system",
  },
  {
    label: "Alberta, CA",
    value: "alberta_ca",
    description:
      "Canadian province known for its stunning natural landscapes, including the Canadian Rockies, as well as its oil and gas industry",
  },
  {
    label: "Nunavut, CA",
    value: "nunavut_ca",
    description:
      "Canadian territory in the Arctic known for its vast wilderness, Inuit culture, and unique wildlife",
  },
  {
    label: "NPCC Long Island, US",
    value: "npcc_long_island_us",
    description:
      "Region in the United States served by the Northeast Power Coordinating Council, encompassing Long Island, New York",
  },
  {
    label: "Wisconsin, US",
    value: "wisconsin_us",
    description:
      "Midwestern US state known for its dairy industry, Great Lakes shoreline, and vibrant cities like Milwaukee",
  },
  {
    label: "Kuwait",
    value: "kuwait",
    description:
      "Country in the Middle East known for its oil reserves, modern architecture, and Arabian Gulf coastline",
  },
  {
    label: "Michigan, US",
    value: "michigan_us",
    description:
      "Midwestern US state known for its Great Lakes coastline, automotive industry, and cultural attractions",
  },
  {
    label: "Ukraine",
    value: "ukraine",
    description:
      "Eastern European country known for its diverse landscapes, Orthodox churches, and tumultuous history",
  },
  {
    label: "SERC South, US",
    value: "serc_south_us",
    description:
      "Region in the United States served by the Southeastern Electric Reliability Council, encompassing several southern states",
  },
  {
    label: "Massachusetts, US",
    value: "massachusetts_us",
    description:
      "New England state known for its historic landmarks, prestigious universities, and cultural institutions",
  },
  {
    label: "Beijing, BJ, CN",
    value: "beijing_bj_cn",
    description:
      "Capital city of China known for its ancient sites, modern architecture, and cultural heritage",
  },
  {
    label: "WECC Rockies, US",
    value: "wecc_rockies_us",
    description:
      "Region in the United States served by the Western Electricity Coordinating Council, encompassing the Rocky Mountain states",
  },
  {
    label: "WECC California, US",
    value: "wecc_california_us",
    description:
      "Region in the United States served by the Western Electricity Coordinating Council, encompassing the state of California",
  },
  {
    label: "New Brunswick, CA",
    value: "new_brunswick_ca",
    description:
      "Canadian province known for its scenic coastline, Acadian heritage, and vibrant cities like Fredericton and Saint John",
  },
  {
    label: "Eemshaven, NL",
    value: "eemshaven_nl",
    description:
      "Seaport and industrial area in the Netherlands, known for its data centers and renewable energy infrastructure",
  },
  {
    label: "Minnesota, US",
    value: "minnesota_us",
    description:
      "Midwestern US state known for its many lakes, vibrant arts scene, and outdoor recreational opportunities",
  },
  {
    label: "South Carolina, US",
    value: "south_carolina_us",
    description:
      "Southern US state known for its historic cities, beautiful beaches, and southern hospitality",
  },
  {
    label: "Georgia, US",
    value: "georgia_us",
    description:
      "Southern US state known for its peaches, antebellum architecture, and vibrant capital city, Atlanta",
  },
  {
    label: "Dominican Republic",
    value: "dominican_republic",
    description:
      "Caribbean nation known for its stunning beaches, Spanish colonial architecture, and vibrant culture",
  },
  {
    label: "Chile",
    value: "chile",
    description:
      "South American country known for its diverse landscapes, including the Atacama Desert, Andes Mountains, and Patagonia region",
  },
  {
    label: "Prince Edward Island, CA",
    value: "prince_edward_island_ca",
    description:
      "Canadian province known for its red sand beaches, seafood, and pastoral landscapes",
  },
  {
    label: "New Mexico, US",
    value: "new_mexico_us",
    description:
      "Southwestern US state known for its diverse cultures, stunning landscapes, and artistic heritage",
  },
  {
    label: "Stockholm, AB, SE",
    value: "stockholm_ab_se",
    description:
      "Capital city of Sweden known for its historic architecture, scenic waterways, and vibrant cultural scene",
  },
  {
    label: "Peru",
    value: "peru",
    description:
      "South American country known for its ancient ruins, diverse ecosystems, and vibrant indigenous cultures",
  },
  {
    label: "Singapore, SG",
    value: "singapore_sg",
    description:
      "Southeast Asian city-state known for its modern skyline, multiculturalism, and efficient transportation system",
  },
  {
    label: "Lao People's Democratic Republic",
    value: "lao_peoples_democratic_republic",
    description:
      "Landlocked country in Southeast Asia known for its mountainous terrain, Buddhist monasteries, and traditional culture",
  },
  {
    label: "Indiana, US",
    value: "indiana_us",
    description:
      "Midwestern US state known for its Hoosier hospitality, collegiate basketball tradition, and vibrant cities like Indianapolis",
  },
  {
    label: "SERC Midwest, US",
    value: "serc_midwest_us",
    description:
      "Region in the United States served by the Southeastern Electric Reliability Council, encompassing the Midwestern states",
  },
  {
    label: "New Hampshire, US",
    value: "new_hampshire_us",
    description:
      "New England state known for its charming villages, scenic landscapes, and outdoor recreational opportunities",
  },
  {
    label: "Manitoba, CA",
    value: "manitoba_ca",
    description:
      "Canadian province known for its natural beauty, including lakes, forests, and polar bear migration routes",
  },
  {
    label: "Newfoundland and Labrador, CA",
    value: "newfoundland_and_labrador_ca",
    description:
      "Canadian province known for its rugged coastline, Viking heritage, and stunning landscapes",
  },
  {
    label: "Northern Territory, AU",
    value: "northern_territory_au",
    description:
      "Territory in northern Australia known for its vast Outback landscapes, Aboriginal culture, and iconic natural landmarks",
  },
  {
    label: "FRCC All, US",
    value: "frcc_all_us",
    description:
      "Region in the United States served by the Florida Reliability Coordinating Council, encompassing several states in the southeastern US",
  },
  {
    label: "Ontario, CA",
    value: "ontario_ca",
    description:
      "Canadian province known for its vibrant cities, including Toronto and Ottawa, as well as its stunning natural landscapes like Niagara Falls",
  },
  {
    label: "Cambodia",
    value: "cambodia",
    description:
      "Southeast Asian country known for its ancient temples, including Angkor Wat, as well as its vibrant culture and warm hospitality",
  },
  {
    label: "Pune, MH, IN",
    value: "pune_mh_in",
    description:
      "City in the Indian state of Maharashtra known for its educational institutions, vibrant culture, and IT industry",
  },
  {
    label: "Lebanon",
    value: "lebanon",
    description:
      "Middle Eastern country known for its historic sites, vibrant nightlife, and Mediterranean cuisine",
  },
  {
    label: "Korea, Democratic People's Republic of",
    value: "korea_democratic_peoples_republic_of",
    description:
      "East Asian country known for its reclusive regime, military focus, and nuclear program",
  },
  {
    label: "Colombia",
    value: "colombia",
    description:
      "South American country known for its diverse landscapes, including the Andes Mountains, Amazon rainforest, and Caribbean coastline",
  },
  {
    label: "Arkansas, US",
    value: "arkansas_us",
    description:
      "Southern US state known for its natural beauty, including the Ozark Mountains and Hot Springs National Park",
  },
  {
    label: "Trinidad and Tobago",
    value: "trinidad_and_tobago",
    description:
      "Caribbean nation known for its vibrant Carnival celebrations, diverse culture, and oil and gas industry",
  },
  {
    label: "Cardiff, CRF, GB",
    value: "cardiff_crf_gb",
    description:
      "Capital city of Wales, known for its historic landmarks, vibrant arts scene, and role as a major port city",
  },
  {
    label: "Idaho, US",
    value: "idaho_us",
    description:
      "US state known for its stunning natural landscapes, including mountains, forests, and rivers, as well as its potato industry",
  },
  {
    label: "Benin",
    value: "benin",
    description:
      "West African country known for its rich history, diverse cultures, and vibrant music and dance traditions",
  },
  {
    label: "Sierra Leone",
    value: "sierra_leone",
    description:
      "West African country known for its stunning beaches, tropical rainforests, and vibrant culture",
  },
  {
    label: "California, US",
    value: "california_us",
    description:
      "Western US state known for its diverse landscapes, including beaches, mountains, deserts, and forests, as well as its entertainment industry",
  },
  {
    label: "Other Asia",
    value: "other_asia",
    description:
      "Region in Asia encompassing countries not classified in specific subregions, representing a diverse area with varied cultures, economies, and geographies",
  },
  {
    label: "United Arab Emirates",
    value: "united_arab_emirates",
    description:
      "Middle Eastern country known for its modern cities, including Dubai and Abu Dhabi, as well as its oil wealth and futuristic architecture",
  },
  {
    label: "Thailand",
    value: "thailand",
    description:
      "Southeast Asian country known for its stunning beaches, ancient temples, vibrant cities, and delicious cuisine",
  },
  {
    label: "Yukon, CA",
    value: "yukon_ca",
    description:
      "Canadian territory known for its vast wilderness, including rugged mountains, boreal forests, and abundant wildlife",
  },
  {
    label: "Yemen",
    value: "yemen",
    description:
      "Arabian Peninsula country known for its ancient history, stunning landscapes, and ongoing humanitarian crisis",
  },
  {
    label: "District of Columbia, US",
    value: "district_of_columbia_us",
    description:
      "Capital district of the United States, known for its iconic landmarks, including the White House, Capitol Building, and National Mall",
  },
  {
    label: "Oklahoma, US",
    value: "oklahoma_us",
    description:
      "Southern US state known for its diverse landscapes, including prairies, forests, and mountains, as well as its Native American heritage",
  },
  {
    label: "Martinique",
    value: "martinique",
    description:
      "Caribbean island and overseas region of France known for its stunning beaches, rainforests, and vibrant Creole culture",
  },
  {
    label: "Kentucky, US",
    value: "kentucky_us",
    description:
      "Southern US state known for its horse racing traditions, bourbon distilleries, and bluegrass music",
  },
  {
    label: "Ningxia Huizu Zizhiqu, CN",
    value: "ningxia_huizu_zizhiqu_cn",
    description:
      "Autonomous region in northwest China known for its Hui Muslim culture, desert landscapes, and ancient Silk Road sites",
  },
  {
    label: "Bangladesh",
    value: "bangladesh",
    description:
      "South Asian country known for its dense population, rich culture, and vibrant cities like Dhaka and Chittagong",
  },
  {
    label: "Pennsylvania, US",
    value: "pennsylvania_us",
    description:
      "Northeastern US state known for its historic landmarks, including Independence Hall and the Liberty Bell, as well as its industrial heritage",
  },
  {
    label: "Heriotdale/Johannesburg, ZA",
    value: "heriotdale_johannesburg_za",
    description:
      "Suburb of Johannesburg, South Africa known for its industrial activity and proximity to major transportation routes",
  },
  {
    label: "Nepal",
    value: "nepal",
    description:
      "Landlocked country in South Asia known for its stunning Himalayan landscapes, rich culture, and vibrant festivals",
  },
  {
    label: "Togo",
    value: "togo",
    description:
      "West African country known for its palm-fringed beaches, diverse culture, and vibrant markets",
  },
  {
    label: "Middenmeer, NH, NL",
    value: "middenmeer_nh_nl",
    description:
      "Village in the Netherlands known for its agricultural industry, including flower cultivation and greenhouse horticulture",
  },
  {
    label: "Zambia",
    value: "zambia",
    description:
      "Landlocked country in Southern Africa known for its diverse wildlife, stunning landscapes, and Victoria Falls",
  },
  {
    label: "Paris, 75, FR",
    value: "paris_75_fr",
    description:
      "Capital city of France known for its iconic landmarks, including the Eiffel Tower, Notre-Dame Cathedral, and Louvre Museum",
  },
  {
    label: "ASCC Miscellaneous, US",
    value: "ascc_miscellaneous_us",
    description:
      "Region in the United States served by the Alaska Systems Coordinating Council, encompassing various areas and activities",
  },
  {
    label: "Israel",
    value: "israel",
    description:
      "Middle Eastern country known for its historic significance to multiple religions, vibrant cities, and innovative technology sector",
  },
  {
    label: "Western Australia, AU",
    value: "western_australia_au",
    description:
      "Australian state known for its vast Outback landscapes, stunning coastline, and vibrant capital city, Perth",
  },
  {
    label: "ASCC Alaska Grid, US",
    value: "ascc_alaska_grid_us",
    description:
      "Region in the United States served by the Alaska Systems Coordinating Council, encompassing the state of Alaska",
  },
  {
    label: "Mississippi, US",
    value: "mississippi_us",
    description:
      "Southern US state known for its rich Delta blues heritage, antebellum mansions, and vibrant riverfront cities",
  },
  {
    label: "Zimbabwe",
    value: "zimbabwe",
    description:
      "Landlocked country in Southern Africa known for its diverse wildlife, stunning landscapes, and Victoria Falls",
  },
  {
    label: "Tanzania, United Republic of",
    value: "tanzania_united_republic_of",
    description:
      "East African country known for its vast wilderness areas, including Serengeti National Park and Mount Kilimanjaro, as well as its Indian Ocean coastline",
  },
  {
    label: "Bhutan",
    value: "bhutan",
    description:
      "Landlocked country in the Eastern Himalayas known for its stunning mountain landscapes, Buddhist monasteries, and Gross National Happiness index",
  },
  {
    label: "Iran, Islamic Republic of",
    value: "iran_islamic_republic_of",
    description:
      "Middle Eastern country known for its ancient civilization, Islamic architecture, and cultural heritage",
  },
  {
    label: "Georgia",
    value: "georgia",
    description:
      "Country in the Caucasus region known for its ancient wine-making traditions, diverse landscapes, and historic churches",
  },
  {
    label: "RFC Michigan, US",
    value: "rfc_michigan_us",
    description:
      "Region in the United States served by the ReliabilityFirst Corporation, covering the state of Michigan",
  },
  {
    label: "Viet Nam",
    value: "viet_nam",
    description:
      "Southeast Asian country known for its stunning natural landscapes, rich history, and vibrant culture",
  },
  {
    label: "Malawi",
    value: "malawi",
    description:
      "Landlocked country in southeastern Africa known for its stunning Lake Malawi, diverse wildlife, and friendly people",
  },
  {
    label: "Nigeria",
    value: "nigeria",
    description:
      "West African country known for its diverse cultures, vibrant cities, and oil industry",
  },
  {
    label: "North Carolina, US",
    value: "north_carolina_us",
    description:
      "Southern US state known for its diverse landscapes, including mountains and beaches, as well as its vibrant cities like Charlotte and Raleigh",
  },
  {
    label: "Delhi, DL, IN",
    value: "delhi_dl_in",
    description:
      "Capital territory of India known for its historic landmarks, bustling markets, and vibrant street food scene",
  },
  {
    label: "Salt Lake City, UT, US",
    value: "salt_lake_city_ut_us",
    description:
      "Capital city of Utah known for its stunning mountain backdrop, outdoor recreational opportunities, and Mormon heritage",
  },
  {
    label: "Sydney, NSW, AU",
    value: "sydney_nsw_au",
    description:
      "Largest city in Australia known for its iconic landmarks, including the Sydney Opera House and Harbour Bridge, as well as its vibrant culture and beautiful beaches",
  },
  {
    label: "Hong Kong",
    value: "hong_kong",
    description:
      "Special Administrative Region of China known for its stunning skyline, vibrant street markets, and dynamic blend of Eastern and Western cultures",
  },
  {
    label: "MRO West, US",
    value: "mro_west_us",
    description:
      "Region in the United States served by the Midcontinent Independent System Operator, covering the western part of the MRO footprint",
  },
  {
    label: "Oman",
    value: "oman",
    description:
      "Arabian Peninsula country known for its stunning deserts, historic forts, and beautiful coastline along the Arabian Sea",
  },
  {
    label: "Haiti",
    value: "haiti",
    description:
      "Caribbean nation known for its vibrant culture, historic landmarks, and stunning beaches, as well as its ongoing recovery from natural disasters",
  },
  {
    label: "Eswatini",
    value: "eswatini",
    description:
      "Landlocked country in Southern Africa known for its stunning landscapes, including mountains and savannas, as well as its rich cultural heritage",
  },
  {
    label: "Gävle, X, SE",
    value: "gavle_x_se",
    description:
      "City in Sweden known for its historic buildings, vibrant cultural scene, and beautiful waterfront location",
  },
  {
    label: "Paraguay",
    value: "paraguay",
    description:
      "Landlocked country in South America known for its diverse ecosystems, including the Gran Chaco region, as well as its Guarani culture and Jesuit missions",
  },
  {
    label: "Jamaica",
    value: "jamaica",
    description:
      "Caribbean island nation known for its stunning beaches, reggae music, and vibrant culture",
  },
  {
    label: "Costa Rica",
    value: "costa_rica",
    description:
      "Central American country known for its stunning biodiversity, including rainforests, volcanoes, and beaches, as well as its commitment to environmental conservation",
  },
  {
    label: "Hainan Sheng, CN",
    value: "hainan_sheng_cn",
    description:
      "Tropical island province in southern China known for its beautiful beaches, rainforests, and cultural attractions",
  },
  {
    label: "China Northwest grid, CN",
    value: "china_northwest_grid_cn",
    description:
      "Grid region in China covering the northwest part of the country, known for its diverse landscapes and cultural heritage",
  },
  {
    label: "Albania",
    value: "albania",
    description:
      "Balkan country known for its stunning coastline, rugged mountains, and rich history, including ancient ruins and Ottoman architecture",
  },
  {
    label: "Europe and Eurasia",
    value: "europe_and_eurasia",
    description:
      "Geopolitical region encompassing Europe and parts of Asia, representing a diverse area with rich history, cultures, and economies",
  },
  {
    label: "Guyana",
    value: "guyana",
    description:
      "South American country known for its pristine rainforests, diverse wildlife, and cultural blend of Caribbean and South American influences",
  },
  {
    label: "Nicaragua",
    value: "nicaragua",
    description:
      "Central American country known for its stunning lakes, volcanoes, and colonial architecture, as well as its vibrant culture and history",
  },
  {
    label: "Tunisia",
    value: "tunisia",
    description:
      "North African country known for its stunning Mediterranean beaches, ancient ruins, and vibrant culture",
  },
  {
    label: "Botswana",
    value: "botswana",
    description:
      "Landlocked country in Southern Africa known for its stunning wilderness areas, including the Okavango Delta and Kalahari Desert, as well as its vibrant wildlife",
  },
  {
    label: "Uruguay",
    value: "uruguay",
    description:
      "South American country known for its beautiful beaches, historic cities like Montevideo and Colonia del Sacramento, and progressive social policies",
  },
  {
    label: "Missouri, US",
    value: "missouri_us",
    description:
      "Midwestern US state known for its diverse landscapes, including the Ozark Mountains and Mississippi River, as well as its cultural contributions to jazz and barbecue",
  },
  {
    label: "Cape Town, WC, ZA",
    value: "cape_town_wc_za",
    description:
      "South African city known for its stunning natural beauty, including Table Mountain and nearby vineyards, as well as its diverse culture and vibrant arts scene",
  },
  {
    label: "Tokyo, 13, JP",
    value: "tokyo_13_jp",
    description:
      "Capital city of Japan known for its vibrant urban culture, historic temples, and cutting-edge technology",
  },
  {
    label: "North Dakota, US",
    value: "north_dakota_us",
    description:
      "Midwestern US state known for its wide-open spaces, including the Badlands and prairies, as well as its strong agricultural economy",
  },
  {
    label: "Tasmania, AU",
    value: "tasmania_au",
    description:
      "Australian island state known for its stunning natural beauty, including rugged coastlines, lush rainforests, and unique wildlife like the Tasmanian devil",
  },
  {
    label: "Arizona, US",
    value: "arizona_us",
    description:
      "Southwestern US state known for its stunning desert landscapes, including the Grand Canyon, as well as its vibrant cities like Phoenix and Tucson",
  },
  {
    label: "Iraq",
    value: "iraq",
    description:
      "Middle Eastern country known for its ancient history, rich cultural heritage, and diverse landscapes, including the Tigris and Euphrates rivers",
  },
  {
    label: "Syrian Arab Republic",
    value: "syrian_arab_republic",
    description:
      "Middle Eastern country known for its rich history, diverse cultural heritage, and ongoing civil conflict",
  },
  {
    label: "South Dakota, US",
    value: "south_dakota_us",
    description:
      "Midwestern US state known for its stunning landscapes, including the Black Hills and Badlands, as well as its Native American heritage",
  },
  {
    label: "Gabon",
    value: "gabon",
    description:
      "Central African country known for its lush rainforests, diverse wildlife, and rich oil reserves",
  },
  {
    label: "Colorado, US",
    value: "colorado_us",
    description:
      "Western US state known for its stunning Rocky Mountain landscapes, outdoor recreational opportunities, and vibrant cities like Denver and Boulder",
  },
  {
    label: "Wellington, WGN, NZ",
    value: "wellington_wgn_nz",
    description:
      "Capital city of New Zealand known for its stunning harbor, vibrant arts scene, and proximity to outdoor recreational opportunities",
  },
  {
    label: "New South Wales, AU",
    value: "new_south_wales_au",
    description:
      "Australian state known for its stunning coastal cities, including Sydney and Newcastle, as well as its diverse landscapes and cultural attractions",
  },
  {
    label: "Ethiopia",
    value: "ethiopia",
    description:
      "Landlocked country in the Horn of Africa known for its rich history, diverse cultures, and stunning landscapes, including the Simien Mountains and Great Rift Valley",
  },
  {
    label: "Wyoming, US",
    value: "wyoming_us",
    description:
      "Western US state known for its stunning natural landscapes, including Yellowstone National Park, as well as its cowboy culture and outdoor recreational opportunities",
  },
  {
    label: "Oceania",
    value: "oceania",
    description:
      "Region encompassing the islands of the tropical Pacific Ocean, known for its stunning natural beauty, diverse cultures, and unique ecosystems",
  },
  {
    label: "WECC Northwest, US",
    value: "wecc_northwest_us",
    description:
      "Region in the United States served by the Western Electricity Coordinating Council, encompassing the Pacific Northwest states",
  },
  {
    label: "Uzbekistan",
    value: "uzbekistan",
    description:
      "Central Asian country known for its rich history along the Silk Road, stunning Islamic architecture, and vibrant culture",
  },
  {
    label: "Panama",
    value: "panama",
    description:
      "Central American country known for its famous canal, stunning biodiversity, and vibrant culture",
  },
  {
    label: "Sri Lanka",
    value: "sri_lanka",
    description:
      "Island nation in South Asia known for its rich Buddhist heritage, stunning beaches, and lush tea plantations",
  },
  {
    label: "MRO East, US",
    value: "mro_east_us",
    description:
      "Region in the United States served by the Midcontinent Independent System Operator, covering the eastern part of the MRO footprint",
  },
  {
    label: "Milano, IT",
    value: "milano_it",
    description:
      "City in northern Italy known for its fashion industry, historic landmarks, and vibrant cultural scene",
  },
  {
    label: "Guinea",
    value: "guinea",
    description:
      "West African country known for its diverse landscapes, including rainforests, savannas, and coastal plains, as well as its rich cultural heritage",
  },
  {
    label: "Honduras",
    value: "honduras",
    description:
      "Central American country known for its stunning Caribbean and Pacific coastlines, ancient Mayan ruins, and diverse ecosystems",
  },
  {
    label: "Qatar",
    value: "qatar",
    description:
      "Middle Eastern country known for its futuristic skyline, rich cultural heritage, and vast oil and gas reserves",
  },
  {
    label: "Macedonia, The former Yugoslav Republic of",
    value: "macedonia_the_former_yugoslav_republic_of",
    description:
      "Landlocked country in the Balkans known for its rich history, diverse landscapes, and cultural heritage",
  },
  {
    label: "Guatemala",
    value: "guatemala",
    description:
      "Central American country known for its ancient Mayan ruins, vibrant indigenous culture, and stunning landscapes, including volcanoes, lakes, and rainforests",
  },
  {
    label: "Congo",
    value: "congo",
    description:
      "Central African country known for its stunning rainforests, diverse wildlife, and vibrant culture",
  },
  {
    label: "Central China grid, CN",
    value: "central_china_grid_cn",
    description:
      "Grid region in China covering the central part of the country, known for its diverse landscapes and cultural heritage",
  },
  {
    label: "Algeria",
    value: "algeria",
    description:
      "North African country known for its vast Sahara Desert, ancient Roman ruins, and diverse cultures, including Berber, Arab, and French influences",
  },
  {
    label: "Rhode Island, US",
    value: "rhode_island_us",
    description:
      "New England US state known for its picturesque coastline, historic landmarks, and vibrant cultural scene",
  },
  {
    label: "Mongolia",
    value: "mongolia",
    description:
      "Landlocked country in East Asia known for its vast steppes, nomadic culture, and rich history, including the legacy of Genghis Khan",
  },
  {
    label: "Cuba",
    value: "cuba",
    description:
      "Caribbean island nation known for its vibrant culture, historic landmarks, and stunning beaches, as well as its unique political and economic system",
  },
  {
    label: "Pakistan",
    value: "pakistan",
    description:
      "South Asian country known for its rich history, diverse cultures, and stunning landscapes, including the Himalayas, deserts, and coastline along the Arabian Sea",
  },
  {
    label: "South Australia, AU",
    value: "south_australia_au",
    description:
      "Australian state known for its diverse landscapes, including Outback deserts, wine regions, and stunning coastline, as well as its vibrant capital city, Adelaide",
  },
  {
    label: "Montana, US",
    value: "montana_us",
    description:
      "Western US state known for its stunning Rocky Mountain landscapes, wide-open spaces, and outdoor recreational opportunities",
  },
  {
    label: "Philippines",
    value: "philippines",
    description:
      "Southeast Asian country known for its stunning beaches, vibrant cities, and rich cultural heritage, including Spanish colonial architecture and vibrant festivals",
  },
  {
    label: "New York, US",
    value: "new_york_us",
    description:
      "Northeastern US state known for its iconic landmarks, including New York City, Niagara Falls, and the Adirondack Mountains, as well as its vibrant culture and diverse communities",
  },
  {
    label: "Kenya",
    value: "kenya",
    description:
      "East African country known for its stunning landscapes, including savannas, mountains, and beaches, as well as its diverse wildlife and vibrant culture",
  },
  {
    label: "Azerbaijan",
    value: "azerbaijan",
    description:
      "Transcontinental country in the South Caucasus region known for its rich cultural heritage, ancient landmarks, and vibrant capital city, Baku",
  },
  {
    label: "Dublin, IE",
    value: "dublin_ie",
    description:
      "Capital city of Ireland known for its rich history, vibrant cultural scene, and friendly locals, as well as its historic landmarks like Dublin Castle and St. Patrick's Cathedral",
  },
  {
    label: "Côte d'Ivoire",
    value: "cote_divoire",
    description:
      "West African country known for its diverse cultures, stunning beaches, and vibrant music and dance traditions",
  },
  {
    label: "Myanmar",
    value: "myanmar",
    description:
      "Southeast Asian country known for its rich history, diverse cultures, and stunning landscapes, including ancient temples, lush jungles, and pristine beaches",
  },
  {
    label: "Quebec, QC, CA",
    value: "quebec_qc_ca",
    description:
      "Canadian province known for its French heritage, vibrant cities like Montreal and Quebec City, and stunning natural landscapes, including the Laurentian Mountains and St. Lawrence River",
  },
  {
    label: "Puerto Rico Miscellaneous, US",
    value: "puerto_rico_miscellaneous_us",
    description:
      "Region in the United States encompassing various activities and areas related to Puerto Rico, an unincorporated territory of the US",
  },
  {
    label: "Saitama, 11, JP",
    value: "saitama_11_jp",
    description:
      "Prefecture in Japan known for its proximity to Tokyo, rich history, and diverse attractions, including traditional festivals, historic sites, and natural landscapes",
  },
  {
    label: "Brunei Darussalam",
    value: "brunei_darussalam",
    description:
      "Southeast Asian country known for its rich cultural heritage, lush rainforests, and modern capital city, Bandar Seri Begawan",
  },
  {
    label: "Cameroon",
    value: "cameroon",
    description:
      "Central African country known for its diverse landscapes, including rainforests, savannas, and mountains, as well as its rich cultural heritage and vibrant cities",
  },
  {
    label: "Angola",
    value: "angola",
    description:
      "Southern African country known for its stunning natural landscapes, diverse wildlife, and vibrant culture, as well as its oil and diamond industries",
  },
  {
    label: "Vermont, US",
    value: "vermont_us",
    description:
      "New England US state known for its stunning fall foliage, charming small towns, and outdoor recreational opportunities, including skiing and hiking",
  },
  {
    label: "RFC West, US",
    value: "rfc_west_us",
    description:
      "Region in the United States served by the ReliabilityFirst Corporation, covering the western part of its service area",
  },
  {
    label: "Ecuador",
    value: "ecuador",
    description:
      "South American country known for its stunning natural landscapes, including the Amazon rainforest, Andean highlands, and Galápagos Islands, as well as its rich biodiversity and vibrant culture",
  },
  {
    label: "SERC Virginia/Carolina, US",
    value: "serc_virginia_carolina_us",
    description:
      "Region in the United States served by the Southeastern Electric Reliability Council, covering the states of Virginia and North Carolina",
  },
  {
    label: "Venezuela",
    value: "venezuela",
    description:
      "South American country known for its stunning natural landscapes, including the Andes Mountains, Amazon rainforest, and Caribbean coastline, as well as its rich cultural heritage and oil reserves",
  },
  {
    label: "Mozambique",
    value: "mozambique",
    description:
      "Southeast African country known for its stunning coastline, diverse wildlife, and vibrant culture, as well as its Portuguese colonial heritage",
  },
  {
    label: "French Guiana",
    value: "french_guiana",
    description:
      "Overseas department of France located on the northeastern coast of South America, known for its pristine rainforests, diverse wildlife, and space launch site",
  },
  {
    label: "Chad",
    value: "chad",
    description:
      "Landlocked country in north-central Africa known for its diverse landscapes, including deserts, savannas, and lakes, as well as its rich cultural heritage",
  },
  {
    label: "ERCOT All, US",
    value: "ercot_all_us",
    description:
      "Region in the United States served by the Electric Reliability Council of Texas, encompassing the entire ERCOT footprint",
  },
  {
    label: "Senegal",
    value: "senegal",
    description:
      "West African country known for its vibrant culture, stunning beaches, and rich history, as well as its hospitality and musical traditions",
  },
  {
    label: "Armenia",
    value: "armenia",
    description:
      "Landlocked country in the South Caucasus region known for its ancient history, stunning landscapes, and vibrant culture, as well as its distinctive cuisine and brandy",
  },
  {
    label: "Utah, US",
    value: "utah_us",
    description:
      "Western US state known for its stunning desert landscapes, including Arches and Canyonlands national parks, as well as its vibrant cities like Salt Lake City and Park City",
  },
  {
    label: "Nebraska, US",
    value: "nebraska_us",
    description:
      "Midwestern US state known for its wide-open plains, agricultural heritage, and vibrant cities like Omaha and Lincoln",
  },
  {
    label: "Kyrgyzstan",
    value: "kyrgyzstan",
    description:
      "Landlocked country in Central Asia known for its stunning mountain landscapes, including the Tien Shan range, as well as its nomadic culture and hospitality",
  },
  {
    label: "New Jersey, US",
    value: "new_jersey_us",
    description:
      "Mid-Atlantic US state known for its stunning beaches, diverse culture, and vibrant cities like Newark and Jersey City, as well as its proximity to New York City",
  },
  {
    label: "Dubai, DU, AE",
    value: "dubai_du_ae",
    description:
      "City in the United Arab Emirates known for its stunning modern architecture, luxury shopping, and vibrant nightlife, as well as its desert landscapes and cultural attractions",
  },
  {
    label: "Morocco",
    value: "morocco",
    description:
      "North African country known for its rich history, diverse landscapes, and vibrant culture, as well as its stunning cities like Marrakech, Fez, and Casablanca",
  },
  {
    label: "Bahrain",
    value: "bahrain",
    description:
      "Island country in the Persian Gulf known for its modern architecture, vibrant culture, and historic sites, as well as its status as a financial and commercial hub",
  },
  {
    label: "Bolivia, Plurinational State of",
    value: "bolivia_plurinational_state_of",
    description:
      "Landlocked country in South America known for its stunning Andean landscapes, diverse ecosystems, and vibrant indigenous culture",
  },
  {
    label: "Australian Capital Territory, AU",
    value: "australian_capital_territory_au",
    description:
      "Territory in southeast Australia known for its capital city, Canberra, as well as its political significance, cultural institutions, and beautiful landscapes",
  },
  {
    label: "Moldova, Republic of",
    value: "moldova_republic_of",
    description:
      "Landlocked country in Eastern Europe known for its rich cultural heritage, including historic monasteries, vineyards, and traditional handicrafts",
  },
  {
    label: "North China grid, CN",
    value: "north_china_grid_cn",
    description:
      "Grid region in China covering the northern part of the country, known for its diverse landscapes and cultural heritage",
  },
  {
    label: "Eritrea",
    value: "eritrea",
    description:
      "East African country known for its stunning Red Sea coastline, diverse marine life, and rich cultural heritage, as well as its history of independence struggles",
  },
  {
    label: "Kansas, US",
    value: "kansas_us",
    description:
      "Midwestern US state known for its vast prairies, agricultural heritage, and vibrant cities like Wichita and Topeka",
  },
  {
    label: "Oslo, 03, NO",
    value: "oslo_03_no",
    description:
      "Capital city of Norway known for its stunning waterfront, historic landmarks, and vibrant cultural scene, as well as its status as a center for maritime trade and innovation",
  },
  {
    label: "Djibouti",
    value: "djibouti",
    description:
      "East African country known for its strategic location at the mouth of the Red Sea, stunning landscapes, and vibrant culture, as well as its role as a trade hub and military outpost",
  },
  {
    label: "Libya",
    value: "libya",
    description:
      "North African country known for its stunning desert landscapes, ancient ruins, and rich cultural heritage, as well as its history of political unrest and conflict",
  },
  {
    label: "Congo, The Democratic Republic of the",
    value: "congo_the_democratic_republic_of_the",
    description:
      "Central African country known for its vast rainforests, diverse wildlife, and rich mineral resources, as well as its history of conflict and instability",
  },
  {
    label: "Macao",
    value: "macao",
    description:
      "Special Administrative Region of China known for its vibrant casinos, historic landmarks, and blend of Portuguese and Chinese cultures",
  },
  {
    label: "Saint Martin (French Part)",
    value: "saint_martin_french_part",
    description:
      "Caribbean island split between France and the Netherlands, known for its stunning beaches, vibrant nightlife, and duty-free shopping",
  },
  {
    label: "Gibraltar",
    value: "gibraltar",
    description:
      "British Overseas Territory located at the southern tip of the Iberian Peninsula, known for its iconic rock, stunning views, and strategic importance",
  },
  {
    label: "Delaware, US",
    value: "delaware_us",
    description:
      "Mid-Atlantic US state known for its colonial history, beautiful beaches, and tax-free shopping, as well as its role in American political and cultural life",
  },
  {
    label: "Suriname",
    value: "suriname",
    description:
      "South American country known for its pristine rainforests, diverse wildlife, and vibrant culture, as well as its rich history as a former Dutch colony",
  },
  {
    label: "Puerto Rico (see also separate entry under PR), US",
    value: "puerto_rico_see_also_separate_entry_under_pr_us",
    description:
      "Unincorporated territory of the United States located in the northeastern Caribbean, known for its stunning beaches, vibrant culture, and historic landmarks",
  },
  {
    label: "Niger",
    value: "niger",
    description:
      "Landlocked country in West Africa known for its vast deserts, diverse wildlife, and vibrant culture, as well as its history as a crossroads of trade and culture",
  },
  {
    label: "Tahiti Fa'a'ā, PF",
    value: "tahiti_fa_a_a_pf",
    description:
      "Largest island in French Polynesia known for its stunning beaches, lush rainforests, and vibrant culture, as well as its role as a popular tourist destination",
  },
  {
    label: "Turkmenistan",
    value: "turkmenistan",
    description:
      "Central Asian country known for its stunning desert landscapes, ancient Silk Road cities, and rich cultural heritage, as well as its vast natural gas reserves",
  },
  {
    label: "Namibia",
    value: "namibia",
    description:
      "Southern African country known for its stunning desert landscapes, diverse wildlife, and vibrant culture, as well as its status as one of the least densely populated countries in the world",
  },
  {
    label: "Afghanistan",
    value: "afghanistan",
    description:
      "Landlocked country in South Asia known for its rugged mountains, ancient landmarks, and rich cultural heritage, as well as its history as a crossroads of civilizations",
  },
  {
    label: "Rwanda",
    value: "rwanda",
    description:
      "Landlocked country in East Africa known for its stunning scenery, diverse wildlife, and vibrant culture, as well as its remarkable recovery from the 1994 genocide",
  },
  {
    label: "Solomon Islands",
    value: "solomon_islands",
    description:
      "Pacific island country known for its stunning natural beauty, diverse marine life, and vibrant culture, as well as its role in World War II history",
  },
  {
    label: "Mauritania",
    value: "mauritania",
    description:
      "Northwest African country known for its vast desert landscapes, rich Islamic heritage, and diverse cultures, as well as its role as a gateway between North Africa and sub-Saharan Africa",
  },
  {
    label: "Papua New Guinea",
    value: "papua_new_guinea",
    description:
      "Pacific island country known for its stunning natural landscapes, diverse cultures, and rich biodiversity, as well as its unique tribal traditions and languages",
  },
  {
    label: "Nevada, US",
    value: "nevada_us",
    description:
      "Western US state known for its iconic Las Vegas Strip, stunning desert landscapes, and outdoor recreational opportunities, as well as its role in the mining and entertainment industries",
  },
  {
    label: "Saint Barthélemy",
    value: "saint_barthelemy",
    description:
      "Caribbean island known for its stunning beaches, vibrant nightlife, and luxury resorts, as well as its status as an overseas collectivity of France",
  },
  {
    label: "Alaska, US",
    value: "alaska_us",
    description:
      "Northern US state known for its stunning natural landscapes, including mountains, glaciers, and fjords, as well as its unique wildlife and indigenous cultures",
  },
  {
    label: "Corse-du-Sud, FR",
    value: "corse_du_sud_fr",
    description:
      "Department of France located on the island of Corsica, known for its stunning coastline, rugged mountains, and vibrant culture, as well as its historic sites and outdoor recreational opportunities",
  },
  {
    label: "El Salvador",
    value: "el_salvador",
    description:
      "Central American country known for its stunning Pacific coast beaches, lush rainforests, and vibrant culture, as well as its history of civil conflict and natural disasters",
  },
  {
    label: "French Polynesia",
    value: "french_polynesia",
    description:
      "Overseas collectivity of France located in the South Pacific Ocean, known for its stunning islands, crystal-clear lagoons, and vibrant Polynesian culture",
  },
  {
    label: "Fiji",
    value: "fiji",
    description:
      "Pacific island nation known for its stunning beaches, lush rainforests, and vibrant coral reefs, as well as its warm hospitality and rich cultural traditions",
  },
  {
    label: "Uganda",
    value: "uganda",
    description:
      "Landlocked country in East Africa known for its diverse landscapes, including lush rainforests, savannas, and snow-capped mountains, as well as its rich wildlife and vibrant culture",
  },
  {
    label: "Liberia",
    value: "liberia",
    description:
      "West African country known for its stunning beaches, lush rainforests, and vibrant culture, as well as its history as a haven for freed American slaves",
  },
  {
    label: "China Northeast grid, CN",
    value: "china_northeast_grid_cn",
    description:
      "Grid region in China covering the northeastern part of the country, known for its heavy industry, rich natural resources, and diverse landscapes",
  },
  {
    label: "China Southern grid, CN",
    value: "china_southern_grid_cn",
    description:
      "Grid region in China covering the southern part of the country, known for its diverse landscapes, including mountains, rivers, and coastal areas, as well as its rapid economic development",
  },
  {
    label: "Réunion",
    value: "reunion",
    description:
      "French overseas department located in the Indian Ocean, known for its stunning beaches, lush rainforests, and active volcanoes, as well as its vibrant Creole culture",
  },
  {
    label: "Guadeloupe",
    value: "guadeloupe",
    description:
      "Caribbean overseas department of France known for its stunning beaches, lush rainforests, and vibrant Creole culture, as well as its historic landmarks and rum distilleries",
  },
  {
    label: "Connecticut, US",
    value: "connecticut_us",
    description:
      "New England US state known for its picturesque coastline, charming historic towns, and vibrant cultural scene, as well as its contributions to American literature and industry",
  },
  {
    label: "Corscia, 2B, FR",
    value: "corscia_2b_fr",
    description:
      "French island located in the Mediterranean Sea, known for its stunning coastline, rugged mountains, and vibrant culture, as well as its historic sites and outdoor recreational opportunities",
  },
  {
    label: "Mayotte",
    value: "mayotte",
    description:
      "French overseas department located in the Indian Ocean, known for its stunning beaches, coral reefs, and diverse marine life, as well as its rich multicultural heritage",
  },
  {
    label: "Saint Pierre and Miquelon",
    value: "saint_pierre_and_miquelon",
    description:
      "French territorial collectivity located off the coast of Newfoundland, Canada, known for its stunning coastal scenery, vibrant fishing industry, and rich maritime history",
  },
  {
    label: "East China grid, CN",
    value: "east_china_grid_cn",
    description:
      "Grid region in China covering the eastern part of the country, known for its dense population, bustling cities, and vibrant economy, as well as its historic landmarks and cultural heritage",
  },
  {
    label: "Barbados",
    value: "barbados",
    description:
      "Caribbean island nation known for its stunning beaches, vibrant nightlife, and rich cultural heritage, as well as its warm hospitality and rum production",
  },
];

export const units = [
  {
    label: "kg/TB-hour",
    value: "kg_TB-hour",
    description: "Kilograms per terabyte-hour",
  },
  { label: "kg/eur", value: "kg_eur", description: "Kilograms per euro" },
  {
    label: "kg/kWh",
    value: "kg_kWh",
    description: "Kilograms per kilowatt-hour",
  },
  { label: "kg/m3", value: "kg_m3", description: "Kilograms per cubic meter" },
  {
    label: "kg/tonne-km",
    value: "kg_tonne-km",
    description: "Kilograms per tonne-kilometer",
  },
  { label: "kg/usd", value: "kg_usd", description: "Kilograms per US dollar" },
  { label: "kg/kg", value: "kg_kg", description: "Kilograms per kilogram" },
  {
    label: "kg/tonne",
    value: "kg_tonne",
    description: "Kilograms per metric ton",
  },
  { label: "kg/km", value: "kg_km", description: "Kilograms per kilometer" },
  {
    label: "kg/MMBTU",
    value: "kg_MMBTU",
    description: "Kilograms per million British thermal units",
  },
  {
    label: "kg/instance-hour",
    value: "kg_instance-hour",
    description: "Kilograms per instance-hour",
  },
  { label: "kg/l", value: "kg_l", description: "Kilograms per liter" },
  {
    label: "kg/short ton",
    value: "kg_short_ton",
    description: "Kilograms per short ton",
  },
  {
    label: "kg/passenger-km",
    value: "kg_passenger-km",
    description: "Kilograms per passenger-kilometer",
  },
  {
    label: "kg/CPU-hour",
    value: "kg_CPU-hour",
    description: "Kilograms per CPU-hour",
  },
  {
    label: "kg/room-night",
    value: "kg_room-night",
    description: "Kilograms per room-night",
  },
  { label: "kg/GB", value: "kg_GB", description: "Kilograms per gigabyte" },
  { label: "kg/m2", value: "kg_m2", description: "Kilograms per square meter" },
  {
    label: "kg/scf",
    value: "kg_scf",
    description: "Kilograms per standard cubic foot",
  },
  {
    label: "kg/gbp",
    value: "kg_gbp",
    description: "Kilograms per British pound",
  },
  {
    label: "kg/GB-hour",
    value: "kg_GB-hour",
    description: "Kilograms per gigabyte-hour",
  },
  {
    label: "kg/gal (US)",
    value: "kg_gal_US",
    description: "Kilograms per gallon (US)",
  },
  {
    label: "kg/TEU-km",
    value: "kg_TEU-km",
    description: "Kilograms per twenty-foot equivalent unit-kilometer",
  },
  { label: "kg/mile", value: "kg_mile", description: "Kilograms per mile" },
  {
    label: "kg/number",
    value: "kg_number",
    description: "Kilograms per number",
  },
  { label: "kg/GJ", value: "kg_GJ", description: "Kilograms per gigajoule" },
  {
    label: "kg/passenger-mile",
    value: "kg_passenger-mile",
    description: "Kilograms per passenger-mile",
  },
  { label: "kg/hour", value: "kg_hour", description: "Kilograms per hour" },
  { label: "kg/m", value: "kg_m", description: "Kilograms per meter" },
  {
    label: "kg/ton-mile",
    value: "kg_ton-mile",
    description: "Kilograms per ton-mile",
  },
  { label: "kg/g", value: "kg_g", description: "Kilograms per gram" },
  {
    label: "kg/container-moved",
    value: "kg_container-moved",
    description: "Kilograms per container-moved",
  },
  { label: "kg/ml", value: "kg_ml", description: "Kilograms per milliliter" },
  {
    label: "kg/person-night",
    value: "kg_person-night",
    description: "Kilograms per person-night",
  },
];
