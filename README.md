# Generador de Países - Trabajo de la asignatura Desarrollo Web y Mobile

[![Maximiliano López](https://img.shields.io/badge/GitHub-Maximiliano_López-B7E3FF?logo=github&logoColor=black)](https://github.com/maaxilopp)

Aplicación hecha con React que elige un país al azar y muestra su nombre, su bandera y un reloj analógico con la hora local de ese país.

## Interfáz grafica

![Uploading image.png…]()


## Funcionalidades

* Selección de un país al azar consumiendo la API de countries.dev
* Muestra el nombre del país y su código ISO alpha-2
* Bandera renderizada en SVG
* Reloj analógico que marca la hora del huso horario del país, actualizado cada segundo
* Hora también en formato digital
* Botón para sortear otro país sin recargar la página
* Manejo de estados de carga y de error

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* react-clock
* dayjs
* API de countries.dev

## Cómo ejecutarlo

Cloná el repositorio e instalá las dependencias:

git clone https://github.com/maaxilopp/GeneradorPaises-Dwym.git
cd GeneradorPaises-Dwym
npm install
npm run dev


Luego abrí el navegador en la URL que te muestra la terminal.

## Componentes

* App → coordina la carga del país y el estado general de la aplicación
* CountryCard → muestra el nombre, el código y la bandera del país sorteado
* CountryClock → renderiza el reloj analógico y la hora digital

## Hooks

* useRandomCountry → pide un país al azar a la API y expone los estados de carga y error
* useZonedClock → calcula la hora del huso horario recibido y la actualiza cada segundo

## Utilidades

* api/countries.js → función que consulta la API de countries.dev
* utils/time.js → convierte el huso horario que devuelve la API al formato que necesita el reloj
