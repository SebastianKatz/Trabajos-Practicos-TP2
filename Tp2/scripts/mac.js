import fs from 'fs'

const leerAsincronicoCallBacks = function() {
    let ruta = './package.json'
    fs.stat(ruta, (error, stats) => {
        if(error) throw new Error(`Error leyendo el mensaje: ${error.message}`)
        fs.readFile(ruta,(error, datos) => {
            if(error) throw new Error(`Error leyendo el mensaje: ${error.message}`)
            let info = {
                contenidoStr: datos.toString(),
                contenidoObj: JSON.parse(datos),
                size: stats.size
            }
            console.log(info)
            fs.writeFile('infomac.txt',JSON.stringify(info, null,'\t'),(error) => {
                if(error) throw new Error(`Error escribiendo el mensaje: ${error.message}`)
            })

        })
    })
}

leerAsincronicoCallBacks()