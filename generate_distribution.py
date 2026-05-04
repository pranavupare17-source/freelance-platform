import os

explanations = {
    # Member 1
    "src/components/Navbar.jsx": "Renders the top navigation bar, manages user session state (logged in vs logged out), and provides links to key pages like Login, Register, and User Dashboard.",
    "src/components/Footer.jsx": "Displays the site footer containing links, copyright info, and social media icons to anchor the platform design.",
    "src/components/Hero.jsx": "The main landing page component featuring a background video, the platform's primary value proposition, and a search bar to find services.",
    "src/components/Business.jsx": "A promotional section highlighting the benefits of using the platform for businesses and clients.",
    "src/index.css": "The global stylesheet containing foundational CSS rules, variables, layout structures, and responsive design media queries used across the app.",
    "src/App.js": "The root React component that sets up the React Router for navigation, defining all the page routes and their corresponding components.",
    "src/index.js": "The entry point for the React application, rendering the App component into the DOM.",
    
    # Member 2
    "server/server.js": "The main entry point for the Node.js backend. Sets up the Express server, connects to MongoDB, configures middleware (CORS, Cookie-Parser), and defines the base API routes.",
    "server/models/User.js": "Mongoose schema defining the structure of user data in MongoDB, including fields for username, email, password, and whether the user is a seller.",
    "server/models/Gig.js": "Mongoose schema defining the structure of a gig (service), including title, description, price, category, and reference to the seller.",
    "server/models/Order.js": "Mongoose schema for tracking purchases. Contains references to the gig, buyer, seller, price, and payment status.",
    "server/models/Message.js": "Mongoose schema for the chat system, tracking messages between users.",
    "server/routes/gigRoute.js": "Express router containing endpoints for CRUD operations on gigs (e.g., getting all gigs, creating a gig, deleting a gig).",
    "server/routes/userRoute.js": "Express router for user-related endpoints, such as fetching user details or deleting an account.",
    "server/controllers/gigController.js": "Contains the actual business logic for the gig routes, interacting with the MongoDB database to create, read, update, or delete gigs.",
    "server/controllers/userController.js": "Contains the business logic for user-related routes, managing user data retrieval and modification.",
    
    # Member 3
    "src/pages/AddGig.jsx": "A form page that allows sellers to create and publish a new gig. It gathers inputs like title, description, category, price, and images, sending a POST request to the API.",
    "src/pages/SellerDashboard.jsx": "A dashboard where sellers can manage their existing gigs, view performance, and add new services.",
    "src/pages/Gigs.jsx": "The main browsing page where buyers can view multiple gigs, filter them by category or price, and search for specific services.",
    "src/pages/Gig.jsx": "The detailed view of a single gig. It displays the full description, seller information, pricing details, and a button to initiate the purchase.",
    "src/components/GigCard.jsx": "A reusable UI component used to display a summary of a gig (image, title, price, seller) in a grid layout on the Gigs browsing page.",
    
    # Member 4
    "src/pages/Login.jsx": "The user authentication page containing a form to capture credentials and send them to the backend API to log in and receive a JWT cookie.",
    "src/pages/Register.jsx": "The sign-up page where new users can create an account, choosing whether they want to be a standard user (buyer) or a seller.",
    "src/pages/Pay.jsx": "The checkout page that handles the order process, integrating payment logic and confirming the purchase of a gig.",
    "src/pages/Orders.jsx": "A page displaying a table of all past orders associated with the logged-in user, whether they are a buyer or a seller.",
    "server/routes/orderRoute.js": "Express router defining the API endpoints for order management, such as creating a new order or fetching user orders.",
    "server/routes/authRoute.js": "Express router handling authentication endpoints like '/register', '/login', and '/logout'.",
    "server/controllers/orderController.js": "The business logic for processing orders, interacting with the database to create order records and update payment statuses.",
    "server/controllers/authController.js": "The core security logic. Handles hashing passwords with bcrypt during registration, verifying credentials during login, and generating JSON Web Tokens (JWT) for session management.",
    "server/middleware/jwt.js": "Custom Express middleware used to verify the JWT cookie on protected routes, ensuring only authenticated users can access certain APIs."
}

members = {
    "Mem 1 - Pranav": [
        "src/components/Navbar.jsx",
        "src/components/Footer.jsx",
        "src/components/Hero.jsx",
        "src/components/Business.jsx",
        "src/index.css",
        "src/App.js",
        "src/index.js"
    ],
    "Mem 2 - Swaraj": [
        "server/server.js",
        "server/models/User.js",
        "server/models/Gig.js",
        "server/models/Order.js",
        "server/models/Message.js",
        "server/routes/gigRoute.js",
        "server/routes/userRoute.js",
        "server/controllers/gigController.js",
        "server/controllers/userController.js"
    ],
    "Mem 3 - Pushkar": [
        "src/pages/AddGig.jsx",
        "src/pages/SellerDashboard.jsx",
        "src/pages/Gigs.jsx",
        "src/pages/Gig.jsx",
        "src/components/GigCard.jsx"
    ],
    "Mem 4 - Raj": [
        "src/pages/Login.jsx",
        "src/pages/Register.jsx",
        "src/pages/Pay.jsx",
        "src/pages/Orders.jsx",
        "server/routes/orderRoute.js",
        "server/routes/authRoute.js",
        "server/controllers/orderController.js",
        "server/controllers/authController.js",
        "server/middleware/jwt.js"
    ]
}

def generate_markdown():
    for member, files in members.items():
        output_file = f"{member}.md"
        with open(output_file, 'w', encoding='utf-8') as outfile:
            outfile.write(f"# {member} - Code Contribution\\n\\n")
            outfile.write("This document contains the source code for the files assigned to this team member, along with a brief explanation of each file's purpose.\\n\\n")
            
            for filepath in files:
                if os.path.exists(filepath):
                    with open(filepath, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                    
                    extension = filepath.split('.')[-1]
                    lang = "javascript"
                    if extension == "jsx":
                        lang = "jsx"
                    elif extension == "css":
                        lang = "css"
                        
                    outfile.write(f"## `{filepath}`\\n\\n")
                    # Add explanation
                    if filepath in explanations:
                        outfile.write(f"**Description:** {explanations[filepath]}\\n\\n")
                    
                    outfile.write(f"```{lang}\\n")
                    outfile.write(content)
                    if not content.endswith('\\n'):
                        outfile.write("\\n")
                    outfile.write("```\\n\\n")
                else:
                    outfile.write(f"## `{filepath}`\\n\\n")
                    # Add explanation
                    if filepath in explanations:
                        outfile.write(f"**Description:** {explanations[filepath]}\\n\\n")
                    outfile.write("> [!WARNING]\\n> File not found.\\n\\n")
        print(f"Generated {output_file}")

if __name__ == "__main__":
    generate_markdown()
