# Spa-Login-Oliva — Octavio Web App

## 1. Descripción general

**Spa-Login-Oliva** es una **Single Page Application (SPA)** desarrollada como proyecto académico para la materia **Intensificación – Diciembre 2025**.
La aplicación permite el **registro de usuarios**, el **inicio de sesión**, la **gestión de una sesión activa** y el **cierre de sesión**, utilizando exclusivamente tecnologías del lado del cliente.

El proyecto se desarrolló en etapas, comenzando por el diseño conceptual y continuando con la implementación funcional, respetando criterios de claridad visual, coherencia de interfaz y correcta organización del código.

---

## 2. Etapa 1 – Diseño de la aplicación

### 2.1 Objetivo de la etapa

Definir la estructura visual y funcional de la aplicación antes de su implementación, estableciendo:

* Pantallas necesarias
* Flujo de navegación
* Estilo visual
* Componentes reutilizables

---

### 2.2 Diseño general

El diseño de la aplicación sigue un enfoque **minimalista, legible y coherente**, priorizando:

* Jerarquía visual clara
* Elementos centrados
* Separación adecuada entre componentes
* Consistencia entre pantallas

La documentación de diseño fue unificada y ajustada a la versión final del proyecto, incorporando las correcciones realizadas durante la devolución docente.

---

### 2.3 Paleta de colores

| Elemento         | Color                   | Uso principal                  |
| ---------------- | ----------------------- | ------------------------------ |
| Fondo principal  | `#F9F5EF` (crema claro) | Fondo general de la aplicación |
| Texto y bordes   | `#000000` (negro suave) | Títulos, inputs y etiquetas    |
| Estados de error | Rojo de alerta          | Mensajes de validación         |
| Botones          | Negro                   | Acciones principales           |

---

### 2.4 Tipografía

**Familia tipográfica:** Sans Serif moderna (Inter o similar)

* Títulos: Bold
* Subtítulos y labels: Semibold
* Texto general: Regular

La tipografía refuerza un diseño limpio, geométrico y fácil de leer.

---

### 2.5 Componentes de la interfaz

#### Inputs

* Fondo blanco
* Borde negro fino
* Tipografía sans serif
* Espaciado uniforme
* Mensajes de error en color rojo
* Estilo consistente en todas las pantallas

#### Títulos

* Contenidos dentro de cajas rectangulares con borde fino
* Centrados
* Visualmente destacados

#### Botones

* Ubicados al final de los formularios
* Diseño rectangular y minimalista
* Estilo consistente en toda la aplicación

---

### 2.6 Estructura de pantallas

1. **Pantalla de Bienvenida**
   Permite acceder a las opciones de inicio de sesión o registro.

2. **Pantalla de Registro**
   Campos:

   * Nombre
   * Email
   * Usuario
   * Contraseña

   Validaciones:

   * Campos obligatorios
   * Email con formato válido
   * Usuario único
   * Contraseña con un mínimo de 6 caracteres

   Si el registro es correcto, el usuario es redirigido al login.

3. **Pantalla de Inicio de Sesión**

   * Permite iniciar sesión con usuario o email
   * Verifica credenciales contra los datos almacenados
   * Muestra mensajes de error cuando corresponde

4. **Pantalla Privada**

   * Requiere una sesión activa
   * Muestra el mensaje: “Hola, [usuario]”
   * Espacio reservado para funcionalidades futuras

5. **Pantalla de Logout**

   * Cierra la sesión activa
   * Redirige a la pantalla de bienvenida

---

### 2.7 Flujo funcional unificado

1. Bienvenida
2. Registro o inicio de sesión
3. Validación de datos
4. Acceso a la sección privada
5. Cierre de sesión
6. Regreso a bienvenida

---

## 3. Etapa 2 – Construcción de la SPA

### 3.1 Objetivo de la etapa

Implementar la aplicación diseñada en la Etapa 1 como una **SPA funcional**, sin recarga de página, incorporando validaciones, manejo de sesión y persistencia de datos.

---

### 3.2 Funcionalidades implementadas

* Registro de usuarios con validaciones completas
* Inicio de sesión mediante usuario o email
* Manejo de sesión activa
* Persistencia de datos mediante LocalStorage
* Protección de acceso a la zona privada
* Redirección automática según estado de sesión
* Logout con confirmación
* Navegación interna sin recarga de página
* Diseño responsive (desktop y mobile)
* Mensajes de error y éxito integrados en la interfaz (sin uso de `alert`)

---

### 3.3 Manejo de sesión y persistencia

La aplicación utiliza **LocalStorage** para:

* Almacenar los usuarios registrados
* Guardar la sesión activa
* Mantener la sesión al recargar la página

Si no existe una sesión activa, el acceso a la sección privada es bloqueado y el usuario es redirigido automáticamente a la pantalla de bienvenida.

---

### 3.4 Arquitectura de la aplicación

* Aplicación SPA basada en HTML, CSS y JavaScript puro
* Navegación interna mediante manipulación del DOM
* Separación clara de responsabilidades:

  * HTML: estructura
  * CSS: estilos
  * JavaScript: lógica de la aplicación

---

## 4. Estructura del proyecto

```
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
```

---

## 5. Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Arquitectura SPA

---

## 6. Ejecución del proyecto

1. Descargar o clonar el repositorio
2. Abrir el archivo `index.html` en un navegador web moderno
3. No se requiere servidor ni instalación adicional

---

## 7. Documentación técnica

La documentación técnica del proyecto se encuentra en la carpeta **/Documentación**, donde se detallan:

* Arquitectura general
* Funciones principales
* Manejo de sesión
* Decisiones técnicas relevantes

---

## 8. Autor

Octavio Oliva
Proyecto académico — Intensificación 2025

---

## 9. Estado del proyecto

* Etapa 1 – Diseño: Finalizada
* Etapa 2 – Construcción de la SPA: Finalizada
* Etapa 3 – Espacio de trabajo avanzado: Pendiente
