# Arquitectura: Nébula

**Estado:** Descripción de la implementación actual  
**Fecha:** 2026-10-28  
**Producto:** Gestor de kachimbas para bares

## 1. Propósito y alcance

Este documento describe cómo está construido el prototipo Nébula y cómo se relacionan sus principales partes. Complementa el [brief del producto](./product-brief.md) y el [PRD del catálogo](./prd.md).

La arquitectura documentada es la que existe en el repositorio en la fecha indicada: una aplicación Angular de página única, sin servidor propio ni base de datos. No describe funcionalidades futuras como si ya estuvieran implementadas.

## 2. Contexto del sistema

```text
Usuario
  │ Interacción con controles, formularios y navegación
  ▼
Navegador web
  ├── src/main.ts
  │     └── inicia la aplicación Angular
  ├── AppComponent (src/app/app.component.ts)
  │     ├── mantiene los datos de demostración y el estado en memoria
  │     ├── ejecuta las acciones del usuario
  │     └── actualiza la vista mediante ChangeDetectorRef
  ├── Plantilla Angular (src/app/app.component.html)
  │     └── representa el panel, las tarjetas, los controles y los SVG
  └── styles.css
        └── define los estilos globales de la interfaz
```

La aplicación se ejecuta en el navegador. El estado de la colección, el inventario, las tareas y la sesión reside en la instancia activa del componente; no se envía a una API ni se guarda de forma duradera.

## 3. Tecnologías y configuración

- **Angular 21**, con componentes standalone y arranque mediante `bootstrapApplication`.
- **TypeScript 5.9**, con opciones estrictas habilitadas en TypeScript y en las plantillas Angular.
- **HTML y SVG** para la estructura de la interfaz y la ilustración reactiva de la kachimba.
- **CSS global** en `styles.css`.
- **CommonModule** importado por el componente raíz para las directivas comunes de Angular.
- **Angular CLI** para el servidor local y las compilaciones de desarrollo y producción.

La configuración de compilación está en `angular.json`; la configuración de TypeScript está en `tsconfig.json` y `tsconfig.app.json`. El punto de entrada del navegador es `src/main.ts`.

## 4. Estructura de la aplicación

### 4.1 Arranque

`src/main.ts` llama a `bootstrapApplication(AppComponent)`. Si el arranque falla, el error se escribe en la consola. No se configuran en ese punto rutas, servicios HTTP, interceptores ni proveedores de una API.

### 4.2 Componente raíz

`src/app/app.component.ts` define `AppComponent`, un componente standalone que reúne la lógica de la demostración. La clase mantiene:

- La colección de kachimbas y el índice seleccionado.
- El estado de inspección y los puntos interactivos.
- El temporizador y los valores simulados de una sesión.
- Las tareas de mantenimiento vinculadas a cada kachimba.
- La lista de consumibles y sus cantidades de demostración.
- El estado del formulario para añadir una kachimba.

Los tipos `HookahItem`, `CareTask`, `HotspotInfo` e `InventoryItem` describen las estructuras principales. No hay un servicio de dominio separado: las operaciones de selección, alta, retirada, cuidado, sesión e inventario están implementadas en el componente.

### 4.3 Plantilla e interfaz

`src/app/app.component.html` es la plantilla del componente raíz. Organiza el dashboard en navegación superior y paneles laterales alrededor de una ilustración SVG central. Usa vinculaciones de Angular para mostrar datos, aplicar clases y estilos dinámicos, iterar colecciones y atender eventos de botones y formularios.

La ilustración SVG obtiene sus atributos visuales del modelo seleccionado; por eso la selección actualiza la presentación sin cargar una imagen distinta desde un servidor.

### 4.4 Estilos

`styles.css` contiene los estilos globales de la aplicación, incluidos el diseño del cockpit, las tarjetas, los estados visuales y los elementos adaptables. Angular CLI incorpora esa hoja en la compilación según `angular.json`.

## 5. Modelo de datos en memoria

