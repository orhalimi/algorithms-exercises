/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function mergeSort(nums){
  if (nums.length === 1 || nums.length === 0) return nums;
  const middle =  Math.floor(nums.length / 2);    
  const firstHalf = mergeSort(nums.slice(0, middle))
  const secondHalf = mergeSort(nums.slice(middle))
  return merge(firstHalf, secondHalf);
};

function merge(left, right){
  const merged = []
  let leftI = 0;
  let rightI = 0;
  while(leftI < left.length && rightI < right.length){
    if(right[rightI] < left[leftI]){
      merged.push(right[rightI])
      rightI+=1;
    } else{
      merged.push(left[leftI])
      leftI+=1;
    }
  }
  if(rightI >= right.length){
    return merged.concat(left.slice(leftI))
  } else if(leftI >= left.length){
    return merged.concat(right.slice(rightI))
  } else return merged;
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
