function displayDate() {
    let date = new Date
    date = date.toString().split(' ')
    console.log(date)
    document.querySelector('.date').textContent = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3]
}
window.onload = function () {
    displayDate()
}

const myform = document.forms.todo
const addTodoButton = myform.querySelector('[name="add-todo"]')
const submitButton = myform.querySelector('[name="submit-todo"]')
let listForAdding = document.querySelector('.pending1')
const listForAddingDeleted = document.querySelector('.pending2')
const listForImplemented = document.querySelector('.implementedUl')
const removedListOfTodos = document.querySelector('.removed-todos>ul')
const basketOfTodos = document.querySelector('.basketremoved')
const ImplDiv = document.querySelector('.implemented-todos')
const implementedListOfTodos = document.querySelector('.implemented-todos>ul')
const liItems = document.getElementsByClassName('list-item')
let pendingChildren = listForAdding.getElementsByTagName('li')
const implementedChildren = listForImplemented.getElementsByTagName('li')
const itemsLeft = document.querySelector('.quatity-items-left')
// const arrowButtons = document.getElementsByClassName('list-item-arrow') //коллекция кнопок
const allButton = document.getElementsByClassName('all-button')
const implementButton = document.getElementsByClassName('implemented-button')
const activeButton = document.getElementsByClassName('active-button')
const clearButton = document.getElementsByClassName('clear-button')
const implementedDiv = document.getElementsByClassName('implemented-todos')


// если существует запись в LS то добавляем ту запист в массив , если нет то объявляе пустой масив
let storedArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
let deletedArray = localStorage.getItem('itemsDeleted') ? JSON.parse(localStorage.getItem('itemsDeleted')) : []
let implementedArray = localStorage.getItem('itemsImplemented') ? JSON.parse(localStorage.getItem('itemsImplemented')) : []

