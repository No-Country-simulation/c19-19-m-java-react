function Activities() {
    return (
      <>
        <div className="w-full h-auto">
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Actividades Disponibles</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🏊‍♀️</span> Piscina
              </li>
              <li className="flex items-center">
                <span className="mr-2">🧗‍♂️</span> Escalada de roca
              </li>
              <li className="flex items-center">
                <span className="mr-2">🚲</span> Ciclismo
              </li>
              <li className="flex items-center">
                <span className="mr-2">🏕️</span> Senderismo
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎣</span> Pesca
              </li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Características Adicionales</h2>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="mr-2">🍽️</span> Servicio de comida
              </li>
              <li className="flex items-center">
                <span className="mr-2">🧘‍♀️</span> Clases de yoga
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎨</span> Talleres creativos
              </li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-3">Información Útil</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">CATEGORÍA DE ACTIVIDADES</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★</span>
                  <span className="text-gray-300">★★</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">IDIOMAS DISPONIBLES</h3>
                <p>Español, Inglés</p>
              </div>
              <div>
                <h3 className="font-semibold">ESTILO DE ACTIVIDADES</h3>
                <p>
                  Aventura
                  <br />
                  Relajación
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
  
  export default Activities;