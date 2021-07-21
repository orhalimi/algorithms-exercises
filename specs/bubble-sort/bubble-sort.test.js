/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swapHappened = false;
  let iteractions = 0
  do{
    swapHappened = false;
    for(let i=1; i < nums.length - iteractions; i++){
      if (nums[i-1] > nums[i] ){
        swapHappened = true;
        const swapper = nums[i-1];
        nums[i-1] = nums[i];
        nums[i] = swapper;
      }
    }
    iteractions +=1;
  } while(swapHappened)

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
