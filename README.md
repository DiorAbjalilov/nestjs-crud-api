# 📚 Library Management System

A modern Library Management System built with **NestJS**, **GraphQL**, **TypeORM**, and **PostgreSQL**. This project demonstrates a complete backend solution for managing books, readers, and borrowing operations.

## 🚀 Features

- **GraphQL API** with Apollo Server integration
- **REST API** with Swagger documentation
- **PostgreSQL** database with TypeORM
- **Docker** containerization for easy deployment
- **TypeScript** for type safety
- **Real-time** GraphQL Playground for testing

## 🛠️ Tech Stack

- **Backend Framework:** NestJS
- **API:** GraphQL + REST
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Documentation:** Swagger/OpenAPI
- **Containerization:** Docker & Docker Compose
- **Language:** TypeScript

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker & Docker Compose
- npm or yarn

## 🔧 Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd library-management-system
```

2. **Install dependencies**

```bash
npm install
```

3. **Start PostgreSQL with Docker**

```bash
docker-compose up -d
```

4. **Run the application**

```bash
npm run start:dev
```

## 🌐 API Endpoints

### GraphQL Playground

- **URL:** `http://localhost:3000/graphql`
- Interactive GraphQL interface for testing queries and mutations

### Swagger Documentation

- **URL:** `http://localhost:3000/api`
- Complete REST API documentation

### REST API

- **Base URL:** `http://localhost:3000`
- **Todos:** `/todos`
- **Books:** Available via GraphQL

## 📖 GraphQL Examples

### Query Examples

**Get all available books:**

```graphql
query {
  availableBooks {
    id
    title
    author
    isAvailable
  }
}
```

**Get book by ID:**

```graphql
query {
  book(id: 1) {
    id
    title
    author
    isAvailable
  }
}
```

**Get all books:**

```graphql
query {
  books {
    id
    title
    author
    isAvailable
  }
}
```

### Mutation Examples

**Create a new book:**

```graphql
mutation {
  createBook(
    createBookDto: { title: "O'tkan kunlar", author: "Abdulla Qodiriy" }
  ) {
    id
    title
    author
    isAvailable
  }
}
```

**Update a book:**

```graphql
mutation {
  updateBook(
    updateBookDto: { id: 1, title: "Updated Title", isAvailable: false }
  ) {
    id
    title
    author
    isAvailable
  }
}
```

**Delete a book:**

```graphql
mutation {
  removeBook(id: 1)
}
```

## 🗄️ Database Schema

### Book Entity

```typescript
{
  id: number; // Primary key
  title: string; // Book title
  author: string; // Book author
  isAvailable: boolean; // Availability status
}
```

## 🐳 Docker Configuration

The project includes a `docker-compose.yml` file that sets up:

- **PostgreSQL 14** on port `5435`
- **Database:** `todos_db`
- **Credentials:** `postgres/postgres`

## 📁 Project Structure

```
src/
├── book/
│   ├── dto/
│   │   ├── create-book.dto.ts
│   │   └── update-book.dto.ts
│   ├── book.entity.ts
│   ├── book.service.ts
│   ├── book.resolver.ts
│   └── book.module.ts
├── todos/
│   ├── entities/
│   ├── todos.service.ts
│   ├── todos.controller.ts
│   └── todos.module.ts
├── app.module.ts
└── main.ts
```

## 🔮 Future Enhancements

- [ ] **Reader Management** - Add reader registration and management
- [ ] **Borrowing System** - Implement book borrowing and returning
- [ ] **Authentication** - Add JWT-based authentication
- [ ] **Search & Filtering** - Advanced book search capabilities
- [ ] **Notifications** - Email/SMS notifications for due dates
- [ ] **Reports** - Generate borrowing reports and analytics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Diyor Abjalilov**

- GitHub: [@DiorAbjalilov](https://github.com/DiorAbjalilov)
- LinkedIn: [Diyor Abjalilov](https://linkedin.com/in/diyorabjalilov)

## 🙏 Acknowledgments

- NestJS team for the amazing framework
- Apollo GraphQL for excellent GraphQL implementation
- TypeORM for seamless database integration

---

⭐ **Star this repository if you found it helpful!**
