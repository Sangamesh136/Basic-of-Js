// function readTxt(){
//   let p = new Promise(function(resolve){
//     resolve('hii hello')
//   })
//   return p
// }

// function logging(txt){
//   console.log(txt)
// }

// readTxt().then(function(value){
//   console.log(value)
// })

function readTxt(){
  let p = new Promise(function(resolve) {
    resolve('helloooooo')
  })
  return p
}

async function main() {
  let value = await readTxt()
  console.log(value)
}
main();