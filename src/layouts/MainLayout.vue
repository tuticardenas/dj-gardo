<template>
  <q-layout
    view="hHh lpR fFf"
    class="bg-brandDark text-white selection:bg-neonPink selection:text-white"
  >
    <!-- HEADER NAVBAR -->
    <q-header
      class="bg-brandDark/90 backdrop-blur-md border-b border-white/10 text-white fixed-top z-40"
    >
      <q-toolbar class="max-w-7xl mx-auto px-4 sm:px-8 py-3 justify-between">
        <!-- Logo -->
        <div class="flex items-center cursor-pointer" @click="scrollTo('hero')">
          <span
            class="font-syne font-extrabold text-2xl tracking-widest text-white hover:text-neonPink transition-colors"
          >
            DJGARDO<span class="text-neonPink">.</span>
          </span>
        </div>

        <!-- Desktop Navigation Links -->
        <div
          class="hidden md:flex items-center space-x-8 font-syne text-xs uppercase tracking-wider font-bold"
        >
          <button @click="scrollTo('hero')" class="hover:text-neonCyan transition-colors py-1">
            INICIO
          </button>
          <button @click="scrollTo('music')" class="hover:text-neonCyan transition-colors py-1">
            PAQUETES
          </button>
          <button @click="scrollTo('tour')" class="hover:text-neonCyan transition-colors py-1">
            EXTRAS
          </button>
          <button @click="scrollTo('about')" class="hover:text-neonCyan transition-colors py-1">
            NOSOTROS
          </button>
          <button @click="scrollTo('gallery')" class="hover:text-neonCyan transition-colors py-1">
            GALERIA
          </button>
          <button
            class="px-6 py-2.5 rounded-full bg-gradient-to-r from-neonPink to-neonPinkHover text-white font-bold hover:glow-pink transition-all transform hover:-translate-y-0.5"
          >
            RESERVA!
          </button>
        </div>

        <!-- Mobile Drawer Toggle -->
        <q-btn
          flat
          round
          icon="menu"
          class="md:hidden text-neonPink"
          @click="drawer = !drawer"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <!-- MOBILE NAVIGATION DRAWER -->
    <q-drawer v-model="drawer" side="right" overlay behavior="mobile" class="text-white p-6">
      <div class="flex justify-between items-center mb-8">
        <span class="font-syne font-bold text-xl text-neonPink tracking-wider">AOEDE</span>
        <q-btn flat round icon="close" v-close-popup @click="drawer = false"></q-btn>
      </div>

      <div
        class="flex flex-col space-y-6 text-base font-syne uppercase tracking-wider font-semibold"
      >
        <a @click="navigateTo('hero')" class="hover:text-neonCyan cursor-pointer">INICIO</a>
        <a @click="navigateTo('music')" class="hover:text-neonCyan cursor-pointer">PAQUETES</a>
        <a @click="navigateTo('tour')" class="hover:text-neonCyan cursor-pointer">EXTRAS</a>
        <a @click="navigateTo('about')" class="hover:text-neonCyan cursor-pointer">NOSOTROS</a>
        <a @click="navigateTo('gallery')" class="hover:text-neonCyan cursor-pointer">GALERIA</a>
        <a
          class="text-neonPink hover:text-white cursor-pointer font-bold"
          >Book Event</a
        >
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 flex justify-center space-x-6 text-xl">
        <a href="https://spotify.com" target="_blank" class="hover:text-neonCyan"
          ><i class="fa-brands fa-spotify"></i
        ></a>
        <a href="https://soundcloud.com" target="_blank" class="hover:text-neonPink"
          ><i class="fa-brands fa-soundcloud"></i
        ></a>
        <a href="https://instagram.com" target="_blank" class="hover:text-neonCyan"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a href="https://youtube.com" target="_blank" class="hover:text-neonPink"
          ><i class="fa-brands fa-youtube"></i
        ></a>
      </div>
    </q-drawer>

    <!-- MAIN PAGE CONTENT -->
    <q-page-container class="pb-28">
      <!-- HERO BANNER SECTION -->
      <section
        id="hero"
        class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-grid-pattern hero-gradient"
      >
        <!-- Ambient Sound Wave Canvas Overlay -->
        <canvas
          id="ambient-canvas"
          class="absolute inset-0 z-0 opacity-30 pointer-events-none"
        ></canvas>

        <div
          class="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <!-- Text CTA Column -->
          <div class="lg:col-span-7 text-center lg:text-left space-y-6">
            <div
              class="inline-flex items-center space-x-2 bg-brandSurface border border-white/10 px-4 py-1.5 rounded-full"
            >
              <span class="w-2 h-2 rounded-full bg-neonPink animate-ping"></span>
              <span class="text-xs font-mono uppercase tracking-widest text-gray-300"
                >AUDIO • ILUMINACIÓN • DJs</span
              >
            </div>

            <h1
              class="font-syne text-5xl sm:text-7xl lg:text-5xl font-black tracking-tight uppercase leading-none text-white"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-neonPink via-white to-neonCyan text-glow-pink"
              >
                LA FIESTA </span
              ><br />
              COMIENZA AQUI
            </h1>

            <p
              class="max-w-xl text-gray-400 text-base sm:text-lg font-light leading-relaxed mx-auto lg:mx-0"
            >
              Creamos experiencias inolvidables con música, sonido e iluminacion para darle
              vida a tus eventos. La combinacion perfecta para que cada celebracion tenga
              su propio ritmo.
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <q-btn
                size="lg"
                unelevated
                rounded
                class="bg-gradient-to-r from-neonPink to-neonPinkHover text-white font-syne font-bold px-8 py-3.5 hover:glow-pink transition-all transform hover:-translate-y-1"
                @click="scrollTo('music')"
              >
                <q-icon name="arrow_forward" class="mr-2"></q-icon>
                COTIZA TU EVENTO
              </q-btn>

              <q-btn
                size="lg"
                outline
                rounded
                color="cyan"
                class="font-syne font-bold px-8 py-3.5 hover:bg-neonCyan/10 transition-colors"
                @click="showAvailability = true"
              >
                <q-icon name="calendar_today" class="mr-2"></q-icon>
                Fechas disponibles
              </q-btn>
            </div>
          </div>

          <!-- DJ Hero Portrait Overlay Card -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div
              class="relative w-72 sm:w-80 lg:w-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent z-10"
              ></div>
              <img
                :src="mainImage"
                alt="DJ Gardo Portrait"
                class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute bottom-6 left-6 right-6 z-20 text-center">
                <span class="font-syne text-2xl font-black text-white block">GARDO</span>
                <span class="text-xs font-mono text-neonCyan uppercase tracking-widest"
                  >DJ PROFESIONAL</span
                >
              </div>
            </div>
            <!-- Decorative Glow Element -->
            <div
              class="absolute -bottom-10 -right-10 w-64 h-64 bg-neonPink/20 rounded-full blur-3xl pointer-events-none"
            ></div>
            <div
              class="absolute -top-10 -left-10 w-64 h-64 bg-neonCyan/20 rounded-full blur-3xl pointer-events-none"
            ></div>
          </div>
        </div>
      </section>

      <!-- DISCOGRAFÍA / LATEST RELEASES SECTION -->
      <section id="music" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span class="text-neonPink font-mono text-xs uppercase tracking-widest"
              >PAQUETES 2026</span
            >
            <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white mt-1">
              PAQUETES DISPONIBLES
            </h2>
          </div>
        </div>

        <!-- Release Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(album, idx) in albums"
            :key="idx"
            class="bg-brandCard border border-white/10 rounded-2xl overflow-hidden group hover:border-neonCyan/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <!-- Album Cover & Hover Play -->
              <div
                class="relative aspect-square overflow-hidden cursor-pointer"
                @click="playAlbumTrack(album)"
              >
                <img
                  :src="album.cover"
                  :alt="album.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3"
                >
                  <q-btn
                    round
                    size="lg"
                    class="bg-neonPink text-white glow-pink hover:scale-110 transition-transform"
                    icon="play_arrow"
                  ></q-btn>
                  <q-btn
                    round
                    size="md"
                    color="dark"
                    class="border border-white/20"
                    icon="list"
                    @click.stop="openTracklistModal(album)"
                  ></q-btn>
                </div>
                <div
                  class="absolute top-3 left-3 bg-brandDark/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono uppercase text-neonCyan font-bold"
                >
                  {{ album.type }}
                </div>
              </div>

              <!-- Meta Info -->
              <div class="p-5">
                <span class="text-xs font-mono text-neonPink block mb-1"
                  >{{ album.title }} </span
                >
                <h3
                  class="font-syne font-bold text-lg text-white group-hover:text-neonCyan transition-colors truncate"
                >
                  ${{ album.price }}
                </h3>
                <p class="text-xs text-gray-400 mt-1 line-clamp-2">{{ album.description }}</p>
              </div>
            </div>

            <!-- External Stream Buttons -->
            <div
              class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/5 text-gray-400"
            >
              <span class="text-xs font-mono">Stream on:</span>
              <div class="flex space-x-3 text-sm">
                <a
                  href="https://spotify.com"
                  target="_blank"
                  class="hover:text-green-400 transition-colors"
                  ><i class="fa-brands fa-spotify"></i
                ></a>
                <a
                  href="https://apple.com"
                  target="_blank"
                  class="hover:text-pink-400 transition-colors"
                  ><i class="fa-brands fa-apple"></i
                ></a>
                <a
                  href="https://soundcloud.com"
                  target="_blank"
                  class="hover:text-orange-400 transition-colors"
                  ><i class="fa-brands fa-soundcloud"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- EXTRAS SECTION -->
      <section
        id="tour"
        class="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5 bg-brandCard/50 rounded-3xl my-12"
      >
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-neonCyan font-mono text-xs uppercase tracking-widest">
            HAZ TU EVENTO EXTRAORDINARIO
          </span>

          <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white mt-2">
            SERVICIOS <span class="text-neonPink">EXTRAS</span>
          </h2>

          <p class="text-gray-400 text-sm mt-4 leading-relaxed">
            Lleva tu celebración al siguiente nivel. Complementa tu evento con
            nuestras opciones de iluminación, entretenimiento y experiencias
            especiales para sorprender a todos tus invitados.
          </p>
        </div>

        <!-- Extras Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <!-- LED Dance Floor -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonPink/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonPink/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-border-all text-neonPink text-xl"></i>
            </div>

            <span class="text-neonPink text-xs font-mono uppercase tracking-widest">
              ILUMINACIÓN
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              PISTA LED LUMINOSA
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              Pista de baile luminosa integrada al nivel del piso, sin estructuras
              elevadas debajo.
            </p>

            <div class="border-t border-white/10 mt-5 pt-4 space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-300">12 módulos (3.66 x 4.88 m)</span>
                <span class="text-white font-bold">$3,600</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-300">16 módulos (4.88 x 4.88 m)</span>
                <span class="text-white font-bold">$4,800</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-300">20 módulos (6.1 x 4.88 m)</span>
                <span class="text-white font-bold">$6,000</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-300">25 módulos (6.1 x 6.1 m)</span>
                <span class="text-white font-bold">$7,500</span>
              </div>
            </div>

            <p class="text-gray-500 text-xs mt-4">
              * Medidas expresadas en metros. Precios en pesos mexicanos.
            </p>
          </div>

          <!-- LED Screen -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonCyan/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonCyan/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-tv text-neonCyan text-xl"></i>
            </div>

            <span class="text-neonCyan text-xs font-mono uppercase tracking-widest">
              TECNOLOGÍA VISUAL
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              PANTALLA LED
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              Una pantalla ideal para proyectar contenido visual y darle un
              toque espectacular a tu celebración.
            </p>

            <div class="border-t border-white/10 mt-5 pt-4">
              <span class="text-gray-400 text-xs uppercase">Dimensiones</span>
              <p class="text-white font-bold text-lg">3 x 2 metros</p>

              <div class="mt-4">
                <span class="text-neonCyan text-3xl font-black font-syne">
                  $4,200
                </span>
                <span class="text-gray-500 text-xs">MXN</span>
              </div>
            </div>
          </div>

          <!-- Character Animation -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonPink/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonPink/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-masks-theater text-neonPink text-xl"></i>
            </div>

            <span class="text-neonPink text-xs font-mono uppercase tracking-widest">
              ENTRETENIMIENTO
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              ANIMACIÓN CON PERSONAJES
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              Dale un toque divertido a tu fiesta con personajes caracterizados
              que sorprenderán a tus invitados.
            </p>

            <p class="text-gray-500 text-xs mt-4">
              La Máscara, luchadores, Chico Che, Casa de Papel y más.
            </p>

            <div class="border-t border-white/10 mt-5 pt-4">
              <span class="text-neonPink text-3xl font-black font-syne">
                $2,000
              </span>
              <span class="text-gray-500 text-xs">MXN</span>
            </div>
          </div>

          <!-- Zanquero / Jumper -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonCyan/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonCyan/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-person-walking text-neonCyan text-xl"></i>
            </div>

            <span class="text-neonCyan text-xs font-mono uppercase tracking-widest">
              ENTRETENIMIENTO
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              ZANQUERO O JUMPER
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              Un espectáculo lleno de color y diversión para darle más energía
              a tu celebración.
            </p>

            <p class="text-gray-500 text-xs mt-4">
              Incluye globos tipo salchicha con espirales de colores.
            </p>

            <div class="border-t border-white/10 mt-5 pt-4">
              <span class="text-neonCyan text-3xl font-black font-syne">
                $700
              </span>
              <span class="text-gray-500 text-xs">MXN</span>
            </div>
          </div>

          <!-- Inflatable Characters -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonPink/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonPink/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-person text-neonPink text-xl"></i>
            </div>

            <span class="text-neonPink text-xs font-mono uppercase tracking-widest">
              ANIMACIÓN
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              PAR DE INFLABLES
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              Personajes inflables para animar la pista y crear momentos
              divertidos durante tu evento.
            </p>

            <p class="text-gray-500 text-xs mt-4">
              Capibara, astronauta, tiburones, gorila, Tiranosaurio Rex,
              Pikachu y unicornio.
            </p>

            <div class="border-t border-white/10 mt-5 pt-4">
              <span class="text-neonPink text-3xl font-black font-syne">
                $700
              </span>
              <span class="text-gray-500 text-xs">MXN</span>
            </div>
          </div>

          <!-- LED Robot -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonCyan/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonCyan/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-robot text-neonCyan text-xl"></i>
            </div>

            <span class="text-neonCyan text-xs font-mono uppercase tracking-widest">
              SHOW ESPECIAL
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              SHOW DEL ROBOT LED
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              Un espectáculo visual para sorprender a tus invitados y
              encender el ambiente de la fiesta.
            </p>

            <p class="text-gray-500 text-xs mt-4">
              Incluye pirotecnia y láseres en los brazos.
            </p>

            <div class="border-t border-white/10 mt-5 pt-4">
              <span class="text-neonCyan text-3xl font-black font-syne">
                $1,600
              </span>
              <span class="text-gray-500 text-xs">MXN</span>
            </div>
          </div>

          <!-- Lounge -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonPink/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonPink/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-couch text-neonPink text-xl"></i>
            </div>

            <span class="text-neonPink text-xs font-mono uppercase tracking-widest">
              MOBILIARIO
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              SALAS LOUNGE
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              Crea un espacio cómodo para que tus invitados puedan descansar
              y convivir durante la celebración.
            </p>

            <p class="text-gray-500 text-xs mt-4">
              Capacidad aproximada para 10 personas.
            </p>

            <div class="border-t border-white/10 mt-5 pt-4">
              <span class="text-neonPink text-3xl font-black font-syne">
                $800
              </span>
              <span class="text-gray-500 text-xs">MXN</span>
            </div>
          </div>

          <!-- Doctor Simi -->
          <div
            class="bg-brandDark border border-white/10 rounded-2xl p-6 hover:border-neonCyan/50 transition-all group"
          >
            <div class="w-12 h-12 rounded-xl bg-neonCyan/10 flex items-center justify-center mb-5">
              <i class="fa-solid fa-star text-neonCyan text-xl"></i>
            </div>

            <span class="text-neonCyan text-xs font-mono uppercase tracking-widest">
              SHOW ESPECIAL
            </span>

            <h3 class="font-syne text-xl font-bold text-white mt-2">
              BOTARGA DOCTOR SIMI
            </h3>

            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              ¡Agrega diversión y un invitado muy especial a tu celebración!
            </p>

            <div class="border-t border-white/10 mt-5 pt-4">
              <span class="text-neonCyan text-3xl font-black font-syne">
                $1,600
              </span>
              <span class="text-gray-500 text-xs">MXN</span>
            </div>
          </div>

        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-14">
          <p class="text-gray-300 text-sm mb-5">
            ¿Quieres agregar algo especial a tu evento?
          </p>

          <q-btn
            rounded
            unelevated
            no-caps
            class="font-syne font-bold px-8 py-3 bg-gradient-to-r from-neonPink to-neonPinkHover text-white hover:glow-pink"
            label="COTIZA TUS EXTRAS"
            @click="openWhatsApp()"
          />
        </div>
      </section>



      <!-- About Us Section -->
      <section id="about" class="py-24 px-6 lg:px-12 bg-brandDark">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <!-- About DJ Gardo -->
          <div class="lg:col-span-7 space-y-6">

            <span class="text-neonPink font-mono text-xs uppercase tracking-widest">
              SOBRE NOSOTROS
            </span>

            <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white">
              HACEMOS QUE CADA EVENTO
              <span class="text-neonPink">TENGA SU PROPIO RITMO.</span>
            </h2>

            <p class="text-gray-300 text-base leading-relaxed font-light">
              En DJ Gardo nos apasiona crear experiencias inolvidables a través
              de la música, el sonido y la iluminación. Nos especializamos en
              darle vida a cada celebración, creando el ambiente perfecto para
              que tú y tus invitados disfruten cada momento.
            </p>

            <p class="text-gray-400 text-sm leading-relaxed">
              Cada evento es diferente y merece una experiencia única.
              Por eso, combinamos musicalización, equipo de audio e iluminación
              para transformar tus ideas en una celebración llena de energía,
              ambiente y buenos momentos.
            </p>

            <p class="text-white font-semibold text-sm">
              DJ GARDO — TU EVENTO, NUESTRA PASIÓN.
            </p>

            <!-- Services Grid -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">

              <div>
                <i class="fa-solid fa-headphones text-neonPink text-2xl mb-3"></i>
                <span class="block font-syne text-sm sm:text-base font-bold text-white">
                  MUSICALIZACIÓN
                </span>
                <span class="text-xs text-gray-400">
                  Música para cada ocasión.
                </span>
              </div>

              <div>
                <i class="fa-solid fa-volume-high text-neonCyan text-2xl mb-3"></i>
                <span class="block font-syne text-sm sm:text-base font-bold text-white">
                  AUDIO
                </span>
                <span class="text-xs text-gray-400">
                  Sonido para vivir cada momento.
                </span>
              </div>

              <div>
                <i class="fa-solid fa-lightbulb text-neonPink text-2xl mb-3"></i>
                <span class="block font-syne text-sm sm:text-base font-bold text-white">
                  ILUMINACIÓN
                </span>
                <span class="text-xs text-gray-400">
                  Ambientes que sorprenden.
                </span>
              </div>

            </div>

            <!-- Social Media -->
            <div class="pt-4 flex items-center flex-wrap gap-4">
              <span class="text-xs font-mono text-gray-400 uppercase">
                SÍGUENOS:
              </span>

              <a href="#" target="_blank"
                class="w-10 h-10 rounded-full bg-brandSurface border border-white/10 flex items-center justify-center text-white hover:text-neonPink hover:border-neonPink transition-colors">
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" target="_blank"
                class="w-10 h-10 rounded-full bg-brandSurface border border-white/10 flex items-center justify-center text-white hover:text-neonPink hover:border-neonPink transition-colors">
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a href="#" target="_blank"
                class="w-10 h-10 rounded-full bg-brandSurface border border-white/10 flex items-center justify-center text-white hover:text-red-500 hover:border-red-500 transition-colors">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>

          </div>

          <!-- Image / Brand Visual -->
          <div class="lg:col-span-5 relative">
            <div class="absolute -inset-3 bg-gradient-to-br from-neonPink/20 to-neonCyan/20 blur-2xl rounded-3xl"></div>

            <div class="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                :src="stageImage"
                alt="DJ Gardo durante una presentación"
                class="w-full h-[450px] object-cover"
              />

              <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <span class="text-neonCyan text-xs font-mono uppercase tracking-widest">
                  AUDIO • ILUMINACIÓN • DJ
                </span>
                <h3 class="font-syne text-3xl font-extrabold text-white mt-2">
                  DJ GARDO
                </h3>
                <p class="text-gray-300 text-sm">
                  Creamos momentos. Encendemos emociones.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      <!-- PHOTO GALLERY LIGHTBOX GRID -->
      <section id="gallery" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div class="text-center mb-16">
          <span class="text-neonCyan font-mono text-xs uppercase tracking-widest"
            >VIDEOS Y FOTOS DE EVENTOS</span
          >
          <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white mt-1">GALERIA</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(photo, index) in photoGallery"
            :key="index"
            @click="openLightbox(index)"
            class="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/10"
          >
            <img
              :src="photo.url"
              :alt="photo.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-brandDark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5"
            >
              <span class="text-neonCyan font-mono text-[10px] uppercase tracking-widest">{{
                photo.location
              }}</span>
              <h4 class="font-syne text-white font-bold text-sm">{{ photo.title }}</h4>
            </div>
          </div>
        </div>
      </section>
    </q-page-container>

    <!-- BOOKING EVENT MODAL (QUASAR Q-DIALOG & Q-FORM) -->
    <q-dialog v-model="bookingModalOpen" persistent>
      <q-card
        class="bg-brandCard text-white border border-neonPink/30 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl"
      >
        <div class="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <div>
            <span class="text-neonPink font-mono text-xs uppercase tracking-widest"
              >MANAGEMENT & BOOKING</span
            >
            <h3 class="font-syne text-2xl font-bold text-white">BOOK DJ AOEDE</h3>
          </div>
          <q-btn flat round icon="close" size="sm" v-close-popup></q-btn>
        </div>

        <q-form @submit="submitBooking" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <q-input
              v-model="bookingForm.name"
              label="Promoter / Organizer Name *"
              dark
              outlined
              color="pink"
              :rules="[(val) => !!val || 'Name is required']"
            ></q-input>

            <q-input
              v-model="bookingForm.email"
              label="Email Address *"
              type="email"
              dark
              outlined
              color="pink"
              :rules="[(val) => !!val || 'Valid email required']"
            ></q-input>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <q-select
              v-model="bookingForm.eventType"
              :options="['Festival Mainstage', 'Club Headline', 'Private Event', 'Corporate Show']"
              label="Event Type"
              dark
              outlined
              color="pink"
            ></q-select>

            <q-input
              v-model="bookingForm.eventDate"
              label="Event Date"
              type="date"
              dark
              outlined
              color="pink"
              stack-label
            ></q-input>
          </div>

          <q-input
            v-model="bookingForm.venue"
            label="Venue & City (e.g., Club Space, Miami)"
            dark
            outlined
            color="pink"
          ></q-input>

          <q-input
            v-model="bookingForm.notes"
            label="Additional Details & Budget Requirements"
            type="textarea"
            rows="3"
            dark
            outlined
            color="pink"
          ></q-input>

          <div class="pt-4 flex justify-end space-x-3">
            <q-btn flat label="Cancel" color="grey" v-close-popup></q-btn>
            <q-btn
              type="submit"
              unelevated
              class="bg-gradient-to-r from-neonPink to-neonPinkHover text-white font-syne font-bold px-8 py-2.5 rounded-full hover:glow-pink"
              :loading="bookingSubmitting"
            >
              Submit Booking Inquiry
            </q-btn>
          </div>
        </q-form>
      </q-card>
    </q-dialog>

    <!-- TRACKLIST MODAL -->
    <q-dialog v-model="tracklistModalOpen">
      <q-card
        class="bg-brandCard text-white border border-neonCyan/30 rounded-3xl p-6 max-w-md w-full"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-syne text-xl font-bold text-neonCyan" v-if="selectedAlbum">
            {{ selectedAlbum.title }}
          </h3>
          <q-btn flat round icon="close" size="sm" v-close-popup></q-btn>
        </div>

        <div v-if="selectedAlbum" class="space-y-3">
          <div
            v-for="(t, i) in selectedAlbum.tracklist"
            :key="i"
            class="flex justify-between items-center bg-brandSurface p-3 rounded-xl border border-white/5 hover:border-neonCyan/40 transition-colors cursor-pointer"
            @click="playSpecificTrack(t, selectedAlbum)"
          >
            <div class="flex items-center space-x-3">
              <span class="text-xs font-mono text-neonPink font-bold">{{ '•' }}</span>
              <span class="text-sm font-syne text-white font-semibold">{{ t.name }}</span>
            </div>
            <span class="text-xs font-mono text-gray-400">{{ t.duration }}</span>
          </div>
        </div>
      </q-card>
    </q-dialog>

    <!-- LIGHTBOX DIALOG -->
    <q-dialog v-model="lightboxOpen" maximized transition-show="fade" transition-hide="fade">
      <q-card class="bg-black/95 text-white flex flex-col items-center justify-center relative">
        <q-btn
          flat
          round
          icon="close"
          class="absolute top-6 right-6 text-white z-50"
          v-close-popup
          size="lg"
        ></q-btn>

        <div class="max-w-5xl max-h-[85vh] p-4 text-center" v-if="selectedPhoto">
          <img
            :src="selectedPhoto.url"
            class="max-h-[75vh] mx-auto rounded-2xl object-contain border border-white/20"
          />
          <h3 class="font-syne text-2xl font-bold mt-4 text-neonPink">{{ selectedPhoto.title }}</h3>
          <p class="text-xs font-mono text-gray-400">{{ selectedPhoto.location }}</p>
        </div>
      </q-card>
    </q-dialog>
  </q-layout>

  <!-- CALENDAR MODAL -->

  <!-- AVAILABILITY CALENDAR MODAL -->
  <q-dialog
    v-model="showAvailability"
    transition-show="scale"
    transition-hide="scale"
    backdrop-filter="blur(6px)"
  >
    <q-card
      class="bg-brandDark text-white border border-white/10 rounded-2xl"
      style="width: 95vw; max-width: 480px"
    >
      <!-- HEADER -->
      <q-card-section class="row items-center justify-between q-pb-sm">
        <div>
          <div class="text-neonCyan text-xs font-mono uppercase tracking-widest">
            DJ GARDO
          </div>

          <div class="font-syne text-2xl font-extrabold text-white mt-1">
            DISPONIBILIDAD
          </div>

          <div class="text-gray-400 text-xs mt-1">
            Consulta las fechas disponibles para tu evento.
          </div>
        </div>

        <q-btn
          flat
          round
          dense
          icon="close"
          color="grey-5"
          v-close-popup
        />
      </q-card-section>

      <q-separator dark color="white" />

      <!-- CALENDAR -->
      <q-card-section class="q-px-md">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-mono text-gray-400 uppercase tracking-wider">
            CALENDARIO DE EVENTOS
          </span>

          <q-badge
            color="pink-10"
            text-color="pink-3"
            class="font-mono"
          >
            {{ occupiedDates.length }} FECHAS OCUPADAS
          </q-badge>
        </div>

        <div class="calendar-wrapper rounded-xl overflow-hidden border border-white/10">
          <q-date
            v-model="selectedDate"
            mask="YYYY/MM/DD"
            :events="occupiedDates"
            event-color="pink-5"
            color="cyan-8"
            text-color="white"
            dark
            flat
            bordered
            class="w-full"
          />
        </div>

        <!-- LEGEND -->
        <div class="flex flex-wrap items-center justify-center gap-5 mt-5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
            <span class="text-xs text-gray-400">Fecha ocupada</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span class="text-xs text-gray-400">Fecha seleccionada</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
            <span class="text-xs text-gray-400">Sin marca</span>
          </div>
        </div>
      </q-card-section>

      <q-separator dark color="white" />

      <!-- SELECTED DATE STATUS -->
      <q-card-section class="q-pt-md">
        <div class="bg-brandSurface border border-white/10 rounded-xl p-4">
          <div class="text-xs font-mono text-gray-400 uppercase">
            FECHA SELECCIONADA
          </div>

          <div class="font-syne text-lg font-bold text-white mt-1">
            {{ selectedDateLabel }}
          </div>

          <div class="flex items-center gap-2 mt-3">
            <q-icon
              :name="isSelectedDateOccupied ? 'event_busy' : 'event_available'"
              :color="isSelectedDateOccupied ? 'pink-5' : 'cyan-4'"
              size="20px"
            />

            <span
              :class="isSelectedDateOccupied ? 'text-pink-400' : 'text-cyan-400'"
              class="text-sm font-bold"
            >
              {{
                isSelectedDateOccupied
                  ? 'DJ GARDO NO DISPONIBLE'
                  : 'FECHA SIN OCUPACIÓN REGISTRADA'
              }}
            </span>
          </div>
        </div>

        <p class="text-gray-500 text-xs mt-3 text-center">
          La disponibilidad está sujeta a confirmación por parte de DJ Gardo.
        </p>
      </q-card-section>

      <!-- FOOTER -->
      <q-card-actions class="q-px-md q-pb-md">
        <q-btn
          flat
          no-caps
          label="CERRAR"
          color="grey-5"
          v-close-popup
        />

        <q-space />

        <q-btn
          rounded
          unelevated
          no-caps
          icon="fa-brands fa-whatsapp"
          label="CONSULTAR POR WHATSAPP"
          class="bg-gradient-to-r from-neonPink to-neonPinkHover text-white font-bold px-4"
          @click="contactAvailability"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import mainImage from '../assets/main.jpg'
