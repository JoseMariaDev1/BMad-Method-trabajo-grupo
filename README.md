# Nébula - Cockpit & Dashboard de Cuidado de Kachimbas

Dashboard interactivo y vanguardista para la gestión, telemetría y mantenimiento de colecciones de kachimbas/shishas de alta gama. Desarrollado con **Angular standalone** y una interfaz inmersiva estilo cabina de control (*cockpit*).

---

## Requisitos del Sistema

- **Node.js**: 20.19 o superior
- **npm**: 10.x o superior

---

## Instalación y Desarrollo

1. Clona o descarga el repositorio y accede a su directorio raíz.
2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm start
   ```
   *(En Windows PowerShell también puedes ejecutar `npx ng serve` o `npm.cmd start`)*.
4. Abre tu navegador web en:
   ```
   http://localhost:4200
   ```

---

## Compilación para Producción

Para compilar el proyecto optimizado para despliegue:

```bash
npm run build
```

Los artefactos generados se guardarán en el directorio `dist/nebula-dashboard`.

---

## Stack Tecnológico y Arquitectura

- **Framework**: Angular 21 (Standalone Components, sin módulos heredados `NgModule`).
- **Reactividad en Tiempo Real**: Arquitectura moderna con `ChangeDetectorRef` para actualización síncrona en entornos sin *Zone.js* (*Zoneless*).
- **Gráficos Dinámicos**: SVG procedural de alta fidelidad con gradientes reactivos vinculados al modelo de datos activo.
- **Estilos**: Hoja de estilos global en `styles.css` con estética *dark sci-fi*, desenfoque de fondo (*backdrop blur*), animaciones de humo y efectos de radar.

---

## Las 5 Funcionalidades Implementadas

La aplicación se estructura en torno a **5 funcionalidades principales** completamente operativas e interconectadas:

### 1. Gestión y Catálogo Dinámico de la Colección
* **Exploración de Modelos:** Permite navegar e intercambiar entre los modelos de la colección (*Nébula One*, *Alma Mini*, *Oasis Glass* y *Phantom Carbon*).
* **Ilustración Central SVG Reactiva:** Al cambiar de modelo, la gran kachimba central adapta dinámicamente sus colores temáticos, brillos ambientales, tonalidad del agua y acabados metálicos.
* **Ficha de Calibración:** Muestra especificaciones ajustadas de altura, peso, sistema de purga (cascada, horizontal, radial), difusor regulable y porcentaje de estanqueidad/sellado hermético.
* **Modal para Añadir Nueva Kachimba:** Formulario interactivo que permite dar de alta nuevos modelos personalizados seleccionando nombre, materiales, purga, altura y color temático mediante un selector de color (*color picker*).
* **Gestión de Modelos:** Posibilidad de retirar modelos de la colección manteniendo siempre al menos uno activo.

### 2. Estudio de Inspección Técnica y Diagnóstico (Hotspots 2D)
* **Puntos de Inspección con Efecto Radar:** 4 pines interactivos situados en las áreas críticas del gráfico central:
  1. **Cazoleta & Gestor térmico:** Monitorea la distribución térmica y la temperatura óptima de barro/HMD.
  2. **Mástil & Purga 360°:** Diagnóstico del sistema de vaciado y caudal de tiro milimétrico.
  3. **Base de Cristal & Nivel de Agua:** Guía de nivel exacto de agua sobre el difusor sumergido.
  4. **Manguera & Juntas Tóricas:** Test de hermeticidad y ausencia de fugas de aire.
* **Tarjeta Flotante de Telemetría:** Al pulsar cualquier pin o el botón *Inspección de Partes*, se despliega una ficha emergente con datos y métricas específicas calculadas según el modelo activo.

### 3. Monitor de Sesión de Fumada en Vivo (Telemetría Térmica)
* **Cronómetro Digital en Tiempo Real:** Visualizador digital con formato `MM:SS.d` (minutos, segundos y décimas de segundo) que se mueve de manera fluida y continua en vivo.
* **Simulación Térmica Gradual:** La temperatura en cazoleta sube segundo a segundo de forma realista desde temperatura ambiente (24 °C) hasta el punto de fumada óptima (212 °C).
* **Desgaste de Carbones:** Medidor visual que simula el consumo de los cubos de carbón natural de 26 mm a medida que avanza la sesión.
* **Control Completo de Ciclo:** Botones para *Iniciar*, *Pausar*, *Reiniciar* y *Terminar Sesión*. Al terminar la sesión:
  - Se incrementa automáticamente el contador de sesiones acumuladas del modelo.
  - Se descuenta carbón del inventario.
  - El estado del modelo pasa a *"Toca limpiar tras fumar"*.

### 4. Planificador de Cuidados y Rutina de Mantenimiento Individualizada
* **Checklist Independiente por Kachimba:** Cada modelo de la colección guarda su propio estado de tareas de limpieza por separado. Marcar o limpiar una kachimba no altera las rutinas de las demás.
* **Medidor Radial de Progreso Semanal:** Anillo porcentual reactivo (0% a 100%) que calcula el estado de salud específico de la kachimba seleccionada.
* **Añadir Nuevas Tareas en Caliente:** Barra de entrada rápida para crear tareas personalizadas (ej. cambiar agua, engrasar rosca) con solo presionar `Enter`.
* **Eliminación y Gestión de Tareas:** Botón para descartar tareas individuales.
* **Botón "Registrar Limpieza":** Restablece el estado del modelo seleccionado a *"Recién limpiada · Óptima"*, eleva su hermeticidad al **100%** y tilda automáticamente todas las tareas de mantenimiento de esa unidad.

### 5. Gestor de Inventario de Consumibles y Agenda de Mantenimientos
* **Monitor de Stock en Tiempo Real:** Supervisión de insumos esenciales:
  - *Carbón King Coco 26mm* (porcentaje restante).
  - *Cazoletas Preparadas* (unidades limpias disponibles).
  - *Boquillas Higiénicas* (unidades desechables para invitados).
  - *Limpiador Bio Shisha Cleaner* (nivel de líquido desengrasante).
* **Acciones Rápidas de Inventario:** Botones interactivos **`- Usar`** (descuenta unidades o porcentaje) y **`+ Reponer`** (recarga al 100% o suma unidades).
* **Alertas Visuales de Stock Crítico:** Los consumibles que caen por debajo de su umbral mínimo activan un indicador de advertencia (`⚠️ Bajo`).
* **Agenda de Próximos Cuidados:** Calendario clasificado por días (*HOY*, *JUE*, *LUN*) que destaca mantenimientos urgentes y revisiones de juntas tóricas programadas.

---

## Estructura de Archivos Clave

```
├── src/
│   ├── app/
│   │   ├── app.component.ts    # Lógica TypeScript, modelos, telemetría y estado
│   │   └── app.component.html  # Plantilla HTML semántica con grid de 3 columnas
│   ├── main.ts                 # Bootstrap standalone de la aplicación
│   └── index.html              # HTML base con tipografías DM Sans, Manrope y JetBrains Mono
├── styles.css                  # Hoja de estilos principal (temas, animaciones, modales)
├── angular.json                # Configuración de compilación de Angular CLI
├── package.json                # Dependencias y scripts de ejecución
└── README.md                   # Documentación técnica del proyecto
```

## Bibliografía

BMad Method:
https://docs.bmad-method.org/

BMAD v6 Is Here: 10-Minute Install and Agent Tour (GitHub Copilot + VS Code):
https://www.youtube.com/watch?v=tM5dGuXyb4g&t=11s

Google Antigravity:
https://antigravity.google/
```
