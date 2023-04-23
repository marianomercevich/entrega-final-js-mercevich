let listaProductos = [
    {id:1, nombre:"Collares Pampa", precio: 1200, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: 'assets/10.jpg', alt: "perro10"},
    {id:2, nombre:"Collares Marcel", precio: 1300, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/02.jpg", alt: "perro02"},
    {id:3, nombre:"Collares Michi ", precio: 1500, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/03.jpg", alt: "perro03"},
    {id:4, nombre:"Collares Michi II", precio: 1600, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/04.jpg", alt: "perro04"},
    {id:5, nombre:"Collares Axolote", precio: 1700, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/05.jpg", alt: "perro05"},
    {id:6, nombre:"Collares Silo", precio: 1800, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/06.jpg", alt: "perro06"},
    {id:7, nombre:"Collares Mezcla", precio: 1900, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/07.jpg", alt: "perro07"},
    {id:8, nombre:"Collares Coqueto", precio: 2000, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/01.jpg",alt: "perro01"},
    {id:11,nombre: "Collares Cali", precio: 2500, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/11.jpg",alt: "perro11"},
    {id:12,nombre: "Collares Gaucho", precio: 2100, descripcion: "Collar de cuero reciclado con tejido artesanal", cantidad: 1, img: "assets/12.jpg",alt: "perro12"}
]

 const arrEnFormatoJSON = JSON.stringify(listaProductos)

localStorage.setItem("listaProductos",arrEnFormatoJSON)

/*
let obtenerListaJSON = localStorage.getItem("listaProductos")

if(obtenerListaJSON){
    listaProductos = JSON.parse(obtenerListaJSON)
    
}else{
    listaProductos = []
}

console.log(listaProductos)

const form = document.getElementById("formulario")


form.addEventListener("submit", (e) => {

    e.preventDefault()

    const id = document.getElementById("id").value
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("precio").value
    const descripcion = document.getElementById("descripcion").value

    listaProductos.push({id:id,nombre:nombre,precio:precio,descripcion:descripcion})

    const listaProductosJSON = JSON.stringify( listaProductos )

    localStorage.setItem("listaProductos",listaProductosJSON)

    form.reset()

    console.log(listaProductos)
})
