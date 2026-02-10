# Prueba maquetación Knowmadmood - Adrián Nieto Zampaña

# Table of contents

- [Prueba maquetación Knowmadmood - Adrián Nieto Zampaña](#prueba-maquetación-knowmadmood---adrián-nieto-zampaña)
- [Table of contents](#table-of-contents)
- [Cómo ejecutar](#cómo-ejecutar)
  - [Requisitos](#requisitos)
  - [Instalación y ejecución del proyecto](#instalación-y-ejecución-del-proyecto)
  - [Comandos de node disponibles](#comandos-de-node-disponibles)
  - [Estructura del proyecto](#estructura-del-proyecto)
- [Decisiones de layout](#decisiones-de-layout)
- [Enfoque de accesibilidad](#enfoque-de-accesibilidad)
- [Qué mejorarías con más tiempo](#qué-mejorarías-con-más-tiempo)

# Cómo ejecutar

## Requisitos

 - Tener [Node.js](https://nodejs.org/es/download) instalado
 - [Repositorio](#EnlacedeGitHub) clonado

## Instalación y ejecución del proyecto

1. Clonamos el repositorio:
```bash
git clone <Este repo>
cd prueba_maquetacion_adriannieto # O el nombre de la carpeta clonada
```


2. Dentro del repositorio clonado, ejecutar el siguiente comando:
```bash
npm install
```

3. Una vez instaladas las dependencias, ejecutar el comando `run` apropiado:
```bash
npm run sass 
```

4. Abre `index.html` en tu navegador

## Comandos de node disponibles

 - `npm run sass` - Compile SCSS once
 - `npm run sass:watch` - Compile and watch for changes

## Estructura del proyecto
```
prueba_maquetacion_adriannieto/
│
├── css/                # CSS compilado
├── js/                 # Archivos JavaScript
├── scss/               # Source SCSS
├── .gitignore          # Archivo GitIgnore para git
├── index.html          # Fichero HTML principal
├── package-lock.json   # Fichero de detalles de instalación node
├── package.json        # Fichero de dependencias node y scripts
└── README.md           # Archivo Markdown
```
# Decisiones de layout

Para el layout general se ha usado **grid**, ya que proporciona una forma rápida de orientar y ordenar los distintos elementos principales (header, aside, main, footer).

Se ha usado grid con un auto-fit y la funcion minmax para ajustar las cards en el grid de forma flexible y no depender de media queries.

# Enfoque de accesibilidad

Los principales enfoques que se han usado son:

 - Uso de elementos tabulables como botones, enlaces...
 - Usar la semántica de HTML más moderna, ya que cumple muchos criterios de accesibilidad (listas, header, footer, nav...)
 - Uso de atributos *aria*, gran enfoque en *aria-label* (o *aria-labelledby*) y *aria-hidden* para lectores de pantalla.
 - Uso del atributo *role* para especificar el rol de ciertos elementos (como el rol de radio para los botones de filtrado).
 - Uso del atributo *alt* y *loading* para etiquetas `img`.
 - Usar buenas prácticas para las etiquetas `button`, usando atributos como *type*, *aria-label* y *aria-pressed*.
 - Uso de contenido oculto (clase `visually-hidden`) para dar más contexto a lectores de pantalla.
 - Buena jerarquía de encabezados (h1 -> h2 -> h3)

Todo esto ha sido contemplando la guía WCAG 2, pero al ser una prueba de 2 horas, quizá no llegue al nivel de profundidad que se debería llegar.

# Qué mejorarías con más tiempo

De forma rápida, se me ocurren las siguientes mejoras:
 
 - Mejoras al SCSS para que sea más escalable y mantenible, usando más sus funcionalidades como mixins, operadores...
 - Buscar mejorías en ciertos aspectos de accesibilidad, ya que no se ha comprobado que lectores de pantalla lean acorde a cómo deberían, por ejemplo, ni se han tenido en cuenta elementos como el :hover, que actuan distinto en móvil.
 - Mejorar ciertas cosas en móvil, por ejemplo, si no hay tarjetas hay un margen extraño, posiblemente debido al grid.
 - Uso de JavaScript para añadir de forma dinámica las cards.
 - Refactorizar funciones de JavaScript y hacerlas mas legibles.
 - Uso de LocalStorage para guardar el estado de filtrado.
 - Soporte multilenguaje.
