//shallow copy with array

 let arr1=[1,5,3,4]
 let arr2=arr1
 arr2[1]=2
 console.log(arr1)
 console.log(arr2)

//deep copy with array

 let a=[1,5,3,4]
 let b=[...a]
 b[1]=2
 console.log(a)
 console.log(b)

