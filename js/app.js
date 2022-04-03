// Variables
const resultado =  document.querySelector('#resultado')

const marcaSelect =  document.querySelector('#marca')
const yearSelect =  document.querySelector('#year')
const minimoSelect =  document.querySelector('#minimo')
const maximoSelect =  document.querySelector('#maximo')
const puertasSelect =  document.querySelector('#puertas')
const trasmisionSelect =  document.querySelector('#transmision')
const colorSelect =  document.querySelector('#color')


const maxYear = new Date().getFullYear()
const minYear = maxYear - 10


// objeto de la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}



document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos)
    mostrarYears()
})

// Event Listener de los Select de busqueda

marcaSelect.addEventListener('change', ( e )=>{
    datosBusqueda.marca = e.target.value
    filtrarAutos()
})

yearSelect.addEventListener('change', ( e )=>{
    datosBusqueda.year = Number(e.target.value)
    filtrarAutos()
})

minimoSelect.addEventListener('change', ( e )=>{
    datosBusqueda.minimo = Number(e.target.value)
    filtrarAutos()
})

maximoSelect.addEventListener('change', ( e )=>{
    datosBusqueda.maximo = Number(e.target.value)
    filtrarAutos()
})

puertasSelect.addEventListener('change', ( e )=>{
    datosBusqueda.puertas = Number(e.target.value)
    filtrarAutos()
})

trasmisionSelect.addEventListener('change', ( e )=>{
    datosBusqueda.transmision = e.target.value
    filtrarAutos()
})

colorSelect.addEventListener('change', ( e )=>{
    datosBusqueda.color = e.target.value
    filtrarAutos()
})


const filtrarAutos = () => {
    const resultadoFiltro = autos.filter( filtrarMarca )
                                    .filter( filtrarYear )
                                    .filter( filtrarPrecioMinimo )
                                    .filter( filtrarPrecioMaximo )
                                    .filter( filtrarPuertas )
                                    .filter( filtrarTransmision )
                                    .filter( filtrarColor )
                                    
    mostrarAutos( resultadoFiltro )
}


const filtrarMarca = ( auto ) =>{
    const { marca } = datosBusqueda

    if( marca ){
        return auto.marca === marca
    }
    return auto
}

const filtrarYear = ( auto ) =>{
    const { year } = datosBusqueda

    if( year ){
        return auto.year === year
    }
    return auto
}

const filtrarPrecioMinimo = ( auto ) =>{
    const { minimo } = datosBusqueda

    if( minimo ){
        return auto.precio >= minimo
    }
    return auto
}

const filtrarPrecioMaximo = ( auto ) =>{
    const { maximo } = datosBusqueda

    if( maximo ){
        return auto.precio <= maximo
    }
    return auto
}

const filtrarPuertas = ( auto ) =>{
    const { puertas } = datosBusqueda

    if( puertas ){
        return auto.puertas === puertas
    }
    return auto
}

const filtrarTransmision = ( auto ) =>{
    const { transmision } = datosBusqueda

    if( transmision ){
        return auto.transmision === transmision
    }
    return auto
}

const filtrarColor = ( auto ) =>{
    const { color } = datosBusqueda

    if( color ){
        return auto.color === color
    }
    return auto
}



const mostrarAutos = ( autos ) => {
    
    limpiarHTML()

    if( autos.length === 0  ){
        mostrarMensajeSinResultados()
        return
    }

    autos.forEach( auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto

        const autoHTML = document.createElement('p')

        autoHTML.textContent=`
            ${ marca } ${ modelo } - ${ year } -${ puertas } Puertas - Transmisión ${ transmision } - Precio $${ precio } - Color: ${ color }
        `
        resultado.appendChild(autoHTML)
    });

}

const limpiarHTML = () => {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild )
    }
}

const mostrarMensajeSinResultados = () => {
    const msgSinResultados = document.createElement('div')
          msgSinResultados.classList.add('alerta', 'error')
          msgSinResultados.textContent = 'No se encontraron resultados'

    resultado.appendChild( msgSinResultados )
}

const mostrarYears = () => {
    
    for (let year = maxYear; year >= minYear; year--) {
        
        const option = document.createElement('option')
              option.value = year
              option.textContent = year
        
        yearSelect.append( option )

    }
}