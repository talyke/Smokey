//node test to see my dogs breed url.href API setter
//run 'node test' in cmd to see results

//my dog's name
const name = 'Smokey';
console.log(name);

//she is a female Canus lupas familiaris but we usually call them dogs
const species = 'dog';
console.log(species);

//Just to claify Smokey is a girl, my girl!
const sex = 'female';
console.log(sex);

//my older sister has pedigree doodles and gifted me her DNA kit, thanks Brooke!
//importing module URL, technically 'url'
const http = require('url');

const breedURL = new URL('http://embk.me/smokey93?utm_campaign=cns_ref_dog_pub_profile&utm_medium=other&utm_source=embark');
//create a serialized url
const href = breedURL.href;

breedURL.href ='http://embk.me/smokey93?utm_campaign=cns_ref_dog_pub_profile&utm_medium=other&utm_source=embark';

console.log(href);

//this shows the origin of the serialized url breedURL.href
console.log(breedURL.origin);

