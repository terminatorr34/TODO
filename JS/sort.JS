//** */ Сортировка по заголовку столбца по убыванию и возрастанию, по клику и повторному клику  

let table = document.getElementById('table')
let mainraw = document.querySelectorAll('.maincolumn')
let allRows = document.getElementsByTagName('tr')
console.log(table)

rawsQty = Object.entries(allRows) // это массив из количества строк в которых содержатся ячейки// 
const showDigits = function () {

    for (let i = 0; i < mainraw.length; i++) {
let checking = false;
        const res = mainraw[i].addEventListener('click', function () {
            if (checking==false) {
            console.log('работает')
            let b = []
            for (let j=0; j<rawsQty.length; j++) {
                let c = Number(table.rows[j].cells[i].innerHTML)
                b.push(c)
                b.sort((a, b) => b - a)
            }        
            console.log(b)
            for (let k=0; k < rawsQty.length; k++) {
                table.rows[k].cells[i].innerHTML = b[k]
            }
        checking = true
        }
        else {
            console.log('работает')
            let b = []
            for (let j=0; j<rawsQty.length; j++) {
                let c = Number(table.rows[j].cells[i].innerHTML)
                b.push(c)
                b.sort((a, b) => a - b)
            }        
            console.log(b)
            for (let k=0; k < rawsQty.length; k++) {
                table.rows[k].cells[i].innerHTML = b[k]
            }
        checking = false
        }
        })    
 }   }

showDigits()