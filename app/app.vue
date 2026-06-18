<template>
  <div>
    <!-- Navbar -->
    <header class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow">
      <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3">
          <NuxtImg src="/logo.png" class="h-12 w-auto" alt="Diamond Blue Logo" />
          <div>
            <h1 class="font-bold text-xl text-[#003B8E]">Diamond Blue</h1>
            <p class="text-xs text-slate-500">Pools & Spa</p>
          </div>
        </div>

        <!-- Menú desktop -->
        <ul class="hidden md:flex gap-8 font-medium">
          <li><a href="#home" class="hover:text-[#0F73D8] transition-colors"
              :class="{ 'text-[#0F73D8]': activeSection === 'home' }">{{ t('nav.home') }}</a></li>
          <li><a href="#services" class="hover:text-[#0F73D8] transition-colors"
              :class="{ 'text-[#0F73D8]': activeSection === 'services' }">{{ t('nav.services') }}</a></li>
          <li><a href="#about" class="hover:text-[#0F73D8] transition-colors"
              :class="{ 'text-[#0F73D8]': activeSection === 'about' }">{{ t('nav.about') }}</a></li>
          <li><a href="#gallery" class="hover:text-[#0F73D8] transition-colors"
              :class="{ 'text-[#0F73D8]': activeSection === 'gallery' }">{{ t('nav.gallery') }}</a></li>
          <li><a href="#contact" class="hover:text-[#0F73D8] transition-colors"
              :class="{ 'text-[#0F73D8]': activeSection === 'contact' }">{{ t('nav.contact') }}</a></li>
        </ul>

        <div class="flex items-center gap-4">
          <!-- Language switcher con íconos (muestra el idioma actual) -->
          <button @click="toggleLang"
            class="flex items-center gap-1.5 text-sm font-medium text-[#003B8E] bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-all shadow-sm hover:shadow">
            <NuxtImg :src="langIcon" class="w-5 h-5 rounded-full object-cover" :alt="lang === 'en' ? 'English' : 'Spanish'" />
            {{ lang === 'en' ? 'EN' : 'ES' }}
          </button>

          <a href="tel:9419293944"
            class="hidden md:block bg-[#003B8E] hover:bg-[#00245C] text-white px-5 py-2 rounded-full transition shadow-md hover:shadow-lg">
            {{ t('nav.call') }}
          </a>

          <!-- Botón hamburguesa (solo móvil) - ahora más visible -->
          <button @click="toggleMenu"
            class="md:hidden text-[#003B8E] hover:text-[#00245C] focus:outline-none bg-white/80 p-1.5 rounded-full shadow-md border border-blue-100 hover:bg-blue-50 transition"
            aria-label="Toggle menu">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Menú móvil lateral (debajo del navbar) con enlaces centrados -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-40 md:hidden pt-20">
      <!-- Overlay oscuro -->
      <div class="absolute inset-0 bg-black/50" @click="closeMenu"></div>
      <!-- Panel lateral -->
      <div
        class="absolute right-0 top-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col justify-between">
        <!-- Botón cerrar (posicionado arriba a la derecha) -->
        <div class="flex justify-end p-4">
          <button @click="closeMenu" class="text-[#003B8E] hover:text-[#00245C]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Enlaces centrados verticalmente -->
        <div class="flex-1 flex items-center justify-center">
          <ul class="flex flex-col gap-6 text-lg font-medium">
            <li><a href="#home" @click="closeMenu" class="hover:text-[#0F73D8] transition-colors"
                :class="{ 'text-[#0F73D8]': activeSection === 'home' }">{{ t('nav.home') }}</a></li>
            <li><a href="#services" @click="closeMenu" class="hover:text-[#0F73D8] transition-colors"
                :class="{ 'text-[#0F73D8]': activeSection === 'services' }">{{ t('nav.services') }}</a></li>
            <li><a href="#about" @click="closeMenu" class="hover:text-[#0F73D8] transition-colors"
                :class="{ 'text-[#0F73D8]': activeSection === 'about' }">{{ t('nav.about') }}</a></li>
            <li><a href="#gallery" @click="closeMenu" class="hover:text-[#0F73D8] transition-colors"
                :class="{ 'text-[#0F73D8]': activeSection === 'gallery' }">{{ t('nav.gallery') }}</a></li>
            <li><a href="#contact" @click="closeMenu" class="hover:text-[#0F73D8] transition-colors"
                :class="{ 'text-[#0F73D8]': activeSection === 'contact' }">{{ t('nav.contact') }}</a></li>
          </ul>
        </div>

        <!-- Bloque inferior (llamada y redes) -->
        <div class="p-4 border-t border-gray-200">
          <a href="tel:9419293944" @click="closeMenu"
            class="block w-full bg-[#003B8E] hover:bg-[#00245C] text-white text-center font-bold px-5 py-3 rounded-full transition shadow-md">
            {{ t('nav.call') }}
          </a>
          <div class="mt-4 flex justify-center gap-4">
            <a href="#" class="text-blue-200 hover:text-cyan-300 transition" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-[#003B8E]">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" class="text-blue-200 hover:text-cyan-300 transition" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-[#003B8E]">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero -->
    <section
      id="home"
      class="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
    >
      <!-- Wallpaper -->
      <NuxtImg
        src="/wallpaper.avif"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Pool background"
        loading="eager"
        format="avif"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-[#00245C]/70"></div>

      <!-- Contenido (texto y logo) -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center w-full py-12 md:py-0">
        <div class="text-white animate-fade-up text-center md:text-left" style="animation-delay: 0.1s">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight animate-fade-up" style="animation-delay: 0.2s">
            {{ t('hero.title') }}
          </h2>
          <p class="mt-4 md:mt-6 text-base md:text-lg text-blue-100 animate-fade-up" style="animation-delay: 0.3s">
            {{ t('hero.subtitle') }}
          </p>
          <div class="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 animate-fade-up" style="animation-delay: 0.4s">
            <a href="#services" class="bg-cyan-400 hover:bg-cyan-500 text-[#003B8E] font-bold px-4 py-2 md:px-6 md:py-3 rounded-full transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
              {{ t('hero.servicesBtn') }}
            </a>
            <a href="tel:9419293944" class="border border-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-[#003B8E] transition transform hover:-translate-y-1 text-sm md:text-base">
              (941) 929-3944
            </a>
            <a :href="whatsappLink" target="_blank" class="bg-[#25D366] hover:bg-[#1DA85E] text-white font-bold px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              {{ t('hero.whatsapp') }}
            </a>
          </div>
        </div>

        <div class="flex justify-center animate-logo mt-6 md:mt-0">
          <NuxtImg src="/logo-borde-blanco.png" class="w-48 sm:w-56 md:w-80 drop-shadow-2xl" alt="Diamond Blue Logo border white" />
        </div>
      </div>

      <!-- Onda inferior (superpuesta) -->
      <div
        class="absolute left-0 w-full pointer-events-none"
        style="bottom: -2px; height: 120px; z-index: 5; overflow: visible;"
      >
        <svg
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          style="display: block; width: 200%; height: 120px; animation: waveMove 8s linear infinite;"
        >
          <!-- Onda principal (blanca) -->
          <path
            d="M0,40 C300,80 600,0 900,40 C1200,80 1500,0 1800,40 C2100,80 2400,0 2400,40 L2400,120 L0,120 Z"
            fill="#ffffff"
          />
          <!-- Segunda onda (blanca semitransparente, con desfase) -->
          <path
            d="M0,60 C400,20 800,100 1200,60 C1600,20 2000,100 2400,60 L2400,120 L0,120 Z"
            fill="rgba(255,255,255,0.4)"
            style="animation: waveMove 12s linear infinite reverse;"
          />
        </svg>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-16 md:py-20 max-w-7xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-[#003B8E] mb-4 animate-fade-up">{{ t('services.title')
        }}</h2>
      <p class="text-center text-slate-500 mb-10 md:mb-12 animate-fade-up" style="animation-delay: 0.1s">{{
        t('services.subtitle') }}</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(service, index) in services" :key="service.key"
          class="service-card relative bg-cover bg-center rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-72 overflow-hidden cursor-pointer"
          :style="{ backgroundImage: `url(${service.backgroundImage})` }" @click="toggleService(service.key)"
          @mouseenter="hoveredService = service.key" @mouseleave="hoveredService = null">
          <div class="absolute inset-0 bg-black/50 transition-opacity duration-300"
            :class="{ 'bg-black/30': isActive(service.key) || hoveredService === service.key }"></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10 transition-all duration-500"
            :class="{ 'transform -translate-y-16': isActive(service.key) || hoveredService === service.key }">
            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg mb-3">
              <NuxtImg :src="service.icon" class="w-10 h-10 object-contain service-icon" :alt="service.title" />
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-center">{{ service.title }}</h3>
          </div>
          <div class="absolute inset-x-0 bottom-0 p-4 z-20 transition-all duration-500" :class="{
            'opacity-0 translate-y-6 pointer-events-none': !isActive(service.key) && hoveredService !== service.key,
            'opacity-100 translate-y-0 pointer-events-auto': isActive(service.key) || hoveredService === service.key
          }">
            <p class="text-sm md:text-base whitespace-pre-line text-center text-white drop-shadow-lg font-medium">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <template v-if="false">
    <!-- About -->
    <section id="about" class="py-16 md:py-20 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div class="relative h-80 md:h-96 w-full">
          <NuxtImg :src="wallpapers[(currentWallpaperIndex + 1) % wallpapers.length]"
            class="absolute w-[90%] h-full object-cover rounded-3xl shadow-lg transition-all duration-700"
            :style="{ left: '5%', top: '10%', transform: 'scale(0.95)', filter: 'brightness(0.85)', zIndex: 1 }"
            alt="Pool background wallpaper secondary" loading="lazy" />
          <NuxtImg :src="currentWallpaper"
            class="absolute w-[90%] h-full object-cover rounded-3xl shadow-2xl transition-all duration-700" :style="{
              left: '5%',
              top: isCardUp ? '-5%' : '10%',
              transform: isCardUp ? 'scale(1)' : 'scale(0.95)',
              zIndex: 2,
              opacity: isCardUp ? 1 : 0.7,
              boxShadow: isCardUp ? '0 20px 50px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.3)'
            }" alt="Pool background wallpaper main" loading="lazy" />
        </div>
        <div class="animate-slide-right">
          <h2 class="text-3xl md:text-4xl font-bold text-[#003B8E] mb-6">{{ t('about.title') }}</h2>
          <div class="space-y-4 text-base md:text-lg text-slate-700">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
          </div>
          <ul class="mt-6 space-y-3">
            <li v-for="(item, idx) in aboutList" :key="idx" class="flex items-start gap-3 animate-fade-up"
              :style="{ animationDelay: (0.2 + idx * 0.08) + 's' }">
              <span class="text-[#003B8E] text-xl" v-html="item.icon"></span>
              <span class="text-slate-700 font-medium">{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="py-16 md:py-20 bg-[#EDF7FF] relative">
      <!-- Onda superior -->
      <div class="absolute left-0 w-full pointer-events-none"
        style="top: -80px; height: 80px; z-index: 1; overflow: visible;">
        <svg viewBox="0 0 2400 80" preserveAspectRatio="none"
          style="display: block; width: 200%; height: 80px; animation: waveMove 8s linear infinite;">
          <path d="M0,0 C200,40 400,0 600,40 C800,0 1000,40 1200,0 L1200,80 L0,80 Z" fill="#EDF7FF" />
          <path d="M1200,0 C1400,40 1600,0 1800,40 C2000,0 2200,40 2400,0 L2400,80 L1200,80 Z" fill="#EDF7FF" />
        </svg>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <h2 class="text-3xl md:text-4xl text-center font-bold text-[#003B8E] mb-8 md:mb-10 animate-fade-up">{{
          t('gallery.title') }}</h2>
        <h3 class="text-2xl font-semibold text-[#003B8E] mb-4">{{ t('gallery.residential') }}</h3>
        <div class="relative overflow-hidden rounded-2xl shadow-xl mb-12 group carousel-container">
          <div class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            :style="{ transform: `translateX(-${residentialIndex * (100 / 3)}%)` }">
            <div v-for="(img, idx) in residentialImages" :key="idx"
              class="min-w-[33.333%] h-80 md:h-[400px] flex items-center justify-center bg-black/10 cursor-pointer relative overflow-hidden group/image"
              @click="openLightbox(img)">
              <NuxtImg :src="img"
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                :alt="'Residential pool ' + (idx + 1)" loading="lazy" />
              <div
                class="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div class="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="white" class="w-12 h-12 drop-shadow-lg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
              <div class="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  class="absolute -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/image:translate-x-full transition-transform duration-1000 ease-in-out">
                </div>
              </div>
            </div>
          </div>
          <button @click="prevResidential"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#003B8E] rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button @click="nextResidential"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#003B8E] rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            <button v-for="(_, idx) in Math.ceil(residentialImages.length / 3)" :key="idx"
              @click="residentialIndex = idx * 3" class="w-3 h-3 rounded-full transition-all duration-300"
              :class="Math.floor(residentialIndex / 3) === idx ? 'bg-[#003B8E] w-6' : 'bg-white/50'"></button>
          </div>
        </div>

        <h3 class="text-2xl font-semibold text-[#003B8E] mb-4">{{ t('gallery.spa') }}</h3>
        <div class="relative overflow-hidden rounded-2xl shadow-xl group carousel-container">
          <div class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            :style="{ transform: `translateX(-${spaIndex * (100 / 3)}%)` }">
            <div v-for="(img, idx) in spaImages" :key="idx"
              class="min-w-[33.333%] h-80 md:h-[400px] flex items-center justify-center bg-black/10 cursor-pointer relative overflow-hidden group/image"
              @click="openLightbox(img)">
              <NuxtImg :src="img"
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                :alt="'Spa or personal pool ' + (idx + 1)" loading="lazy" />
              <div
                class="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div class="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="white" class="w-12 h-12 drop-shadow-lg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
              <div class="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  class="absolute -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/image:translate-x-full transition-transform duration-1000 ease-in-out">
                </div>
              </div>
            </div>
          </div>
          <button @click="prevSpa"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#003B8E] rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button @click="nextSpa"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#003B8E] rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            <button v-for="(_, idx) in Math.ceil(spaImages.length / 3)" :key="idx" @click="spaIndex = idx * 3"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="Math.floor(spaIndex / 3) === idx ? 'bg-[#003B8E] w-6' : 'bg-white/50'"></button>
          </div>
        </div>
      </div>

      <!-- Onda inferior -->
      <div class="absolute left-0 w-full pointer-events-none"
        style="bottom: -80px; height: 80px; z-index: 1; overflow: visible;">
        <svg viewBox="0 0 2400 80" preserveAspectRatio="none"
          style="display: block; width: 200%; height: 80px; animation: waveMove 8s linear infinite;">
          <path d="M0,40 C200,0 400,80 600,40 C800,0 1000,80 1200,40 L1200,0 L0,0 Z" fill="#EDF7FF" />
          <path d="M1200,40 C1400,0 1600,80 1800,40 C2000,0 2200,80 2400,40 L2400,0 L1200,0 Z" fill="#EDF7FF" />
        </svg>
      </div>
    </section>

    <!-- Contact Form -->
    <section id="contact" class="py-16 md:py-20 bg-white">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-[#003B8E] mb-4 animate-fade-up">{{ t('contact.title')
          }}</h2>
        <p class="text-center text-slate-500 mb-8 animate-fade-up" style="animation-delay: 0.1s">{{
          t('contact.subtitle') }}</p>
        <form @submit.prevent="submitForm" class="space-y-5 animate-fade-up" style="animation-delay: 0.2s">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">{{ t('contact.name') }}</label>
            <input v-model="form.name" type="text" id="name" required
              class="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B8E] focus:border-transparent outline-none transition" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">{{ t('contact.email') }}</label>
            <input v-model="form.email" type="email" id="email" required
              class="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B8E] focus:border-transparent outline-none transition" />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">{{ t('contact.phone') }}</label>
            <input v-model="form.phone" type="tel" id="phone" required
              class="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B8E] focus:border-transparent outline-none transition" />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">{{ t('contact.message') }}</label>
            <textarea v-model="form.message" id="message" rows="4"
              class="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B8E] focus:border-transparent outline-none transition"></textarea>
          </div>
          <button type="button" @click="shareLocation"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {{ t('contact.shareLocation') }}
          </button>
          <button type="submit"
            class="w-full bg-[#003B8E] hover:bg-[#00245C] text-white font-bold py-3 px-6 rounded-full transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {{ t('contact.send') }}
          </button>
        </form>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-20 text-center bg-[#003B8E] text-white animate-fade-up">
      <h2 class="text-3xl md:text-4xl font-bold">{{ t('cta.title') }}</h2>
      <p class="mt-3 md:mt-4 text-blue-100">{{ t('cta.subtitle') }}</p>
      <a href="tel:9419293944"
        class="inline-block mt-6 md:mt-8 bg-cyan-400 text-[#003B8E] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-cyan-300 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
        {{ t('cta.button') }}
      </a>
    </section>
    </template>
    <!-- Footer -->
    <footer class="bg-[#00245C] text-white py-8" id="footer">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left animate-fade-up">
        <div>
          <NuxtImg src="/logo-borde-blanco.png" class="h-16 mx-auto md:mx-0 mb-4" alt="Diamond Blue Logo" />
          <p class="text-blue-200">Diamond Blue Pools & Spa</p>
          <p class="text-sm text-blue-300 mt-1">{{ t('footer.tagline') }}</p>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-3">{{ t('footer.contact') }}</h4>
          <p><a href="tel:9419293944" class="hover:text-cyan-300 transition">(941) 929-3944</a></p>
          <p><a href="mailto:diamondbluepoolspa@gmail.com"
              class="hover:text-cyan-300 transition">diamondbluepoolspa@gmail.com</a></p>
          <p class="text-blue-200">{{ t('footer.address') }}</p>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-3">{{ t('footer.serviceArea') }}</h4>
          <p class="text-blue-200">Bradenton, Palmetto, Lakewood Ranch</p>
          <p class="text-blue-200">Anna Maria Island & surrounding areas</p>
          <div class="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" class="text-blue-200 hover:text-cyan-300 transition" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" class="text-blue-200 hover:text-cyan-300 transition" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center text-sm text-blue-300 border-t border-blue-700 mt-8 pt-6">
        &copy; 2026 Diamond Blue Pools & Spa. {{ t('footer.rights') }}
      </div>
    </footer>

    <!-- Floating WhatsApp -->
    <a :href="whatsappLink" target="_blank"
      class="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition z-50 animate-pulse-slow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 md:w-8 md:h-8">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>

    <!-- Lightbox -->
    <div v-if="lightboxImage" class="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center cursor-pointer"
      @click="closeLightbox">
      <NuxtImg :src="lightboxImage" class="max-w-11/12 max-h-11/12 object-contain" alt="Lightbox image" loading="lazy" />
      <button class="absolute top-4 right-4 text-white text-4xl font-bold">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useHead, useSeoMeta, useRoute } from '#app'

