const apiKey = "1da897d6dcf24dc5884193623253101"; // Reemplázala con tu clave de OpenWeatherMap

async function buscarClima() {
    const ciudad = document.getElementById("ciudad").value;
    if (!ciudad) return alert("Por favor, ingresa una ciudad");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.cod === "404") {
            document.getElementById("resultado").innerHTML = "Ciudad no encontrada";
        } else {
            document.getElementById("resultado").innerHTML = `
                <h2>${datos.name}, ${datos.sys.country}</h2>
                <p>🌡️ Temperatura: ${datos.main.temp}°C</p>
                <p>🌬️ Viento: ${datos.wind.speed} m/s</p>
                <p>🌧️ Condición: ${datos.weather[0].description}</p>
            `;
        }
    } catch (error) {
        console.error("Error al obtener datos", error);
    }
}