import stageImage from '../assets/stage.jpg'

const $q = useQuasar()
const drawer = ref(false)
const isPlaying = ref(false)

const bookingModalOpen = ref(false)
const bookingSubmitting = ref(false)
const bookingForm = ref({
  name: '',
  email: '',
  eventType: 'Festival Mainstage',
  eventDate: '',
  venue: '',
  notes: '',
})

const tracklistModalOpen = ref(false)
const selectedAlbum = ref(null)

const lightboxOpen = ref(false)
const selectedPhoto = ref(null)

// Albums & Discography Mock Data
const albums = ref([
  {
    price: '4500',
    type: 'BASICO',
    title: 'PAQUETE UNO',
    tracksCount: 1,
    cover:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    description: 'Tiene un costo de 3500 pesos con nuestros DJs profesionales',
    tracklist: [
      { name: 'Audio ambiental', duration: 'De 10 a 40 personas, ideal para lugares cerrados e incluye 1 o 2 bocinas de 12 pulgadas' },
      { name: 'Iluminacion', duration: '2 LEDs de colores dirigido al publico' },
      { name: 'DJ Gardo', duration: 'Musica, conduccion y animacion hablada'},
      { name: 'Microfono alambrico', duration: 'Opcional sin costo' },
      { name: 'Cinco horas continuas', duration: '' },
    ],
  },
  {
    price: '6000',
    type: 'BASICO PLUS',
    title: 'PAQUETE DOS',
    tracksCount: 4,
    cover:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    description: 'Tiene un costo de 4500 pesos con nuestros DJs profesionales',
    tracklist: [
      { name: 'Audio ambiental', duration: 'De 40 a 70 personas, ideal para lugares cerrados e incluye 1 o 2 bocinas de 15 pulgadas' },
      { name: 'Iluminacion', duration: '4 LEDs de colores en estructura en "T"' },
      { name: 'Cabina chica luminica para DJ', duration: 'Opcional sin costo' },
      { name: 'Microfono inalambrico', duration: 'Opcional sin costo, ideal para brindis' },
      { name: 'Cortesia', duration: 'Globos salchicha en espiral' },
      { name: 'DJ Gardo', duration: 'Musica, conduccion y animacion hablada'},
      { name: 'Cinco horas continuas', duration: '' },
    ],
  },
  {
    price: '9000',
    type: 'INTERMEDIO',
    title: 'PAQUETE TRES',
    tracksCount: 2,
    cover:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    description: 'Tiene un costo de 7000 pesos con nuestros DJs profesionales',
    tracklist: [
      { name: 'Audio profesional', duration: 'De 80 a 100 personas, ideal para lugares cerrados' },
      { name: 'Iluminacion robotica con figuras', duration: 'Ideal para seguir a los novios, xvañera, paredes y por todo el salon' },
      { name: 'Dos torres de estrucutra iluminada', duration: 'Para las luces' },
      { name: 'Iluminacion led', duration: 'Dirigidos al publico en colores' },
      { name: 'Cabina grande luminica para DJ', duration: 'Paneles led con figuras' },
      { name: 'Dos pantallas de 50 pulgadas', duration: '' },
      { name: 'Microfonos inalambricos', duration: 'Ideal para brindis, opcional sin costor' },
      { name: 'Globos salchicha de colores', duration: 'Cortesia' },
      { name: 'Juego de lasers', duration: 'Opcional sin costo'},
      { name: 'Maquina de humo', duration: 'Opcional sin costo'},
      { name: 'Video collage cronologico', duration: 'De 50 fotografias o mas, cortesia' },
      { name: 'DJ Gardo', duration: 'Musica, conduccion y animacion hablada'},
      { name: 'Servicio por seis horas continuas', duration: ''},
      { name: 'PROMOCION: AGREGA PANTALLA LED POR $3000', duration: ''},
    ],
  },
  {
    price: '16000',
    type: 'AVANZADO',
    title: 'PAQUETE CUATRO',
    tracksCount: 12,
    cover:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    description: "Tiene un costo de 13500 pesos con nuestros DJs profesionales",
    tracklist: [
      { name: 'Audio profesional', duration: 'De 100 a 200 personas, ideal para lugares cerrados' },
      { name: 'Grupo de animacion de bailarines caracterizados', duration: 'Luchadores, Chico Che, Personajes retro, YMCA, STAYIN ALIVE, Elvis Presley, Bule Bule, etc' },
      { name: 'Animacion con inflables', duration: 'Capibara, Tiburones, Pikachu, Gorila, Tiranosaurio Rex, Unicornio, Astronauta' },
      { name: 'Show del robot led', duration: 'Con piroctenia y lasers en los brazos' },
      { name: 'Iluminacion robotica de figuras y colores', duration: 'Ideal para seguir a los novios, xvañera, paredes y por todo el salon' },
      { name: 'Torres de estructura iluminada', duration: 'Para luces, opcional sin costo' },
      { name: 'Iluminacion led de colores', duration: 'Dirigida a la pista de baile' },
      { name: 'Cabina grande luminica para DJ', duration: 'Paneles led con imagenes' },
      { name: 'Escenario para DJ', duration: 'Opcional sin costo, si el lugar lo permite' },
      { name: 'Pantalla gigante de proyeccion 3x2 o pantallas de 50 pulgadas', duration: ''},
      { name: 'Microfonos inalambricos', duration: 'Ideal para brindis, opcional sin costor' },
      { name: 'Globos salchicha de colores', duration: 'Opcional sin costo'},
      { name: 'Guitarras inflables', duration: 'Opcional sin costo'},
      { name: 'Juego de lasers', duration: 'Opcional sin costo'},
      { name: 'Maquina de humo', duration: 'Opcional sin costo'},
      { name: 'Video collage cronologico', duration: 'De 50 fotografias o mas' },
      { name: 'DJ Gardo', duration: 'Musica, conduccion y animacion hablada'},
      { name: 'Servicio por seis horas continuas', duration: ''},
      { name: 'PROMOCION: AGREGA PANTALLA LED POR $3000', duration: ''},
    ],
  },
])

