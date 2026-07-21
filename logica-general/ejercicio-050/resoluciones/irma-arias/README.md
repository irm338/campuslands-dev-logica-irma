
# Ejercicio 050 - Lectura de instrucciones (Viajes y Turismo)

## 1. ¿Cómo pensé el problema?
Analicé que la lectura de instrucciones requiere transformar directrices textuales y numéricas en reglas lógicas de filtrado. El objetivo principal es evaluar si un conjunto de planes turísticos cumple con las restricciones de presupuesto, aplicando incrementos si se encuentran en temporada alta y descartando registros con datos vacíos.

## 2. Reglas aplicadas
* **Validación inicial:** Asegurar que la lista de itinerarios contenga datos y que el presupuesto límite sea un número positivo.
* **Cálculo condicional:** Ajustar el costo estimado de los viajes aplicando un recargo del 25% si la propiedad `temporadaAlta` es verdadera.
* **Clasificación:** Agrupar los destinos en aprobados o rechazados según su viabilidad financiera.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js