
# Ejercicio 053 - Resolución de Casos (Paracaidismo)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que una resolución de casos operativa requiere definir filtros estrictos de seguridad. Cada intento de salto debe ser contrastado contra múltiples restricciones físicas y logísticas (viento, altura y estado del equipo) antes de emitir una decisión final.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que la lista de entrada contenga registros válidos.
* **Control de altura:** Rechazar aquellos saltos cuya altitud sea inferior a los 3000 metros requeridos.
* **Control ambiental y técnico:** Descartar saltos con velocidades de viento superiores a 25 km/h o cuyo equipo no esté verificado positivamente.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js