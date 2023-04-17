# Home Shop

This is a Vite React TS project using Tanstack Query for data fetching, Recoil for state management, Tailwind CSS for styling, chart.js for make chart for admin order details and Laravel API for backend.

## Installation

To get started with the project, clone the repository and run:

    git clone https://github.com/shakilhossain-cse/homeshop.git

Switch to the repo folder

    cd backend

## Usage

Install project dependencies use:

    npm install

To run the project, use:

    npm run dev

This will start the development server and open the app in your default browser.

## Features

- Home page displaying category recent products, and rendom products
- Product category pages
- Product detail page
- Cart page with item quantity management
- Checkout page with form validation and confirmation


## Project Structure

project-root/
├── src/
│  ├── assets/
│  ├── components/
│  ├── pages/
│  │  ├── Home/
│  │  ├── Payment/
│  │  ├── Product/
│  │  ├── Shop/
│  │  ├── Admin/
│  │  │  ├── Dashboard/
│  │  │  ├── Order/
│  │  │  ├── Product/
│  │  │  ├── User/
│  │  ├── User/
│  │  │  ├── Order/
│  │  │  ├── Profile/
│  │  │  ├── Wishlist/
│  │  │  ├── index.tsx
│  ├── recoil/
│  │  ├── atoms/
│  │  ├── selectors/
│  │  ├── constance.ts
│  │  ├── index.ts
│  ├── routes/
│  ├── services/
│  ├── utils/
│  ├── App.tsx
│  ├── index.css
│  └── main.tsx
├── .env
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts

## Technologies Used

- Vite
- React
- TypeScript
- Tanstack Query
- Recoil
- Tailwind CSS
- Laravel API

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
