interface Vehical {
    name: string;
    model: string;
    year: number;
}
  const Mehran: Vehical = {
    name: "Suzuki",
    model: "Mehran",
    year: 1995,
};
  
  const SuperStar: Vehical = {
    name: "Super Star",
    model: "150",
    year: 2018,
  };
  
  const Honda: Vehical = {
    name: "CB 70",
    model: "70 Cc",
    year: 2017,
  };
  
  // Print information about the countries
  console.log("Vehical Information:");
  console.log("Car:", Mehran);
  console.log("Bike:", SuperStar);
  console.log("Bike:", Honda);
