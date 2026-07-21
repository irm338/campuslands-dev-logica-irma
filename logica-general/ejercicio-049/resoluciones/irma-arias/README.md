
# Ejercicio 049 - Simulación de Estados (Películas de Miedo)

## 1. ¿Cómo pensé el problema?
Enfoqué el problema como una máquina de estados finitos. Cada película de terror posee un estado operativo actual (`pendiente`, `reproduciendo`, `pausada` o `terminada`), el cual determina qué acción debe ejecutarse a continuación.

## 2. Reglas aplicadas
* **Validación de estados:** Verificar que el estado actual pertenezca estipuladamente a los permitidos por el sistema.
* **Transición lógica:** Utilizar una estructura de control (`switch`) para asignar la regla o acción correspondiente a cada estado.
* **Control de errores:** Ignorar de manera segura registros malformados o arreglos de entrada vacíos.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js