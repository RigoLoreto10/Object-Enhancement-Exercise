function createInstructor(firstName,lastName){
    return{firstName,lastName};
}

let favoriteNumber=42;
let instructor = {
    firsName:"Colt",
    [favoriteNumber]:"This is my favorite number!"

}

let instructor1 ={
    firstName:"Colt",
    sayHi(){
        return "hi";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")

function createAnimal(species,verb,noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}