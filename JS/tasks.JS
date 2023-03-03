// // ? по клику убирать кнопку и создать две кнопки

// const divBtn = document.querySelector('.btn')
// btn = divBtn.querySelectorAll('[type="button"]')
// console.log(btn)
// console.log(btn[0].nodeName)


// function removeButton() {
//   divBtn.replaceChildren()  //* удалить все дочерние элементы  
// }

// // btn[0].addEventListener ('click', () =>{
// // // removeButton();
// // let i =1
// // while (i<=2) {  
// // const newButtons = document.createElement('button', 'button') //* создаем 2 кнопки циклом
// // newButtons.textContent=`Новая кнпока${i} `
// // divBtn.append(newButtons)
// // i++
// // }
// // } )
// // removeButton(divBtn)
// // function removeButton () {
// //     if(btn.parentNode)
// //     btn.parentNode.removeChild(btn)  //* удалить дочерний элемент если не знаешь имени родителя
// // }
// // removeButton(divBtn)


// // const previousButtons = divBtn.innerHTML //* переписали при помощи InnerHTML Разметку
// // divBtn.innerHTML = `<div> новый див при помощи innerHTML </div> ${previousButtons}, <br> 'Это кнопки от предыдущей разметки'`

// // const testClass = document.querySelector('.testclass')
// // const testClassHTML = testClass.outerHTML 
// // console.log(testClassHTML)
// // testClass.outerHTML = `${testClassHTML} <br> 'еще один заголовок', <h2> новый заголовок</h2>`
// // testClass.outerHTML = ` `



// // var obj = ['a','b', 'c'];
// // console.log(Object.keys(obj)); // консоль: ['0', '1', '2']
// // console.log(Object.getOwnPropertyNames(obj)); //консоЛ ['0', '1', '2', length] //* отличие Keys от getOwnPropertyNames 
// const anotherDiv = document.createElement('div')
// anotherDiv.innerHTML = 'новый див'
// divBtn.before(anotherDiv)


// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic' },
//   { name: 'Zeros', value: 37 }
// ];

// const items1 = items.sort((a, b) => {
//   if (a.value > b.value)
//     return -1
// })
// console.log(items1)

// //! ВСЕ О КЛАССАХ 

// // class Animal {
// //   constructor (options) {
// //   this.name = options.name;
// //   this.age = options.age;
// //   this.hasTail = options.hasTail;
// //   }
// //   }

// //   const cat = new Animal ({
// //   name: 'cat',
// //   age: '5',
// //   hasTail: 'true'
// //   })


// // class Animal {
// //   static type = 'Animal';
// //   constructor(options) {
// //     this.name = options.name;
// //     this.age = options.age;
// //     this.hasTail = options.hasTail;
// //   }
// //   voice() { console.log('мфу-мфу') }
// // }
// // const cat = new Animal({
// //   name: 'cat',
// //   age: 6,
// //   hasTail: true
// // })

// // class FourLegs extends Animal {
// //   constructor(options) {
// //     super(options),
// //       this.color = options.color
// //   }
// //   voice() {
// //     console.log('гав-гав')
// //     super.voice();
// //   }
// //   get ageInfo() {
// //     return (this.age * 5 )
// //   }
// //   set ageInfo(newAge) {
// //     return (this.age = newAge)
// //   }
// // }

// // const dog = new FourLegs({
// //   name:'dog',
// //   age: 6,
// //   color:'black',
// //   hasTail: true
// // })

// // dog.ageInfo = 20

// // IIFE   можно использовать для инкапусляции, а затем вызывать функции внутри IIFE как методы объекта:

// // let foo = (function oneModule() {
// //   // внутренняя логика
// //     let something = "cool";
// //     let another = [1, 2, 3];
// //     function doSomething() {
// //       console.log(something);
// //     }
// //     function doAnother() {
// //       console.log(another.join(" ! "));
// //     }
// //   // внешний API
// //       return {
// //       doSomething: doSomething,
// //       doAnother: doAnother
// //     };
// //   })();

// //   foo.doSomething(); // cool
// //   foo.doAnother(); // 1 ! 2 ! 3

// //   console.log(something); // ReferenceError: something is not defined (внутренняя логика снаружи недоступна)

// // const test = (function iife() {
// //   function resArray(num) {
// //     let arr = []
// //     for (let i = 0; i < num; i++) {
// //       let res = i * 5
// //       arr.push(res)
// //     }
// //     return arr
// //   }

// //   function just() {
// //     return 'упырь'
// //   }

