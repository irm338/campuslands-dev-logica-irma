
# Ejercicio 055 - Reglas de Negocio (Dibujo Digital)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que las reglas de negocio actúan como filtros comerciales y operativos estrictos. Cada proyecto de dibujo digital debe cumplir con condiciones corporativas y técnicas específicas (como licencias requeridas para resoluciones ultra altas y actualizaciones de software) antes de ser aprobado.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que el arreglo recibido contenga elementos y no esté vacío.
* **Control de licencias comerciales:** Restringir los trabajos en resolución 8K exclusivamente a cuentas con licencia PRO.
* **Control técnico operativo:** Rechazar proyectos donde el software del artista no esté actualizado o falten datos esenciales.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js