# 🛡️ Plataforma IA: DenunciaSegura

**DenunciaSegura** es una plataforma tecnológica omnicanal (WhatsApp + Web App) diseñada para transformar y automatizar el proceso de denuncias ciudadanas en el Perú. Mediante el uso de Inteligencia Artificial (NLP) y validación biométrica, el sistema reduce el tiempo de denuncia de 2 horas a menos de 15 minutos, eliminando la revictimización y garantizando el seguimiento automatizado. 

Este proyecto se enmarca en el **ODS 16: Paz, Justicia e Instituciones Sólidas**.

## 👥 Equipo de Desarrollo (Sección: 24694)
* **Guevara Bustamante, Gabriel Gonzalo**
* **Jaramillo Quispe, Jean Pool**
* **Landa Torres, Anthony**
* **Pablo (Asistente Virtual IA)**

## 🏗️ Arquitectura del Sistema (MVC)
Este repositorio funciona como un **Monorepo** estructurado bajo el patrón arquitectónico de N-Capas (Decoupled Layered Architecture) para garantizar un bajo acoplamiento y alta cohesión:

* **Frontend (`/frontend`):** Capa de presentación y UI interactiva construida con React.js.
* **Backend (`/backend`):** Capa lógica y API REST desarrollada en Java con Spring Boot (MVC).
* **Base de Datos:** RDBMS (MySQL) para garantizar propiedades ACID.

## 📂 Estructura Oficial del Repositorio

```text
denuncia-segura-app/
│
├── .github/                         # Workflows de integración continua (CI/CD)
├── docs/                            # Documentación del proyecto
│   ├── diagramas/                   # Diagramas de arquitectura y Service Blueprint
│   ├── wireframes/                  # Diseños de interfaz de usuario
│   └── PDCA/                        # Cuadro integrado de mejora continua (Ciclo Deming)
│
├── frontend/                        # Capa de Presentación (React.js)
│   ├── public/                      
│   └── src/                         
│       ├── App.js                   # Contenedor principal y enrutamiento
│       └── components/              # Vistas modulares
│           ├── Dashboard.js         # Panel ciudadano y expedientes PDF
│           ├── Chatbot.js           # Interfaz conversacional / WhatsApp
│           └── Login.js             # Módulo de identidad blindada (RENIEC)
│
├── backend/                         # Capa Lógica y Core (Spring Boot)
│   └── src/main/java/backend/       
│       ├── controller/              # Controladores REST (Recepción de peticiones)
│       ├── model/                   # Entidades de negocio y mapeo ORM
│       ├── service/                 # Lógica de triaje y reglas de negocio
│       ├── repository/              # Acceso a datos (Spring Data JPA)
│       ├── integration/             # Adaptadores externos (RENIEC, SIDPOL, NLP)
│       └── util/                    # Herramientas auxiliares y generadores de PDF
│
└── README.md                        # Documentación principal