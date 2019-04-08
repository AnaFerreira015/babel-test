// import People from "../monorepo/plugin/src/classes/People";

// const main = async () => {
//     // O código funciona sem o cast .default, mas precisa adicionar um @ts-ignore
//     const People = (await import("./typescript/ts/src/classes/People")).default;

//     const people: any = new People("João Fradinho", "desenrolado");

//     people.person();
//   };
//   main();

// Funciona tanto da forma acima quanto da seguinte
// import("./typescript/ts/src/classes/People").then(People => {
//   const people: any = new People.default("João Fradinho", "desenrolado");

//   people.person();
// });

Promise.all([import("./typescript/ts/src/classes/People")]).then(([People]) => {
  const people: any = new People.default("João Fradinho", "desenrolado");

  people.person();
});