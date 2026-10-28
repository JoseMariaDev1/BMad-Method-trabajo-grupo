# Product Brief: Nébula

**Producto:** Gestor de kachimbas para bares de kachimbas

## Resumen ejecutivo

Nébula es un prototipo de aplicación para ayudar a un bar de kachimbas a gestionar las kachimbas que ofrece y las tareas relacionadas con su operación diaria. Su objetivo es reunir en una interfaz la información de cada unidad, el seguimiento de sesiones, las tareas de limpieza y el inventario de consumibles.

La idea responde a una necesidad práctica: cuando un local trabaja con varias kachimbas y consumibles, llevar el control de su estado y mantenimiento puede resultar disperso y depender de apuntes o de la memoria del personal. Una herramienta visual y sencilla puede ayudar al equipo a saber qué está disponible, qué necesita atención y qué recursos hay que reponer.

La aplicación actual es una demostración interactiva. Utiliza datos de ejemplo y mantiene los cambios en memoria; todavía no es un sistema conectado a una base de datos ni a la operación de un establecimiento real.

## El problema

En un bar de kachimbas, el personal puede necesitar controlar varias unidades, cada una con características, estado de limpieza y uso distintos. También debe recordar las sesiones, organizar las tareas de mantenimiento y vigilar consumibles como carbón, boquillas y productos de limpieza.

Si esta información se gestiona por separado o de forma manual, puede ser más difícil consultar rápidamente el estado de cada kachimba, coordinar las tareas entre turnos y anticipar la reposición de existencias. Este brief plantea ese problema como hipótesis de producto; aún no se ha documentado una validación con bares o personal usuario.

## La solución

Nébula propone un panel visual desde el que el equipo pueda:

- Consultar y organizar el catálogo de kachimbas del local.
- Revisar las especificaciones y el estado de cada unidad.
- Registrar o consultar sesiones y preparar el seguimiento de su mantenimiento posterior.
- Gestionar listas de tareas de limpieza y cuidado.
- Consultar y actualizar el inventario de consumibles y ver avisos de stock bajo.

La aplicación existente ya presenta una demostración de estas áreas mediante una interfaz interactiva. Los datos y las métricas de sesión que aparecen en ella son simulados; no deben interpretarse como telemetría real ni como registros persistentes.

## Qué hace diferente a Nébula

- Reúne en un mismo panel la información de las kachimbas, su cuidado, las sesiones y los consumibles.
- Presenta datos específicos de kachimbas —como purga, difusor y nivel de agua— en vez de tratar el equipo como inventario genérico.
- Prioriza una vista visual y una interacción rápida, apropiadas para consultar información durante el trabajo del local.

Estas son características de la propuesta y del prototipo actual, no ventajas comerciales validadas frente a otros productos.

## A quién sirve

**Usuarios principales**

- **Propietario o encargado del bar:** necesita una visión general del equipo, el mantenimiento pendiente y las existencias.
- **Personal de servicio:** necesita consultar rápidamente qué kachimba preparar, su estado y las tareas que debe completar.

**Éxito para estos usuarios:** poder encontrar de forma sencilla el estado de una unidad y las tareas o consumibles que requieren atención, sin depender de información dispersa.

## Criterios de éxito

Para validar el prototipo:

1. Una persona puede identificar en el panel una kachimba y consultar su estado y especificaciones.
2. Puede añadir o retirar una kachimba de la colección de demostración.
3. Puede iniciar y finalizar una sesión simulada y ver reflejados los cambios correspondientes en la interfaz.
4. Puede revisar y actualizar tareas de cuidado e inventario en la demostración.
5. El equipo puede completar las tareas anteriores durante una prueba guiada y señalar qué información necesitaría en un turno real.

Los cuatro primeros criterios se refieren a comportamientos del prototipo. El quinto requiere una prueba con usuarios y todavía no se considera validado. Antes de usar Nébula en un bar real, habría que definir métricas operativas —por ejemplo, tiempo para consultar el estado de una unidad o incidencias de reposición— y obtener una línea base y resultados de un piloto.

## Alcance

### Incluido en el prototipo actual

- Catálogo interactivo de kachimbas y ficha de especificaciones.
- Panel de inspección visual de partes.
- Temporizador y telemetría térmica simulada para una sesión.
- Tareas de limpieza y mantenimiento por kachimba.
- Vista de inventario de consumibles con controles de uso y reposición.

### Fuera del alcance actual

- Uso real multiusuario, cuentas, roles y sincronización entre dispositivos.
- Persistencia de cambios en una base de datos; los datos actuales son de demostración y se mantienen en memoria.
- Integración con punto de venta, compras, proveedores o sistemas de reservas.
- Sensores físicos o medición real de temperatura, sesiones o consumo.
- Validación de la propuesta con personal de bares y despliegue en un establecimiento.

## Visión

Si la propuesta se valida con bares de kachimbas, Nébula podría evolucionar de prototipo visual a una herramienta de operación diaria: un lugar compartido donde el personal consulte el equipo disponible, registre tareas y sesiones, y anticipe necesidades de mantenimiento y reposición. La prioridad para llegar a esa visión sería validar el flujo con usuarios reales y, después, diseñar la persistencia, los permisos y la sincronización necesarios para un uso de equipo.

## Base y limitaciones de este brief

Este documento parte de la descripción del proyecto como gestor de kachimbas para bares y de las funciones descritas en el README y la aplicación actual. No afirma que se hayan realizado entrevistas, pruebas con clientes, mediciones operativas ni despliegues en bares. Esas actividades deben llevarse a cabo y documentarse por separado si se realizan.