const currentTrack = ref({
  title: 'Cyberpulse (Title Track)',
  album: 'CYBERPULSE LP',
  duration: '05:45',
  cover:
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
})


// Gallery Photos
const photoGallery = ref([
  {
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    title: 'Mainstage Laser Show',
    location: 'Tomorrowland',
  },
  {
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    title: 'Crowd Euphoria',
    location: 'Printworks, UK',
  },
  {
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    title: 'Studio Synth Setup',
    location: 'Berlin Studio',
  },
  {
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    title: 'Sunset Set',
    location: 'Ibiza Rocks',
  },
])

// Actions & Controls

const playAlbumTrack = (album) => {
  currentTrack.value = {
    title: album.tracklist[0]?.name || album.title,
    album: album.title,
    duration: album.tracklist[0]?.duration || '05:00',
    cover: album.cover,
  }
  isPlaying.value = true
}

const playSpecificTrack = (track, album) => {
  currentTrack.value = {
    title: track.name,
    album: album.title,
    duration: track.duration,
    cover: album.cover,
  }
  isPlaying.value = true
  tracklistModalOpen.value = false
}

const openBookingModal = () => {
  bookingModalOpen.value = true
}

const submitBooking = () => {
  bookingSubmitting.value = true
  setTimeout(() => {
    bookingSubmitting.value = false
    bookingModalOpen.value = false
    $q.notify({
      message: 'Booking request sent successfully! Management will respond within 24h.',
      color: 'positive',
      icon: 'check_circle',
      position: 'top',
    })
    bookingForm.value = {
      name: '',
      email: '',
      eventType: 'Festival Mainstage',
      eventDate: '',
      venue: '',
      notes: '',
    }
  }, 1200)
}

