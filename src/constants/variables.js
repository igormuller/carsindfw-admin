export const CAR_TYPE = [
  { value: "new", text: "New" },
  { value: "used", text: "Used" }
];

export const FUEL_TYPE = [
  { value: "diesel", text: "Diesel" },
  { value: "flex-fuel", text: "Flex" },
  { value: "gas", text: "Gasoline" },
  { value: "hybrid", text: "Hybrid" }
];

export const BODY_TYPE = [
  { value: "convertible", text: "Convertible" },
  { value: "coupe", text: "Coupe" },
  { value: "hatchback", text: "Hatchback" },
  { value: "minivan", text: "Minivan" },
  { value: "sedan", text: "Sedan" },
  { value: "suv", text: "SUV" },
  { value: "truck", text: "Truck" },
  { value: "van", text: "Van" },
  { value: "wagon", text: "Wagon" }
];

export const TRANSMISSION_TYPE = [
  { value: "manual", text: "Manual" },
  { value: "automatic", text: "Automatic" },
  { value: "cvt", text: "CVT" },
  { value: "evt", text: "EVT" },
  { value: "direct_drive", text: "Direct Drive" },
  { value: "shiftable_automatic", text: "Shiftable Automatic" },
  { value: "automated_manual", text: "Automated Manual" }
];

export const COLOR = [
  { value: "black", text: "Black" },
  { value: "blue", text: "Blue" },
  { value: "gray", text: "Gray" },
  { value: "red", text: "Red" },
  { value: "silver", text: "Silver" },
  { value: "white", text: "White" },
  { value: "unknown", text: "Unknown" }
];

export const DRIVE_TYPE = [
  { value: "AWD", text: "AWD" },
  { value: "4WD", text: "4WD" },
  { value: "FWD", text: "FWD" },
  { value: "RWD", text: "RWD" }
];

export const YEARS = getYears();

function getYears() {
  var years = [];
  var year = 1990;
  var date = new Date();
  var yearNow = date.getFullYear();
  for (year; year <= yearNow; year++) {
    years.push({ value: year, text: year });
  }
  return years;
}
