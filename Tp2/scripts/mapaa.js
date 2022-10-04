import fs from 'fs'

const leerAsincronicoPromisesAsyncAwait = async function (){
    
    try{
    let ruta= "./package.json";
    let contObj = JSON.parse( await fs.promises.readFile(ruta,"utf-8"))
    let contString = JSON.stringify(contObj)
    let size = (await fs.promises.stat(ruta)).size;
    let info = {
    contenidoStr: contString,
    contenidoObj: contObj,
    size: size
    }

    console.log(info);
    await fs.promises.writeFile("./infomapaa.txt",JSON.stringify(info))
    } catch(error) {
        console.log(error);
    }
}

leerAsincronicoPromisesAsyncAwait()