# Ejercicio 093: Paracaidismo - Resolución de casos

## ¿Cómo pensé el problema?
Al tratarse de un reto integrador controlado de nivel difícil, dividí la lógica en funciones modulares. Primero, una función valida la integridad estructural de los datos del paracaidista. Segundo, otra función audita de manera estricta las condiciones del entorno (velocidad del viento, altitud y peso del equipo) para dictaminar si el salto puede realizarse de forma segura o debe cancelarse.

## Reglas aplicadas
1. **Validación estructural:** Comprobar que el objeto de entrada contenga un nombre de paracaidista válido y no esté vacío.
2. **Control meteorológico:** Rechazar el salto si la velocidad del viento supera los 25 km/h.
3. **Control de rangos operativos:** Validar que la altitud y el peso del equipo se encuentren dentro de los límites estándar permitidos.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-093/resoluciones/irma-arias/irma-arias.js