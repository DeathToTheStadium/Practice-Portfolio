
const thing = {}

try {
    thing.true = true
    console.log('sometimes things arent ' + `${thing.true}`)
} catch(err) {
    console.log(err)
} finally{
    console.log("ive ran because im the final block of code")
}

function add(...arg) {
    var numbers = {...arg}
    let value = 0
    for ( var x in numbers) {
        try{
            if (typeof(numbers[x])  !== "number" ) throw err
        } catch(err){
            console.log(err + `\n Type ${typeof(numbers[x])} :Argument ${Number(x) +1 }`)
            numbers[x] = 0
        } 
            
        value += numbers[x]
    }
    console.log('ran')
    return value
}

console.log(add(32,"31","32",2322,123,"","1232"))