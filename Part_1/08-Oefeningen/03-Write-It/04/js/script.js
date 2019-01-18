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



const actors = movies.map (movie => movie.actor); /* nieuwe array waarbij ik de array movies map naar wat ik nodig heb */
console.table (actors);

const splitNames = actors.map (actor => actor.split (` `));
console.log (splitNames);


document.write (`<ul>`);
splitNames.forEach(name => document.write(wrapWithTag(name [1], `li`)));
document.write (`</ul>`);
