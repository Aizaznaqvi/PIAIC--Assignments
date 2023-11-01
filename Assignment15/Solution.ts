const placeToVisit = ["Karbala", "Najaf", "Sham", "Makkah", "Madina"];
console.log("orignal format:", placeToVisit);

const sortedAlphabetically = [...placeToVisit].sort();
console.log("Alphatetical order:" , sortedAlphabetically);
console.log("orignal format:", placeToVisit);

const reverseSorted = [...placeToVisit].sort().reverse();
console.log("Reverse Sorted order:", reverseSorted);
console.log("Original order:", placeToVisit);

placeToVisit.reverse();
console.log("reverse only:", placeToVisit);
console.log("Original order:", placeToVisit);

placeToVisit.sort();
console.log("Alphabitical order:", placeToVisit);

placeToVisit.sort().reverse();
console.log("Reverce alplabatical order:", placeToVisit);
