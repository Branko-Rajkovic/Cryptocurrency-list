// converts ISO string to CET time
export function convertToCET(isoString) {
  // Create a Date object from the ISO string
  const date = new Date(isoString);

  // Format the date to CET using toLocaleString
  const cetTime = date.toLocaleString("en-GB", {
    timeZone: "Europe/Berlin", // CET timezone
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return cetTime;
}

//converts UNIX time to CET
export function convertUnixToCET(unixTimestamp) {
  // Convert UNIX timestamp to milliseconds
  const date = new Date(unixTimestamp * 1000);

  // Format the date to CET using toLocaleString
  const cetTime = date.toLocaleString("en-GB", {
    timeZone: "Europe/Berlin", // CET timezone
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return cetTime;
}

//takes an array with unit time in sub array of 2 el. and returns the array with CET
export function convertArrayToCET(arr) {
  return arr.map(([unixTimestamp, value]) => {
    // Convert UNIX timestamp to milliseconds and create a Date object
    const date = new Date(unixTimestamp);

    // Format the date to CET
    const cetTime = date.toLocaleString("en-GB", {
      timeZone: "Europe/Berlin", // CET timezone
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Return the new subarray with CET time and the original value
    return [cetTime, value];
  });
}
