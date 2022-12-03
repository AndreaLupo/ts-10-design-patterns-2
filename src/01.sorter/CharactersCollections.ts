import { Sortable } from "./Sorter";

export class CharactersCollections implements Sortable {
  constructor(public data: string) { }

  get length(): number {
    return this.data.length;
  };
  compare(leftIndex: number, rightIndex: number): boolean {
    const leftChar = this.data[leftIndex].toLowerCase();
    const rightChar = this.data[rightIndex].toLowerCase();
    return leftChar > rightChar;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftChar = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftChar;
    this.data = characters.join('');
  }

}