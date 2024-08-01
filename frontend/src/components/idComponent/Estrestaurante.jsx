function Esrestaurant() {
    return (
      <>
        <div className="w-full h-auto">
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Servicios del restaurante</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🅿️</span> Estacionamiento disponible
              </li>
              <li className="flex items-center">
                <span className="mr-2">🍴</span> Servicio de mesa
              </li>
              <li className="flex items-center">
                <span className="mr-2">📺</span> Televisores en el establecimiento
              </li>
              <li className="flex items-center">
                <span className="mr-2">📶</span> Internet de alta velocidad gratuito (WiFi)
              </li>
              <li className="flex items-center">
                <span className="mr-2">🍷</span> Servicio de bar
              </li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Características del restaurante</h2>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="mr-2">🛒</span> Servicio de entrega a domicilio
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌱</span> Opciones vegetarianas y veganas
              </li>
              <li className="flex items-center">
                <span className="mr-2">🍰</span> Postres y repostería
              </li>
              <li className="flex items-center">
                <span className="mr-2">🍷</span> Vinos y licores
              </li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-3">Bueno saber</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">CATEGORÍA DEL RESTAURANTE</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★</span>
                  <span className="text-gray-300">★★</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">IDIOMAS HABLADOS</h3>
                <p>Español, Inglés</p>
              </div>
              <div>
                <h3 className="font-semibold">ESTILO DEL RESTAURANTE</h3>
                <p>
                  Contemporáneo
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
  
  export default Esrestaurant;