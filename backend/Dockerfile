# Stage 1: Compilar la aplicación usando Maven
FROM maven:3.8.5-openjdk-17 AS build
COPY ./backend .
RUN mvn clean package -DskipTests

# Stage 2: Ejecutar la aplicación
FROM openjdk:17-jdk-slim
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]