const route = useRoute()
const siteUrl = 'https://diamondbluepools.com' // Ajusta según tu variable de entorno

// Language
const lang = ref('en')
function toggleLang() { lang.value = lang.value === 'en' ? 'es' : 'en' }

// Language icon - muestra el idioma actual
const langIcon = computed(() => {
  return lang.value === 'en' ? '/eglich.png' : '/spanich.png'
})

// Menú móvil
const isMenuOpen = ref(false)
function toggleMenu() { isMenuOpen.value = !isMenuOpen.value }
function closeMenu() { isMenuOpen.value = false }

// Translations
const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', gallery: 'Gallery', contact: 'Contact Us', call: 'Call Now' },
    hero: {
      title: 'Professional Pool Cleaning & Maintenance in Manatee County',
      subtitle: 'Crystal clear water, reliable maintenance and professional service for residential and commercial pools in Manatee County and surrounding areas.',
      servicesBtn: 'Our Services',
      whatsapp: 'Chat on WhatsApp'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Everything you need to keep your pool sparkling all year.'
    },
    about: {
      title: 'Why Choose Diamond Blue?',
      p1: 'Diamond Blue Pools provides comprehensive pool cleaning and maintenance services in Manatee County. Our team ensures every pool we service is spotless, safe, and fully operational so you can enjoy it all year long.',
      p2: 'We take pride in providing professional and dependable pool services, backed by years of expertise. Our priority is to keep your pool clean and well-maintained while delivering an excellent customer experience.'
    },
    gallery: {
      title: 'Our Work',
      residential: 'Residential Pools',
      spa: 'Spa & Personal Pools'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Fill out the form and we’ll get back to you via WhatsApp.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Message',
      send: 'Send via WhatsApp',
      shareLocation: 'Share My Location',
      geoUnavailable: 'Geolocation not supported',
      geoError: 'Unable to get location',
      location: 'My location'
    },
    cta: {
      title: 'Ready for a Crystal Clear Pool?',
      subtitle: 'Call today and request your free estimate.',
      button: 'Call (941) 929-3944'
    },
    footer: {
      tagline: 'Professional Pool Care & Maintenance',
      contact: 'Contact Info',
      address: 'Manatee County, FL',
      serviceArea: 'Service Area',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', services: 'Servicios', gallery: 'Galería', contact: 'Contacto', call: 'Llamar ahora' },
    hero: {
      title: 'Limpieza y Mantenimiento Profesional de Piscinas en el Condado de Manatee',
      subtitle: 'Agua cristalina, mantenimiento confiable y servicio profesional para piscinas residenciales y comerciales en el Condado de Manatee y áreas circundantes.',
      servicesBtn: 'Nuestros Servicios',
      whatsapp: 'Chatea por WhatsApp'
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Todo lo que necesitas para mantener tu piscina brillante todo el año.'
    },
    about: {
      title: '¿Por qué elegir Diamond Blue?',
      p1: 'Diamond Blue Pools ofrece servicios integrales de limpieza y mantenimiento de piscinas en el Condado de Manatee. Nuestro equipo garantiza que cada piscina que servimos esté impecable, segura y en pleno funcionamiento para que la disfrutes todo el año.',
      p2: 'Nos enorgullecemos de ofrecer servicios profesionales y confiables, respaldados por años de experiencia. Nuestra prioridad es mantener tu piscina limpia y bien cuidada, brindando una excelente experiencia al cliente.'
    },
    gallery: {
      title: 'Nuestro Trabajo',
      residential: 'Piscinas Residenciales',
      spa: 'Spa y Piscinas Personales'
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Completa el formulario y te responderemos por WhatsApp.',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Número de teléfono',
      message: 'Mensaje',
      send: 'Enviar por WhatsApp',
      shareLocation: 'Compartir mi ubicación',
      geoUnavailable: 'Geolocalización no soportada',
      geoError: 'No se pudo obtener la ubicación',
      location: 'Mi ubicación'
    },
    cta: {
      title: '¿Listo para una piscina cristalina?',
      subtitle: 'Llama hoy y solicita tu presupuesto gratuito.',
      button: 'Llamar (941) 929-3944'
    },
    footer: {
      tagline: 'Cuidado y Mantenimiento Profesional de Piscinas',
      contact: 'Información de Contacto',
      address: 'Condado de Manatee, FL',
      serviceArea: 'Área de Servicio',
      rights: 'Todos los derechos reservados.'
    }
  }
}
function t(key) {
  const keys = key.split('.')
  let val = translations[lang.value]
  for (const k of keys) val = val?.[k]
  return val || key
}

