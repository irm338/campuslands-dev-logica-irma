# Ejercicio 086: Autos hiperdeportivos - Búsqueda de elementos

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, estructuré la solución dividiendo las tareas en funciones modulares. Una función valida la integridad del catálogo de hiperdeportivos, otra evalúa que el término de búsqueda sea válido, y la función de búsqueda recorre la estructura para encontrar coincidencias parciales o totales en los nombres o marcas de los vehículos.

## Reglas aplicadas
1. **Validación inicial:** Comprobar que el inventario de autos no se encuentre vacío y que la cadena de búsqueda posea contenido válido.
2. **Coincidencia flexible:** Permitir la localización de elementos normalizando los textos a minúsculas para encontrar registros por marca o modelo.
3. **Manejo de resultados:** Retornar los datos técnicos completos del hiperdeportivo si existe coincidencia, o un mensaje de error claro en caso contrario.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-086/resoluciones/irma-arias/irma-arias.js