const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
  const newTitle = uCFirst(title);
  document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {       /* let words ipv const words*/
  let words = sentence.split(` `);  /*hier wordt elke zin een array van woorden*/
  console.log(words);
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); /*1e letter hoofdletter maken 
  en dan wordt die toevoegd aan uw words array, daarna slice om 2e letter eruit te halen*/
  return words.join(` `);   /* terug een zin van maken */
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);
