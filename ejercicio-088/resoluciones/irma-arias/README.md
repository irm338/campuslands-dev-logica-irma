# Ejercicio 088: Películas de ciencia ficción - Flujos paso a paso

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, estructuré la solución dividiendo un proceso complejo en etapas modulares (paso a paso). Cree funciones dedicadas exclusivamente a:
1. Validar la integridad de los datos de entrada.
2. Calcular un puntaje ponderado combinando la recaudación en taquilla y la calificación de la crítica especializada.
3. Determinar el estatus comercial y narrativo de la obra según rangos lógicos definidos.

## Reglas aplicadas
1. **Validación de estructura:** Asegurar que el objeto de la película contenga un título válido y no se encuentre vacío.
2. **Ponderación analítica:** Aplicar pesos porcentuales para calcular de manera justa el rendimiento del filme.
3. **Clasificación por estatus:** Asignar categorías orientadas al análisis de cartelera de cine de ciencia ficción.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-088/resoluciones/irma-arias/irma-arias.js