# Finance Dashboard

## Overview

This project is a responsive Finance Dashboard built using React. It allows users to track financial activity, view insights, and manage transactions with a clean and intuitive interface.

The goal of this project was to demonstrate frontend architecture, UI design, and state management using React.


## Features

### Dashboard Overview

* Total Balance
* Total Income
* Total Expense
* Expense Trend (Line Chart)
* Spending by Category (Pie Chart)

### Transactions Section

* View transactions list
* Add new transaction (Admin only)
* Search transactions
* Filter transactions
* Role-based access control

### Insights Section

* Total Transactions
* Average Expense
* Highest Spending Category
* Savings Rate

### Role-Based UI

* **Viewer** → Read-only access
* **Admin** → Add transactions

### UI / UX Features

* Responsive design (Mobile + Desktop)
* Sidebar navigation
* Hamburger menu (Mobile)
* Hover sidebar interaction
* Empty state handling
* Sticky sidebar
* Clean dashboard layout

### Data Persistence

* Transactions stored using Local Storage
* Role persistence after page reload


## Tech Stack

* React (Vite)
* Tailwind CSS
* Chart.js
* JavaScript (ES6)


## Project Structure

src/
 ├── components/
 │   ├── Sidebar.jsx
 │   ├── Header.jsx
 │   ├── Cards.jsx
 │   ├── Charts.jsx
 │   ├── Transactions.jsx
 │   ├── Insights.jsx
 │
 ├── data/
 │   └── transactions.js
 │
 └── App.jsx


## Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/finance-dashboard.git
```
Install dependencies:

```bash
npm install
```
Run the development server:

```bash
npm run dev


 Live Demo

```
https://finance-dashboard-orcin-theta.vercel.app
```

## Author

**Prakhar Sharan**
CSE Student
Frontend Developer


