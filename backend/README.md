# AWS Cloud Architecture

Este documento describe una arquitectura basada en AWS Cloud con un enfoque serverless para implementar una web dinámica, soluciones de Machine Learning y una infraestructura altamente escalable y segura.


![AWS Cloud Architecture](EcoCityHub.jpg)

## 1. Solicitud de Usuario

- El usuario accede a la aplicación vía **Route 53**.
- **CloudFront** intercepta la petición y distribuye el contenido de manera eficiente mediante su CDN global.

## 2. Capa de Distribución

### Route 53
- DNS y routing para dirigir el tráfico a los recursos correctos.
- Proporciona alta disponibilidad y escalabilidad a nivel global.

### CloudFront
- Red de distribución de contenido (CDN) para ofrecer contenido de manera rápida y segura.
- Reduce la latencia al acercar los datos al usuario final.

## 3. Solución Serverless

### AWS Lambda + API Gateway
- **Lambda** se encarga de ejecutar el código sin necesidad de administrar servidores.
- **API Gateway** actúa como puerta de enlace para exponer APIs HTTP/HTTPS, ideal para la comunicación entre frontend y backend.
- Escalado automático y pago por uso, solo cuando las funciones se ejecutan.

## 4. Servicios de IA y Machine Learning

### Amazon SageMaker
- Servicio gestionado de Machine Learning que facilita la construcción, entrenamiento y despliegue de modelos de ML.
- Ideal para análisis avanzados e integración de IA en la solución.

## 5. Recomendaciones para implementar una web dinámica

### Capa de Contenido Estático
- **Amazon S3** para almacenar archivos estáticos (imágenes, documentos, etc.).
- Backups automáticos para garantizar la durabilidad de los datos.
- Permite la subida de archivos por parte de los usuarios de manera eficiente.

### Capa de Contenido Dinámico
- A gestionar con los servicios serverless (AWS Lambda y API Gateway) y la base de datos.

### Capa de Datos

#### RDS Multi-AZ
- **RDS (Relational Database Service)** configurado en múltiples zonas de disponibilidad (Multi-AZ) para alta disponibilidad y redundancia.
- Replicación síncrona para garantizar la integridad de los datos en caso de fallos.
- Realiza backups automáticos para restauraciones rápidas y seguras.

## 6. Capa de Seguridad

### AWS Shield
- Protección contra ataques de denegación de servicio (DDoS).

### WAF (Web Application Firewall)
- Se implementa en **CloudFront** para mitigar ataques como inyecciones SQL.

### AWS Certificate Manager
- Gestión de certificados SSL/TLS para cifrado end-to-end.

### IAM (Identity and Access Management)
- Gestión de roles y permisos granulares para controlar el acceso a los recursos.

### Cognito
- Servicio de autenticación y autorización de usuarios.
- Integra características como el inicio de sesión con proveedores externos (Google, Facebook).

### API Gateway Authorizers
- Autenticación adicional para APIs mediante JWT o Lambda Authorizers.

### Encriptación en tránsito y reposo
- Encriptación SSL/TLS para la transmisión de datos y cifrado en reposo para S3 y RDS.

## 7. Entrega de notificaciones al usuario

### Amazon SNS (Simple Notification Service)
- Servicio para enviar notificaciones y alertas a los usuarios en tiempo real.

## 8. Capa de Monitoreo

### Amazon CloudWatch
- Monitoreo en tiempo real de los recursos de AWS.
- Permite la creación de alarmas y la recolección de métricas clave.

### AWS CloudTrail
- Auditoría y seguimiento de todas las actividades y eventos realizados dentro de la cuenta de AWS.
- Mejora la trazabilidad de la infraestructura.

---

Esta arquitectura ofrece alta disponibilidad, seguridad, escalabilidad automática, y optimización de costos, cumpliendo con las mejores prácticas de AWS Cloud.
