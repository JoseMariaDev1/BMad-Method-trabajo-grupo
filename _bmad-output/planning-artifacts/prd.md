---
title: Nébula - Catálogo de kachimbas
status: draft
---

# PRD: Nébula - Catálogo de kachimbas

## 0. Propósito del documento

Este documento define los requisitos del catálogo de kachimbas del prototipo Nébula: explorar los modelos, consultar sus características, añadir modelos y retirar modelos existentes. Está dirigido al equipo que diseñe, implemente o valide esta funcionalidad. Se basa en el [brief del producto](./product-brief.md) y en la aplicación Angular existente. Los requisitos describen la experiencia prevista para el prototipo; no implican que exista persistencia de datos ni que el sistema esté desplegado en un bar.

## 1. Visión

Nébula es un prototipo de gestor para bares de kachimbas. Este alcance del producto permite al personal explorar el catálogo del local y consultar de un vistazo las características y el estado de cada kachimba. El catálogo también permite incorporar modelos personalizados y retirar unidades que ya no forman parte de la colección.

La experiencia combina una lista seleccionable, una ilustración central que refleja el modelo elegido y una ficha de especificaciones. El objetivo es que la información de cada unidad sea fácil de distinguir y consultar. En la implementación actual, los modelos iniciales son datos de ejemplo y los cambios se mantienen solo en memoria.

## 2. Usuarios objetivo

### 2.1 Necesidades principales

- **Encargado del bar:** consultar qué modelos hay en la colección y revisar sus especificaciones.
- **Personal de servicio:** identificar visualmente la kachimba seleccionada y consultar rápidamente sus datos principales.
- **Persona que mantiene el catálogo:** añadir modelos personalizados o retirar modelos existentes sin dejar la colección vacía.

### 2.2 Recorridos de usuario

- **UJ-1. Consultar otro modelo.** El usuario ve la colección, selecciona una kachimba distinta y la aplicación actualiza la ilustración central y la ficha con los datos del modelo seleccionado.
- **UJ-2. Añadir una kachimba.** El usuario abre el formulario, introduce nombre, material, tipo de purga y altura, elige un color temático y guarda. La nueva kachimba aparece en la colección y queda seleccionada.
- **UJ-3. Retirar una kachimba.** El usuario retira el modelo seleccionado. Si hay más de uno, desaparece de la colección y se selecciona otro; si solo queda uno, la operación no se permite.

## 3. Glosario

- **Kachimba:** unidad del catálogo del bar con identificador, nombre, especificaciones, estado y atributos visuales.
- **Colección:** conjunto de kachimbas que se muestran en el catálogo.
- **Modelo seleccionado:** kachimba cuyos datos se muestran actualmente en la ilustración y la ficha.
- **Color temático:** color asociado a una kachimba y utilizado para distinguir su presentación visual.
- **Purga:** tipo de sistema de expulsión de humo indicado en las especificaciones de una kachimba.
- **Estanqueidad:** porcentaje mostrado como indicador de sellado de una kachimba.

## 4. Funcionalidades y requisitos

### 4.1 Exploración de modelos

El usuario puede recorrer la colección seleccionando un modelo en la lista. El modelo seleccionado debe quedar visualmente identificado y sus datos deben alimentar las vistas de detalle. La interfaz actual también ofrece navegación entre modelos.

#### FR-1: Seleccionar una kachimba

El usuario puede seleccionar cualquier kachimba que aparezca en la colección.

**Criterios de aceptación:**

- Cada elemento de la colección identifica el nombre de la kachimba.
- Al seleccionar un elemento, este se muestra como activo.
- La ilustración central y la ficha de especificaciones corresponden al modelo seleccionado.
- La selección mediante los controles de navegación disponibles también actualiza el modelo activo.
- Si la colección contiene un solo modelo, la navegación no produce un índice inválido ni deja la vista sin un modelo seleccionado.

### 4.2 Ilustración central reactiva

La vista principal muestra una ilustración SVG grande de la kachimba seleccionada. Su presentación usa los atributos visuales configurados para ese modelo, incluido su color temático.

#### FR-2: Representar visualmente el modelo seleccionado

El sistema muestra la ilustración central con los colores temáticos del modelo activo.

**Criterios de aceptación:**

- Al cambiar la selección, la ilustración refleja el color temático del nuevo modelo.
- La ilustración se mantiene asociada al modelo seleccionado mientras se consultan sus especificaciones.
- Al añadir una kachimba con un color personalizado, dicho color se utiliza en la representación de la nueva kachimba.

**Fuera de alcance de este requisito:** modelado 3D, reproducción física exacta del producto y generación de una ilustración única basada en fotografías.

### 4.3 Ficha de calibración

La ficha muestra información relevante de la kachimba seleccionada para facilitar su identificación y consulta.

#### FR-3: Consultar especificaciones del modelo

El usuario puede consultar en la ficha los atributos asociados a la kachimba seleccionada.

**Criterios de aceptación:**

