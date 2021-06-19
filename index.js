const _ = require("lodash")


class E {
    s() {
        console.log("Hello World")
        const sum  = _.add(10,20)

        if(sum == 30) {
            console.log("Passed");
        }
        else {
            throw "Error";
        }

    }
}

new E().s()

