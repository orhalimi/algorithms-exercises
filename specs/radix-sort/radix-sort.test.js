/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place){
  const string = number.toString();
  const size = string.length;
  return place > size? 0: Number(string[size - place ])
}

function getLongestNumber(arr){
  let longest = 0;
  for (let n of arr) {
    const currentLength = n.toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

function createBucket(){
  return new Array(10).fill().map(() => []); 
}

function radixSort(array) {
  const longest = getLongestNumber(array);
  let arr = [...array];

  for(let i = 1; i <= longest; i ++){
    buckets = createBucket();
    for(let n of arr){
      const pos = getDigit(n, i);
      buckets[pos].push(n)
    }
    console.log("bucket")
    console.log(buckets)

    arr = buckets.flat(1);
    console.log("arr")
    console.log(arr)
  }

  return arr;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort((a,b) => a -b));
  });
});
