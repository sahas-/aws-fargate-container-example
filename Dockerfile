FROM node:9.0
EXPOSE 8080
WORKDIR /app
COPY index.js /app
CMD ["node","index.js"]