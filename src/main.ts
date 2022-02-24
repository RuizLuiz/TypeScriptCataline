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