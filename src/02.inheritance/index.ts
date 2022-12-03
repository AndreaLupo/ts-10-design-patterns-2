import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 30, -5, 11, 24]);

numbersCollection.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollections('Xassdvvxcv');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(14);

linkedList.sort();
linkedList.print();
