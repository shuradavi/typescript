// interface User {
// 	name: string;
// 	age: number;
// 	job: string;
// }

// const user2: User = {
// 	name: 'Alex',
// 	job: 'developer',
// 	age: 23,
// }

// type WindowStates = 'open' | 'closed' | 'minimized';
// const windowStatus: WindowStates = 'open'
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// function getLength(obj: string | string[]) {
// 	return obj.length
// }
// console.log(getLength(['name', 'surname', 'age']));

// function wrapInArray(obj: string | string[]) {
// 	if (typeof obj === "string") {
// 	  return [obj];
// 	}
// 	return obj;
// }
// console.log(wrapInArray(['alex']));

// type StringArray = Array<string>;
// const firstArray: StringArray = ['1', '2', '3' + '2', 'etc.'];
// console.log('first array: ', firstArray);
// type NumberArray = Array<number>;
// const secondArray: NumberArray = [1, 2, 3, 5 + 1, 2 + 2]
// console.log('second array: ', secondArray);
// type ObjectWithNameArray = Array<{ name: string }>
// const thirdArray: ObjectWithNameArray = [{ name: 'alex' }, { name: 'shura' }, { name: '123' }]
// console.log('third array: ', thirdArray );

interface Backpack<Type> {
	add: (obj: Type) => void;
	get: () => Type;
}
   
declare const backpack: Backpack<string>;   // НЕ КОМПИЛИРУЕТСЯ


const object = backpack.get()
console.log('object: ', object);
console.log(backpack.add('alex'));  



