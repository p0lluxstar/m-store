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

# Собираем проект (NODE_ENV должен быть установлен ДО сборки)
ENV NODE_ENV production
RUN npm run build

# Устанавливаем зависимости для серверной части
RUN cd .medusa/server && npm install --production

# Копируем .env в .env.production для серверной части
RUN cp .env .medusa/server/.env.production

# Запускаем из каталога .medusa/server
CMD ["sh", "-c", "cd .medusa/server && npm run start"]

# Открываем порт
EXPOSE 9000