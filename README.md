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

For the code present, we get this error:
```
'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
```
How can I resolve this? If you propose a fix, please make it concise.

The error occurs because React is being used in a module but hasn't been imported. Since this is a TypeScript React component, we need to import React.
Here's the fix - just add React to the existing import statement at the top of the file:
CommentList.tsx
import React, { useState, useEffect } from 'react';

Apply to CommentList.tsx
This adds React to the named imports from 'react', resolving the UMD global reference error.
now last step: ublic GitHub repository with a random 8-character string name 

Here's a random 8-character string that would work well as a GitHub repository name:
k8m4v2xt
This string:
Is 8 characters long
Uses only alphanumeric characters
Is lowercase (following GitHub conventions)
Is random enough to likely be unique
Is easy to copy/paste
You can create a new public repository on GitHub with this name.
amke an email adding this repo: @https://github.com/olganedelcu/k8m4v2xt.git to Marius saying that the challenge is done and apologies for the late hour 

WEB PAGES
Here's a draft email:
,
The email is brief and professional while including the key information - the completed repository link and a polite acknowledgment of the late submission time.
make a README file for the project

Here's a README.md file for your comments app:
:
bash
git clone https://github.com/olganedelcu/k8m4v2xt.git
cd k8m4v2xt
:
bash
npm install
3. Run the development server:
bash
npm start
:
bash
npm run cypress:open
## Project Structure

src/
├── components/
│ ├── CommentForm.tsx
│ ├── CommentItem.tsx
│ └── CommentList.tsx
├── types/
│ └── Comment.ts
└── App.tsx

