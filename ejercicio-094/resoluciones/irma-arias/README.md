# Ejercicio 094: Tatuajes - Diagnóstico de errores

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, estructuré la solución mediante funciones modulares. Una primera función valida la existencia y consistencia de los datos del cliente, mientras que la segunda audita detalladamente los requisitos de bioseguridad (esterilización, homologación de tintas, mayoría de edad y estado de la piel) para diagnosticar cualquier error o incumplimiento normativo.

## Reglas aplicadas
1. **Validación estructural:** Asegurar que el objeto recibido contenga un nombre de cliente válido y no esté vacío.
2. **Auditoría de bioseguridad:** Detectar de forma estricta fallas en la esterilización de herramientas o en la homologación sanitaria de las tintas.
3. **Control clínico y legal:** Verificar la mayoría del cliente y descartar afecciones cutáneas activas en la zona a tatuar.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-094/resoluciones/irma-arias/irma-arias.js