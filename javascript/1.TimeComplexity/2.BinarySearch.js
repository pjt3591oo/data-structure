// 이진탐색
// 정렬이 된 상태에서 사용해야 함.

class BinarySearch {
    constructor (arr) {
        this.arr = arr
        this.len = arr.length
    }

    search (target) {
        let firstIndex = 0
        let lastIndex = this.len - 1
        let loopCnt = 0

        while (firstIndex <= lastIndex) {
            loopCnt++

            let midIndex = Math.ceil((firstIndex + lastIndex) / 2)
            let currentValue = this.arr[midIndex]
            
            if ( currentValue == target ) {
                return {
                    searchIndex: midIndex, 
                    loopCnt: loopCnt
                }
            } else {
                if ( target < currentValue ) {
                    lastIndex = midIndex - 1
                } else {
                    firstIndex = midIndex + 1
                }
            }

        }

        return {
            searchIndex: -1, 
            loopCnt: loopCnt
        }
    }
}

// ===== 탐색 테스트 =====
console.log('===== 탐색 테스트 =====')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let searcher = new BinarySearch(arr)

let result1 = searcher.search(1)
let result2 = searcher.search(2)
let result3 = searcher.search(3)
let result4 = searcher.search(4)
let result5 = searcher.search(5)
let result6 = searcher.search(6)
let result7 = searcher.search(7)
let result8 = searcher.search(8)
let result9 = searcher.search(9)
let result10 = searcher.search(10)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)
console.log(result7)
console.log(result8)
console.log(result9)
console.log(result10)

// ===== 연산속도 측정 =====
console.log()
console.log('===== 연산속도 측정 =====')
let bigArr = new Array(100000)

let bigSearch = new BinarySearch(bigArr)
console.log(bigSearch.search(1)) // loopCnt: 16