// Funciones de navegación para carruseles
function nextResidential() {
  const max = Math.ceil(residentialImages.value.length / 3) - 1
  const currentGroup = Math.floor(residentialIndex.value / 3)
  const nextGroup = (currentGroup + 1) % (max + 1)
  residentialIndex.value = nextGroup * 3
}
function prevResidential() {
  const max = Math.ceil(residentialImages.value.length / 3) - 1
  const currentGroup = Math.floor(residentialIndex.value / 3)
  const prevGroup = (currentGroup - 1 + max + 1) % (max + 1)
  residentialIndex.value = prevGroup * 3
}
function nextSpa() {
  const max = Math.ceil(spaImages.value.length / 3) - 1
  const currentGroup = Math.floor(spaIndex.value / 3)
  const nextGroup = (currentGroup + 1) % (max + 1)
  spaIndex.value = nextGroup * 3
}
function prevSpa() {
  const max = Math.ceil(spaImages.value.length / 3) - 1
  const currentGroup = Math.floor(spaIndex.value / 3)
  const prevGroup = (currentGroup - 1 + max + 1) % (max + 1)
  spaIndex.value = prevGroup * 3
}

// Mapeo de íconos para servicios
const serviceIcons = {
  weekly: '/calendario.png',
  chemistry: '/prueba.png',
  equipment: '/configuraciones.png',
  filter: '/filtrar.png',
  salt: '/sal.png',
  green: '/piscina.png',
  vacation: '/vacaciones-de-verano.png',
  reports: '/tasks.png'
}

