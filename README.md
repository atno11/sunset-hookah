# **Dashboard Administrativo - Sunset Hookah**

Este projeto é um **dashboard administrativo** para a **Sunset Hookah**, desenvolvido para otimizar o gerenciamento de estoque, vendas, análise de dados e geração de relatórios.

A aplicação utiliza **React** no frontend, **Java** no backend, **Tauri** para empacotamento como aplicativo desktop, **TailwindCSS** para estilização e **ShadcnUI** para componentes modernos e acessíveis.

## **📌 Funcionalidades**

- **Controle de Estoque**  
  Gerencie produtos como essências, narguiles, carvões, mangueiras, furadores e roshs.
- **Controle de Vendas**  
  Registre e visualize todas as transações realizadas.
- **Analytics**  
  Acompanhe métricas e gráficos sobre o desempenho da tabacaria.
- **Relatórios**  
  Gere relatórios detalhados sobre vendas, estoque e indicadores de negócio.

## **🛠️ Tecnologias Utilizadas**

### **Frontend**

- [React](https://react.dev/)
- [Tauri](https://tauri.app/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadcnUI](https://ui.shadcn.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [@tanstack/react-router](https://tanstack.com/router/latest/docs/framework/react/overview)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)

### **Backend**

- **Java 21+**
- **Spring Boot**
- **PostgresSQL**

## **📂 Estrutura do Projeto**

```plaintext
sunset-hookah/
├── frontend/         # Aplicação React + Tauri
├── backend/          # API Java (Spring Boot)
└── README.md         # Documento principal
```

### **⚙️ Requisitos**

- **Node.js: 22.17.1 ou superior**
- **Java: JDK 21 ou superior**
- **Tauri: Siga as instruções de instalação no [link oficial do Tauri](https://v2.tauri.app/start/prerequisites/)**
- **PostgresSQL**

## **🚀 Instalação e Execução**

### **1️⃣ Clonar o Repositório**

```bash
git clone https://github.com/atno11/sunset-hookah.git
cd dashboard-sunset-hookah
```

### **2️⃣ Backend**

```bash
cd backend
# Se usar Maven
./mvnw spring-boot:run
# Ou com Gradle
./gradlew bootRun
```

### **3️⃣ Frontend**

```bash
cd frontend
pnpm install
pnpm dev
```

### **4️⃣ Executar como App Desktop (Tauri)**

```bash
pnpm tauri dev
```

### **🌍 Variáveis de Ambiente**

Crie um arquivo .env na pasta frontend.

### **Frontend (`frontend/.env`)**

```env
VITE_API_URL=http://localhost:8080
```

### **Backend (`backend/.env ou application.properties`)**

```
spring.datasource.url=jdbc:postgresql://localhost:5432/sunset
spring.datasource.username=usuario
spring.datasource.password=senha
```