| Tipo | Campos y responsabilidad principales |
|---|---|
| `HookahItem` | Identidad, nombre, material, altura, peso, purga, difusor, estado, sesiones, colores, estanqueidad, nivel de agua y tareas de cuidado. |
| `CareTask` | Identidad y descripción de una tarea, periodo mostrado y estado de finalización. |
| `HotspotInfo` | Identidad y contenido de una tarjeta de inspección de la ilustración. |
| `InventoryItem` | Identidad y descripción de un consumible, cantidad, unidad y umbral de aviso. |

La colección y el inventario comienzan con valores escritos en el código. Añadir, retirar o modificar elementos cambia los arrays y objetos de la instancia del componente. No existe actualmente un esquema persistido, migración, API ni sincronización. Una recarga de la página vuelve a cargar los valores iniciales.

## 6. Flujos de interacción principales

### 6.1 Seleccionar una kachimba

1. El usuario elige un elemento de la colección o usa los controles de navegación.
2. `selectHookah`, `nextHookah` o `prevHookah` cambia `selectedIndex`.
3. La plantilla vuelve a representar la ficha y los elementos visuales ligados a `currentHookah`.

### 6.2 Añadir una kachimba

1. El usuario abre el formulario y completa los campos disponibles.
2. `saveNewHookah` valida que el nombre no esté vacío, crea un `HookahItem` en memoria y lo añade a `hookahs`.
3. La nueva entrada queda seleccionada y su color alimenta la ilustración y los elementos temáticos.
4. Los atributos no solicitados en el formulario reciben valores iniciales de demostración.

### 6.3 Retirar una kachimba

1. `deleteCurrentHookah` no realiza cambios si la colección tiene una sola entrada.
2. Si hay más de una, elimina la entrada del índice seleccionado.
3. Se selecciona un índice restante para conservar una kachimba activa.

### 6.4 Sesión simulada

El componente mantiene el tiempo y los valores de la sesión en propiedades locales. Un intervalo actualiza el contador y solicita detección de cambios. Las métricas térmicas y el estado de carbones se calculan para la demostración; no proceden de sensores. El intervalo se limpia al finalizar, reiniciar o destruir el componente.

## 7. Gestión del estado y actualización de la vista

El componente mantiene estado mutable en memoria. Sus métodos actualizan propiedades u objetos y la plantilla consume esos valores con interpolaciones y vinculaciones. Se inyecta `ChangeDetectorRef` y se llama a `detectChanges()` en varias interacciones y en el temporizador para actualizar la vista de forma inmediata.

No hay una biblioteca de estado, almacenamiento del navegador ni mecanismo de recuperación tras una recarga. Tampoco hay aislamiento de datos por local o por usuario.

## 8. Ejecución y compilación

- `npm start` inicia el servidor local configurado por Angular CLI.
- `npm run build` ejecuta la compilación de producción.
- La configuración de producción habilita optimización y nombres de salida con hash.
- La configuración de desarrollo deshabilita la optimización y habilita mapas de fuente.
- La aplicación es una interfaz de navegador; esta configuración no define un backend ni una base de datos.

## 9. Límites y decisiones actuales

- **Prototipo de interfaz:** los datos iniciales son ejemplos y no representan inventario real de un establecimiento.
- **Sin persistencia:** cualquier modificación de la colección o del inventario se pierde al recargar la página.
- **Sin servicios externos:** no se observan clientes HTTP, API, autenticación, permisos ni sincronización.
- **Métricas simuladas:** cronómetro, temperatura, desgaste de carbón y valores de calibración no son mediciones de hardware.
- **Componente concentrado:** el estado y la lógica de varias funciones viven en un único componente raíz; adecuado para demostrar el flujo actual, pero limita la separación y reutilización al crecer el producto.

## 10. Evolución arquitectónica pendiente

Estas son necesidades posibles si el prototipo se prepara para un piloto; no forman parte de la implementación actual:

1. Validar los flujos con personal de un bar y confirmar qué datos necesita cada turno.
2. Acordar si los datos se compartirán entre usuarios y dispositivos.
3. Diseñar persistencia y una API solo cuando se definan los requisitos de acceso, sincronización y recuperación de datos.
4. Separar responsabilidades en componentes y servicios cuando la complejidad o el uso compartido del estado lo justifiquen.
5. Añadir pruebas automatizadas para los criterios de aceptación del [PRD](./prd.md), además de validar manualmente la experiencia.