// Lista de imágenes locales de fondo (8 imágenes)
const localBackgrounds = [
  '/services/4.webp',
  '/services/1.webp',
  '/services/6.jpg',
  '/services/3.webp',
  '/services/8.jpg',
  '/services/7.jpg',
  '/services/2.webp',
  '/services/5.jpeg'
]

const services = computed(() => {
  const base = [
    { key: 'weekly', titleEn: 'Weekly Pool Maintenance', descEn: '• Weekly pool cleaning.\n• Brushing walls and steps.\n• Vacuuming and leaf removal.', titleEs: 'Mantenimiento Semanal de Piscinas', descEs: '• Limpieza semanal de piscinas.\n• Cepillado de paredes y escalones.\n• Aspirado y retiro de hojas.' },
    { key: 'chemistry', titleEn: 'Water Chemistry Balancing', descEn: '• Analysis and adjustment of:\n  • Chlorine\n  • pH\n  • Alkalinity\n  • Stabilizer (CYA)\n  • Salt', titleEs: 'Balance Químico del Agua', descEs: '• Análisis y ajuste de:\n  • Cloro\n  • pH\n  • Alcalinidad\n  • Estabilizador (CYA)\n  • Sal' },
    { key: 'equipment', titleEn: 'Equipment Inspection', descEn: '• Inspection of:\n  • Pumps\n  • Filters\n  • Heaters\n  • Timers\n  • Salt systems', titleEs: 'Inspección de Equipos', descEs: '• Revisión de:\n  • Bombas\n  • Filtros\n  • Calentadores\n  • Temporizadores\n  • Sistemas de sal' },
    { key: 'filter', titleEn: 'Filter Cleaning', descEn: '• Filter cleaning:\n  • Cartridge\n  • DE\n  • Sand Filters', titleEs: 'Limpieza de Filtros', descEs: '• Limpieza de filtros:\n  • Cartridge\n  • DE\n  • Filtros de arena' },
    { key: 'salt', titleEn: 'Salt System Service', descEn: '• Inspection and cleaning of salt cells.\n• Chlorine generator diagnostics.', titleEs: 'Servicio de Sistema de Sal', descEs: '• Inspección y limpieza de celdas de sal.\n• Diagnóstico de generadores de cloro.' },
    { key: 'green', titleEn: 'Green Pool Cleanup', descEn: '• Green pool recovery.\n• Shock treatments.\n• Algae elimination.', titleEs: 'Limpieza de Piscinas Verdes', descEs: '• Recuperación de piscinas verdes.\n• Tratamientos de choque.\n• Eliminación de algas.' },
    { key: 'vacation', titleEn: 'Vacation Home Pool Service', descEn: '• Service for vacation rentals and Airbnb.', titleEs: 'Servicio para Piscinas de Vacaciones', descEs: '• Servicio para propiedades vacacionales y Airbnb.' },
    { key: 'reports', titleEn: 'Pool Equipment Reports', descEn: '• Equipment photos and reports for absent owners.', titleEs: 'Informes de Equipo de Piscina', descEs: '• Fotos del equipo y reportes para propietarios ausentes.' }
  ]
  return base.map((s, index) => ({
    ...s,
    title: lang.value === 'en' ? s.titleEn : s.titleEs,
    description: lang.value === 'en' ? s.descEn : s.descEs,
    icon: serviceIcons[s.key] || '/piscina.png',
    backgroundImage: localBackgrounds[index % localBackgrounds.length]
  }))
})

