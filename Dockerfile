FROM maven:3.9.9 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/ems-backend-0.0.1-SNAPSHOT.jar .

EXPOSE 8090

ENTRYPOINT ["java","-jar","/app/ems-backend-0.0.1-SNAPSHOT.jar"]