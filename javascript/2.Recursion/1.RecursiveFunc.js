class Recursive {
    constructor(max) {
        this.max = max
    }

    c (num) {
        ++num

        if(num > this.max) {
            return
        }

        console.log(`${num}hello world`)
        
        this.c(num)
    }
}

let r = new Recursive(10)

r.c(0)