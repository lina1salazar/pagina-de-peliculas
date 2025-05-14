function renderizarPeliculas(peliculas, peliculasContainer, plantilla) {
    peliculasContainer.innerHTML=""
    peliculas.forEach(function (pelicula) {
        const clone = plantilla.content.cloneNode(true)
        const a = clone.querySelector("a")
        a.href = "detalle.html?slug="+pelicula.slug

        const img = clone.querySelector("img")
        img.src = "img/posters/" + pelicula.slug + ".webp"
        img.alt = pelicula.nombre

        img.style.viewTransitionName = `poster-${pelicula.slug}`;

        const nombre = clone.querySelector("h5")
        nombre.textContent = pelicula.nombre

        nombre.style.viewTransitionName = `nombre-pelicula-${pelicula.slug}`

        const año = clone.querySelector(".año")
        año.textContent = pelicula.año

        const generos = clone.querySelector(".generos")
        generos.textContent = pelicula.generos.join(", ")

        peliculasContainer.appendChild(clone)
    })
}