# MG - Cortes y Dobles SAS (Website Industrial)

Este es el repositorio oficial de la página web de **Cortes y Dobles MG SAS**, una empresa metalmecánica líder en Santander, Colombia, especializada en corte y doblado CNC de lámina.

## 🚀 Tecnologías Principales

- **Astro 5**: Framework de alto rendimiento orientado al contenido.
- **Tailwind CSS**: Para un diseño industrial, moderno y responsivo.
- **React**: Utilizado en componentes interactivos (Navbar).
- **Astro Content Collections**: Gestión estructurada de productos y servicios con validación de esquemas (Zod).

## ✨ Características Destacadas

- **SEO Industrial Técnico**: Estructura de URLs optimizada para captar tráfico en Santander (Girón, Bucaramanga).
- **Conversión Directa**: Formulario de cotización técnica con lógica de urgencia y enlace dinámico a WhatsApp.
- **Performance Extremo**: Arquitectura SSG (Static Site Generation) para tiempos de carga < 1s.
- **Schema.org**: Implementación de JSON-LD LocalBusiness para mejorar el posicionamiento en Google Maps.
- **Dark/Light Mode**: Soporte nativo para modos claro y oscuro.

## 🛠️ Instalación y Desarrollo

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/cortes-dobles-mg.git
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env` en la raíz y añade:
    ```env
    PUBLIC_WHATSAPP_PHONE=573177617494
    PUBLIC_CONTACT_EMAIL=facturacion@cortesydoblecesmg.com
    PUBLIC_SITE_URL=https://tu-dominio.com
    ```

4.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```

## 📦 Despliegue

Para generar la versión de producción:
```bash
npm run build
```
El contenido estático se generará en la carpeta `dist/`, listo para ser subido a cualquier servidor web (Nginx, Apache, Vercel, Netlify).

## 📂 Estructura de Contenidos

Los productos y soluciones se gestionan desde `src/content/products/`. Para añadir un nuevo producto, crea un archivo `.md` siguiendo el esquema definido en `src/content/config.ts`.

---

Desarrollado con enfoque en **Conversión Industrial** y **Velocidad de Respuesta**.
