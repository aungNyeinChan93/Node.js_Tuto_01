

const myStudientsArray = ["aung","mgmg","myamya","chan","phyoe","moe"]

// for of loop for array
for (let value of myStudientsArray){
    // console.log(value);
}

// sample Loop
for (let i =0; i<myStudientsArray.length;i++){
    // console.log(myStudientsArray[i]);
}

// for in loop for array
for (let key in myStudientsArray){
    // console.log(myStudientsArray[key]+":"+ key);
}

// for in loop for object
let myObject = {
    name: "chan",
    age:18,
    email: "chan@gmaiul.com",
    location:{
        city:"yangon",
        township:"thuwunna"
    }
};
for (let key in myObject){
    // console.log(myObject[key]);
}

// forEach loop that can't return 
myStudientsArray.forEach(function(item){
    console.log(item);
});

myStudientsArray.map((item)=>{
    return item;
});
console.log(myStudientsArray);

