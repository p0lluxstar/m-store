# Используем официальный Node.js образ
FROM node:20-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем ОСНОВНЫЕ зависимости (включая devDependencies для сборки)
RUN npm install --production=false

# Копируем остальные файлы
COPY . .

# Запускаем из каталога .medusa/server
CMD ["sh", "-c", "npm run dev"]

# Открываем порт
EXPOSE 9000