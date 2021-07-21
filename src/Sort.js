import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(array) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  let swapHappened = false;
  let iteractions = 0
  do{
    swapHappened = false;
    for(let i=1; i < nums.length - iteractions; i++){
    snapshot(array);
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

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
