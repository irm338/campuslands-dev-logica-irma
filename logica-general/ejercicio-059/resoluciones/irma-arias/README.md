

# Ejercicio 059 - Inventarios Lógicos (Fórmulas Químicas)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que un inventario lógico de reactivos químicos requiere un control estricto de existencias (stock en gramos) y estándares de calidad (porcentaje de pureza). Cada compuesto debe ser auditado de forma independiente para detectar déficits de inventario o impurezas antes de ser utilizado en fórmulas de laboratorio.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que el arreglo recibido contenga elementos y no esté vacío.
* **Control de stock mínimo:** Señalar alertas críticas cuando un reactivo posea menos de 200 gramos disponibles.
* **Control de pureza:** Filtrar compuestos que no alcancen el 90% de pureza requerido para la experimentación segura.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js