- La ficha presenta la altura, el peso, el tipo de purga, el difusor y el porcentaje de estanqueidad del modelo activo.
- Al cambiar de modelo, los valores mostrados cambian para corresponder con el nuevo modelo.
- La interfaz presenta el porcentaje de estanqueidad como porcentaje.
- Los datos de especificaciones son valores de catálogo o de demostración; el prototipo no los mide automáticamente.

### 4.4 Alta de una kachimba

El usuario puede abrir un formulario para incorporar un modelo personalizado a la colección.

#### FR-4: Añadir una kachimba personalizada

El usuario puede crear una kachimba indicando nombre, material, purga, altura y color temático.

**Criterios de aceptación:**

- El formulario permite introducir el nombre y la altura y seleccionar o indicar el material, el tipo de purga y el color mediante un selector de color.
- No se guarda una kachimba cuyo nombre esté vacío o contenga únicamente espacios.
- Tras guardar correctamente, la nueva kachimba aparece en la colección y queda seleccionada.
- La ilustración central utiliza el color elegido.
- La nueva kachimba tiene un identificador distinto al de las demás entradas de la colección.
- Si el usuario cierra el formulario sin guardar, no se añade ninguna kachimba.

**Nota sobre el prototipo actual:** algunos valores no solicitados en el formulario, como el peso y otras características de calibración, reciben valores iniciales de demostración. Este PRD no define esos valores como datos proporcionados por el usuario.

### 4.5 Retirada de una kachimba

El usuario puede retirar el modelo seleccionado de la colección sin dejarla vacía.

#### FR-5: Retirar el modelo seleccionado

El usuario puede retirar una kachimba cuando la colección contiene más de una.

**Criterios de aceptación:**

- Si existen dos o más kachimbas, la acción retira el modelo seleccionado de la colección.
- Tras la retirada, queda seleccionada una kachimba que todavía pertenece a la colección.
- Si solo existe una kachimba, la acción no la elimina y la colección conserva ese modelo.
- El contador de modelos y las vistas vinculadas a la colección reflejan el resultado de la operación.

## 5. No objetivos

- Gestionar clientes, pedidos, mesas, reservas o pagos del bar.
- Crear cuentas de usuario, roles o permisos multiusuario.
- Guardar el catálogo en una base de datos o sincronizarlo entre dispositivos.
- Integrarse con sensores físicos para medir temperatura, estanqueidad o nivel de agua.
- Garantizar que los cambios sobrevivan a una recarga o al cierre de la aplicación.
- Convertir el prototipo en un sistema de inventario comercial completo.

## 6. Alcance del prototipo

### 6.1 Incluido

- Explorar y seleccionar modelos de una colección.
- Mostrar la kachimba seleccionada mediante una ilustración SVG temática.
- Consultar altura, peso, purga, difusor y porcentaje de estanqueidad.
- Añadir modelos personalizados con nombre, material, purga, altura y color.
- Retirar modelos seleccionados siempre que quede al menos uno.

### 6.2 No incluido

- Persistencia de los cambios; el estado actual vive en memoria.
- Catálogo compartido entre varios trabajadores o dispositivos.
- Importación masiva, exportación o búsqueda avanzada.
- Validación de los datos técnicos frente a mediciones del equipo real.

## 7. Señales de éxito

Estas señales sirven para verificar el prototipo y no representan resultados de pruebas ya realizadas:

- **SM-1:** En una prueba guiada, el usuario puede seleccionar cada modelo de ejemplo y ver su ficha e ilustración correspondientes. Valida FR-1, FR-2 y FR-3.
- **SM-2:** En una prueba guiada, el usuario puede completar el formulario con datos válidos y ver la nueva kachimba seleccionada en la colección. Valida FR-4.
- **SM-3:** En una prueba guiada, el usuario puede retirar un modelo cuando hay varios, y la aplicación impide que se retire el último. Valida FR-5.
- **SM-4:** La compilación de producción del proyecto finaliza correctamente después de implementar cambios relacionados con este alcance.

## 8. Preguntas abiertas

1. ¿La altura, el material y el tipo de purga deben elegirse de listas cerradas o admiten texto libre?
2. ¿El peso debe solicitarse al crear una kachimba o se seguirá usando un valor inicial de demostración?
3. ¿Debe solicitarse confirmación antes de retirar una kachimba?
4. ¿Qué información mínima necesita el personal del bar para diferenciar modelos similares?
5. Si el producto pasa del prototipo a un piloto real, ¿qué mecanismo de persistencia y acceso compartido necesita el local?

## 9. Supuestos

- **A-1:** El alcance solicitado en este PRD es el catálogo y la ficha de kachimbas, no el resto de funcionalidades del dashboard.
- **A-2:** La colección inicial de la aplicación es ficticia y se usa para mostrar el prototipo.
- **A-3:** Los cambios hechos en la aplicación actual son temporales y no persisten al recargar.
- **A-4:** El color temático es un dato visual, no una característica técnica de la kachimba.
- **A-5:** Los criterios de éxito son pruebas pendientes, salvo que se documenten resultados de su ejecución.
