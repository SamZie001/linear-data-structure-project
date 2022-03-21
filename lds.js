let set1 = [3,1,7,9]
let set2 = [2,4,1,9,3]
let set3 = [12,13,6,10]
let set4 = [13,10,16,15]


function distinctSum(s1,s2){
    const d1 = s1.filter((num)=>{
        return !s2.includes(num)
    })
    const d2 = s2.filter((num2)=>{
        return !s1.includes(num2)
    })
    const distinct = d1.concat(d2);
    console.log(`Distinct elements: ${distinct}`)

    let sum = 0;

    for(let i=0; i<distinct.length; i++ ){

        sum +=distinct[i]
    }
    console.log(`Sum is: ${sum}`)
}
distinctSum(set1,set2)



function uniqueSum(s3,s4){
    const u1 = s3.filter((num)=>{
        return s4.includes(num)
    })
    const u2 = s4.filter((num2)=>{
        return s3.includes(num2)
    })
    const unique = u1.concat(u2);
    console.log(`Unique elements: ${unique}`)

    let sum = 0;

    for(let i=0; i<unique.length; i++ ){

        sum +=unique[i]
    }
    console.log(`Sum is: ${sum}`)
}
uniqueSum(set3,set4)

console.log('\n')
console.log('Using another data structure')


//USING SET METHOD
const mySet = new Set();
const mySet2 = new Set();
const mySet3 = new Set();
const mySet4 = new Set();

//add value
mySet.add(3)
mySet.add(1)
mySet.add(7)
mySet.add(9)

mySet2.add(2)
mySet2.add(4)
mySet2.add(1)
mySet2.add(9)
mySet2.add(3)

mySet3.add(12)
mySet3.add(13)
mySet3.add(6)
mySet3.add(10)

mySet4.add(13)
mySet4.add(10)
mySet4.add(16)
mySet4.add(15)

const mineSet = Array.from(mySet)
console.log(mineSet)

const mineSet2 = Array.from(mySet2)
console.log(mineSet2)

const mineSet3 = Array.from(mySet3)

const mineSet4 = Array.from(mySet4)


const dm1 = mineSet.filter((num)=>{
    return !mineSet2.includes(num)
})
const dm2 = mineSet2.filter((num2)=>{
    return !mineSet.includes(num2)
})
const distinctmm = dm1.concat(dm2);
console.log(`Distinct elements: ${distinctmm}`)

let sum = 0;

    for(let i=0; i<distinctmm.length; i++ ){

        sum +=distinctmm[i]
    }
    console.log(`Sum is: ${sum}`)


    //Unique Approach 2

    console.log(mineSet3)
    console.log(mineSet4)

    const um1 = mineSet3.filter((num)=>{
        return mineSet4.includes(num)
    })
    const um2 = mineSet4.filter((num2)=>{
        return mineSet3.includes(num2)
    })
    const uniquemm = um1.concat(um2);
    console.log(`Unique elements: ${uniquemm}`)

    let sum2 = 0;

    for(let i=0; i<uniquemm.length; i++ ){

        sum2 +=uniquemm[i]
    }
    console.log(`Sum is: ${sum2}`)









// //find set size
// console.log(mySet)

// //check for value
// console.log(mySet.has(25))

// //delete item
// //mySet.delete()


// //loop through set
// for(let item of mySet){
//     console.log(item)
// }


// //convert to array
// const arrAy = Array.from(mySet)
// console.log(arrAy)