# Catálogo de productos - Svelte / SvelteKit

## Descripción

Este proyecto consiste en una aplicación web desarrollada con Svelte y SvelteKit que permite consultar un catálogo de productos mediante el consumo de una API pública.

El usuario puede visualizar los productos disponibles, realizar búsquedas por nombre o categoría y consultar la información detallada de cada producto mediante una interfaz moderna, intuitiva y adaptable a diferentes dispositivos.

## Tecnologías utilizadas

- Svelte 5
- SvelteKit
- JavaScript
- HTML5
- CSS3
- Vite
- SvelteKit Router
- Svelte Runes
- Fake Store API

## Funcionalidades

- Visualización de productos mediante tarjetas.
- Búsqueda de productos por nombre y categoría.
- Filtrado de productos en tiempo real.
- Consulta de información detallada de cada producto.
- Visualización de precios, imágenes, descripciones y calificaciones.
- Contador dinámico de productos encontrados.
- Navegación entre el catálogo y los detalles del producto.
- Consumo de una API REST mediante Fetch.
- Manejo de estados de carga y errores.
- Diseño adaptable a diferentes resoluciones de pantalla.

## API utilizada

[Fake Store API - Products](https://fakestoreapi.com/products)

La API proporciona información sobre los productos, incluyendo su identificador, nombre, precio, categoría, descripción, imagen y calificación.

## Instalación y ejecución

1. Clonar el repositorio.
2. Instalar las dependencias:

   `npm install`

3. Ejecutar el proyecto:

   `npm run dev`

4. Abrir en el navegador:

   `http://localhost:5173`

## Métricas del proyecto

| **Métrica** | **Resultado** |
|---|---|
| Tiempo de desarrollo | Pendiente de registrar |
| Líneas de código | 588 |
| Bundle de producción | Pendiente de medir |
| Lighthouse - Performance | Pendiente de medir |
| Lighthouse - Accessibility | Pendiente de medir |
| Lighthouse - Best Practices | Pendiente de medir |
| Lighthouse - SEO | Pendiente de medir |

## Capturas de pantalla

### Catálogo de productos

<img width="1902" height="880" alt="image" src="https://github.com/user-attachments/assets/5150edc1-03a0-480a-8f61-a67f09521319" />


### Detalle del producto

<img width="1920" height="882" alt="image" src="https://github.com/user-attachments/assets/95404916-d777-46f9-a840-e58ffb9dd869" />


### Lighthouse

<img width="769" height="399" alt="image" src="https://github.com/user-attachments/assets/7c864867-255f-47dc-9da5-32ddae2fc975" />


## MATRIZ COMPARATIVA

| **Característica** | **Resultado** |
|---|---|
| **Framework** | Svelte / SvelteKit |
| **Reactividad** | Actualización automática de la interfaz mediante las runas `$state`, `$derived`, `$props` y `$bindable`. |
| **Renderizado** | Compatible con CSR, SSR y SSG. El proyecto utiliza CSR para cargar el catálogo y la función `load` de SvelteKit para obtener los detalles de los productos. |
| **Bundle (kB)** | Pendiente de medir mediante la compilación de producción. |
| **Lighthouse** | Pendiente de realizar la evaluación de rendimiento, accesibilidad, buenas prácticas y SEO. |
| **Curva de aprendizaje** | Baja-media, debido a su sintaxis sencilla, estructura basada en componentes y sistema de reactividad integrado. |
| **Caso de uso ideal** | Aplicaciones web interactivas, catálogos de productos, tiendas en línea, dashboards y aplicaciones que requieren un buen rendimiento. |

## Framework

Svelte es un framework de desarrollo frontend que utiliza un compilador para transformar sus componentes en código JavaScript optimizado, reduciendo el trabajo necesario durante la ejecución de la aplicación.

SvelteKit complementa a Svelte proporcionando herramientas para el enrutamiento, la carga de datos, el renderizado del lado del servidor y la generación de sitios estáticos.

En este proyecto se utilizan componentes reutilizables, rutas dinámicas, estilos CSS independientes y un sistema de reactividad que permite actualizar automáticamente la interfaz cuando cambian los datos.

## INTEGRANTES

- Edwin Uriel Yepez Lopez
- Alexia Estefania Jaime Martinez
- Yasmin Alejandra Martinez Torres
