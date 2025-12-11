# Spa-Login-Oliva 
Este proyecto es una **Single Page Application (SPA)** que permite el **registro**, **inicio de sesión**, gestión de **sesión interna**, y **logout**, utilizando almacenamiento local del navegador.  

La app está diseñada con una estética minimalista y una estructura clara, respetando los últimos bocetos corregidos.

Diseño General:
La documentación de diseño fue unificada y adaptada a la versión final del proyecto. El estilo sigue un enfoque **simple, legible y coherente**, con elementos centrados y separados adecuadamente para mejorar la experiencia del usuario.

Paleta de Colores

| Elemento | Color | Uso |
|---------|-------|-----|
| Fondo principal | `#F9F5EF` (crema claro) | Fondo general |
| Texto y bordes | `#000000` (negro suave) | Inputs, títulos, labels |
| Errores | Rojo alerta | Validaciones |
| Botones (si aplica) | Negro | Acciones principales |

 Tipografía

Familia: Sans Serif moderna (Inter o similar)
- Títulos: Bold  
- Labels / Subtítulos: Semibold  
- Texto regular: Regular  

La tipografía contribuye a un diseño limpio y geométrico.


Componentes de la Interfaz

Inputs
- Fondo blanco  
- Borde negro fino  
- Tipografía sans serif  
- Espaciado uniforme  
- Errores en rojo  
- Consistentes en todas las pantallas  

 Títulos
- En caja rectangular de borde fino  
- Centrado  
- Visualmente destacado  

 Botones
- Ubicados al **final** del formulario  
- Minimalistas, rectangulares  
- Estilo consistente entre pantallas  

  Estructura de Pantallas

 1. **Pantalla de Bienvenida**
- Permite ir a **Login** o **Registro**

 2. **Registro**
- Campos: Nombre, Email, Usuario, Contraseña  
- Validaciones:
  - Campos obligatorios  
  - Email válido  
  - Usuario único  
  - Contraseña ≥ 6 caracteres  
- Si es correcto → redirige a **Login**

 3. **Inicio de Sesión**
- Verifica usuario y contraseña  
- Muestra errores si corresponde  
- Acceso a sección interna

 4. **Pantalla Privada**
- Requiere sesión activa  
- Muestra: **“Hola, [usuario]”**  
- Espacio reservado para funciones futuras  

 5. **Logout**
- Limpia sesión  
- Muestra despedida  
- Regresa a Bienvenida  

 Flujo Funcional Unificado

1. Bienvenida  
2. Registro o Login  
3. Validación de datos  
4. Acceso a sección privada si la sesión es correcta  
5. Logout  
6. Vuelta a bienvenida  

 Estructura de Carpetas 

/src
/css
styles.css
/img
logo.png
/js
app.js
login.js
register.js
session.js
/views
bienvenida.html
login.html
registro.html
interno.html

index.html
README.md

 Tecnologías Utilizadas

- HTML5  
- CSS3  
- JavaScript  
- LocalStorage  
- Diseño estilo SPA  

 Cómo Ejecutarlo

1. Descargar el repositorio  
2. Abrir `index.html` en el navegador
3.  La app funciona sin necesidad de servidor  

 Autor

**Octavio Oliva**  
4° Informático   
