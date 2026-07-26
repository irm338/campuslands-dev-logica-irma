# Ejercicio 085: Taller mecánico - Ordenamiento de prioridades

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, dividí el proceso en funciones modulares. Una función valida la existencia de elementos en la cola, otra convierte las etiquetas de gravedad en pesos numéricos ponderados, y la función principal implementa un algoritmo de ordenamiento multicriterio para estructurar la atención de los vehículos en el taller.

## Reglas aplicadas
1. **Validación inicial:** Comprobar que el arreglo de vehículos entrantes no se encuentre vacío.
2. **Jerarquía de gravedad:** Atender primero las averías clasificadas como críticas, luego las moderadas y finalmente las leves.
3. **Desempate por emergencia y orden de llegada:** En caso de igualdad en la gravedad del daño, se priorizan los vehículos de emergencia y, por último, el orden cronológico de ingreso al taller.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-085/resoluciones/irma-arias/irma-arias.js