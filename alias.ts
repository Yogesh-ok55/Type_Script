
// type User ={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createUser(User:User):User{
//       return User;
// }

// createUser({name:"yogi",email:"y@gmail.com",isActive:true})

type User ={
    readonly _id: string //no one can change this now
    name:string,
    email:string,
    isActive:boolean
    credcardDetails?:number
}

let myUser : User = {
    _id:"12345",
    name:"y",
    email:"y@yield.com",
    isActive:true
}

type cardNumber = {
    cardnumber : string 
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}
// myUser._id="123"; will not be able to change

