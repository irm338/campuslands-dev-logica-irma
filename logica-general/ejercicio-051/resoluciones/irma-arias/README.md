
# Ejercicio 051 - Organización de Listas (Kickboxing)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que una lista de atletas requiere primero un proceso de depuración (eliminar registros con datos vacíos o corruptos) y posteriormente un ordenamiento lógico basado en una métrica clave, en este caso, el ranking deportivo de menor a mayor.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que el arreglo recibido contenga elementos y no esté vacío.
* **Depuración de datos:** Filtrar y aislar aquellos competidores que carezcan de un nombre válido o tengan un ranking incorrecto.
* **Ordenamiento:** Reorganizar la lista de atletas de manera ascendente utilizando su propiedad numérica de `ranking`.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js