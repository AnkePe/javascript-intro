const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;
const add = (fee, extra) => fee + extra
fees.forEach (fee => 
              
document.write (wrapWithTag(fee.title, `h2`));
extras.forEach (extra => 
    document.write (wrapWithTag(`€ ${extra.price} $(extra.title}`, `p`)), wrapWithTag(`u betaalt: `€ ${extra.price + fee.price}`, `p`);
document.write (`</ul>`);
              );
