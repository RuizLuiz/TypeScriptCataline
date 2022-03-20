//string

let message: string = "Hello World"

message = message.toUpperCase()

console.log(message)

//number

let total: number 

total = 0

console.log(total)

// boolean 

let isOpen: boolean

isOpen = false

console.log(isOpen)

//any

let stock: any = 89

stock = null

console.log(stock)

// void

let stock2: void = undefined

console.log(stock2)

function showInformation(): void{
    console.log('cataline')
}

showInformation()

// never

function error(): never{
    throw new Error('error')
}

// array 

let items: Array<number>

items = [1, 2, 3, 4]

console.log(items)

let items2: string[]

items2 = ['luiz','ruiz']

console.log(items2)

//tuple

let items3: [number, string, boolean]

items3 = [1, 'luiz', true]

console.log(items3)

//enum

enum Colors {
    white = '#fff',
    black = '#000',
}

let white: Colors = Colors.white

console.log(white)

//type union 

let age: number | string

age = 20

age = 'vinte'

console.log(age)

function showPet(pet: 'dog' | 'cat' | 'zebra'){
    console.log(pet)
}

showPet('cat')

//type aliases

type Pet = 'dog' | 'cat' | 'zebra'

function displayPet(pet: Pet){
    console.log(pet)
}

displayPet('zebra')

//type Inference

let message2 = 'Cataline' // infere o tipo a partir da variável atribuída
                          // infers the type depending on the variable inserted                  
// window.addEventListener('click', (event) =>{
//     console.log(event.target)
// })

//type Assertion
const inputName = document.querySelector('#name') // if query  return null, variable null
const inputName2 = document.querySelector('#name') as HTMLInputElement 

inputName2.value