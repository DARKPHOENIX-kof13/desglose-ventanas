# Desglose de Ventanas (versión instalable)

Archivos: index.html, manifest.webmanifest, sw.js, jspdf.umd.min.js, carpeta icons/.

## Publicar en GitHub Pages
1. En github.com crea un repositorio (ej. `desglose-ventanas`).
2. Sube TODO el contenido de esta carpeta a la raíz del repositorio (botón Add file > Upload files).
3. Settings > Pages > Source: "Deploy from a branch" > Branch `main` / carpeta `/ (root)` > Save.
4. En 1-2 minutos tendrás: https://TU-USUARIO.github.io/desglose-ventanas/

Nota: GitHub Pages gratis requiere repositorio público (cualquiera con el enlace puede abrir la app y ver el código). Los repositorios privados necesitan un plan de pago.

## Instalar en Android (sin APK)
Abre el enlace en Chrome > menú (3 puntos) > "Instalar aplicación".

## Generar el APK
1. Entra a https://www.pwabuilder.com
2. Pega la URL de GitHub Pages > Start > Package for stores > Android > Generate.
3. Descarga el .zip: trae el APK de prueba (para repartir) y el .aab (para Play Store).
   Para instalar el APK, el probador debe permitir "instalar apps de orígenes desconocidos".

## Actualizar la app
1. Reemplaza index.html en el repositorio con la versión nueva.
2. Cambia `VERSION = "v1"` por `"v2"` en sw.js.
3. Haz commit. Los usuarios reciben la versión nueva al abrir la app con internet. No hay que reinstalar el APK.

## Descarga e instalación desde el enlace
- Al abrir el enlace de GitHub Pages aparece el botón **Instalar app** (Android/Chrome y escritorio). En iPhone muestra la indicación de Añadir a pantalla de inicio.
- La app instalada abre siempre la última versión publicada en GitHub: al actualizar el repositorio, todos los usuarios reciben el cambio al abrirla con internet.

## Botón de APK para Android
1. Genera el APK en pwabuilder.com con la URL de GitHub Pages.
2. En GitHub: Releases > Draft a new release > sube el archivo .apk > Publish release.
3. El botón **Descargar APK (Android)** aparece solo en la página, en los teléfonos Android, apuntando al APK de la última versión publicada.
