console.log(localStorage);
console.log(JSON);

localStorage.setItem(
  "arishka",
  JSON.stringify({ name: "Arishka", age: 21, beauty: "very-very much" })
);

const savedArishka = localStorage.getItem("arishka");
console.log("savedArishka", savedArishka);

const parsedArishka = JSON.parse(savedArishka);
console.log("parsedArishka", parsedArishka);

const arihaMyGirl = document.querySelector(".arishka");

console.log(arihaMyGirl);

arihaMyGirl.textContent = parsedArishka.name;

// localStorage.setItem("my-data", JSON.stringify({ name: "Mango", age: 2 }));

// const savedData = localStorage.getItem("my-data");
// console.log("savedData", savedData);

// const parsedData = JSON.parse(savedData);
// console.log("parsedData", parsedData);
