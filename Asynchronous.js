// Ashynchronous Js



// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 2000);

// console.log(3);

//CallBack functions ==> Function passed as argument to another function

// function calculator(a,b,operation){
//     operation(a,b)
// }

// function add(a,b){
//     console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// calculator(5,6,add);
// calculator(5,6,sub);

//Real World Scenario of the CallBacks 

function getDataFromDatabase(dataId, callback){
    setTimeout(function (){
        console.log("Data ",dataId)
        if(callback){
            callback();
        }
          
    },3000)
}

// getDataFromDatabase(1);
// getDataFromDatabase(2);
// getDataFromDatabase(3);

/* This is the callback hell problem which is not readable */
getDataFromDatabase(1, function (){
    getDataFromDatabase(2, function() {
        getDataFromDatabase(3, function(){
            getDataFromDatabase(4)
        })
    })
})
