import fs from 'fs'

const leersincronico = function() {
    try{
        let ruta = './package.json'
        let size = fs.statSync('./package.json').size
        let obj = JSON.parse(fs.readFileSync(ruta, 'utf-8'))
        let str = JSON.stringify(obj,null/ "\t")
        let info = {
            contenidoStr: str,
            contenidoObj: obj,
            size: size
        }
        fs.writeFileSync('infoms.txt', JSON.stringify(obj,null/ "\t"))
        console.log(info)
    } catch(error) {
        console.log(`Error leyendo el mensaje: ${error.message}`)
    }
}

leersincronico()