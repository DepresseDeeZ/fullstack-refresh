// Object Destructuring enables us to extract properties from objects into distinct variables
const favouriteFitm = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott",
};
// const title = favouriteFitm.title;
//My favourite film is ITY Gun starring Tom cruise.
// Scott and released in 1986.
// It's an action film that was directed by
// console.log(title);
const { title, year, genre, star, director } = favouriteFitm;
console.log(title, year, genre, star, director);