// Estado para servicios
const activeServiceKey = ref(null)
const hoveredService = ref(null)

function toggleService(key) {
  activeServiceKey.value = activeServiceKey.value === key ? null : key
}
function isActive(key) {
  return activeServiceKey.value === key
}

// About list
const aboutList = computed(() => {
  const items = {
    en: [
      { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`, text: 'Trusted Service Provider' },
      { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`, text: 'Customer-Focused Approach' },
      { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`, text: 'Years of Expertise' }
    ],
    es: [
      { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`, text: 'Proveedor de confianza' },
      { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`, text: 'Enfoque en el cliente' },
      { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`, text: 'Años de experiencia' }
    ]
  }
  return items[lang.value]
})

// Galería
const residentialImages = computed(() => Array.from({ length: 6 }, (_, i) => `/redidensial/${i + 1}.jpeg`))
const spaImages = computed(() => Array.from({ length: 10 }, (_, i) => `/spaAndPersonal/${i + 1}.jpeg`))

// Carruseles
const residentialIndex = ref(0)
const spaIndex = ref(0)
let autoResidential, autoSpa

function startAutoPlay() {
  autoResidential = setInterval(() => {
    const max = Math.ceil(residentialImages.value.length / 3) - 1
    const currentGroup = Math.floor(residentialIndex.value / 3)
    const nextGroup = (currentGroup + 1) % (max + 1)
    residentialIndex.value = nextGroup * 3
  }, 4000)
  autoSpa = setInterval(() => {
    const max = Math.ceil(spaImages.value.length / 3) - 1
    const currentGroup = Math.floor(spaIndex.value / 3)
    const nextGroup = (currentGroup + 1) % (max + 1)
    spaIndex.value = nextGroup * 3
  }, 4000)
}
onMounted(() => startAutoPlay())
onBeforeUnmount(() => { clearInterval(autoResidential); clearInterval(autoSpa) })

