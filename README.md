# GraphQL User Dashboard – Task 02
---
## 1. Project Overview

**Purpose of the task**

This project implements a full login/signup flow and a protected user dashboard that fetches data from a live GraphQL backend and performs complete CRUD operations. The goal was to demonstrate frontend + GraphQL integration, real API handling, and clean state management using Apollo Client.

---

## 2. Screenshots

Screen Recording: https://drive.google.com/file/d/14F5GsXq493RApj-ZUoQNt2OweiVDxXYd/view?usp=sharing

Login Page: <img width="1221" height="533" alt="Login Page" src="https://github.com/user-attachments/assets/89551345-f146-4154-adba-9b5681306624" />

Signup Page: <img width="1081" height="496" alt="Signup page" src="https://github.com/user-attachments/assets/96503908-8af0-49e9-8dc1-59ed44549fcb" />

User Dashboard with CRUD: <img width="1352" height="652" alt="Dashboard" src="https://github.com/user-attachments/assets/f27bfe50-0128-47d9-b4b6-ceef9ff2a549" />


---

## 3. Tech Stack

- **Frontend Framework:** React + TypeScript (Vite)
- **GraphQL Client:** Apollo Client
- **Styling:** Tailwind CSS
- **Backend API:** Strapi CMS GraphQL API

---
## 4. Features Implemented

**_Authentication Flow_**

- Signup with local credential storage
- Login validation using stored users
- Protected dashboard routes

**_GraphQL Dashboard_**

- Fetch users from userDbs collection
- Create new users
- Update existing users using an editable form
- Delete users in real time

**_UI Enhancements_**

- Tailwind styled dashboard layout
- Centered auth pages
- Responsive table design

---

## 5. GraphQL Implementation Notes

### Query Used

GET_USERS → Fetches userDbs collection

### Mutations Implemented

• createUser
```TypeScript
export const CREATE_USER = gql`
  mutation CreateUser($Name: String!, $email: String!, $phone: Int!) {
    createUserDb(data: { Name: $Name, email: $email, phone: $phone, is_active: true }) {
      documentId
      Name
      email
      phone
      is_active
    }
  }
`;
```

• updateUser
```TypeScript
export const UPDATE_USER = gql`
  mutation UpdateUser($documentId: ID!, $Name: String!, $email: String!) {
    updateUserDb(documentId: $documentId, data: { Name: $Name, email: $email }) {
      documentId
      Name
      email
    }
  }
`;
```

• deleteUser
```TypeScript
export const DELETE_USER = gql`
  mutation DeleteUser($documentId: ID!) {
    deleteUserDb(documentId: $documentId) {
      documentId
    }
  }
`;
```

---

## 6. Build Process

- Setup Apollo Client & GraphQL endpoint
- Built login/signup UI with route protection
- Connected dashboard to real GraphQL backend
- Implemented Create / Update / Delete flows
- Styled all screens using Tailwind CSS

---

## 7. AI Prompts Used (ChatGPT + Postman)

- GraphQL Debugging:
  
“Why is my Strapi GraphQL mutation failing with bad request?”

- CRUD Flow:
  
“How to refetch queries after GraphQL mutation?”

- Tailwind Styling:
  
“Style this React dashboard table using Tailwind.”

---

## 8. Debugging & Challenges

- Strapi Schema Mismatch

Issue: Backend did not expose collections as expected

Fix: Discovered correct userDbs query pattern

- Apollo Init Error

Issue: Apollo client throwing invariant violation

Fix: Replaced uri with HttpLink

- Mutation Input Errors
  
Issue: Create mutation failing silently

Fix: Matched exact mutation schema

---

## 9. Folder Structure
```text
src/
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Dashboard.tsx
├── graphql/
│   ├── apolloClient.ts
│   ├── operations/
│   │   ├── userQueries.ts
│   │   ├── userMutations.ts
├── auth/
│   ├── authService.ts
├── App.tsx
├── index.css
└── main.tsx
```
---

## 10. How to Run Locally
git clone https://github.com/ahana4banerjee/Meteorite-Dashboard.git
```bash
npm install
npm run dev
```

Open: http://localhost:5173

---

## 11. Time Required

~ 5 hours total

---

## 12. Limitations & Future Improvements

**_Limitations_**

  - Authentication is frontend-only due to backend restrictions

**_Future Improvements_**

- Integrate real JWT based login
- Add pagination and filtering
- Improve error handling and loaders

---

## 13. Outcome

This task helped me understand real-world GraphQL integration, Apollo client internals, and handling imperfect backend systems gracefully.