// //   return {
// //     resArray: resArray,
// //     just: just
// //   }} ())

// //   console.log(test.resArray(6))
// //   console.log(test.just())

// //! инкапсуляция при помощи функции конструктора 
// // function User (name, lastname, age) {
// //   let toy = 'mummybear' // * объявляем переменную которая видна только в внутри конструктора
// //   this.name1 = name;
// //   this.lastname1 = lastname;
// //   this.age1 = age;
// // }

// // const newUser = new User('Петя', 'Ким', 10)
// // console.log(newUser.name1)
// // console.log(newUser.toy) //* toy - недоступна
// // console.log(newUser.age1)
// // console.log(newUser.lastname1)

// // {
// // let b = 3
// // console.log(b)

// // }
// // console.log (b)

// // class Cars {
// //   constructor(options) {
// //     this.model = options.model,
// //     this.price = options.price,
// //     this.class = options.class
// //   }
// //   get newPrice () {
// //     return (this.price + 200)
// //   }
// //   get newName () {
// //     return (`${this.model}  ${this.class}`)
// //   }

// // set newName (value) {
// //   return [this.model, this.class]  = value.split(' ')
// // }

// // }

// // const car = new Cars ({
// //   model: 'ford',
// //   price: 2000,
// //   class: 'business'
// // })

// // car.newName = 'mersedes standart'
// // // console.log('mersedes standart'.split(' '))


// // function DNAtoRNA(dna) {
// //   // console.log(dna.indexOf('T'))
// // const res = dna.replace(/[T]/,'U')
// // console.log (res)
// //   // create a function which returns an RNA sequence from the given DNA sequence
// // }

// // DNAtoRNA('DTER')

// // var re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
// // var str = 'Джон Смит';

// // const res = str.replace(re, '$2 $1')
// // console.log ('$1')

// function sumArray(array) {
//   if ( !Array.isArray(array) || array.length <=2) { return 0 }
//   else {

//     const res = array.sort(function (a, b) { return b - a }).slice (1,array.length-1)

//     const red = res.reduce((total,value)=>{
//       return total+value

//     })

//     return red
//     // let sum = 0
//     // for (i = 1; i <= array.length - 2; i++) {
//     //   sum = sum + array[i]
//     // }
//     // return sum
//   }

// }

// const res = sumArray([2,3,2,1,5])
// console.log(res)

//* Complete the solution so that it reverses the string passed into it. 'world'  =>  'dlrow'   'word'   =>  'drow'

// function solution(str) {

//   if (str == '' || str == null) {
//     return ''
//   }
//   else {
//     let array = []

//     for (let i = 0; i < str.length; i++) {
//       array.push(str[i])
//     }
//     console.log(array)


//     return ('\'' + array.reverse().join('') + '\'')

//   }
// }
// const der = solution('world')
// console.log(der)

// function solution(s){
//   var o = '';
//   for (var i = s.length - 1; i >= 0; i--)
//     o += s[i];
//   return o;
// }


// function booleanToString(b){

//   console.log( typeof( b.toString()))
//   //your code here
// }
// booleanToString(12)

// let array = [...'fuck']
// let array = [...[3,4,5,6,]]
// let array = { ...{ 3: 1, 4: 32, 5: 233, 6: 34, } }
// let array1 = array;
// console.log(array1)

// объяснение использования call Функции

// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   if (price < 0) {
//     throw RangeError('Нельзя создать продукт ' +
//                       this.name + ' с отрицательной ценой');
//   }
// }

// function Food(name, price) {
//   Product.call(this, name, price); // теперь новый конустректор Food строит поля name price и category
//   this.category = 'еда';
// }

// Food.prototype = Object.create(Product.prototype) // объект Product.prototype станет прототипом для объекта Food
// // console.log(Food.prototype)
// const cheese = new Food ('cah', 77)

// const pr = new Food('tomaasdsto', 2323)
// console.log (pr)

// const pro = new Product ('petya', 23) 
// console.log(pro)

//DESCRIPTION: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.Examples "This is an example!" ==> "sihT si na !elpmaxe" "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   // Go for it
//  return str.split (' ').map((Element) => { 
//   const re1 = [...Element].reverse('').join('')
//   return re1
// }).join(' ')

// }
// const tre= reverseWords("This is an example!")
// console.log(tre)

// function reverseWords(str) {
//   // Go for it
//   let arr = str.split (/\s/)
//   console.log (arr)
//   console.log (typeof (arr[0]))

