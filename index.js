//EJERCICIO FACIL

const  filterArr = (a) => { return a.filter((item,index)=> a.indexOf(item) === index )}
const productOnly = (product) => {
    const len = product.length;
    const result = product
        .filter((value) => {
              let count = 0;
              for(let i = 0; i < len; i++){
                  if (product[i] === value) count++;
                }
              return count===1;
          })
    return result
}

function getGiftsToRefill(a1, a2, a3) {
    let a1Arr = filterArr(a1)
    let a2Arr = filterArr(a2)
    let a3Arr = filterArr(a3)
    const concatenado = a1Arr.concat(a2Arr,a3Arr)
    const ja= productOnly(concatenado)
    //console.log(ja)
}
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
getGiftsToRefill(a1,a2,a3)


//EJERCICIO MEDIO
function boxCompare(arr,i){
    [a,b,c] = arr
    let countCheck = ''
    if(a > b && a > c ){
        countCheck = 'a'
    }
    else if( b > a && b > c){
        countCheck = 'b'
    }
    else if (c > a && c > b){
        countCheck = 'c'
    }
    return countCheck
}

function bucleBox(rr, boxTotal){
    let arrResult = []
    for( let i = 0; i < boxTotal; i++){
        let ee = rr.map(item => item[i])
        //console.log(ee)
        let boxCompareTotal = boxCompare(ee,i)
        arrResult.push(boxCompareTotal)
    }
    const todoIgual = arr => arr.every(v => v === arr[0]);
    const checkAllBox = todoIgual(arrResult)
    //console.log(checkAllBox,arrResult)
}

function fitsInOneBox(boxes){
    const rr = boxes.map(item => Object.values(item))
    const boxTotal = boxes.length
    bucleBox(rr, boxTotal)
}
const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ]
    fitsInOneBox(boxes)




//EJERCICIO DIFICIL

function paint(mediumLine, numbersEmpty){
    return mediumLine.fill(' ', 0,  numbersEmpty === -1 ? null : numbersEmpty).join('')
    
}

function concatArr(space, spaceLine, a, b, c, size){

    let first = c.map((item,i) => `${item}${a[i]}`)
    let firstT = b.map((item,i) => `${item}${a[i]}`)
    let two = a.map((item,i) => `${item}${b[i]}`)
    let twoT = c.map((item,i) => `${item}${b[i]}`)

    const start = firstT.concat(first)
    const endT = two.concat(twoT)
    for(let j = 1 ;  j <= size ; j++){  
        let numbersEmpty= size-(j+1)
        let mediumLine = start.map((item, i) => numbersEmpty === i ? ' ' : `${item}`)
        const defined =  paint(mediumLine,numbersEmpty)
        console.log(defined)
    }



    for(let j = 0 ;  j < size ; j++){  
        let numbersEmptyi= j-1
        let mediumLineB = endT.map((item, i) => numbersEmptyi ===  i ? ' ' : `${item}`)
        const definedT =  paint(mediumLineB,numbersEmptyi)
        console.log(definedT)
    }

}

function buildArray(size,sign){
    let arr = []
    for (let i = 0; i < size ; i++){
        arr.push(sign)
    }
    return arr
}

function createCube(size) {
    const barLeft = "/"
    const barRight = "\\"
    const lineBottom = "_"
    const spaceLine = "\n"
    const space = " "
    let barRArr = buildArray(size, barRight)
    let barLArr = buildArray(size,barLeft)
    let lineBArr= buildArray(size,lineBottom)

    concatArr(space, spaceLine, barRArr, barLArr, lineBArr, size)
}  

const personas = [
    { name: 'midu', edad: 16 },
    { name: 'soler', edad: 19 },
    { name: 'cacho', edad: 19 },
]

const checkAge = personas.pop((person) => person.edad > 18 ? true : false)

console.log(checkAge)

//createCube(10)




