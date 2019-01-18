const movies = [
    {
      actor: `Forest Whitaker`,
      film: `The Last King of Scotland`,
      age: 45
    }, {
      actor: `Daniel Day-Lewis`,
      film: `There Will Be Blood`,
      age: 50
    }, {
      actor: `Sean Penn`,
      film: `Milk`,
      age: 48
    }, {
      actor: `Jeff Bridges`,
      film: `Crazy Heart`,
      age: 60
    }, {
      actor: `Colin Firth`,
      film: `The King's Speech`,
      age: 50
    }, {
      actor: `Jean Dujardin`,
      film: `The Artist`,
      age: 39
    }, {
      actor: `Daniel Day-Lewis`,
      film: `Lincoln`,
      age: 55
    }, {
      actor: `Matthew McConaughey`,
      film: `Dallas Buyers Club`,
      age: 44
    }, {
      actor: `Eddie Redmayne`,
      film: `The Theory of Everything`,
      age: 33
    }, {
      actor: `Leonardo DiCaprio`,
      film: `The Revenant`,
      age: 41
    }
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

// const createList = films => {
//     return `
//     <ul> ${films
//         .map(film => wrapWithTag(film, `li`))
//         .join(``)   /*omdat er anders nog komma's staan tussen de versch li-items*/
//     }
//     </ul>`;
// }
// document.write(createList(films));
// console.log(createList(films))

movies.forEach (movie => console.log(movie.actor));

const orderByAge = (a,b) => b.age - a.age; /* normaal a - b maar nu moet oudste eerst */

console.table (movies.sort(orderByAge));


document.write (`<ul>`);
movies.forEach(movie => document.write(wrapWithTag(movie.actor, `li`)));
document.write (`</ul>`);

console.log( `Totale leeftijd:`, movies.reduce((total, movie) => total + movie.age, 0) );
