# Épicas e historias: Nébula

**Estado:** Validado 
**Base:** [PRD del catálogo](../planning-artifacts/prd.md)

## Épica E-1: Gestionar el catálogo de kachimbas

Como personal de un bar de kachimbas, quiero consultar y mantener el catálogo para identificar rápidamente cada modelo y sus características.

### US-1: Explorar modelos

**Historia:** Como usuario, quiero seleccionar y recorrer los modelos para consultar cada kachimba.

**Criterios de aceptación:**
- Puedo seleccionar un modelo de la lista o navegar entre modelos.
- El modelo activo queda identificado y sus datos se muestran en pantalla.

**Estado:** Implementada en el prototipo; validación formal pendiente. *(PRD: FR-1)*

### US-2: Consultar ilustración y especificaciones

**Historia:** Como usuario, quiero ver la ilustración y la ficha del modelo activo para reconocerlo y consultar sus características.

**Criterios de aceptación:**
- La ilustración refleja el color temático del modelo seleccionado.
- La ficha muestra altura, peso, purga, difusor y estanqueidad del modelo activo.

**Estado:** Implementada en el prototipo; validación formal pendiente. *(PRD: FR-2, FR-3)*

### US-3: Añadir un modelo personalizado

**Historia:** Como encargado, quiero añadir una kachimba indicando sus datos principales para mantener actualizado el catálogo.

**Criterios de aceptación:**
- Puedo introducir nombre, material, purga, altura y color.
- No se guarda un nombre vacío.
- Al guardar, el modelo aparece en la lista, queda seleccionado y usa el color elegido.

**Estado:** Implementada en el prototipo; validación formal pendiente. Los cambios solo se mantienen en memoria. *(PRD: FR-4)*

### US-4: Retirar un modelo

**Historia:** Como encargado, quiero retirar una kachimba para que el catálogo represente los modelos disponibles.

**Criterios de aceptación:**
- Puedo retirar el modelo seleccionado si hay más de uno.
- Después de retirarlo, queda seleccionado otro modelo existente.
- No puedo retirar el último modelo de la colección.

**Estado:** Implementada en el prototipo; validación formal pendiente. *(PRD: FR-5)*

## Nota de seguimiento

Los estados describen la presencia de estas funciones en la demo, no una prueba formal ni un despliegue en un bar. Para completar la validación, ejecutar los criterios de aceptación y registrar los resultados.
