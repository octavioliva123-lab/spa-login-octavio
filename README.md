# Spa-Login-Oliva — Octavio Web App

## Descripción del proyecto

**Spa-Login-Oliva (Octavio Web App)** es una **Single Page Application (SPA)** desarrollada en JavaScript puro que permite a los usuarios **registrarse**, **iniciar sesión**, **mantener una sesión activa** y **cerrar sesión**, todo sin recargar la página.

La aplicación está pensada como una base sólida para una web app con autenticación, priorizando una **experiencia de usuario clara**, **flujo de navegación coherente**, **validaciones completas** y una **estructura de código ordenada y escalable**.

---

## Funcionalidades principales

* Registro de usuarios con validaciones
* Inicio de sesión con **usuario o email**
* Manejo de sesión activa
* Persistencia de datos mediante **LocalStorage**
* Acceso protegido a la zona privada
* Cierre de sesión con confirmación
* Navegación interna tipo SPA (sin recarga)
* Mensajes de error integrados en la interfaz
* Diseño responsive (desktop y mobile)
* Animaciones y transiciones suaves entre pantallas

---

## Flujo de usuario

1. Pantalla de bienvenida
2. Registro o inicio de sesión
3. Validación de datos ingresados
4. Acceso a la zona privada
5. Cierre de sesión
6. Retorno a la pantalla de bienvenida

---

## Pantallas y apartados

### Pantalla de Bienvenida

* Presentación general de la aplicación
* Punto de entrada a login o registro

### Registro

* Campos:

  * Usuario
  * Email
  * Contraseña
  * Confirmación de contraseña
* Validaciones:

  * Campos obligatorios
  * Email válido
  * Usuario y email únicos
  * Contraseña mínima de 6 caracteres
* Registro exitoso → acceso directo a la zona privada

### Inicio de Sesión

* Inicio con **usuario o email**
* Verificación contra datos almacenados
* Mensajes de error claros en caso de datos incorrectos

### Zona Privada

* Acceso restringido a usuarios autenticados
* Mensaje personalizado: **“Hola, [usuario]”**
* Espacio reservado para futuras funcionalidades

### Cierre de Sesión

* Modal de confirmación
* Limpieza de sesión activa
* Redirección a la pantalla de bienvenida

---

## Manejo de sesión y persistencia

La aplicación utiliza **LocalStorage** para:

* Guardar usuarios registrados
* Mantener la sesión activa
* Restaurar la sesión al recargar la página

Si no existe una sesión activa, el acceso a la zona privada queda bloqueado automáticamente.

---

## Diseño visual

* Estilo minimalista y moderno
* Jerarquía visual clara
* Componentes centrados
* Animaciones sutiles para mejorar la experiencia de usuario

### Paleta de colores

| Elemento        | Color              | Uso                      |
| --------------- | ------------------ | ------------------------ |
| Fondo principal | `#F9F5EF`          | Fondo general            |
| Paneles         | `#1E1E1E`          | Contenedores principales |
| Texto           | Blanco / Negro     | Contenido                |
| Botón principal | Azul marino / Rojo | Acciones                 |
| Errores         | Rojo               | Validaciones             |

### Tipografía

* Sans Serif moderna (Inter o similar)
* Títulos en negrita
* Texto legible y consistente

---

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* LocalStorage
* Arquitectura SPA

---

## Estructura del proyecto

```
/CSS
  styles.css
/JS
  script.js
/Imagenes
  logo.png

index.html
README.md
```

---

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio
2. Abrir el archivo `index.html` en un navegador moderno
3. No requiere servidor ni dependencias externas

---

## Capturas de pantalla sugeridas

Se recomienda incluir capturas de:

1. Pantalla de bienvenida
2. Formulario de registro
3. Formulario de inicio de sesión
4. Zona privada con sesión activa
5. Modal de cierre de sesión

---

## Autor

**Octavio Oliva**
Proyecto académico – Web Application SPA

---

## Estado del proyecto

Proyecto funcional y listo como base para futuras ampliaciones.



