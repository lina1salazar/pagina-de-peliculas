const plantilla = document.getElementById("plantilla-pelicula")
const peliculasContainer = document.getElementById("peliculas-container")
const formularioBusqueda = document.getElementById("formulario-busqueda")


function buscarPelicula(peliculas, valor_busqueda, genero = null, año = null) {
    console.log({valor_busqueda,genero,año})
    let peliculas_filtradas = peliculas.filter(pelicula => pelicula.nombre.toLowerCase().includes(valor_busqueda))
    if (genero) {
        peliculas_filtradas = peliculas_filtradas.filter(pelicula => pelicula.generos.includes(genero))
    }

    if (año) {
        peliculas_filtradas = peliculas_filtradas.filter(pelicula => pelicula.año == año)
    }
    return peliculas_filtradas
}


function cargarGeneros() {
    const selectGenero = document.getElementById('genero');
    
    // Obtener todos los géneros únicos de todas las películas
    const todosGeneros = new Set();
    peliculas.forEach(pelicula => {
        pelicula.generos.forEach(genero => {
            todosGeneros.add(genero);
        });
    });
    
    // Ordenar alfabéticamente
    const generosOrdenados = Array.from(todosGeneros).sort();
    
    // Agregar opciones al select
    generosOrdenados.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero;
        option.textContent = genero;
        selectGenero.appendChild(option);
    });
}

// Función para cargar los años en el select
function cargarAnios() {
    const selectAnio = document.getElementById('anio');
    
    // Obtener todos los años únicos de las películas
    const todosAnios = new Set(peliculas.map(pelicula => pelicula.año));
    
    // Ordenar de más reciente a más antiguo
    const aniosOrdenados = Array.from(todosAnios).sort((a, b) => b - a);
    
    // Agregar opciones al select
    aniosOrdenados.forEach(anio => {
        const option = document.createElement('option');
        option.value = anio;
        option.textContent = anio;
        selectAnio.appendChild(option);
    });
}



const inputBusqueda = document.querySelector("#busqueda")
const selectGenero = document.querySelector("#genero")
const selectAnio = document.querySelector("#anio")

function filtrarPeliculas(){
    const valor_buscado = inputBusqueda.value
    const genero = selectGenero.value
    const anio = selectAnio.value
    let peliculas_filtradas = buscarPelicula(peliculas, valor_buscado, genero, anio)
    renderizarPeliculas(peliculas_filtradas, peliculasContainer, plantilla)
}

formularioBusqueda.addEventListener("submit", function(e){
    e.preventDefault()
    filtrarPeliculas()    
})

selectGenero.addEventListener("change", function(e){
    filtrarPeliculas()
})

selectAnio.addEventListener("change", function(e){
    filtrarPeliculas()
})

renderizarPeliculas(peliculas, peliculasContainer, plantilla)
cargarGeneros()
cargarAnios()


