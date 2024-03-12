// const http = require("http")
// const fs = require("fs")
// const server = http.createServer((req,res)=>{
//  const read =   fs.createReadStream("./static/index.html")
//  read.pipe(res)
// })

// server.listen(3000)
// console.log("server on port " + 3000)+


/*const express = require("express"): Importa el framework Express,
  que simplifica la creación de aplicaciones web en Node.js.*/ 
const express = require("express")

/**const app = express(): Crea una instancia de la aplicación Express. */
const app = express()

app.get("/products",(req,res)=>{
    res.send("lista de productos")
})

app.post("/products",(req,res)=>{
    res.send("creando productos")
})
app.delete("/products",(req,res)=>{
    res.send("eliminando productos")
})

app.patch("/products",(req,res)=>{
    res.send("actualizando una parte de productos")
})

app.put("/products",(req,res)=>{
    res.send("actualizando productos")
})

app.listen(3000)
console.log("server on " + 3000)

/*esto lo que hace es cuando la ruta es vacia pone hello world*/ 
// app.get("/",(req,res)=>{
//  res.send("hello world")
// })
// /*esto lo que hace es cuando la ruta tenga /about pone about en el html
//  como texto*/ 
// app.get("/about",(req,res)=>{
//     res.send("about")
//    })
// /*etc*/ 
//    app.get("/camilo",(req,res)=>{
//     res.send("hola puto")
//    })

//    app.get("/sobre",(req,res)=>{
//     res.send("no sea sapo")
//    })


//    app.use((req,res)=>{
//     res.send("No existe esa ruta")
//    })
/**app.listen(3000): Hace que la aplicación Express escuche
en el puerto 3000.
console.log("server on " + 3000): Imprime en la consola un mensaje  */