// Lightbox
const lightboxImage = ref(null)
function openLightbox(img) { lightboxImage.value = img }
function closeLightbox() { lightboxImage.value = null }

// Wallpapers para About
const wallpapers = ['/wallpaper 1.jpg', '/wallpaper 2.webp']
const currentWallpaperIndex = ref(0)
const isCardUp = ref(true)
let wallpaperInterval

function startWallpaperRotation() {
  wallpaperInterval = setInterval(() => {
    isCardUp.value = false
    setTimeout(() => {
      currentWallpaperIndex.value = (currentWallpaperIndex.value + 1) % wallpapers.length
      isCardUp.value = true
    }, 300)
  }, 4000)
}
onMounted(() => startWallpaperRotation())
onBeforeUnmount(() => clearInterval(wallpaperInterval))

const currentWallpaper = computed(() => wallpapers[currentWallpaperIndex.value])

// Formulario
const form = ref({ name: '', email: '', phone: '', message: '' })
function submitForm() {
  const msg = `*${t('contact.name')}:* ${form.value.name}\n*${t('contact.email')}:* ${form.value.email}\n*${t('contact.phone')}:* ${form.value.phone}\n*${t('contact.message')}:* ${form.value.message || 'N/A'}`
  window.open(`https://wa.me/19419293944?text=${encodeURIComponent(msg)}`, '_blank')
}
function shareLocation() {
  if (!navigator.geolocation) { alert(t('contact.geoUnavailable')); return }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords
      const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`
      const msg = `*${t('contact.location')}:* ${mapsLink}`
      window.open(`https://wa.me/19419293944?text=${encodeURIComponent(msg)}`, '_blank')
    },
    () => alert(t('contact.geoError'))
  )
}

