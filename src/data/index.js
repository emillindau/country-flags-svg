const flags = require("./flags");

const countries = [
	{
		name: "Australia",
		demonym: "Australian",
		flag: flags.AUS,
		iso2: "AU",
		iso3: "AUS",
	},
	{
		name: "Austria",
		demonym: "Austrian",
		flag: flags.AUT,
		iso2: "AT",
		iso3: "AUT",
	},
	{
		name: "Azerbaijan",
		demonym: "Azerbaijani",
		flag: flags.AZE,
		iso2: "AZ",
		iso3: "AZE",
	},
	{
		name: "Bangladesh",
		demonym: "Bengali",
		flag: flags.BGD,
		iso2: "BD",
		iso3: "BGD",
	},
	{
		name: "Bahrain",
		demonym: "Bahraini",
		flag: flags.BHR,
		iso2: "BH",
		iso3: "BHR",
	},
	{
		name: "Belgium",
		demonym: "Belgian",
		flag: flags.BEL,
		iso2: "BE",
		iso3: "BEL",
	},
	{
		name: "Brazil",
		demonym: "Brazilian",
		flag: flags.BRA,
		iso2: "BR",
		iso3: "BRA",
	},
	{
		name: "Canada",
		demonym: "Canadian",
		flag: flags.CAN,
		iso2: "CA",
		iso3: "CAN",
	},
	{
		name: "Chile",
		demonym: "Chilean",
		flag: flags.CHL,
		iso2: "CL",
		iso3: "CHL",
	},
	{
		name: "China",
		demonym: "Chinese",
		flag: flags.CHN,
		iso2: "CN",
		iso3: "CHN",
	},
	{
		name: "Colombia",
		demonym: "Colombian",
		flag: flags.COL,
		iso2: "CO",
		iso3: "COL",
	},
	{
		name: "Croatia",
		demonym: "Croatian",
		flag: flags.HRV,
		iso2: "HR",
		iso3: "HRV",
	},
	{
		name: "Cyprus",
		demonym: "Cypriot",
		flag: flags.CYP,
		iso2: "CY",
		iso3: "CYP",
	},
	{
		name: "Czech Republic",
		demonym: "Czech",
		flag: flags.CZE,
		iso2: "CZ",
		iso3: "CZE",
	},
	{
		name: "Denmark",
		demonym: "Danish",
		flag: flags.DNK,
		iso2: "DK",
		iso3: "DNK",
	},
	{
		name: "Europe",
		demonym: "European",
		flag: flags.EUR,
		iso2: "EU",
		iso3: "EUR",
	},
	{
		name: "Estonia",
		demonym: "Estonian",
		flag: flags.EST,
		iso2: "EE",
		iso3: "EST",
	},
	{
		name: "Fiji",
		demonym: "Fijian",
		flag: flags.FJI,
		iso2: "FJ",
		iso3: "FJI",
	},
	{
		name: "Finland",
		demonym: "Finnish",
		flag: flags.FIN,
		iso2: "FI",
		iso3: "FIN",
	},
	{
		name: "France",
		demonym: "French",
		flag: flags.FRA,
		iso2: "FR",
		iso3: "FRA",
	},
	{
		name: "Germany",
		demonym: "German",
		flag: flags.DEU,
		iso2: "DE",
		iso3: "DEU",
	},
	{
		name: "Greece",
		demonym: "Greek",
		flag: flags.GRC,
		iso2: "GR",
		iso3: "GRC",
	},
	{
		name: "Hong Kong",
		demonym: "Hong Kongese",
		flag: flags.HKG,
		iso2: "HK",
		iso3: "HKG",
	},
	{
		name: "Hungary",
		demonym: "Hungarian",
		flag: flags.HUN,
		iso2: "HU",
		iso3: "HUN",
	},
	{
		name: "India",
		demonym: "Indian",
		flag: flags.IND,
		iso2: "IN",
		iso3: "IND",
	},
	{
		name: "Indonesia",
		demonym: "Indonesian",
		flag: flags.IDN,
		iso2: "ID",
		iso3: "IDN",
	},
	{
		name: "Ireland",
		demonym: "Irish",
		flag: flags.IRL,
		iso2: "IE",
		iso3: "IRL",
	},
	{
		name: "Italy",
		demonym: "Italian",
		flag: flags.ITA,
		iso2: "IT",
		iso3: "ITA",
	},
	{
		name: "Japan",
		demonym: "Japanese",
		flag: flags.JPN,
		iso2: "JP",
		iso3: "JPN",
	},
	{
		name: "Latvia",
		demonym: "Latvian",
		flag: flags.LVA,
		iso2: "LV",
		iso3: "LVA",
	},
	{
		name: "Liechtenstein",
		demonym: "Liechtensteiner",
		flag: flags.LIE,
		iso2: "LI",
		iso3: "LIE",
	},
	{
		name: "Lithuania",
		demonym: "Lithuanian",
		flag: flags.LTU,
		iso2: "LT",
		iso3: "LTU",
	},
	{
		name: "Luxembourg",
		demonym: "Luxembourgish",
		flag: flags.LUX,
		iso2: "LU",
		iso3: "LUX",
	},
	{
		name: "Malaysia",
		demonym: "Malaysian",
		flag: flags.MYS,
		iso2: "MY",
		iso3: "MYS",
	},
	{
		name: "Mauritius",
		demonym: "Mauritian",
		flag: flags.MUS,
		iso2: "MU",
		iso3: "MUS",
	},
	{
		name: "Mexico",
		demonym: "Mexican",
		flag: flags.MEX,
		iso2: "MX",
		iso3: "MEX",
	},
	{
		name: "Monaco",
		demonym: "Monegasque",
		flag: flags.MCO,
		iso2: "MC",
		iso3: "MCO",
	},
	{
		name: "Nepal",
		demonym: "Nepalese",
		flag: flags.NPL,
		iso2: "NP",
		iso3: "NPL",
	},
	{
		name: "Netherlands",
		demonym: "Dutch",
		flag: flags.NLD,
		iso2: "NL",
		iso3: "NLD",
	},
	{
		name: "New Zealand",
		demonym: "New Zealander",
		flag: flags.NZL,
		iso2: "NZ",
		iso3: "NZL",
	},
	{
		name: "Norway",
		demonym: "Norwegian",
		flag: flags.NOR,
		iso2: "NO",
		iso3: "NOR",
	},
	{
		name: "Panama",
		demonym: "Panamanian",
		flag: flags.PAN,
		iso2: "PA",
		iso3: "PAN",
	},
	{
		name: "Philippines",
		demonym: "Filipino",
		flag: flags.PHL,
		iso2: "PH",
		iso3: "PHL",
	},
	{
		name: "Poland",
		demonym: "Polish",
		flag: flags.POL,
		iso2: "PL",
		iso3: "POL",
	},
	{
		name: "Portugal",
		demonym: "Portuguese",
		flag: flags.PRT,
		iso2: "PT",
		iso3: "PRT",
	},
	{
		name: "Russia",
		demonym: "Russian",
		flag: flags.RUS,
		iso2: "RU",
		iso3: "RUS",
	},
	{
		name: "Singapore",
		demonym: "Singaporean",
		flag: flags.SGP,
		iso2: "SG",
		iso3: "SGP",
		altSpellings: ["SG", "Singapura", "Republik Singapura"],
	},	
	{
		name: "Sri Lanka",
		demonym: "Sri Lankan",
		flag: flags.LKA,
		iso2: "LK",
		iso3: "LKA",
	},
	{
		name: "Slovakia",
		demonym: "Slovak",
		flag: flags.SVK,
		iso2: "SK",
		iso3: "SVK",
	},
	{
		name: "Slovenia",
		demonym: "Slovenian",
		flag: flags.SVN,
		iso2: "SI",
		iso3: "SVN",
	},
	{
		name: "South Africa",
		demonym: "South African",
		flag: flags.ZAF,
		iso2: "ZA",
		iso3: "ZAF",
	},
	{
		name: "South Korea",
		demonym: "South Korean",
		flag: flags.KOR,
		iso2: "KR",
		iso3: "KOR",
		altSpellings: ["Republic of Korea"]
	},
	{
		name: "Spain",
		demonym: "Spanish",
		flag: flags.ESP,
		iso2: "ES",
		iso3: "ESP",
	},
	{
		name: "Sweden",
		demonym: "Swedish",
		flag: flags.SWE,
		iso2: "SE",
		iso3: "SWE",
	},
	{
		name: "Switzerland",
		demonym: "Swiss",
		flag: flags.CHE,
		iso2: "CH",
		iso3: "CHE",
	},
	{
		name: "Thailand",
		demonym: "Thai",
		flag: flags.THA,
		iso2: "TH",
		iso3: "THA",
	},
	{
		name: "Turkey",
		demonym: "Turkish",
		flag: flags.TUR,
		iso2: "TR",
		iso3: "TUR",
	},
	{
		name: "United Kingdom",
		altSpellings: ["UK"],
		demonym: "British",
		flag: flags.GBR,
		iso2: "GB",
		iso3: "GBR",
	},
	{
		name: "United States",
		altSpellings: ["USA"],
		demonym: "American",
		flag: flags.USA,
		iso2: "US",
		iso3: "USA",
	},
	{
		name: "United Arab Emirates",
		demonym: "Emirati",
		flag: flags.ARE,
		iso2: "AE",
		iso3: "ARE",
		altSpellings: ["AE", "UAE"],
	},
	{
		name: "Uruguay",
		demonym: "Uruguayan",
		flag: flags.URY,
		iso2: "UY",
		iso3: "URY",
	},
	{
		name: "Venezuela",
		demonym: "Venezuelan",
		flag: flags.VEN,
		iso2: "VE",
		iso3: "VEN",
	},
	{
		name: "Vietnam",
		demonym: "Vietnamese",
		flag: flags.VNM,
		iso2: "VN",
		iso3: "VNM",
		altSpellings: ["Viet Nam","Republic of Viet Nam","South Vietnam"]
	},
];

module.exports = {
	countries,
	flagUrls: flags,
};
