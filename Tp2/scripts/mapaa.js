import fs from 'fs'

const leerAsincronicoPromisesAsyncAwait = async function (){
    
    try{
    let ruta= "./package.json";
    let contObj = JSON.parse( await fs.promises.readFile(ruta,"utf-8"))
    let contString = JSON.stringify(contObj)
    let size = (await fs.promises.stat(ruta)).size;
    let obj = {
    contenidoStr: contString,
    contenidoObj: contObj,
    size: size
    }

    console.log(obj);
    await fs.promises.writeFile("./infomapaa.txt",JSON.stringify(obj))
    } catch(error) {
        console.log(error);
    }
}

console.log("otras operaciones... (demostrando asinconismo)");
leerAsincronicoPromisesAsyncAwait()