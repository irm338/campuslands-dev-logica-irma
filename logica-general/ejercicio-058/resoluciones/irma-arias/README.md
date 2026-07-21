
# Ejercicio 058 - Sistemas de Turnos (Soldadura)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que un sistema de turnos en un área de alto riesgo como la soldadura requiere filtros rigurosos de validación. Cada operario debe ser evaluado individualmente para asegurar que cumple con las certificaciones técnicas y las normativas de seguridad industrial antes de asignarle un turno de trabajo.

## 2. Reglas aplicadas
* **Validación inicial:** Verificar que la lista de turnos contenga datos válidos y no esté vacía.
* **Control de certificación:** Rechazar turnos asignados a personal sin credenciales vigentes.
* **Seguridad industrial obligatoria:** Comprobar estrictamente el uso de equipo de protección personal (EPP) completo antes de cualquier autorización.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js