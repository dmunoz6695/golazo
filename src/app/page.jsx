import React from 'react'

const Home = () => {
  return (
    <>
      <main style={{ height: '100%' }} className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">¡Bienvenido a Golazo!</h2>
          <p className="text-gray-600">Tu fuente de información sobre el mundo del fútbol</p>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Últimas noticias</h3>
            <p className="text-gray-600">Manchester city gana su primera champions league.</p>
            <img src="https://estaticos-cdn.sport.es/clip/cea4eb0b-08a3-43e1-8eb2-7896aa7c861c_alta-libre-aspect-ratio_default_0.jpg" alt="" />

          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Jugadores destacados</h3>
            <p className="text-gray-600"> Haaland y  Messi en lucha por el balón de oro.</p>
            <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1c32d62774b113bc/633c6cc25d7d8f108e1d3ce3/goal---web-two-way-split--6473ff25-5aa9-45b8-a915-1c9649c1f558.jpeg?auto=webp&format=pjpg&width=3840&quality=60" alt="" />
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Más noticias</h3>
            <p className="text-gray-600">Mbappe desea salir.</p>
            <img src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg" alt="" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 Golazo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default Home
