# Comments App

A React-based commenting system that allows users to create, reply to, and delete comments.

## Features

- Create new comments
- Reply to existing comments
- Delete comments
- Persistent storage using localStorage
- Fully responsive design

## Technologies Used

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Testing:** Cypress
- **State Management:** React Hooks
- **Storage:** localStorage
- **Build Tool:** Vite

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/comments-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```


4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

Run the Cypress tests:
```bash
npm run cypress:open
```

## Project Structure

src/
├── components/
│ ├── CommentForm.tsx
│ ├── CommentItem.tsx
│ └── CommentList.tsx
├── types/
│ └── Comment.ts
└── App.tsx