// const arr1 = arr.map((Element,index) => {
//   let str1 = ''
//   for (let i=Element.length-1; i>=0; i--) {
// str1 = str1 + Element[i]
// }
//   return str1
// })
// return arr1.join(' ')
// }

//* create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. Example filter_list([1,2,'a','b']) == [1,2] filter_list([1,'a','b',0,15]) == [1,0,15] filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//     let res = []

//     for (let i = 0; i <= l.length - 1; i++)
//         if ((typeof (l[i]) == 'number') && l[i] >=0 ) {
//             res.push(l[i])
//         }
//     console.log(res)
//     return res
//     // Return a new array with the strings filtered out
// }
// const res1 = filter_list([1, '2', 3, 0, 'a', 'd'])
// console.log(res1)
// function filter_list(l)  {
//    return l.filter(elem => typeof elem !='string')
// }
// const res1 = filter_list([1, '2', 3, 0, 'a', 'd'])
// console.log(res1)

//* Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. Example: (Input --> Output) "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) isIsogram "Dermatoglyphics" = true isIsogram "moose" = false isIsogram "aba" = false

// function isIsogram(str) {
//     let arrayOfStr1 = str.toUpperCase()
//      let arrayOfStr = arrayOfStr1.split(/\B/)
//     const newArray = arrayOfStr.filter((elem, index, arrayOfStr) => {
//             for (i = index; i <= arrayOfStr.length; i++) {
//                 if (elem === arrayOfStr[i + 1]) {
//                     return elem
//                 }
//             }
//         })
//         if (newArray.length) {
//             return false
//         }
//         else { return true}
//     }
// const res = isIsogram('moOse')
// console.log(res)

// function isIsogram(str) {
//     // var i, j;
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; ++i) {
//         for (let j = i + 1; j < str.length; ++j)
//             if (str[i] === str[j])
//                 return false;
//     }
//     return true;// если совпадений не было то функция просто вернет true, если совпадение было, то из цикла вернется return false и закончит функцию быстрее вернув false
// }

// const res = isIsogram('mose')
// console.log(res)

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }
// метод доступа size возвращает количество уникальных элементов 
//* Функция возвращает true  если в слове букв х столько же сколько и ьукв о, и возвращает false если не равно
// function XO(str) {
//     let str1 = str.toLowerCase()
//     let arr = []
//     let arr1 = []
//     for (let i = 0; i <= str1.length - 1; i++) {
//         if (str1[i] === 'x')
//             arr.push(str1[i])
//         else if (str1[i] === 'o')
//             arr1.push(str1[i])
//     }
//     console.log(arr)
//     console.log(arr1)
//     if ((arr.length === arr1.length) || ((!arr.length) && (!arr1.length)))
//         return true;
//     else return false
// }

// const res = XO('derxx')
// console.log(res)
//*Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. #Examples: Kata.getMiddle("test") should return "es" Kata.getMiddle "testing") should return "t" Kata.getMiddle("middle") should return "dd" Kata.getMiddle("A") should return "A" function getMiddle(s)


// function getMiddle(s) {
//     return s.length % 2 ? s.substring(Math.floor(s.length / 2), s.length / 2 + 1) :
//         s.substring(s.length / 2 - 1, s.length / 2 + 1)
// }
// const res = getMiddle('aa3sd')
// console.log(res)
// function getMiddle(s) {
//     const arr = s.split('')

//     const odd = arr.filter((elem, index, arr) => {
//         if ((index == arr.length / 2 - 1) || (index == arr.length / 2)) return elem
//     })
//     const even = arr.filter((elem, index, arr) => {
//         if (index == Math.floor(arr.length / 2)) return elem
//     })
//     return arr.length % 2 ? even.join('') : odd.join('')
// }
// const res = getMiddle('aasd')
// console.log(res)

// * Given an array of ones and zeroes, convert the equivalent binary value to an integer. Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.Examples: Testing: [0, 0, 0, 1] ==> 1   Testing: [0, 0, 1, 0] ==> 2  Testing: [0, 1, 0, 1] ==> 5  Testing: [1, 0, 0, 1] ==> 9  Testing: [0, 0, 1, 0] ==> 2 Testing: [0, 1, 1, 0] ==> 6  Testing: [1, 1, 1, 1] ==> 15 Testing: [1, 0, 1, 1] ==> 11

// function binary (arr) {
//     return parseInt (arr.join(''), 2)

// }
// const res = binary([1,0,1,1])
// console.log (res)