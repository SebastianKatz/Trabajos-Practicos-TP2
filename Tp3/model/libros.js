const libros = [
    { id: '1', titulo: 'Hamlet', autor: 'Shakespeare', anio: 1603 },
    { id: '2', titulo: 'El guardián entre el centeno', autor: 'Salinger', anio: 1951 },
    { id: '3', titulo: 'El gran Gatsby', autor: 'Fitzgerald', anio: 1925 },
    { id: '4', titulo: 'Moby Dick', autor: 'Melville', anio: 1851 }
]

const findLibro = id => {
    return libros.find(libro => libro.id == id)
}

const findLibros = () => {
    return libros
}

const saveLibro = libro => {
    libro.anio = parseInt(libro.anio)

    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)
    libros.push(libro)

    return libro
}

const updateLibro = (libro, id) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)

    return libro
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)
    const libro = libros.splice(index, 1)[0]

    return libro
}

export default {
    findLibro,
    findLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}