const openTracklistModal = (album) => {
  selectedAlbum.value = album
  tracklistModalOpen.value = true
}

const openLightbox = (index) => {
  selectedPhoto.value = photoGallery.value[index]
  lightboxOpen.value = true
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateTo = (id) => {
  scrollTo(id)
  drawer.value = false
}

// Canvas Visualizers Initialization
onMounted(() => {
  // Hero Sound wave Ambient Canvas
  const ambientCanvas = document.getElementById('ambient-canvas')
  if (ambientCanvas) {
    const ctx = ambientCanvas.getContext('2d')
    let width = (ambientCanvas.width = window.innerWidth)
    let height = (ambientCanvas.height = window.innerHeight)

    window.addEventListener('resize', () => {
      width = ambientCanvas.width = window.innerWidth
      height = ambientCanvas.height = window.innerHeight
    })

    let step = 0
    function drawWaves() {
      ctx.clearRect(0, 0, width, height)
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(255, 42, 117, 0.25)'

      for (let i = 0; i < width; i++) {
        const y = Math.sin(i * 0.005 + step) * 40 + height / 2
        if (i === 0) ctx.moveTo(i, y)
        else ctx.lineTo(i, y)
      }
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)'
      for (let i = 0; i < width; i++) {
        const y = Math.cos(i * 0.008 - step) * 50 + height / 2
        if (i === 0) ctx.moveTo(i, y)
        else ctx.lineTo(i, y)
      }
      ctx.stroke()

      step += 0.02
      requestAnimationFrame(drawWaves)
    }
    drawWaves()
  }

  // Toolbar Waveform Frequency Equalizer Canvas
  const visCanvas = document.getElementById('visualizer-canvas')
  if (visCanvas) {
    const ctx = visCanvas.getContext('2d')

    function drawFrequency() {
      ctx.clearRect(0, 0, visCanvas.width, visCanvas.height)
      const bars = 40
      const barWidth = visCanvas.width / bars

      for (let i = 0; i < bars; i++) {
        const barHeight = isPlaying.value ? Math.random() * visCanvas.height * 0.85 + 4 : 3

        const gradient = ctx.createLinearGradient(0, visCanvas.height, 0, 0)
        gradient.addColorStop(0, '#00f0ff')
        gradient.addColorStop(1, '#ff2a75')

        ctx.fillStyle = gradient
        ctx.fillRect(i * barWidth + 1, visCanvas.height - barHeight, barWidth - 2, barHeight)
      }
      setTimeout(() => requestAnimationFrame(drawFrequency), 80)
    }
    drawFrequency()
  }
})

