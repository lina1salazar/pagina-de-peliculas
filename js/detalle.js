const plantilla = document.getElementById("plantilla-pelicula")
const peliculasContainer = document.getElementById("peliculas-container")
// Defino la constante para obtener los parametros de la URL
const urlParams = new URLSearchParams(window.location.search);


// Definimos una constante para almacenar el valor de la clave "slug" de la URL
const peliculaSlug =urlParams.get("slug")

// busca la pelicula por el slug y la guardo en la variable
let pelicula = peliculas.find(p =>p.slug ==peliculaSlug)

function mostrarPelicula(pelicula){
    document.title = `NickPelis 🍿 | ${pelicula.nombre}`
    
    const backdrop = document.getElementById('pelicula-backdrop')
    const poster = document.getElementById('pelicula-poster')
    const nombre = document.getElementById('pelicula-nombre')
    const puntuacion = document.getElementById('pelicula-puntuacion')
    const duracion = document.getElementById('pelicula-duracion')
    const anio = document.getElementById('pelicula-anio')
    const sipnosis = document.getElementById('pelicula-sipnosis')
    const genero = document.getElementById('pelicula-generos')
    const actores = document.getElementById('pelicula-actores')
    
    
    backdrop.src = "img/backdrops/" + pelicula.slug + ".webp"
    backdrop.alt = pelicula.nombre
    poster.style.viewTransitionName = `backdrop-${pelicula.slug}`;
    
    poster.src = "img/posters/" + pelicula.slug + ".webp"
    poster.alt = pelicula.nombre

    poster.style.viewTransitionName = `poster-${pelicula.slug}`;
    
    nombre.textContent = pelicula.nombre 
    nombre.style.viewTransitionName = `nombre-pelicula-${pelicula.slug}`
    
    puntuacion.textContent = pelicula.puntuacion
    duracion.textContent = pelicula.duracion
    anio.textContent = pelicula.año
    sipnosis.textContent = pelicula.sinopsis
    genero.textContent = pelicula.generos.join (", ")
    actores.textContent = pelicula.actores

    document.getElementById("pelicula-container").style.display = "block"    
    document.getElementById("reseñas").style.display = "block"    
    document.getElementById("comentarios").style.display = "block"    
}

if (pelicula){
    mostrarPelicula(pelicula)
} else {
    document.getElementById("sin-pelicula").style.display = "block"
}

function obtenerPeliculasAleatorias(todasPeliculas, slugExcluir, cantidad = 6) {
    // Filtrar para excluir la película actual
    const peliculasDisponibles = todasPeliculas.filter(pelicula => pelicula.slug !== slugExcluir);
    
    // Verificar si hay suficientes películas
    if (peliculasDisponibles.length <= cantidad) {
        return peliculasDisponibles;
    }
    
    // Copiar el array para no modificar el original
    const copiaPeliculas = [...peliculasDisponibles];
    const resultado = [];
    
    // Seleccionar aleatoriamente
    for (let i = 0; i < cantidad; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaPeliculas.length);
        resultado.push(copiaPeliculas[indiceAleatorio]);
        
        // Eliminar la película seleccionada para no repetir
        copiaPeliculas.splice(indiceAleatorio, 1);
    }
    
    return resultado;
}

const peliculasAleatorias = obtenerPeliculasAleatorias(peliculas, pelicula && pelicula.slug)

renderizarPeliculas(peliculasAleatorias, peliculasContainer, plantilla)


function agregarComentario(nombre, calificacion, comentario){
    const contenedor = document.querySelector('#comentarios-container')
    const fecha = new Date().toLocaleDateString('es-ES')

    const nuevoComentario = document.createElement('article')
    nuevoComentario.className = 'p-2 border-bottom'

    nuevoComentario.innerHTML = `
    <div class="d-flex gap-4 align-items-center justify-content-between text-muted">
    <h5 class="m-0">${nombre}</h5>
    <p class="mb-0"> 
    Calificación: ${calificacion}⭐
    </p>
    <p class="m-0">${fecha}</p>
    </div>
    <p class="mt-2 mb-0">
    ${comentario}
    </p>
    `
    contenedor.appendChild(nuevoComentario, document.querySelector('#comentarios-container'))
}

document.getElementById('form-comentario').addEventListener('submit', function(e){
    e.preventDefault()
    
    const nombre = document.getElementById('nombre').value
    const calificacion = document.getElementById('calificacion').value
    const comentario = document.getElementById('comentario').value

    if(!nombre || !calificacion || !comentario) {
        alert('Por favor completa todos los campos')
        return
    }

    agregarComentario(nombre, calificacion, comentario)

    this.reset()


})



