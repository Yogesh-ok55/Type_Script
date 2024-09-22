const User ={
    name:"yogesh",
    email:"yogi@gmail.com",
    isActive:true
}


function createUser({name:string,isPaid:boolean}){

}

createUser({name:"yogesh",isPaid:true});

function createCourse({name:string,isPaid:boolean}):{name:string,isPaid:boolean}{
    return {name:"rakesh",isPaid:false};
}

const newUSer ={name:"yogesh",isPaid:true,gmail:"yogi@gmail.com"}

createCourse(newUSer)//passing more parameters than arguments

export {};