// функця добавляет туду в основной блок и выполняет все операции с кнопками и переносами записей
function addTodosToList() {
    let checked = document.getElementsByClassName('list-item-checked')
    console.log(checked)
    const initialPlaceholder = addTodoButton.placeholder
    addTodoButton.addEventListener('focus', (e) => {
        addTodoButton.placeholder = ''
    })
    addTodoButton.addEventListener('blur', (e) => {
        addTodoButton.placeholder = initialPlaceholder;
    })
    addTodoButton.addEventListener('keyup', (e) => {
        if (e.KeyCode === 13) {
            submitButton.submit()
        }
    })
    submitButton.addEventListener('click', (e) => { // добавляем запись в поле listforAdding, 
        e.preventDefault()
        listForAdding.style.display = 'block' // показываем поле если до этого был фильтр по кнопкам implement и active
        const gotValue = addTodoButton.value
        storedArray.push(gotValue)
        localStorage.setItem('items', JSON.stringify(storedArray))
        const allTodosAfterAdding = document.getElementsByClassName('list-item')
        clearPlaceholderValue(addTodoButton)
        const addedTodo = document.createElement('li')
        listForAdding.prepend(addedTodo)
        addedTodo.textContent = gotValue
        addedTodo.classList.add('list-item')
        creatingChecked(addedTodo) //создаем кнопку checked
        creatingBasket(addedTodo) // создаем корзинку
        countingPendingTodos() // считаем pendging туду
        movingtoImplemented() // отмечает туду как выполненный и добавлет в ЛС в implementedArray
        removingLi() //  удаляет поля и перемещает их  в поле removedListOfTodos
        exposureAll()
        exposureActive()
        clear()
    })
    creatingLi()

    function creatingLi() { //функция поддгружает из LS поля чтобы после F5 отображать сохраненные поля (в том числе active , implement) , создает ли, присваивает ей класс list-item и запускает две функции по созданию кнопок корзина и checked
        const red = concatArrays()
        red.forEach((elem, index, array) => {
            const addedTodo = document.createElement('li')
            listForAdding.prepend(addedTodo)
            addedTodo.innerHTML = elem
            addedTodo.classList.add('list-item')
            creatingChecked(addedTodo)
            creatingBasket(addedTodo)
            countingPendingTodos()
            // uniqueDeletedArray()
        })
    }
    creatingLiDeleted()
    function creatingLiDeleted() { //функция поддгружает из LS поля удаленные туду
        deletedArray.forEach((elem, index, array) => {
            const addedTodo = document.createElement('li')
            listForAddingDeleted.prepend(addedTodo)
            addedTodo.innerHTML = elem
            // addedTodo.classList.add('list-item')
            const patch = document.createElement('div')
            patch.innerHTML = `<div class="patch" style='width: 40px; height: 40px; background-color: white;position: absolute;  left: 100%; top:0%; z-index:3'>
                    </div>` // этот блок ставит patch чтобы закрыть иконку корзинки
            addedTodo.prepend(patch)
        })

    }

    function creatingChecked(li) { // функция создает кнопку с checked и вставляет его как дочерний элемент в ли
        const checkedDiv = document.createElement('button')
        checkedDiv.innerHTML = ''
        checkedDiv.classList.toggle('list-item-checked')
        li.prepend(checkedDiv)
        checkedDiv.style.zIndex = 2;
    }

    function creatingBasket(li) { // функция создает кнопку с корзинкой и вставляет его как дочерний элемент в ли
        const basketDiv = document.createElement('button')
        basketDiv.innerHTML = ''
        basketDiv.classList.toggle('list-item-basket')
        li.prepend(basketDiv)
        basketDiv.style.zIndex = 2;
    }

    function clearPlaceholderValue(targetPlacceholder) { // функция очищает поле ввода после отправки туду в список туду
        targetPlacceholder.placeholder = initialPlaceholder;
        targetPlacceholder.value = '';
        targetPlacceholder.blur()
    }

    addingClassImplemented()
    movingtoImplemented()
    countingPendingTodos()
    removingLi()

    function removingLi() {  // Добавляем класс removed-to-do по нажатию корзинки, и удаляем классы impleented-todo и list-item
        const baskets = listForAdding.getElementsByClassName('list-item-basket')
        const liToDos = Array.from(pendingChildren)
        const arrayOfBaskets = Array.from(baskets)
        arrayOfBaskets.forEach((element, index, arrayOfBaskets) => {
            arrayOfBaskets[index].addEventListener('click', () => {
                countingPendingTodos()
                if (storedArray.length === 1) {
                    storedArray = []
                }
                else {
                    liToDos[index].classList.add('removed-from-todo')
                    liToDos[index].classList.remove('implemented-todo')
                    liToDos[index].classList.remove('list-item')
                    // liToDos[index].firstChild.remove()
                    // liToDos[index].lastChild.remove()
                    listForAddingDeleted.prepend(liToDos[index])
                    const textofDeletedToDo = liToDos[index].textContent
                    uniqueDeletedArray(textofDeletedToDo) // функция проверяет содержит ли масив deletedArray удаляемый элемент, если не содержит, то не добавляет его
                    countingPendingTodos() // считаем количество активных туду в этой области видимости
                }
            })
        });
    }

    function addingClassImplemented() { // добавляем класс implemeted ко всем полям из LS implement , чтобы отображать их после перезагрузки
        implementedArray.forEach(element => {
            const newLi = document.createElement('li')
            newLi.textContent = element
            newLi.classList.add('implemented-todo')
            implementedListOfTodos.append(newLi)
        })
    }

    function movingtoImplemented() { // по нажатию кнопки checked присваиваем класс implement, создаем заглушки чтобы иконки корзины и checked не были видны
        let checked = document.getElementsByClassName('list-item-checked')
        let arrayOfChecked = Array.from(checked)
        let liToDos = Array.from(pendingChildren)
        arrayOfChecked.forEach((element, index, arrayOfChecked) => {
            arrayOfChecked[index].addEventListener('click', () => {
                (function patchForImplemented() { //patch для иконки checked чтобы после клика скрыть иконку
                    const newDiv = document.createElement('div')
                    liToDos[index].prepend(newDiv)
                    newDiv.style.width = 40 + 'px'
                    newDiv.style.height = 40 + 'px'
                    newDiv.style.backgroundColor = "white"
                    newDiv.style.position = "absolute"
                    newDiv.style.top = 0 + '%'
                    newDiv.style.left = -14 + '%'
                    newDiv.style.zIndex = 3
                })()

                const textofImplementedToDo = liToDos[index].textContent

                liToDos[index].classList.add('implemented-todo')
                liToDos[index].classList.remove('list-item')
                listForImplemented.prepend(liToDos[index])
                uniqueImplementedArray(textofImplementedToDo) //функция возвращает массив уникальных элементов
                countingPendingTodos()
            })
        });
    }


    // function countingItemsLeft() {
    //     itemsLeft.textContent = storedArray.length
    // }

    function exposureAll() { // отображаем список всех ту ду, даже удаленных, создаем класс с корзинкой в кадый туду
        function red() {
            console.log(allButton)
            allButton[0].addEventListener('click', () => {
                listForImplemented.style.display = 'block'
                listForAddingDeleted.style.display = 'block'
                listForAdding.style.display = 'block'
            })
        }
        addingBasketToImplemented()
        setTimeout(() => {
            red()
        }, 500)
    }
    function exposureActive() { // отображаем только активные туду
        activeButton[0].addEventListener('click', () => {
            listForImplemented.style.display = 'none'
            listForAddingDeleted.style.display = 'none'
            listForAdding.style.display = 'block'
            // implementedDiv[0].style.display = 'none';
            // listForAdding.style.display = 'block';
        })
    }
    function exposureImplemented() { // отображаем  выполненные туду
        implementButton[0].addEventListener('click', () => {
            listForImplemented.style.display = 'block'
            listForAddingDeleted.style.display = 'none'
            listForAdding.style.display = 'none'
        })
    }

    function clear() {
        clearButton[0].addEventListener('click', () => {
            localStorage.clear()
            location.reload()
            // localStorage.removeItem("items");
            // localStorage.setItem('items', JSON.stringify(storedArray))

            listForImplemented.style.display = 'block'
            listForAddingDeleted.style.display = 'none'
            listForAdding.style.display = 'none'

        })

    }
    clear()

    const implementedTodos1 = document.getElementsByClassName('implemented-todo')
    function addingBasketToImplemented() { // создаем корзинку каждому туду из класса выполненных
        const implementedTodos = Array.from(implementedTodos1)
        console.log(implementedTodos)
        implementedTodos.forEach((element, index) => {

            if (element.firstElementChild) { // если первый элемент уже существует, то ничего не создаем
                return false
            }
            else {
                const basketDiv = document.createElement('button')
                basketDiv.innerHTML = ''
                basketDiv.classList.toggle('list-item-basket')
                element.prepend(basketDiv)
                basketDiv.style.zIndex = 2;
                const arrowDiv = document.createElement('button')
                arrowDiv.innerHTML = ''
                // arrowDiv.classList.toggle('list-item-arrow')
                element.prepend(arrowDiv)
                arrowDiv.style.zIndex = 2
            }
        });
    }


    function removingImplemented() { // удалаяем тудулист из выполненных и стираем их из LS
        const implementedChild = Array.from(implementedChildren) // массив li 
        const baskets1 = listForImplemented.getElementsByClassName('list-item-basket')
        const arrayOfBaskets1 = Array.from(baskets1)
        arrayOfBaskets1.forEach((element, index) => {
            element.addEventListener('click', () => {
                implementedChild[index].classList.add('removed-from-todo')
                implementedArray.splice(index, 1)
                localStorage.setItem('itemsImplemented', JSON.stringify(implementedArray))
                const textofDeletedToDo = implementedChild[index].textContent
                deletedArray.push(textofDeletedToDo)
                localStorage.setItem('itemsDeleted', JSON.stringify(deletedArray))
                ImplDiv.style.display = 'block'
            })
        });
    }

    function repeatImplem() {
        const implementedChild = Array.from(implementedChildren) // массив li из implementedUL
        const checked1 = listForImplemented.getElementsByClassName('list-item-checked')
        const arrayOfChecked1 = Array.from(checked1)
        arrayOfChecked1.forEach((element, index) => {
            element.addEventListener('click', () => {
                implementedChild[index].classList.add('implemented-todo')
                const textofDeletedToDo = implementedChild[index].textContent
                storedArray.push(textofDeletedToDo)
                ImplDiv.style.display = 'block'
            })
        });
    }

    // function moveImplementedBack() { // возвращаем тудулист из выполненных обратно в активнй лист и в LS, и удаляем patch для иконки checked
    //     const implementedChild = Array.from(implementedChildren) // массив li из implementedUL
    //     // const arrowArray = Array.from(arrowButtons) //массив кнопок arrow
    //     const listForAdding1 = document.querySelector('.pending1')
    //     arrowArray.forEach((element, index) => {
    //         element.addEventListener('click', () => {
    //             let bre = implementedChild[index].querySelector('div')
    //             if (bre) {
    //                 bre.remove()
    //             }
    //             if (implementedArray.length == 1) {
    //                 element.parentElement.remove()
    //             }
    //             (function replacingArrowToCheck() {
    //                 const newCheck = document.createElement('button')
    //                 newCheck.classList.add('list-item-checked')
    //                 newCheck.style.zIndex = 2
    //                 let arrow = implementedChild[index].firstChild
    //                 implementedChild[index].prepend(newCheck)
    //                 // let newArrow = implementedChild[index].getElementsByClassName('list-item-arrow')
    //                 // newArrow[0].remove()
    //                 implementedChild[index].classList.add('list-item')
    //                 implementedChild[index].classList.remove('implemented-todo')
    //                 listForAdding.prepend(implementedChild[index])
    //             })()

    //             implementedArray.splice(index, 1)
    //             localStorage.setItem('itemsImplemented', JSON.stringify(implementedArray))
    //             const textofDeletedToDo = [index].textContent
    //             const elemTextcontent = implementedChild[index].textContent
    //             storedArray.push(elemTextcontent)
    //             let ner = document.getElementsByClassName('list-item')
    //             let pendingChildren = listForAdding.getElementsByTagName('li')
    //             console.log(pendingChildren)
    //             let countPending = Array.from(ner)
    //             const span = document.querySelector('.taksnumber')
    //             span.textContent = ''
    //             console.log(countPending.length)
    //             if (countPending.length !== 1) {
    //                 return span.textContent = countPending.length + ' ' + ' tasks'
    //             }
    //             else {
    //                 return span.textContent = '  ' + countPending.length + ' ' + ' task'
    //             }
    //         })
    //     });
    // }
    exposureAll()
    exposureActive()
    removingImplemented()
    // moveImplementedBack()
    exposureImplemented()
    // countingItemsLeft()
    repeatImplem()

    function countingPendingTodos() { // функция считает количество туду в списке задач
        // moveImplementedBack()
        let ner = document.getElementsByClassName('list-item')
        let pendingChildren = listForAdding.getElementsByTagName('li')
        let countPending = Array.from(ner)
        const span = document.querySelector('.taksnumber')
        span.textContent = ''
        console.log(countPending.length)
        if (countPending.length !== 1) {
            return span.textContent = countPending.length + ' ' + ' tasks'
        }
        else {
            return span.textContent = '  ' + countPending.length + ' ' + ' task'
        }

    }

    function uniqueDeletedArray(deletedTodos) { //функция записывает в LS deletedArray только ункальные значения
        if (!deletedArray.includes(deletedTodos))
            deletedArray.push(deletedTodos)
        localStorage.setItem('itemsDeleted', JSON.stringify(deletedArray))
    }

    function uniqueImplementedArray(implementedTodos) { //функция записывает в LS implementedArray только ункальные значения
        if (!implementedArray.includes(implementedTodos))
            implementedArray.push(implementedTodos)
        localStorage.setItem('itemsImplemented', JSON.stringify(implementedArray))
    }

    //функция делает конкат из LS deleted и stored массивов и возвращает уникальный элемент, т.к. мы не удаляем элементы из stored LS, но нам нужно после перегрузки страницы возврашать туду которые все еще не были удалены.
    function concatArrays() {
        const unArray = storedArray.concat(deletedArray, implementedArray)
        const red = unArray.filter((elem, index, unArray) => unArray.indexOf(elem) === unArray.lastIndexOf(elem))
        console.log(red)
        return red
    }

    function patchForImplemented() { // создаем загулшки чтобы не были видны иконки 
        const newArr = Array.from(implementedChildren)
        newArr.forEach((elem) => {
            const patch = document.createElement('div')
            patch.innerHTML = `<div class="patch" style='width: 40px; height: 40px; background-color: white;position: absolute; left: 100%; top:0%; z-index:3'>
                    </div>`
            elem.append(patch)
            const patch1 = document.createElement('div')
            patch1.innerHTML = `<div class="patch" style='width: 40px; height: 40px; background-color: white;position: absolute; left: -13%; top:0%; z-index:3'>
                    </div>`
            elem.append(patch1)

        })
    }
    patchForImplemented()
    movingtoImplemented()

}
addTodosToList()
