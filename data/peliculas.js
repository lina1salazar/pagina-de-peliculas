const peliculas =[
  {
    "id": 1,
    "nombre": "Memorias de un Caracol",
    "slug": "memorias-de-un-caracol",
    "año": 2025,
    "puntuacion": "7.9",
    "duracion": 94,
    "actores": "Jacki Weaver, Sarah Snook, Charlotte Belsey",
    "sinopsis": "Grace Pudel, una niña solitaria apasionada por las figuras de caracoles y las novelas románticas, sufre la pérdida de su padre y la separación de su hermano mellizo, Gilbert, lo que la sumerge en la ansiedad. Su vida cambia cuando conoce a Pinky, una anciana excéntrica y llena de vitalidad, con quien forja una amistad que transforma su destino.",
    "generos": [
      "Animación",
      "Drama",
      "Comedia",
      "Melodrama",
      "Stop Motion"
    ]
  },
  {
    "id": 2,
    "nombre": "The Monkey",
    "slug": "the-monkey",
    "año": 2025,
    "puntuacion": "5.8",
    "duracion": 97,
    "actores": "Theo James, Tatiana Maslany, Christian Convery, Elijah Wood, Adam Scott",
    "sinopsis": "Cuando Hal y Bill encuentran en el ático el antiguo mono de juguete de su padre, comienzan a ocurrir extrañas muertes. Asustados, lo desechan y siguen con sus vidas por separado. Años después, las tragedias regresan, obligándolos a reunirse para destruir el siniestro objeto antes de que siga cobrando vidas.",
    "generos": [
      "Comedia",
      "Terror"
    ]
  },
  {
    "id": 3,
    "nombre": "La Lista de Schindler",
    "slug": "la-lista-de-schindler",
    "año": 1993,
    "puntuacion": "9.0",
    "duracion": 196,
    "actores": "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    "sinopsis": "La historia real de Oskar Schindler, un empresario alemán que salvó a más de mil judíos durante el Holocausto al emplearlos en su fábrica.",
    "generos": [
      "Drama",
      "Historia"
    ]
  },
  {
    "id": 4,
    "nombre": "El Padrino",
    "slug": "el-padrino",
    "año": 1972,
    "puntuacion": "9.3",
    "duracion": 175,
    "actores": "Marlon Brando, Al Pacino, James Caan",
    "sinopsis": "La saga de la familia Corleone, una poderosa dinastía mafiosa en Nueva York, y su lucha por mantener el poder y la influencia en el mundo del crimen organizado.",
    "generos": [
      "Drama",
      "Crimen"
    ]
  },
  {
    "id": 5,
    "nombre": "Un Dolor Real",
    "slug": "un-dolor-real",
    "año": 2024,
    "puntuacion": "6.4",
    "duracion": 90,
    "actores": "Jesse Eisenberg, Kieran Culkin",
    "sinopsis": "Dos primos judíos viajan a Polonia, enfrentando recuerdos familiares y viejas tensiones en un viaje de autodescubrimiento.",
    "generos": [
      "Drama",
      "Comedia"
    ]
  },
  {
    "id": 6,
    "nombre": "La sustancia",
    "slug": "la-sustancia",
    "año": 2024,
    "puntuacion": "6.5",
    "duracion": 141,
    "actores": "Demi Moore, Margaret Qualley",
    "sinopsis": "Explora las implicaciones éticas y sociales de los avances científicos a través de una narrativa intrigante y provocadora.",
    "generos": [
      "Thriller",
      "Ciencia Ficción"
    ]
  },
  {
    "id": 7,
    "nombre": "Mad Max: Furia en la carretera",
    "slug": "mad-max-furia-en-la-carretera",
    "año": 2015,
    "puntuacion": "7.6",
    "duracion": 120,
    "actores": "Tom Hardy, Charlize Theron, Nicholas Hoult",
    "sinopsis": "En un futuro post-apocalíptico, Max se une a Furiosa para escapar de un tiránico gobernante y su ejército, mientras luchan por la supervivencia en un mundo devastado.",
    "generos": [
      "Ciencia Ficción",
      "Acción"
    ]
  },
  {
    "id": 8,
    "nombre": "Tiempos Violentos",
    "slug": "tiempos-violentos",
    "año": 1994,
    "puntuacion": "9.1",
    "duracion": 154,
    "actores": "John Travolta, Uma Thurman, Samuel L. Jackson",
    "sinopsis": "Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.",
    "generos": [
      "Drama",
      "Crimen"
    ]
  },
  {
    "id": 9,
    "nombre": "La Naranja Mecánica",
    "slug": "la-naranja-mecanica",
    "año": 1971,
    "puntuacion": "7.9",
    "duracion": 136,
    "actores": "Malcolm McDowell, Patrick Magee, Michael Bates",
    "sinopsis": "En una sociedad distópica, Alex DeLarge, un joven violento y amante de la música clásica, es sometido a una controvertida terapia de rehabilitación conductual.",
    "generos": [
      "Drama",
      "Ciencia Ficción"
    ]
  },
  {
    "id": 10,
    "nombre": "Psicosis",
    "slug": "psicosis",
    "año": 1960,
    "puntuacion": "9.2",
    "duracion": 109,
    "actores": "Anthony Perkins, Janet Leigh, Vera Miles",
    "sinopsis": "Marion Crane, una secretaria que huye tras robar dinero, se hospeda en un motel regentado por el inquietante Norman Bates, desencadenando una serie de eventos aterradores.",
    "generos": [
      "Terror",
      "Suspenso",
      "Misterio"
    ]
  },
  {
    "id": 11,
    "nombre": "El Rey León",
    "slug": "el-rey-leon",
    "año": 1994,
    "puntuacion": "8.4",
    "duracion": 85,
    "actores": "Matthew Broderick, James Earl Jones, Jeremy Irons",
    "sinopsis": "Un joven león llamado Simba debe enfrentarse a su destino y reclamar su lugar como rey de la sabana tras la muerte de su padre, Mufasa.",
    "generos": [
      "Animación",
      "Drama",
      "Aventura"
    ]
  },
  {
    "id": 12,
    "nombre": "Aladdín",
    "slug": "aladdin",
    "año": 1992,
    "puntuacion": "8.2",
    "duracion": 90,
    "actores": "Scott Weinger, Robin Williams, Linda Larkin",
    "sinopsis": "Aladdin, un joven humilde, encuentra una lámpara mágica que le concede tres deseos y le permite luchar por el amor de la princesa Jasmine.",
    "generos": [
      "Animación",
      "Aventura",
      "Fantasía"
    ]
  },
  {
    "id": 13,
    "nombre": "Toy Story",
    "slug": "toy-story",
    "año": 1995,
    "puntuacion": "9.2",
    "duracion": 77,
    "actores": "Tom Hanks, Tim Allen, Don Rickles",
    "sinopsis": "Los juguetes de Andy, un niño de seis años, temen que haya llegado su hora y que un nuevo regalo de cumpleaños les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito de Andy, trata de tranquilizarlos hasta que aparece Buzz Lightyear, un héroe espacial dotado de todo tipo de avances tecnológicos. Woody es relegado a un segundo plano, pero su constante rivalidad se transformará en una gran amistad cuando ambos se pierden en la ciudad sin saber cómo volver a casa.",
    "generos": [
      "Animación",
      "Comedia",
      "Aventura"
    ]
  },
  {
    "id": 14,
    "nombre": "Los Increíbles 2",
    "slug": "los-increibles-2",
    "año": 2018,
    "puntuacion": "8.9",
    "duracion": 120,
    "actores": "Craig T. Nelson, Holly Hunter, Samuel L. Jackson",
    "sinopsis": "La familia Parr, una familia de superhéroes, lucha por mantener su identidad secreta mientras enfrentan a un enemigo peligroso que amenaza a la humanidad.",
    "generos": [
      "Animación",
      "Acción",
      "Aventura"
    ]
  },
  {
    "id": 15,
    "nombre": "La Sirenita",
    "slug": "la-sirenita",
    "año": 1989,
    "puntuacion": "8.8",
    "duracion": 83,
    "actores": "Jodi Benson, Samuel E. Wright, Pat Carroll",
    "sinopsis": "Ariel, una sirena joven, hace un trato con la malvada bruja Úrsula para convertirse en humana y poder estar con el príncipe Eric.",
    "generos": [
      "Animación",
      "Aventura",
      "Fantasía"
    ]
  },
  {
    "id": 16,
    "nombre": "Shrek",
    "slug": "shrek",
    "año": 2001,
    "puntuacion": "8.5",
    "duracion": 92,
    "actores": "Mike Myers, Eddie Murphy, Cameron Diaz",
    "sinopsis": "Hace mucho, mucho tiempo, en una lejanísima ciénaga vivía un intratable ogro llamado Shrek. Pero de repente, un día, su absoluta soledad se ve interrumpida por una invasión de sorprendentes personajes de cuento. Hay ratoncitos ciegos en su comida, un enorme y malísimo lobo en su cama, tres cerditos sin hogar y otros muchos seres increíbles que han sido deportados de su reino por el malvado Lord Farquaad. Para conseguir salvar su terreno, y de paso a sí mismo, Shrek hace un pacto con Farquaad y emprende viaje para conseguir que la preciosa princesa Fiona sea la novia del Lord. En tan importante misión le acompañan un burro chistoso, dispuesto a hacer cualquier cosa por Shrek. Todo, menos estarse calladito. Rescatar a la princesa de una dragona enamoradiza que suelta fuego al respirar va a resultar una tontería comparado con lo que ocurre cuando el oscuro secreto que la joven guardaba es revelado.",
    "generos": [
      "Animación",
      "Comedia",
      "Aventura"
    ]
  },
  {
    "id": 17,
    "nombre": "Madagascar",
    "slug": "madagascar",
    "año": 2005,
    "puntuacion": "6.4",
    "duracion": 80,
    "actores": "Ben Stiller, Chris Rock, David Schwimmer",
    "sinopsis": "Un grupo de animales del zoológico de Central Park escapa y termina en la isla de Madagascar, donde deben adaptarse a la vida en la jungla.",
    "generos": [
      "Animación",
      "Comedia",
      "Aventura"
    ]
  },
  {
    "id": 18,
    "nombre": "El Príncipe de Egipto",
    "slug": "el-principe-de-egipto",
    "año": 1998,
    "puntuacion": "7.8",
    "duracion": 99,
    "actores": "Val Kilmer, Ralph Fiennes, Michelle Pfeiffer",
    "sinopsis": "La historia bíblica de Moisés, quien se convierte en el líder de los hebreos, luchando por liberar a su pueblo de la esclavitud en Egipto.",
    "generos": [
      "Animación",
      "Drama",
      "Aventura"
    ]
  },
  {
    "id": 19,
    "nombre": "El Señor de los Anillos: El Retorno del Rey",
    "slug": "el-senor-de-los-anillos-el-retorno-del-rey",
    "año": 2003,
    "puntuacion": "8.3",
    "duracion": 202,
    "actores": "Elijah Wood, Sean Astin, Karl Urban.",
    "sinopsis": "El clímax de la trilogía de \"El Señor de los Anillos\", donde Frodo y Sam luchan por destruir el Anillo Único en el Monte del Destino.",
    "generos": [
      "Drama",
      "Ciencia Ficción",
      "Acción",
      "Aventura",
      "Fantasía"
    ]
  },
  {
    "id": 20,
    "nombre": "Una Película de Minecraft",
    "slug": "una-pelicula-de-minecraft",
    "año": 2025,
    "puntuacion": "6.8",
    "duracion": 101,
    "actores": "Jack Black, Jason Momoa, Sebastian Hansen",
    "sinopsis": "Un portal desconocido atrae a cuatro jóvenes hacia el Supramundo, un reino cúbico y mágico que toma forma a partir de la imaginación. Su única esperanza de regresar es dominar un terreno cambiante y confiar en la ayuda de un artesano inesperado llamado Steve.",
    "generos": [
      "Comedia",
      "Aventura"
    ]
  },
  {
    "id": 21,
    "nombre": "The Amateur",
    "slug": "the-amateur",
    "año": 2025,
    "puntuacion": "6.7",
    "duracion": 123,
    "actores": "Rami MalekRachel BrosnahanJon Bernthal",
    "sinopsis": "Charlie Heller es un brillante decodificador de la CIA cuyo mundo se derrumba cuando su esposa muere en un atentado terrorista en Londres.",
    "generos": [
      "Drama",
      "Thriller",
      "Acción",
      "Suspenso"
    ]
  },
  {
    "id": 22,
    "nombre": "Los Pecadores",
    "slug": "los-pecadores",
    "año": 2025,
    "puntuacion": "8.2",
    "duracion": 138,
    "actores": "Miles Caton, Saul Williams, Andrene Ward-Hammond",
    "sinopsis": "Tratando de descubrir sus problemáticas vidas detrás, los hermanos gemelos regresan a su ciudad natal para comenzar de nuevo, solo para descubrir que un mal aún mayor los espera para darles la bienvenida nuevamente.",
    "generos": [
      "Aventura",
      "Horror"
    ]
  },
  {
    "id": 23,
    "nombre": "Origen",
    "slug": "origen",
    "año": 2010,
    "puntuacion": "8.8",
    "duracion": 148,
    "actores": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    "sinopsis": "A un ladrón que roba secretos corporativos a través de la tecnología de entrar en el subconsciente, se le da la tarea de implantar una idea en la mente del jefe de una gran empresa.",
    "generos": [
      "Thriller",
      "Ciencia Ficción",
      "Acción",
      "Aventura",
      "Thriller Psicologico"
    ]
  },
  {
    "id": 24,
    "nombre": "Dune Parte 2",
    "slug": "dune-parte-2",
    "año": 2024,
    "puntuacion": "8.5",
    "duracion": 167,
    "actores": "Timothée Chalamet, Zendaya, Rebecca Ferguson",
    "sinopsis": "Paul Atreides se une a Chani y los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia.",
    "generos": [
      "Drama",
      "Ciencia Ficción",
      "Acción",
      "Aventura"
    ]
  },
  {
    "id": 25,
    "nombre": "Intensa Mente 2",
    "slug": "intensa-mente-2",
    "año": 2024,
    "puntuacion": "7.5",
    "duracion": 96,
    "actores": "Amy Poehler, Maya Hawke, Kensington Tallman",
    "sinopsis": "Riley, en su adolescencia, al encuentro de nuevas emociones.",
    "generos": [
      "Animación",
      "Drama",
      "Comedia",
      "Aventura"
    ]
  },
  {
    "id": 26,
    "nombre": "Cónclave",
    "slug": "conclave",
    "año": 2024,
    "puntuacion": "7.2",
    "duracion": 120,
    "actores": "Ralph Fiennes, Stanley Tucci, John Lithgow, Isabella Rossellini",
    "sinopsis": "Sigue la historia del cardenal Lawrence, un hombre que tiene la tarea de dirigir un proceso encubierto para la elección de un nuevo Papa.",
    "generos": [
      "Drama",
      "Suspenso",
      "Misterio"
    ]
  },
  {
    "id": 27,
    "nombre": "Furiosa De la saga Mad Max",
    "slug": "furiosa-de-la-saga-mad-max",
    "año": 2024,
    "puntuacion": "7.4",
    "duracion": 148,
    "actores": "Anya Taylor-Joy, Chris Hemsworth, Tom Burke",
    "sinopsis": "Al caer el mundo, la joven Furiosa es arrebatada del Lugar Verde de Muchas Madres y cae en manos de una gran horda de motoristas liderada por el señor de la guerra Dementus.",
    "generos": [
      "Thriller",
      "Ciencia Ficción",
      "Acción",
      "Aventura"
    ]
  }
]