const whatsappLink = computed(() => {
  const msg = lang.value === 'en' ? 'Hello, I need information about your pool services.' : 'Hola, necesito información sobre sus servicios de piscina.'
  return `https://wa.me/19419293944?text=${encodeURIComponent(msg)}`
})

// Scroll spy
const activeSection = ref('home')
let observer = null
onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  const options = { threshold: 0.3 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) activeSection.value = entry.target.id })
  }, options)
  sections.forEach(section => observer.observe(section))
})
onBeforeUnmount(() => { if (observer) observer.disconnect() })

// ============================================================
//  🚀 OPTIMIZACIÓN SEO (sin dependencia de #nuxt/og-image)
// ============================================================

// Metadatos computados según idioma
const seoTitle = computed(() =>
  lang.value === 'en'
    ? 'Diamond Blue Pools & Spa – Pool Cleaning & Maintenance in Manatee County'
    : 'Diamond Blue Pools & Spa – Limpieza y Mantenimiento de Piscinas en el Condado de Manatee'
)

const seoDescription = computed(() =>
  lang.value === 'en'
    ? 'Professional pool cleaning, maintenance, repair and renovation services for residential and commercial pools in Manatee County and surrounding areas. Call (941) 929-3944.'
    : 'Servicios profesionales de limpieza, mantenimiento, reparación y renovación de piscinas residenciales y comerciales en el Condado de Manatee y áreas circundantes. Llama al (941) 929-3944.'
)

