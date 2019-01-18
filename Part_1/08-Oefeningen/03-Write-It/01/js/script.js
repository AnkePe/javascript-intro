const films = [
    `Hollywood aan de Schelde`,
    `A Prayer Before Dawn`,
    `Incredibles 2`,
    `Dogman`,
    `Will Tura, Hoop Doet leven`,
    `The Idol`,
    `De Kleine Heks`,
    `Den Skyldige`,   
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

/* andere manier - makkelijker */
document.write (`<h1> FILMHUIS KLAPPEI </h1>`);
document.write (`<ul>`);
films.forEach(film => document.write(wrapWithTag(film, `li`)));
document.write (`</ul>`);