"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        // destructuring
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]        
                // if collection is an array of number
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // if collection is a string, do this
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
