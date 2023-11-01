const family = ["Asif", "Ghayoor", "Rabis"];
const invitation = "You are invited to Dinner Tonight";

console.log("Sorry, we can only invite two people for dinner.");

while (family.length > 2) {
  const removedGuest = family.pop();
  console.log(removedGuest + ", I'm sorry, but I can't invite you to dinner.");
}

for (const guest of family) {
  console.log(guest + " " + invitation);
}

family.pop();
family.pop();

console.log("Updated guest list:", family);
