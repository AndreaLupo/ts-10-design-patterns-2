import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharactersCollections } from "./CharactersCollections";

const numbersCollection = new NumbersCollection([10, 30, -5, 11]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollections('Xassdvvxcv');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);