const seoKeywords = 'pool cleaning Manatee County, piscinas Condado de Manatee, limpieza de piscinas Manatee County, mantenimiento de piscinas Manatee County, pool service Manatee County, Diamond Blue Pools'

// URL canónica (usando useRoute para futuras rutas)
const canonicalUrl = computed(() => `${siteUrl}${route.path}`)

// URLs alternativas para hreflang
const enUrl = computed(() => `${siteUrl}${route.path}`)
const esUrl = computed(() => `${siteUrl}${route.path}`)

// Usamos useSeoMeta para todos los metadatos, incluyendo la imagen OG
useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: `${siteUrl}/seo.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Diamond Blue Pools & Spa - Professional Pool Services',
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogSiteName: 'Diamond Blue Pools & Spa',
  ogLocale: computed(() => lang.value === 'en' ? 'en_US' : 'es_ES'),
  twitterCard: 'summary_large_image',
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  twitterImage: `${siteUrl}/seo.jpg`,
  twitterImageAlt: 'Diamond Blue Pools & Spa - Professional Pool Services',
  robots: 'index, follow, max-image-preview:large',
  themeColor: '#0EA5E9',
  msapplicationTileColor: '#0EA5E9',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'default',
  geoRegion: 'US-FL',
  geoPlacename: 'Manatee County',
  geoPosition: '27.4957; -82.5742',
  ICBM: '27.4957, -82.5742',
})

useHead({
  htmlAttrs: {
    lang: computed(() => lang.value === 'en' ? 'en-US' : 'es-ES'),
  },
  titleTemplate: (title) => title ? `${title}` : 'Diamond Blue Pools & Spa',
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'alternate', hreflang: 'en', href: enUrl },
    { rel: 'alternate', hreflang: 'es', href: esUrl },
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}${route.path}` },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Diamond Blue Pools & Spa',
        image: `${siteUrl}/logo.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manatee County',
          addressRegion: 'FL',
          addressCountry: 'US',
        },
        telephone: '(941) 929-3944',
        url: canonicalUrl.value,
        priceRange: '$$',
        description: seoDescription.value,
        areaServed: {
          '@type': 'Place',
          name: 'Manatee County, Florida',
        },
        openingHours: 'Mo-Fr 08:00-18:00',
        sameAs: [
          'https://www.facebook.com/diamondbluepools',
          'https://www.instagram.com/diamondbluepools',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '(941) 929-3944',
          contactType: 'customer service',
          availableLanguage: ['English', 'Spanish'],
        },
      }),
    },
  ],
})
</script>

<style scoped>
@keyframes diagonalFloat {
  0% { transform: translate(-5px, 3px); }
  50% { transform: translate(5px, -3px); }
  100% { transform: translate(-5px, 3px); }
}
.animate-logo {
  animation: diagonalFloat 6s ease-in-out infinite;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes pulseSlow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s ease-out forwards;
}
.animate-slide-left {
  opacity: 0;
  animation: slideLeft 0.8s ease-out forwards;
}
.animate-slide-right {
  opacity: 0;
  animation: slideRight 0.8s ease-out forwards;
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.animate-pulse-slow {
  animation: pulseSlow 2s ease-in-out infinite;
}
.service-icon {
  filter: brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(2000%) hue-rotate(190deg);
}
.service-card {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.service-card:hover {
  transform: translateY(-4px);
}
@keyframes waveMove {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>