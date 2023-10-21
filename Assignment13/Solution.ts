const family: string[]= ["Tehreem", "Ghayoor", "Rabis"];
const invitation:string= "You are invited to Dinner Tonight";
console.log(family[0]+ " "+ invitation);
console.log(family[1]+ " "+ invitation);
console.log(family[2]+ " "+ invitation);
console.log(family[1]+ " "+ ": I Cannot join due to job");

family[1] = "Safdar Raza";
console.log(family[0]+ " "+ invitation);
console.log(family[1]+ " "+ invitation);
console.log(family[2]+ " "+ invitation);
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log(family + " "+ "Good News, I have found bigger table");
console.log("lets invite more guest");
// • Add one new guest to the beginning of your array.
const newGuest1 = "Faryal";
family.unshift(newGuest1);
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person on your list.
const middleIndex = Math.floor(family.length / 2);
const newGuest2 = "Tahir's Family";
family.splice(middleIndex, 0, newGuest2);
const newGuest3 = "Faryal's Family";
family.push(newGuest3);
for (const guest of family) {
  console.log(guest + " " + invitation);
}
