
# Ejercicio 054 - Diagnóstico de Errores (Tatuajes)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que un diagnóstico de errores en un entorno de tatuajes exige verificar normas estrictas de bioseguridad y calidad de materiales. Cada sesión debe ser auditada mediante validaciones condicionales para detectar anomalías antes de permitir su ejecución.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que el arreglo recibido contenga elementos y no esté vacío.
* **Control de esterilización:** Rechazar inmediatamente cualquier sesión donde el equipo no esté verificado como esterilizado.
* **Control de insumos:** Detectar y registrar fallas si se usan tintas caducadas o si faltan datos del cliente.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js