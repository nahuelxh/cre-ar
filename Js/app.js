const productosColeccion = document.getElementById ('productosColeccion')
const imagenCarrito = document.getElementById ('imagenCarrito')
const sumaCompras = document.getElementById ('sumaCompras')
const fabricaCarrito = document.getElementById ('fabricaCarrito')


let Carrito = JSON.parse (localStorage.getItem ('carrito')) || []


const obras = [{
id: 1, titulo: 'obra1', medidas: '318 x 276 cm', tecnica: 'oleo', soporte: 'tela', año: 2020, precio: 30000,
},
{id: 2, titulo: 'obra2', medidas: '380 x 296 cm', tecnica: 'oleo', soporte: 'tela', año: 2010, precio: 38000, 
},
{id: 3, titulo: 'obra3', medidas: '179 x 220 cm', tecnica: 'acuarela', soporte: 'papel', año: 2015, precio: 20000,
},
{id: 4,  titulo: 'obra4', medidas: '400 x 350 cm', tecnica: 'mixta', soporte: 'lienzo', año: 2010, precio: 50000,
},
{id: 5, titulo: 'obra5', medidas: '190 x 190 cm', tecnica: 'acuarela', soporte: 'papel', año: 2015, precio: 10000,
},
{id: 6, titulo: 'obra6', medidas: '300 x 200 cm', tecnica: 'oleo', soporte: 'tela', año: 2020, precio: 32000,
},
{id: 7, titulo: 'obra7', medidas: '360 x 290 cm', tecnica: 'mixta', soporte: 'lienzo', año: 2012, precio: 50000,
},
{id: 8, titulo: 'obra8', medidas: '418 x 310 cm', tecnica: 'oleo', soporte: 'tela', año: 2020, precio: 60000,
},
{id: 9, titulo: 'obra9', medidas: '290 x 195 cm', tecnica: 'mixta', soporte: 'tela', año: 2010, precio: 45000, },

{id: 10, titulo: 'obra10', medidas: '310 x 250 cm', tecnica: 'acuarela', soporte: 'papel', año: 2018, precio: 31000,
},
{id: 11, titulo: 'obra11', medidas: '450 x 600 cm', tecnica: 'oleo', soporte: 'tela', año: 2007, precio: 60000,
},
{id: 12, titulo: 'obra12', medidas: '180 x 90 cm', tecnica: 'oleo', soporte: 'lienzo', año: 2021, precio: 38000,
},
{id: 13, titulo: 'obra13', medidas: '270 x 210 cm', tecnica: 'mixta', soporte: 'madera', año: 2017, precio: 65000,
},
{id: 14, titulo: 'obra14', medidas: '380 x 280 cm', tecnica: 'oleo', soporte: 'tela', año: 2022, precio: 42000,
},
{id: 15, titulo: 'obra15', medidas: '160 x 60 cm', tecnica: 'acrilico', soporte: 'lienzo', año: 2016, precio: 23000,
},
{id: 16, titulo: 'obra16', medidas: '90 x 90 cm', tecnica: 'acuarela', soporte: 'papel', año: 2010, precio: 17000,
},
{id: 17, titulo: 'obra17', medidas: '180 x 100 cm', tecnica: 'oleo', soporte: 'tela', año: 2015, precio: 31000,
},
{id: 18, titulo: 'obra18', medidas: '80 x 50 cm', tecnica: 'acrilico', soporte: 'lienzo', año: 2005, precio: 26000,
},
{id: 19, titulo: 'obra19', medidas: '320 x 280 cm', tecnica: 'mixta', soporte: 'madera', año: 2022, precio: 70000,
}];


//  PRODUCTOS


obras.forEach((obra)=>{
    let content = document.createElement('div')
    content.className = 'cardColeccion'
    content.innerHTML = `
    <img src"${obra.img}">
    <h2>${obra.titulo}</h2>
    <p>$ ${obra.precio}</p>
    `
    productosColeccion.appendChild(content)

    let adquirirObra = document.createElement('button')
    adquirirObra.innerText = "Adquirir obra"
    adquirirObra.className = "adquirir-Obra"
    content.appendChild(adquirirObra)
})

adquirirObra.addEventListener('click' , () => {
    const repeat = Carrito.some ((repeatObra)=> repeatObra.id === obra.id)
    if(repeat){ 
        Carrito.map((obr)=> {
            if(obr.id===obra.id) {
                obr.cantidad++
            }
        })
    }
    else {
        Carrito.push ( {
            titulo:obra.titulo,
            medidas:obra.medidas,
            precio:obra.precio,
        })
    }
})

console.log(adquirirObra)

//  CARRITO


const llenarCarrito = ()=>{
    fabricaCarrito.innerHTML = ""
    fabricaCarrito.style.display = 'flex'
    const modeladoCarrito = document.createElement ('div')
    modeladoCarrito.className = "modelo-carrito"
    modeladoCarrito.innerHTML = `<h1>Carrito</h1>`
    fabricaCarrito.append (modeladoCarrito)

    Carrito.forEach ((obra)=>{
        let contenidoCarrito = document.createElement ('div')
        contenidoCarrito.className = "contenido-carrito"
        contenidoCarrito.innerHTML = `<h3> ${obra.titulo}</h3><p>$ ${obra.precio}</p>`
        fabricaCarrito.appendChild ('contenidoCarrito')
    })
}