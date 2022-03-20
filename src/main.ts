// interface and an optional property 

type UF = 'AM' | 'RJ' | 'MG'

interface User {
    name: string, 
    address?: { // optional property 
        city: string 
        UF: UF
    }
    sayHello: () => void
}

let users :User[] // array of users

function showCity(user: User) {
    user.sayHello = () => console.log('cataline') // testing function void
    user.address ? user.address.UF = 'AM' : 'no exist'// testing add of a UF already defined
    let myCity = user.address?.city // if city no exist MyCity will be undefined
    return user.address ? user.address.city : 'no exist' // testing if address exists
}

// readonly property 

interface User2 {
    readonly name: string
    age: number 
}

let user2: User2 =  {
    name: 'Luiz Osmar',
    age: 23,
}

user2.age = 24 
//user2.name = 'Rafael Pereira' // read only can't be changed

// Extends, Implements

interface Veiculo {
    rodas: number
    acelerar: () => void
    frear: () => void
}

interface Moto extends Veiculo { // Moto gets Veiculo property
    capacete?: boolean // optional property
    empinar?: () => void // optional method
}

let bross: Moto

//bross.acelerar // bross can use acelerar a Veiculo method

class CriarVeiculo implements Veiculo, Moto{
    rodas: number

    constructor(rodas: number){
        this.rodas = rodas
    }
     
    acelerar(){
        console.log('Vrummm')
    }
    frear(){
        console.log('Irirrirriiiri')
    }
}

// Pick & Omit

interface Post {
    id: number
    title: string
    description: string
}

type PostPreview = Pick<Post, 'id' | 'title'> // pick to postPreview chosen property

type PostPreview2 = Omit<Post, 'id' | 'title'> // omit to postPreview chosen property