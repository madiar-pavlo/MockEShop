# The Mock E-Shop 🛒

**The Mock E-Shop** is a project created using the **React stack**:

1. React
2. TypeScript (TS)
3. Redux:
   - Redux Toolkit with RTK Thunk and RTK Query
4. React Router
5. Supabase-js
6. Material UI
7. Custom architectural decisions

I created this project to improve my skills in web development. This project demonstrates my ability to:

- Work with external SDKs
- Communicate with a backend
- Create backend logic (only logic, backend is no-code Supabase)
- Authenticate users with credentials and Google Auth (OAuth)
- Validate forms
- Implement filter logic and infinite scroll with RTK Query

---

## How to Use

1. The interface is user-friendly. You only need to **authenticate** to access all the features of the Mock E-Shop. 🔑

---

## Nearest Plans

1. Migration to **Next.js**
2. Refactoring and separating more code (some components aren't pure)
3. Possible migration to **Tanstack Query** instead of RTK Query
4. Creating Redux slices for complex interface logic instead of using React Context API
5. Localization: Add support for multiple languages (e.g., English, Czech) to make the platform accessible to a wider audience.

---

## Long-Term Plans

1. Create my own backend for the Mock E-Shop using a JavaScript backend framework, Java, or C#.

---

## Detailed Description

### Home Page

1. **Welcome Hero Section**
2. **Preview Products Section** – show products what the Mock E-Shop can sell
3. **Features Section**:
   - Describes the key features of the platform

---

### Products

#### Catalog Page

1. **Filter Interface**:
   - Uses URL params (`URLSearchParams`) to save filters and allows users to share URLs with selected filters
   - Search field
   - Price range slider
   - Category selector
   - **_Future Features_**:
     - Filter by product reviews
2. **Infinite Scroll Feed with Products**:
   - Displays a skeleton loader while products are loading
   - Switches to a normal product list when the user sets filter rules
   - **Product Card**:
     - Uses **Swiper** to show a slider with images (I focused on logic in this project; my fully custom UI is in a previous project)

#### Product Page

1. Uses `react-router` params to pass the product ID
2. **Color and Size Bar**
3. **Quantity Field**:
   - The maximum value depends on the selected variant and size bar
4. **_Future Features_**:
   - **Reviews**:
     - Users can leave reviews or comments
     - Users can like and comment on other comments

---

### Cart

1. **Cart Icon** – displays the current number of products in the cart without opening it
2. Displays current cart items
3. Allows users to delete cart items
4. Displays the total price

---

### User

#### Auth Page

1. Validates authentication credentials
2. After registration, the Mock E-Shop sends a confirmation email to the user
3. Users can log in or sign in with **OAuth** (Google)
4. **_Future Features_**:
   - After redirecting to the "wait for confirmation" page, implement **WebSockets** for real-time updates
   - Add password recovery functionality

#### Profile Page

1. Displays the user's photo if registered via **OAuth**
2. Displays the user's email
3. Displays the user's name if registered via **OAuth**
4. Displays the user's **order history** – users can click on an order to view the products and total cost
5. **_Future Features_**:
   - **Comments** and/or **Review** history
   - **Favorites** and/or **Saved** products
   - Possibly add order information (house number, address), but I'm not sure yet

---

### Order

#### Order Confirmation Page

1. Contains a form for order information with validation for **Card Number**, **DD/MM**, and **CVV**
2. Displays **Cart** items

#### Order Information Page

1. Displays all non-sensitive order information (I don't save card credentials – it's illegal) and cart items

---

This project is a work in progress, and I'm excited to keep improving it! 🚀 Feel free to contribute or share your feedback.
