![Screenshot from 2023-04-17 22-11-01](https://user-images.githubusercontent.com/86156069/232546519-0ef1468c-f625-4a5d-83d7-00f2463affd0.png)
![Screenshot from 2023-04-17 22-10-35](https://user-images.githubusercontent.com/86156069/232546496-8954b89f-31f0-435a-9697-3b12e0b099e9.png)
![Screenshot from 2023-04-17 22-05-07](https://user-images.githubusercontent.com/86156069/232546457-2e37dae7-3e62-4ad7-89f1-a9664bc116fb.png)

# Home Shop

This is a Vite React TS project using Tanstack Query for data fetching, Recoil for state management, Tailwind CSS for styling, chart.js for make chart for admin order details and Laravel API for backend.

## Installation

To get started with the project, clone the repository and run:

    git clone https://github.com/shakilhossain-cse/homeshop.git

Switch to the repo folder

    cd homeshop

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
    ├── ...
    ├── src
    │   ├── assets/                     # assets contains all images and files
    │   ├── components/                 # components folder contains all universal components
    │   ├── pages/                      # pages folder holds all pages
    │   │  │  ├── home/                 # home folder have home page all data
    │   │  │  ├── payment/              # payment older have all payment things
    │   │  │  ├── shop/                 # shop folder have lots of things like sorting
    │   │  │  ├── product/              # product folder have view full product
    │   │  │  ├── cart/                 # cart folder have all cart things
    │   │  │  ├── admin/                # admin folder have all of admin access data
    │   │  │  │   ├── Dashboard/        # dashboard folder have a chart where admin see order data
    │   │  │  │   ├── Order/            # Order folder get all user orders where you can change order status
    │   │  │  │   ├── products/         # product folder admin can add new product and edit also
    │   │  │  │   ├── user/             # user folder have all users  list and search from server
    │   │  │  ├── user/                 # user folder have all of user access data
    │   │  │  │   ├── Order/            # Order folder all product and view order status
    │   │  │  │   ├── profile/          # profile folder user can update his profile information
    │   │  │  │   ├── user/             # user folder have all users  list and search from server
    │   │  │  │   ├── wishlist/         # wishlist folder nothing anything yet
    │   │  │  ├── recoil/               # recoil folder have all of state things
    │   │  │  │   ├── atoms/            # atom folder have all of atom
    │   │  │  │   ├── selectors/        # selectors folder all of selector
    │   │  │  │   ├── constance.ts      # constance.ts file all of constance
    │   │  │  │   ├── index.ts          # index.ts this is entry point
    │   ├── routes/                     # all routes data
    │   ├── services/                   #services have all services api function
    │   ├── utils/                      #utils have all util function
    │   └── ...                 # etc.
    └── ...

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
