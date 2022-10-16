// implementing a custom array callback function
// reverseMap - maps over the array backwards

class CustomArray extends Array {
  
    reverseMap(cb){
      // new empty array of our special type
      const newArray = new CustomArray()
      
      // loop over array backwards
      for(let index = this.length - 1; index >= 0; index--){
        // push result of callback into newArray
        newArray.push(cb(this[index], index))
      }
      
      // return the newArray
      return newArray
      
    }
    
  }
  
  // create an array with our custom type
  const myArr = new CustomArray(1,2,3,4,5)
  // use our reverseMap method and log results
  console.log(myArr.reverseMap(v => v - 1)) 
  // [4,3,2,1,0] is logged
  
  
  
  
  
  //GrokOverflow.com and DevNursery.com
  //Twitter @alexmercedcoder