// Calendar logic

// Control modal
const showAvailability = ref(false)

//Fecha seleccionada
const getToday = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2,'0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}/${month}/${day}`
}

const selectedDate = ref(getToday())

// Fechas ocupadas (datos de ejemplo)
const occupiedDates = ref([
  '2026/11/14',
  '2026/11/21',
  '2026/11/28',
  '2026/12/05',
  '2026/12/12',
  '2026/12/19',
  '2027/01/02',
  '2027/01/16'
])

const isSelectedDateOccupied = computed(() => {
  return occupiedDates.value.includes(selectedDate.value)
})

// Formatear fecha para mostrarla al usuario
const selectedDateLabel = computed(() => {
  if (!selectedDate.value) return 'Selecciona una fecha'

  const [year, month, day] = selectedDate.value.split('/')

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    12
  )

  return new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
})

</script>

<style lang="css">

/* DJ Gardo - Availability Calendar */

.calendar-wrapper {
  background: #101820;
}

/* Calendar background */
.calendar-wrapper .q-date {
  background: #101820;
  color: white;
  width: 100%;
}

/* Calendar navigation */
.calendar-wrapper .q-date__navigation {
  color: #ffffff;
}

/* Weekdays */
.calendar-wrapper .q-date__calendar-weekdays > div {
  color: #43d9e7;
  font-family: monospace;
  font-size: 11px;
}

/* Occupied dates */
.calendar-wrapper .q-date__event {
  background: #ff2678 !important;
}

/* Calendar hover */
.calendar-wrapper .q-date__calendar-item .q-btn:hover {
  background: rgba(255, 38, 120, 0.15);
}

</style>
