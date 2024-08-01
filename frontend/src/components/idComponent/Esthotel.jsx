function Eshotel() {
  return (
    <>
      <div class=" w-full h-auto">
        <section class="mb-6">
          <h2 class="text-xl font-bold mb-3">Servicios del alojamiento</h2>
          <ul class="space-y-2">
            <li class="flex items-center">
              <span class="mr-2">🅿️</span> Estacionamiento privado de pago en el
              sitio
            </li>
            <li class="flex items-center">
              <span class="mr-2">🏋️</span> Centro de fitness con gimnasio / Sala
              de entrenamiento
            </li>
            <li class="flex items-center">
              <span class="mr-2">📺</span> Canales de televisión infantiles
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span> Transporte gratuito al aeropuerto
            </li>
            <li class="flex items-center">
              <span class="mr-2">📶</span> Internet de alta velocidad gratuito
              (WiFi)
            </li>
            <li class="flex items-center">
              <span class="mr-2">🍳</span> Desayuno gratuito
            </li>
            <li class="flex items-center">
              <span class="mr-2">🐕</span> Se admiten mascotas (Apto para perros
              / Admite mascotas)
            </li>
            <li class="flex items-center">
              <span class="mr-2">💼</span> Centro de negocios con acceso a
              Internet
            </li>
          </ul>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-bold mb-3">
            Características de la habitación
          </h2>
          <ul class="grid grid-cols-2 gap-2">
            <li class="flex items-center">
              <span class="mr-2">❄️</span> Aire acondicionado
            </li>
            <li class="flex items-center">
              <span class="mr-2">🧹</span> Servicio de limpieza
            </li>
            <li class="flex items-center">
              <span class="mr-2">📞</span> Teléfono
            </li>
            <li class="flex items-center">
              <span class="mr-2">🚿</span> Baño / ducha
            </li>
            <li class="flex items-center">
              <span class="mr-2">🖥️</span> Escritorio
            </li>
            <li class="flex items-center">
              <span class="mr-2">🔐</span> Caja fuerte
            </li>
            <li class="flex items-center">
              <span class="mr-2">📺</span> Televisor de pantalla plana
            </li>
            <li class="flex items-center">
              <span class="mr-2">🧻</span> Artículos de aseo gratuitos
            </li>
          </ul>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-bold mb-3">Tipos de habitaciones</h2>
          <ul class="space-y-2">
            <li class="flex items-center">
              <span class="mr-2">🚭</span> Habitaciones para no fumadores
            </li>
            <li class="flex items-center">
              <span class="mr-2">👪</span> Habitaciones familiares
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-bold mb-3">Bueno saber</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h3 class="font-semibold">CATEGORÍA DEL HOTEL</h3>
              <div class="flex items-center">
                <span class="text-yellow-400">★★★</span>
                <span class="text-gray-300">★★</span>
              </div>
            </div>
            <div>
              <h3 class="font-semibold">IDIOMAS HABLADOS</h3>
              <p>Español, Inglés</p>
            </div>
            <div>
              <h3 class="font-semibold">ESTILO DEL HOTEL</h3>
              <p>
                Moderno
                <br />
                Ecológico
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Eshotel;
