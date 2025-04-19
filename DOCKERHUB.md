# ☁️ Uso desde Docker Hub

Este proyecto está disponible como imagen de Docker pública en Docker Hub. Puedes ejecutarlo en tu máquina sin necesidad de instalar Node.js ni MongoDB, solo necesitas tener Docker instalado.

---

## 🔸 1. Requisitos

- Docker instalado
- Docker Compose instalado

---

## 🔸 2. Crear archivo `docker-compose.yml`

Copia el siguiente contenido y pégalo en un archivo nuevo llamado `docker-compose.yml`:

```yaml
version: '3.8'
services:
  backend:
    image: programadorfullstack/mi-app-backend:latest
    ports:
      - "3000:3000"
    depends_on:
      - mongodb
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/tareasdb

  mongodb:
    image: mongo
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

---

## 🔸 3. Levantar la aplicación

En la terminal, desde el directorio donde está el archivo `docker-compose.yml`:

```bash
docker compose up -d
```

Esto descargará las imágenes necesarias y ejecutará tu app automáticamente.

---

## 🔸 4. Acceder a la aplicación

Abre tu navegador en:

```
http://localhost:3000/todos
```

---

## 📝 Notas importantes

- La base de datos comienza vacía, lista para que cada usuario cree sus propias tareas.
- MongoDB usa un volumen llamado `mongo-data` para que tus datos no se pierdan al detener los contenedores.
- No necesitas tener Node.js ni MongoDB instalados localmente, solo Docker.

---

## 🔗 Docker Hub

Puedes ver la imagen publicada en:

👉 [https://hub.docker.com/r/programadorfullstack/mi-app-backend](https://hub.docker.com/r/programadorfullstack/mi-app-backend)

---
