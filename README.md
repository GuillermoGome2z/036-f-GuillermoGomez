# 🍹 Cocktail App - UMG

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Aplicación web moderna para explorar cócteles premium**

[Demo en Vivo](#) | [Reportar Bug](https://github.com/GuillermoGome2z/036-f-GuillermoGomez/issues) | [Solicitar Feature](https://github.com/GuillermoGome2z/036-f-GuillermoGomez/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [API](#-api)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Despliegue](#-despliegue)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 🎯 Acerca del Proyecto

**Cocktail App** es una aplicación web interactiva desarrollada con React, TypeScript y Vite que consume la API de [TheCocktailDB](https://www.thecocktaildb.com/) para mostrar una colección completa de cócteles con información detallada, imágenes de alta calidad y recetas paso a paso.

Este proyecto fue desarrollado como parte del examen final del curso de Desarrollo Web de la Universidad Mariano Gálvez de Guatemala.

### 👨‍🎓 Información del Estudiante

- **Nombre:** Guillermo Jose Gomez Aguilera
- **Carnet:** 1790-22-16429
- **Universidad:** Universidad Mariano Gálvez de Guatemala
- **Curso:** Desarrollo Web
- **Fecha:** Noviembre 2025

---

## ✨ Características

- ✅ **Página de Inicio Atractiva** con información del estudiante y logo institucional
- ✅ **Navegación Intuitiva** con topbar responsive (Inicio, Acerca de, Consumo API)
- ✅ **Catálogo de Cócteles** con mínimo 15 elementos por página
- ✅ **Tarjetas Premium** con imágenes en miniatura y efectos hover elegantes
- ✅ **Modal Interactivo** con información detallada de cada cóctel
- ✅ **Sistema de Paginación** inteligente para navegar entre resultados
- ✅ **Diseño Responsive** optimizado para móviles, tablets y escritorio
- ✅ **Animaciones Suaves** y transiciones fluidas
- ✅ **Gradientes Premium** y paleta de colores moderna
- ✅ **Carga Asíncrona** con indicadores de loading
- ✅ **Manejo de Errores** con mensajes amigables

---

## 🚀 Tecnologías

### Core
- **React 19.2.0** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript 5.9.3** - Superset tipado de JavaScript
- **Vite 7.2.2** - Build tool ultrarrápido

### Estilos
- **CSS3** con Grid y Flexbox
- **Animaciones CSS** personalizadas
- **Gradientes** y efectos visuales avanzados

### API
- **Fetch API** para consumo de servicios REST
- **TheCocktailDB API** para datos de cócteles

### Herramientas
- **ESLint** para linting de código
- **Git** para control de versiones
- **Netlify** para despliegue continuo

---

## 📦 Instalación

### Prerrequisitos

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/GuillermoGome2z/036-f-GuillermoGomez.git
cd 036-f-GuillermoGomez
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173/
```

---

## 💻 Uso

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Linting
npm run lint         # Ejecuta ESLint
```

### Navegación

1. **Inicio** - Página principal con información del estudiante
2. **Acerca de** - Detalles del proyecto y tecnologías utilizadas
3. **Consumo API** - Catálogo completo de cócteles con paginación

### Interacción

- Haz clic en cualquier tarjeta de cóctel para ver sus detalles completos
- Usa los botones de paginación para navegar entre páginas
- El modal se cierra haciendo clic en la X o fuera del contenido

---

## 🌐 API

### TheCocktailDB

**Endpoint Principal:**
```
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
```

**Endpoint de Detalles:**
```
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}
```

### Servicios Implementados

```typescript
// Obtener lista de cócteles
getCocktails(): Promise<Cocktail[]>

// Obtener detalles de un cóctel específico
getCocktailDetail(id: string): Promise<CocktailDetail>
```

---

## 📁 Estructura del Proyecto

```
036-f-GuillermoGomez/
├── public/
│   ├── images/          # Imágenes públicas
│   └── vite.svg
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   ├── CocktailCard.tsx
│   │   ├── CocktailCard.css
│   │   ├── Pagination.tsx
│   │   ├── Pagination.css
│   │   ├── CocktailModal.tsx
│   │   └── CocktailModal.css
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Inicio.tsx
│   │   ├── Inicio.css
│   │   ├── AcercaDe.tsx
│   │   ├── AcercaDe.css
│   │   ├── Consumo.tsx
│   │   └── Consumo.css
│   ├── services/        # Servicios y consumo de API
│   │   └── cocktailService.ts
│   ├── App.tsx          # Componente principal
│   ├── App.css
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── netlify.toml         # Configuración de Netlify
└── README.md
```

---

## 🚀 Despliegue

### Netlify (Recomendado)

1. **Conectar con GitHub**
   - Ir a [Netlify](https://app.netlify.com/)
   - Clic en "Add new site" → "Import an existing project"
   - Seleccionar GitHub y autorizar
   - Elegir el repositorio `036-f-GuillermoGomez`

2. **Configuración automática**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Netlify construirá y desplegará automáticamente

### Build Manual

```bash
npm run build
# Los archivos estarán en la carpeta dist/
```

---

## 👨‍💻 Autor

**Guillermo Jose Gomez Aguilera**

- Carnet: 1790-22-16429
- GitHub: [@GuillermoGome2z](https://github.com/GuillermoGome2z)
- Universidad: Universidad Mariano Gálvez de Guatemala

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- [TheCocktailDB](https://www.thecocktaildb.com/) por la API gratuita
- [React](https://react.dev/) por la excelente documentación
- [Vite](https://vite.dev/) por la velocidad de desarrollo
- Universidad Mariano Gálvez de Guatemala

---

<div align="center">

**Desarrollado con ❤️ por Guillermo Gomez**

⭐ ¡Dale una estrella si te gustó el proyecto!

</div>
