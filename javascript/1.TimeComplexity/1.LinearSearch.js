// 순차탐색

class LinearSearch{
    constructor (arr, len) {
        this.arr = arr
        this.len = arr.length
    }

    search (target) {
        let isSearch = false
        for(let i = 0 ; i < this.len ; ++i) {
            isSearch = this.arr[i] == target
            if (isSearch) return i
        }

        return -1
    }
}

let arr = [1,2,3,4]

let searcher = new LinearSearch(arr)

let target1 = 1
let target2 = 2
let target3 = 3
let target4 = 4
let target5 = 5

let searchedTarget1 = searcher.search(target1)
let searchedTarget2 = searcher.search(target2)
let searchedTarget3 = searcher.search(target3)
let searchedTarget4 = searcher.search(target4)
let searchedTarget5 = searcher.search(target5)

console.log(searchedTarget1)
console.log(searchedTarget2)
console.log(searchedTarget3)
console.log(searchedTarget4)
console.log(searchedTarget5)