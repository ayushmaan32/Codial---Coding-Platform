import assert from "assert";
import { Problem } from "../types/problem.";

const starterCodePalindrome = `function Palindrome(nums){
  // Write your code here.

};`;

// checks if the user has the correct code
const handlefunctionPalindrome = (fn: any): boolean => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [121, -121, 10];

    const answer = [true, false, false];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answer[i]);
    }

    return true;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
export const palindromNumber: Problem = {
  id: "palindrome-number",
  title: "6. Palindrome Number",
  problemStatement: ` <p class="mt-3">
                 Given an integer <code>nums</code>, return
    <code>true</code><em> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</em></p>`,
  examples: [
    {
      id: 1,
      input: "nums = 121",
      output: "true",
      explanation: "121 reads as 121 from left to right and from right to left",
    },
    {
      id: 2,
      input: " -121",
      output: "false",
      explanation:
        "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
    },
    {
      id: 3,
      input: " nums = 10",
      output: "false",
      explanation:
        "Reads 01 from right to left. Therefore it is not a palindrome.",
    },
  ],
  constraints: `<li class="mt-2">
                  <code>-2<sup>31</sup> <= nums <= 2<sup>31</sup> - 1</code>
                </li>`,
  order: 6,
  starterCode: starterCodePalindrome,
  handlefunction: handlefunctionPalindrome,
  startFunctionName: "function Palin(",
};
