
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

// Time complexity: Since for every element of the input array, we are calculating the sum of its next ‘K’ elements, the time complexity of the above algorithm will be O(N∗K)O(N*K)O(N∗K) where ‘N’ is the number of elements in the input array.

//THis ^^^^^^ way is ineffiecint because you have 4 over lapping number being used for each set of K. Sliding Window algorithim.

function findAveragesOfSumArrays(K, arr){
    //set result to empty array
    const result = []
    //set window sum point for sliding window
    let windowSum = 0.0,
    windowStart = 0
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd] // add the next element
        // slide the window, we don't need to slide if we've not hit the required window size of 'k'
        if (windowEnd >= K - 1) {
            result.push(windowSum / K, ' ') //calculate average
            windowSum -= arr[windowStart] // subtract the element going out
            windowStart += 1 //slide the window over one element in array
        }
    }
    return result
}

const result = findAveragesOfSumArrays(5, [10, 3, 3, -6, 12, 2, 3, 2, -1, 3, 5])
console.log(`The averages of all subarrays of size 'K': ${result}`)

//A more efficient way of solving. We can reuse the sum by subtracting the previous number going out and adding the next number coming up. This will save us from going through the whole subarray to find the sum and, as a result, the algorithm complexity will reduce to O(N).


function sum(arr, n) {
    s = 0
    for (i = 0; i < n; i++) {
        s = s + arr[i]
    }
    return s
}

sum([8, 3, 9, 7, 2], 5)
console.log(`Here is ${s}`)

function add(A, B, n){
    for (i = 0; i < n; i++){
        for (j = 0; j < n; j++){
            C[i, j] = A[i, j] + B[i, j]
        }
    }
    return C
}

