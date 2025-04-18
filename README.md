# 📝 TodoApp - CRUD con Node.js, MongoDB y Docker

Esta es una aplicación básica de tareas (TodoApp) que permite crear, leer, actualizar y eliminar tareas usando una API construida con Node.js y MongoDB, todo gestionado mediante Docker.

---

## 🚀 Tecnologías Usadas

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- Mongoose

---

## 📦 Estructura del Proyecto

```
02-nodejs-mongodb-react/
├── docker-compose.yml
├── .env.example
├── .gitignore
├── README.md
└── src/
    └── backend/
        ├── Dockerfile
        ├── .dockerignore
        ├── server.js
        ├── package.json
        └── ...
```

---

## ⚙️ Requisitos Previos

- Tener instalado Docker Desktop
- Tener cuenta en [GitHub](https://github.com/)

---

## 🐳 Instrucciones para Ejecutar con Docker

1. Clona el repositorio:

```bash
git clone https://github.com/MarioCamayo/TodoApp-CRUD-Docker-Node-Express-MongoDB.git
cd TU_REPOSITORIO
```

2. Renombra el archivo `.env.example` a `.env` y ajusta las variables si es necesario.

3. Ejecuta el siguiente comando para construir y levantar los contenedores:

```bash
docker compose up --build
```

4. Una vez iniciado, el backend estará corriendo en:

```
http://localhost:3000
```

---

## 📬 Endpoints disponibles

| Método | Endpoint    | Descripción                 |
| ------ | ----------- | --------------------------- |
| GET    | /todos      | Obtener todas las tareas    |
| POST   | /todos      | Crear una nueva tarea       |
| PUT    | /todos/\:id | Actualizar una tarea por ID |
| DELETE | /todos/\:id | Eliminar una tarea por ID   |

---

## 📌 Ejemplo de uso con `curl`

### Crear una tarea:

```bash
curl -X POST http://localhost:3000/todos \
-H "Content-Type: application/json" \
-d '{"task": "Aprender Docker", "done": false}'
```

---

## ✅ Notas

- Si detienes el contenedor con `Ctrl + C`, puedes volver a iniciarlo sin reconstruir con:

```bash
docker compose up
```

- Para acceder al contenedor de MongoDB y ver los datos:

```bash
docker exec -it NOMBRE_CONTENEDOR_MONGO mongosh
```

---

## 👨‍💼 Autor

Proyecto desarrollado por Mario Camayo.

