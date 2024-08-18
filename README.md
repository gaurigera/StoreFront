The project makes use of open-source [dummyjson](https://dummyjson.com/) API for fetching all kinds of product details.

### What the project does? 
This project is *the* full front-end template needed for anyone aiming to create an ecommerce website. This is the solution created for the ecommerce assignment given by Profile.fyi

**Main functionalities**
- 
- _Responsive_ - takes care of all screens to provide good user experience.
- _Robust state management_ - makes use of `Zustand` library state management of user's cart items.
- _Persistence_ - makes use of browser's local storage to provide persistence for the user while they add items to cart.
- _Reusability and modularity_ - it has been taken care that the components are properly seperated as per concerns to ensure easy editing.


## Project Structure

```
|-- README.md
|-- components.json
|-- jsconfig.json
|-- next.config.mjs
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- public
|   |-- next.svg
|   `-- vercel.svg
|-- src
|   |-- app
|   |   |-- category
|   |   |   `-- [id]
|   |   |       |-- layout.js
|   |   |       `-- page.js
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.js
|   |   |-- loading.js
|   |   |-- login
|   |   |   `-- page.js
|   |   |-- page.js
|   |   |-- product
|   |   |   `-- [id]
|   |   |       |-- layout.js
|   |   |       |-- loading.js
|   |   |       `-- page.js
|   |   `-- search
|   |       |-- layout.js
|   |       `-- page.js
|   |-- components
|   |   |-- cart
|   |   |   |-- cart-item.jsx
|   |   |   |-- modal.jsx
|   |   |   |-- quantity-selector.jsx
|   |   |   `-- remove-item.jsx
|   |   |-- filter
|   |   |   |-- filter-sidebar.jsx
|   |   |   `-- sort-by.jsx
|   |   |-- header
|   |   |   |-- browse-category.jsx
|   |   |   |-- cart-button.jsx
|   |   |   |-- main-header.jsx
|   |   |   |-- mobile-menu.jsx
|   |   |   |-- search-input.jsx
|   |   |   `-- top-header.jsx
|   |   |-- product
|   |   |   |-- add-to-cart.jsx
|   |   |   |-- buy-now.jsx
|   |   |   |-- grid.jsx
|   |   |   |-- pagination.jsx
|   |   |   |-- product-card.jsx
|   |   |   `-- review.jsx
|   |   |-- skeletons
|   |   |   |-- product-card-skeleton.jsx
|   |   |   `-- product-page-skeleton.jsx
|   |   |-- ui
|   |   |   |-- button.jsx
|   |   |   |-- carousel.jsx
|   |   |   |-- discount-price.jsx
|   |   |   |-- empty-box.jsx
|   |   |   |-- input.jsx
|   |   |   |-- logo.jsx
|   |   |   |-- navigation-menu.jsx
|   |   |   |-- pagination.jsx
|   |   |   |-- price.jsx
|   |   |   |-- rating.jsx
|   |   |   |-- sheet.jsx
|   |   |   |-- skeleton.jsx
|   |   |   |-- slider.jsx
|   |   |   |-- theme-toggle.jsx
|   |   |   |-- toast.jsx
|   |   |   |-- toaster.jsx
|   |   |   `-- use-toast.js
|   |   `-- user
|   |       `-- login.jsx
|   `-- lib
|       |-- api
|       |   |-- fetcher.js
|       |   `-- index.js
|       |-- providers
|       |   |-- store-provider.jsx
|       |   |-- store.js
|       |   `-- theme-provider.jsx
|       |-- useStore.js
|       `-- utils.js
`-- tailwind.config.js
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
