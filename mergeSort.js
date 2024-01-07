function mergeSort(array) {
if (array.length < 2) return array

const middle = Math.floor(array.length / 2)
const leftSide = array.slice(0, middle)
const rigthSide = array.slice(middle, array.length)

return merge(mergeSort(leftSide), mergeSort(rigthSide))
}

function merge (left, right) {
const result =[]
while(left.length && right.length) {
    if(left[0] <= right[0]) {
        result.push(left.shift())
    } else {
        result.push(right.shift())
    }
}
while(left.length) {
    result.push(left.shift())
}
while(right.length) {
    result.push(right.shift())
}
return result
}

const arr1 = [9, 2, 8, 5, 7, 2, 8, 4, 3, 2, 5, 1]

console.log(mergeSort(arr1))