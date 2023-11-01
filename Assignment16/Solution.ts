const family = ["Tehreem", "Ghayoor", "Rabis", "M Ali", "Nad e Ali"];
const invitation = "You are invited to Dinner";

console.log("Number of members invited: ", family.length);

for (const guest of family){
    console.log(guest + " "+ invitation);
}
