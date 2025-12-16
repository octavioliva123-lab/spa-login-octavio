Etapa 1 – Diseño de la SPA
 Objetivo

Diseñar la estructura visual y funcional de una aplicación web SPA antes de su implementación, definiendo pantallas, flujo de usuario y criterios de diseño.

 Diseño general

La documentación de diseño fue unificada y adaptada a la versión final del proyecto.
El estilo sigue un enfoque simple, legible y coherente, con elementos centrados y correctamente espaciados para mejorar la experiencia del usuario.

 Paleta de colores
Elemento	Color	Uso
Fondo principal	#F9F5EF (crema claro)	Fondo general
Texto y bordes	#000000 (negro suave)	Inputs, títulos, labels
Errores	Rojo alerta	Validaciones
Botones	Negro	Acciones principales
 Tipografía

Familia: Sans Serif moderna (Inter o similar)

Títulos: Bold

Labels / subtítulos: Semibold

Texto regular: Regular

La tipografía contribuye a un diseño limpio, geométrico y fácil de leer.

 Componentes de la interfaz
Inputs

Fondo blanco

Borde negro fino

Tipografía sans serif

Espaciado uniforme

Mensajes de error en rojo

Consistentes en todas las pantallas

Títulos

Contenidos dentro de cajas rectangulares con borde fino

Centrados

Visualmente destacados

Botones

Ubicados al final de los formularios

Estilo minimalista y rectangular

Diseño consistente entre pantallas

🖥️ Estructura de pantallas
1. Pantalla de Bienvenida

Permite navegar a Login o Registro

2. Registro

Campos:

Nombre

Email

Usuario

Contraseña

Validaciones:

Campos obligatorios

Email válido

Usuario único

Contraseña mínima de 6 caracteres

Si el registro es correcto → redirige a Login

3. Inicio de Sesión

Permite iniciar sesión con usuario o email

Verifica credenciales contra datos almacenados

Muestra mensajes de error si corresponde

Acceso a sección interna

4. Pantalla Privada

Requiere sesión activa

Muestra: “Hola, [usuario]”

Espacio reservado para funcionalidades futuras (Etapa 3)

5. Logout

Limpia la sesión activa

Muestra confirmación

Redirige a Bienvenida

 Flujo funcional unificado

Bienvenida

Registro o Login

Validación de datos

Acceso a sección privada

Logout

Regreso a Bienvenida

 Etapa 2 – Construcción de la SPA
Objetivo

Implementar la SPA diseñada en la Etapa 1, desarrollando una aplicación funcional, responsive y sin recarga de página, incorporando validaciones, manejo de sesión y persistencia de datos.

 Funcionalidades implementadas

Registro de usuarios con validaciones completas

Inicio de sesión con usuario o email

Manejo de sesión activa

Persistencia de sesión mediante LocalStorage

Protección de acceso a la zona privada

Redirecciones automáticas según estado de sesión

Logout con confirmación

Mensajes de error y éxito integrados en la interfaz (sin alert)

SPA real (sin recarga)

 Manejo de sesión y persistencia

La aplicación utiliza LocalStorage para:

Almacenar usuarios registrados

Guardar la sesión activa

Mantener la sesión al recargar la página

Si no existe una sesión activa, el usuario es redirigido automáticamente a la pantalla de bienvenida.

 Arquitectura

SPA basada en un único archivo HTML

Navegación interna mediante JavaScript

Manipulación del DOM para mostrar y ocultar vistas

Separación clara de responsabilidades:

HTML → estructura

CSS → estilos

JavaScript → lógica

📁 Estructura de carpetas
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

 Tecnologías utilizadas

HTML5

CSS3

JavaScript

LocalStorage

Arquitectura SPA

 Cómo ejecutar el proyecto

Descargar o clonar el repositorio

Abrir el archivo index.html en un navegador web moderno

No requiere servidor ni instalación adicional

 Documentación técnica

La documentación técnica del proyecto se encuentra en la carpeta /Documentación, incluyendo:

Explicación de la arquitectura

Funciones principales

Manejo de sesión

Justificación de decisiones técnicas

 Autor

Octavio Oliva
Proyecto académico – Intensificación 2025
