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
          <span
            class="ml-3 text-[10px] font-mono tracking-widest px-2 py-0.5 border border-neonCyan/40 text-neonCyan rounded-full uppercase hidden sm:inline-block"
          >
            AUDIO • ILUMINACIÓN • DJs
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
            @click="openBookingModal"
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
        <a @click="navigateTo('hero')" class="hover:text-neonCyan cursor-pointer">Home</a>
        <a @click="navigateTo('music')" class="hover:text-neonCyan cursor-pointer">Discography</a>
        <a @click="navigateTo('tour')" class="hover:text-neonCyan cursor-pointer">Tour Dates</a>
        <a @click="navigateTo('about')" class="hover:text-neonCyan cursor-pointer">About</a>
        <a @click="navigateTo('gallery')" class="hover:text-neonCyan cursor-pointer">Gallery</a>
        <a
          @click="openMobileBooking"
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
                >New Album "CYBERPULSE" Out Now</span
              >
            </div>

            <h1
              class="font-syne text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none text-white"
            >
              AOEDE<br />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-neonPink via-white to-neonCyan text-glow-pink"
              >
                ELECTRONIC </span
              ><br />
              REVOLUTION
            </h1>

            <p
              class="max-w-xl text-gray-400 text-base sm:text-lg font-light leading-relaxed mx-auto lg:mx-0"
            >
              Immersive melodic techno & synthwave soundscapes. Elevating club nights and festival
              mainstages around the globe with high-octane energy.
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <q-btn
                size="lg"
                unelevated
                rounded
                class="bg-gradient-to-r from-neonPink to-neonPinkHover text-white font-syne font-bold px-8 py-3.5 hover:glow-pink transition-all transform hover:-translate-y-1"
                @click="scrollTo('music')"
              >
                <q-icon name="play_arrow" class="mr-2"></q-icon>
                Listen Latest Releases
              </q-btn>

              <q-btn
                size="lg"
                outline
                rounded
                color="cyan"
                class="font-syne font-bold px-8 py-3.5 hover:bg-neonCyan/10 transition-colors"
                @click="scrollTo('tour')"
              >
                <q-icon name="confirmation_number" class="mr-2"></q-icon>
                View Tour Dates
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
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
                alt="DJ Aoede Portrait"
                class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute bottom-6 left-6 right-6 z-20 text-center">
                <span class="font-syne text-2xl font-black text-white block">AOEDE</span>
                <span class="text-xs font-mono text-neonCyan uppercase tracking-widest"
                  >Live at Berlin SynthFest '26</span
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
              >DISCOGRAFÍA & ALBUMS</span
            >
            <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white mt-1">
              LATEST RELEASES
            </h2>
          </div>
          <div class="flex space-x-4 text-xs font-mono">
            <span class="text-gray-400"
              >SPOTIFY MONTHLY: <strong class="text-white">1.8M LISTENERS</strong></span
            >
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
                <span class="text-xs font-mono text-gray-400 block mb-1"
                  >{{ album.year }} • {{ album.tracksCount }} Tracks</span
                >
                <h3
                  class="font-syne font-bold text-lg text-white group-hover:text-neonCyan transition-colors truncate"
                >
                  {{ album.title }}
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

      <!-- TOUR DATES SECTION -->
      <section
        id="tour"
        class="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5 bg-brandCard/50 rounded-3xl my-12"
      >
        <div class="text-center max-w-xl mx-auto mb-16">
          <span class="text-neonCyan font-mono text-xs uppercase tracking-widest"
            >LIVE PERFORMANCES</span
          >
          <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white mt-1">
            WORLD TOUR DATES
          </h2>
          <p class="text-gray-400 text-sm mt-2">
            Catch DJ AOEDE live at upcoming festivals and headlining club shows.
          </p>
        </div>

        <div class="space-y-4 max-w-5xl mx-auto">
          <div
            v-for="(show, i) in tourDates"
            :key="i"
            class="bg-brandDark border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-neonPink/50 transition-all group"
          >
            <!-- Date Badge -->
            <div class="flex items-center space-x-6">
              <div
                class="bg-brandSurface border border-white/10 rounded-xl p-3 text-center min-w-[75px] group-hover:border-neonPink transition-colors"
              >
                <span class="block text-xs font-mono uppercase text-neonPink font-bold">{{
                  show.month
                }}</span>
                <span class="block text-2xl font-syne font-black text-white">{{ show.day }}</span>
              </div>
              <div>
                <span class="text-xs font-mono text-gray-500 uppercase">{{ show.year }}</span>
                <h4 class="font-syne font-bold text-white text-lg sm:text-xl">
                  {{ show.city }}, {{ show.country }}
                </h4>
                <p class="text-xs text-gray-400">{{ show.venue }}</p>
              </div>
            </div>

            <!-- Festival Name -->
            <div class="flex-1 md:text-center">
              <span class="text-xs font-mono text-neonCyan uppercase tracking-widest block"
                >Event</span
              >
              <span class="font-syne text-base font-bold text-gray-200">{{ show.festival }}</span>
            </div>

            <!-- Status & Action Buttons -->
            <div
              class="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-white/10"
            >
              <q-chip
                :color="
                  show.status === 'Selling Fast'
                    ? 'warning'
                    : show.status === 'Sold Out'
                      ? 'negative'
                      : 'positive'
                "
                text-color="dark"
                size="sm"
                class="font-mono font-bold uppercase"
              >
                {{ show.status }}
              </q-chip>

              <q-btn
                :disable="show.status === 'Sold Out'"
                rounded
                unelevated
                class="font-syne font-bold text-xs px-6 py-2"
                :class="
                  show.status === 'Sold Out'
                    ? 'bg-gray-800 text-gray-500'
                    : 'bg-gradient-to-r from-neonPink to-neonPinkHover text-white hover:glow-pink'
                "
                @click="openTicketDrawer(show)"
              >
                {{ show.status === 'Sold Out' ? 'Sold Out' : 'Get Tickets' }}
              </q-btn>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT & ARTIST STATS SECTION -->
      <section id="about" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Image Stack -->
          <div class="lg:col-span-5 relative">
            <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
                alt="AOEDE DJing"
                class="w-full h-auto object-cover"
              />
            </div>
            <!-- Floating Stat Box -->
            <div
              class="absolute -bottom-6 -right-6 bg-brandCard/90 backdrop-blur-md border border-neonCyan/40 p-6 rounded-2xl hidden sm:block"
            >
              <span class="block font-syne text-3xl font-black text-neonCyan">#14</span>
              <span class="text-xs font-mono uppercase text-gray-300"
                >Top 100 Electronic Artists</span
              >
            </div>
          </div>

          <!-- Artist Bio & Counters -->
          <div class="lg:col-span-7 space-y-6">
            <span class="text-neonPink font-mono text-xs uppercase tracking-widest"
              >ABOUT THE ARTIST</span
            >
            <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white">
              THE SOUND ARCHITECT
            </h2>

            <p class="text-gray-300 text-base leading-relaxed font-light">
              Known for pushing the boundaries of modern melodic techno, AOEDE seamlessly fuses
              synthwave textures, hypnotic basslines, and orchestral electronic motifs into
              unforgettable soundscapes.
            </p>
            <p class="text-gray-400 text-sm leading-relaxed">
              Having headlined iconic venues from Tomorrowland to Printworks London, AOEDE continues
              to redefine electronic music culture through transcendent audiovisual performances.
            </p>

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span class="block font-syne text-3xl font-black text-white">250+</span>
                <span class="text-xs font-mono text-neonPink uppercase">Shows Performed</span>
              </div>
              <div>
                <span class="block font-syne text-3xl font-black text-white">48</span>
                <span class="text-xs font-mono text-neonCyan uppercase">Tracks Released</span>
              </div>
              <div>
                <span class="block font-syne text-3xl font-black text-white">1.8M</span>
                <span class="text-xs font-mono text-neonPink uppercase">Monthly Listeners</span>
              </div>
            </div>

            <!-- Social Media Handles -->
            <div class="pt-4 flex items-center space-x-4">
              <span class="text-xs font-mono text-gray-400 uppercase">Follow AOEDE:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                class="w-10 h-10 rounded-full bg-brandSurface border border-white/10 flex items-center justify-center text-white hover:text-neonPink hover:border-neonPink transition-colors"
                ><i class="fa-brands fa-instagram"></i
              ></a>
              <a
                href="https://spotify.com"
                target="_blank"
                class="w-10 h-10 rounded-full bg-brandSurface border border-white/10 flex items-center justify-center text-white hover:text-green-400 hover:border-green-400 transition-colors"
                ><i class="fa-brands fa-spotify"></i
              ></a>
              <a
                href="https://youtube.com"
                target="_blank"
                class="w-10 h-10 rounded-full bg-brandSurface border border-white/10 flex items-center justify-center text-white hover:text-red-500 hover:border-red-500 transition-colors"
                ><i class="fa-brands fa-youtube"></i
              ></a>
              <a
                href="https://soundcloud.com"
                target="_blank"
                class="w-10 h-10 rounded-full bg-brandSurface border border-white/10 flex items-center justify-center text-white hover:text-orange-500 hover:border-orange-500 transition-colors"
                ><i class="fa-brands fa-soundcloud"></i
              ></a>
            </div>
          </div>
        </div>
      </section>

      <!-- PHOTO GALLERY LIGHTBOX GRID -->
      <section id="gallery" class="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div class="text-center mb-16">
          <span class="text-neonCyan font-mono text-xs uppercase tracking-widest"
            >VISUALS & MOMENTS</span
          >
          <h2 class="font-syne text-3xl sm:text-5xl font-extrabold text-white mt-1">GALLERY</h2>
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

    <!-- DYNAMIC AUDIO PLAYER TOOLBAR (STICKY BOTTOM) -->
    <div
      class="fixed bottom-0 left-0 right-0 z-50 bg-brandDark/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 text-white shadow-2xl"
    >
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Track Thumbnail & Info -->
        <div class="flex items-center space-x-4 w-full md:w-1/4">
          <img
            :src="currentTrack.cover"
            :alt="currentTrack.title"
            class="w-12 h-12 rounded-lg object-cover border border-white/10 flex-shrink-0"
          />
          <div class="min-w-0">
            <h4 class="font-syne text-sm font-bold truncate text-white">
              {{ currentTrack.title }}
            </h4>
            <p class="text-xs font-mono text-gray-400 truncate">AOEDE • {{ currentTrack.album }}</p>
          </div>
        </div>

        <!-- Center Controls & Interactive Visualizer -->
        <div class="flex flex-col items-center w-full md:w-2/4 space-y-1">
          <!-- Audio Visualizer Canvas Element -->
          <div
            class="w-full h-8 bg-brandCard/60 rounded-md overflow-hidden relative border border-white/5 flex items-center justify-center"
          >
            <canvas id="visualizer-canvas" class="w-full h-full"></canvas>
          </div>

          <!-- Playback Buttons & Timeline slider -->
          <div class="flex items-center space-x-4 w-full justify-center">
            <span class="text-[10px] font-mono text-gray-400">01:42</span>
            <q-btn
              flat
              round
              dense
              icon="skip_previous"
              color="white"
              size="sm"
              @click="prevTrack"
            ></q-btn>
            <q-btn
              round
              size="md"
              class="bg-gradient-to-r from-neonPink to-neonPinkHover text-white hover:glow-pink"
              :icon="isPlaying ? 'pause' : 'play_arrow'"
              @click="togglePlay"
            ></q-btn>
            <q-btn
              flat
              round
              dense
              icon="skip_next"
              color="white"
              size="sm"
              @click="nextTrack"
            ></q-btn>
            <span class="text-[10px] font-mono text-gray-400">{{ currentTrack.duration }}</span>
          </div>
        </div>

        <!-- Volume Controls & Action -->
        <div class="hidden md:flex items-center justify-end space-x-4 w-1/4">
          <q-icon name="volume_up" size="18px" class="text-gray-400"></q-icon>
          <q-slider v-model="volume" :min="0" :max="100" color="pink" class="w-24"></q-slider>
          <q-btn outline round size="sm" color="cyan" icon="bookmark" title="Save Track"></q-btn>
        </div>
      </div>
    </div>

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
            {{ selectedAlbum.title }} Tracklist
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
              <span class="text-xs font-mono text-neonPink font-bold">0{{ i + 1 }}</span>
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
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const drawer = ref(false)
const isPlaying = ref(false)
const volume = ref(75)

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
    title: 'CYBERPULSE',
    type: 'LP Album',
    year: '2026',
    tracksCount: 10,
    cover:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    description: 'A deep dive into futuristic melodic techno and raw synth motifs.',
    tracklist: [
      { name: 'Neon Horizon', duration: '06:12' },
      { name: 'Cyberpulse Title Track', duration: '05:45' },
      { name: 'Synthetic Emotion', duration: '07:01' },
      { name: 'Velocity', duration: '04:50' },
    ],
  },
  {
    title: 'HYPERION',
    type: 'EP Release',
    year: '2025',
    tracksCount: 4,
    cover:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    description: 'Peak-time driving basslines created for festival mainstages.',
    tracklist: [
      { name: 'Hyperion Peak', duration: '06:30' },
      { name: 'Astral Drift', duration: '05:15' },
    ],
  },
  {
    title: 'DARK MATTER',
    type: 'Single',
    year: '2025',
    tracksCount: 2,
    cover:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    description: 'Hypnotic atmosphere combined with ethereal vocals.',
    tracklist: [
      { name: 'Dark Matter (Original Mix)', duration: '07:22' },
      { name: 'Dark Matter (Dub Version)', duration: '06:50' },
    ],
  },
  {
    title: 'AETHER VISIONS',
    type: 'LP Album',
    year: '2024',
    tracksCount: 12,
    cover:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    description: "Aoede's acclaimed debut album featuring global club anthems.",
    tracklist: [
      { name: 'Elysium Intro', duration: '02:15' },
      { name: 'Aether Visions', duration: '06:05' },
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

// Tour Dates Mock Data
const tourDates = ref([
  {
    month: 'NOV',
    day: '12',
    year: '2026',
    city: 'London',
    country: 'UK',
    venue: 'Printworks Arena',
    festival: 'Winter Synth Ritual',
    status: 'Selling Fast',
  },
  {
    month: 'NOV',
    day: '28',
    year: '2026',
    city: 'Berlin',
    country: 'Germany',
    venue: 'Watergate Club',
    festival: 'Melodic Techno Night',
    status: 'Sold Out',
  },
  {
    month: 'DEC',
    day: '15',
    year: '2026',
    city: 'Amsterdam',
    country: 'Netherlands',
    venue: 'Ziggo Dome',
    festival: 'ADE Special Showcase',
    status: 'Buy Tickets',
  },
  {
    month: 'JAN',
    day: '08',
    year: '2027',
    city: 'Tokyo',
    country: 'Japan',
    venue: 'AgeHa Coast',
    festival: 'Cyberpunk Tour 2027',
    status: 'Selling Fast',
  },
])

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
const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}

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

const prevTrack = () => {
  isPlaying.value = true
}

const nextTrack = () => {
  isPlaying.value = true
}

const openBookingModal = () => {
  bookingModalOpen.value = true
}

const openMobileBooking = () => {
  openBookingModal()
  drawer.value = false
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

const openTicketDrawer = (show) => {
  $q.notify({
    message: `Redirecting to ticket portal for ${show.city} (${show.venue})...`,
    color: 'cyan',
    icon: 'confirmation_number',
    position: 'top',
  })
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
</script>
