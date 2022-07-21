
// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
// Let’s understand this problem with a real input:

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// Here, we are asked to find the average of all subarrays of ‘5’ contiguous elements in the given array. Let’s solve this:

//     For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6−1)/5=>2.2(1+3+2+6-1)/5 => 2.2(1+3+2+6−1)/5=>2.2
//     The average of next 5 numbers (subarray from index 1-5) is: (3+2+6−1+4)/5=>2.8(3+2+6-1+4)/5 => 2.8(3+2+6−1+4)/5=>2.8
//     For the next 5 numbers (subarray from index 2-6), the average is: (2+6−1+4+1)/5=>2.4(2+6-1+4+1)/5 => 2.4(2+6−1+4+1)/5=>2.4
//     …

// Here is the final output containing the averages of all subarrays of size 5:

// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

// function findAveragesOfSumArrays(K, arr){
//     // create result variable set to empty array
//     const result =[]
//     // for loop
//     for (i = 0; i < arr.length - K + 1; i++) {
//         // find the sum of next 'K' elements
//         let sum = 0.0
//         for (j = i; j < i + K; j++){
//             sum +=arr[j]
//         }
//     result.push(sum / K) //calculate average
//     }
//     return result
// }

// const result = findAveragesOfSumArrays(5, [1, 3, 3, -6, 12, 2, 3, 2, -1, 3, 5])
// console.log(`The averages of all subarrays of 'K': ${result}`)

//THis ^^^^^^ way is ineffiecint because you have 4 over lapping number being used for each set of K. Sliding Window algorithim.