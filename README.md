eCommerce Store

C4 Nexus

This project was created as part of a job assignment for C4 Nexus, aligning with their specified requirements.

A Fully Functional E-Commerce Website Built With React, With Authentication and Credit Card Support
I built the website entirely from scratch and designed it without using any pre-made component libraries to demonstrate proficiency in JavaScript, HTML and CSS

Ensured responsive design for seamless user experience on both desktop and mobile devices

The site has :
- Developed a navigational menu with 4 pages (5 if logged in)
- Implemented a product counter section to display the number of products in the product grid (x out of y)
- Implemented grid and list view for better user experience
- Developed a filtering mechanism for categories, companies, colors, price range, and shipping
- Integrated sorting mechanism allowing users to sort by A-Z, Z-A, Price Ascending, and Price Descending
- Created a section for product name and description, providing a brief overview of the category
- Implemented a load more button functionality to load additional pages of product tiles in the grid

Technologies : 
- Utilized Auth0 API for secure authentication
- Utilized Stripe API to implement credit card checkout functionality
- Implemented backend using Firebase
- Utilized Axios for data fetching
- Used Styled-Components to design components
- Implemented global state management using React Context API
- Utilized React Router for efficient page navigation

You can see the project from here :
- Netlify link : https://a-s-ecommerce-shop.netlify.app/
- Or download the project, run - npm install, and start the project with - ntl dev

Worknotes:

7/8/2023
- Added Header, Footer
- Added Routes to the page
- Product card done
- Grid done
- Started working on filter menu
- Added dummy data
- Rendering products items dynamically
- Started working on Load More BUTTON

8/8/2023
- done with load more button
- implemented working with api fetching data from firebase
- done with x out of y products
- some visual changes
- add to favourites button

9/8/2023
- styled the navbar and footer (also made is responsive) added blank pages
- done with most of the visual stuff with the site
- everything responsive up to now

10/8/2023
- made FeaturedProducts component and logic
- made Single products component and logic
- made product images
- product card styled and 100% done
- colors buttons and add to cart button added quantity buttons added

11/8/2023
- filter reducers done
- products grid view done
- products list view done
- sort funtionality

12/8/2023
- search,category,company,colors,price filters added
- filters functionality added
- list view visual updates

13/8/2023
- done with the cart page visually and functionality wise
- done with authentication (used auth0 because of the faster setup)

14/8/2023
- made private route for checkout page and authwrapper added
- added the loadmore functionality
- added notifications when item added or removed from the cart
- added items with discounted price

15/8/2023
- deployed site to netlify cli
- added netlify function for stripe checkout
- added stripe checkout
- made some visual changes / fixs
- fixed bugs
