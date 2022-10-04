 import fs from 'fs'

 const leerAsincronicoPromisesThenCatch = function () {
    let ruta= "./package.json";
    let info = {}
    fs.promises.readFile(ruta,"utf-8")
        .then(datos => {
            let contObj = JSON.parse(datos)
            info.contObj=  contObj
            info.contString = JSON.stringify(contObj,null/ "\t")
            return fs.promises.stat(ruta)
        })
        .then(stats=>{
            info.size=stats.size
            console.log(info)
            return fs.promises.writeFile("./infomaptc.txt",JSON.stringify(obj))
        })
        .catch(error=>console.log(error)) 
}

leerAsincronicoPromisesThenCatch()