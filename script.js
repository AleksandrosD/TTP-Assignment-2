
////////test/////////////////cb=callback funtion///////////////////////////////////////////////////////
function print(element,index,array){
    console.log(element);
}
////////////////////////////////////Question 1
function myEach(ar,cb){
for(let i=0;i<ar.length;i++){
    cb(ar[i],i,ar);
}
}
const arr=["a","b","z","c"];
myEach(arr,print);
///////////////////////////////////Question 2///////////////////////////////////////////////////////////////////
function myMap(ar,cb){
    let arr2=[];
    for(let i=0;i<ar.length;i++){
    arr2.push(cb(ar[i],i,ar));
    }
    return arr2;
}
//////////////////////////////////////////////Test for Question 2
function add2(element){
    return element+2;
}
console.log(myMap(arr,add2))
///////////////////////////////////Question 3//////////////////////////////////////////////////////////////
function myFilter(ar,cb){
    let arr2=[];
    let decision;
    for(let i=0;i<ar.length;i++){
        decision=cb(ar[i],i,ar);
        //console.log(decision);
        if(decision===true){
            arr2.push(ar[i])
        }
    }
    return arr2;
}
///////////////////////////////////////////////Test 3
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function fil(element,index,array){
    if(element.length > 6){
        return true
    }
    else{
        return false;
    }
}

console.log(myFilter(words, fil));
///////////////////////////////////////Question 4///////////////////////////////////////////////////////////
function mySome(ar,cb){
    for(let i=0;i<ar.length;i++){
        if(cb(ar[i],i,ar)){
            return true;
        }
    }
    return false;
}///////////////////////////////////////////Test 4
function biggerThan5(element,index,array){
    if(element>5)
        return true;
    else
        return false;
}
let numbers=[1,2,3,4,5,6]
console.log(mySome(numbers,biggerThan5))
//////////////////////////////////////Question 5//////////////////////////////////////////////////////////////
function myEvery(ar,cb){
    for(let i=0;i<ar.length;i++){
        if(cb(ar[i],i,ar)==false){
            return false;
        }
    }
    return true;
}
///////////////////////////////////////Test 5
let numbers2=[6,6,6,6,1,6,6]
console.log(myEvery(numbers2,biggerThan5))
////////////////////////////////////////////Question 6/////////////////////////////////////////////////////
function myReducer(ar,cb){
    let ans=0;
    for(let i=0;i<ar.length;i++){
        ans = cb(ans,ar[i],i,ar);
    }
    return ans;
}
//////////////////////////////////////////Test 6
function adding(acc,element,index,array){
    return acc+element;
}
console.log(myReducer(numbers,adding))
///////////////////////////////////////////////Question 7////////////////////////////////////////////////////
function myInclude(ar,value){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===value)
            return true;
    }
    return false;
}
//////////////////////////////////////////Test 7
let pets=["horse","cat","dog"]
console.log(myInclude(pets,"dog"))
////////////////////////////////////////////Question 8///////////////////////////////////////////////////////////
function myIndexOf(ar,value){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===value)
            return i;
    }
    return -1;
}
////////////////////////////////////////////Test 8
console.log(myIndexOf(pets,"dog"))
////////////////////////////////////////////Question 9///////////////////////////////////////////////////////////
function myPush(ar,element){
    ar[ar.length]=element
    return ar.length
}
/////////////////////////////////////Test 9
console.log(myPush(pets,"Hello"))
console.log(pets)
//////////////////////////////////////////////Question 10//////////////////////////////////////////////////////////
function myUnshift(ar,element){
    for(let i=ar.length-1;i>=0;i--){
        if(ar[i]===element)
        return i;
    }
    return -1;
}
/////////////////////////////////////Test 10

myPush(pets,"dog");
console.log(myUnshift(pets,"dog"));

///////////////////////////////////////////////Question 11/////////////////////////////////////////////////////////////
 function grabKeys(obj){
    let arr = [];
    for (let keys in obj)
        arr.push(keys)
    return arr;
 }
////////////////////////////////////Test 11
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

console.log(grabKeys(object1));
///////////////////////////////////////////////Question 12/////////////////////////////////////////////////////////////
function grabValues(obj){
    let arr = [];
    for (let keys in obj){
        arr.push(obj[keys]);  
    }
    return arr;
}
///////////////////////////////////Test 12
console.log(grabValues(object1))


///////////////////////////////////////////Question 13///////////////////////////////////////////////////////////////
function moveZeros(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            arr.splice(i,1)
            arr.push(0)
        }
    }
    return arr;
}
///////////////////////////////////////////Test 13
let exe=[0,1,0,3,12]
console.log(exe);
moveZeros(exe);
console.log(exe);
/////////////////////////////////////////////////END//////////////////////////////////////////////////////////////