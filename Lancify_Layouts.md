# Lancify Platform Layout Architecture

This document provides a comprehensive breakdown of the layout systems, semantic HTML structure, and CSS alignment techniques (Grid, Flexbox) used across the various pages of the Lancify freelance platform.

---

## 1. Home Page (`Home.jsx` & `hero.css`)

**Structural Elements:**
- **`<div>`:** Extensively used as structural wrappers for the entire page and individual sections (e.g., `.hero`, `.hero-content`, `.search-container`).

**Layout Systems:**
- **Flexbox (Centering & Alignment):** 
  - The main `.hero` section uses `display: flex; align-items: center;` to vertically center the overlay content over the background video.
  - The search bar (`.search-container`) uses Flexbox to align the text input and the search button horizontally on the same line.
  - The `.categories` section uses `display: flex; flex-wrap: wrap;` to create a responsive, inline row of clickable category pills that wrap to the next line on smaller screens.
  - The `.trusted` section uses Flexbox with `align-items: center; gap: 40px;` to neatly align company logos horizontally.
- **Absolute Positioning:** The background video (`.hero-video`) uses absolute positioning to cover the entire background without disrupting the normal document flow.

---

## 2. Authentication Pages (Login & Register - `auth.css`)

**Structural Elements:**
- **`<div>`:** Used for the main container (`.auth-container`) and the white card UI (`.auth-card`).

**Layout Systems:**
- **Flexbox (Perfect Centering):** 
  - The parent `.auth-container` is set to `min-height: 100vh; display: flex; align-items: center; justify-content: center;`. This creates a perfect full-screen layout that centers the authentication card both horizontally and vertically.
- **Flexbox (Column Stacking):**
  - Inside the card, the `.auth-card` itself and the `.auth-form` utilize `display: flex; flex-direction: column;`. This efficiently stacks the title, inputs, and buttons vertically with consistent spacing using the `gap` property.

---

## 3. Gigs Discovery Page (`Gigs.jsx` & `gigs.css`)

**Structural Elements:**
- **`<div>`:** Acts as the main structural block for filters, headers, and the gig list container.

**Layout Systems:**
- **CSS Grid (Responsive Card Layout):** 
  - The list of gig cards (`.gigs-grid`) relies entirely on CSS Grid: `display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));`. 
  - *How it works:* This is a highly responsive approach. It tells the browser to automatically create as many columns as possible, ensuring each column is at least `280px` wide. If the screen shrinks, the cards automatically flow into fewer columns.
- **Flexbox (Horizontal Bars):**
  - The filter row (`.filter-bar`) and results row (`.results-bar`) use `display: flex; justify-content: space-between;` to push elements to opposite ends of the screen.

---

## 4. Payment Page (`Pay.jsx` & `pay.css`)

**Structural Elements:**
- **`<div>`:** Wraps the checkout form, order summary, and split-screen layouts.

**Layout Systems:**
- **Flexbox (Split Screen & Columns):**
  - The main container (`.pay-container`) uses Flexbox to center the checkout box on the screen.
  - The inner wrapper (`.pay-wrapper`) uses `display: flex;` to create a two-column layout. The left side (payment form) uses `flex: 2;` (taking up 2/3 of the space), and the right side (order summary) uses `flex: 1;` (taking up 1/3 of the space).
  - Inside the form, `.form-row` uses Flexbox to place the Expiry Date and CVV inputs side-by-side (`flex: 1` on each input group to share equal width).

---

## 5. Seller Dashboard & Add Gig (`SellerDashboard.jsx`, `AddGig.jsx` & `dashboard.css`)

**Structural Elements:**
- **`<div>`:** Main wrapper elements.
- **`<table>`:** Used semantically in the `SellerDashboard.jsx` to display a list of the user's active gigs, with columns for Image, Title, Price, Orders, and Actions.

**Layout Systems:**
- **Flexbox (Header Alignment):** 
  - The `.dashboard-header` uses `display: flex; justify-content: space-between; align-items: center;` to place the page title on the left and the "Add New Gig" button on the right.
- **CSS Grid (Form Layout):**
  - In the "Add Gig" form (`.add-gig-form`), CSS Grid is utilized: `display: grid; grid-template-columns: 1fr 1fr; gap: 30px;`.
  - *How it works:* This splits the complex gig creation form evenly into two distinct columns (left for titles/categories, right for pricing/images). A media query adjusts this to a single column (`grid-template-columns: 1fr;`) on smaller screens.

---

## 6. Become a Seller Page (`BecomeSeller.jsx` & `become-seller.css`)

**Structural Elements:**
- **`<section>`:** Used for semantic HTML meaning. It divides the page into major thematic parts: the hero banner (`<section className="seller-hero">`) and the features block (`<section className="features-section">`).

**Layout Systems:**
- **Flexbox (Wrapping Cards):**
  - The `.features-grid` uses `display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;`.
  - *How it works:* The "flex-wrap: wrap" property ensures that if the screen size becomes too small to comfortably fit all three feature cards side-by-side, they will cleanly drop down to the next row, preventing horizontal scrolling and maintaining a mobile-friendly view.
