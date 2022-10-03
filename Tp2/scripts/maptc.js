 import fs from 'fs'

 const leerAsincronicoPromisesThenCatch = function () {
    let ruta= "./package.json";
    let obj = {}
    fs.promises.readFile(ruta,"utf-8")
        .then(datos => {
            let contObj = JSON.parse(datos)
            obj.contObj=  contObj
            obj.contString = JSON.stringify(contObj,null/ "\t")
            return fs.promises.stat(ruta)
        })
        .then(stats=>{
            obj.size=stats.size
            console.log(obj)
            return fs.promises.writeFile("./infomaptc.txt",JSON.stringify(obj))
        })
        .catch(error=>console.log(error)) 
}

leerAsincronicoPromisesThenCatch()