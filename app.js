// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("./models/user");

// Create an instance of express
const app = express();
app.use( express.static( "public" ) );
// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Set up session middleware
app.use(session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true
}));

// Set up a MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Weppo-store", {
            useNewUrlParser: true,
            useUnifiedTopology: true,})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));


const attachUserToRequest = (req, res, next) => {
    if (req.session && req.session.user) {
        req.user = req.session.user;
    }
    next();
};

app.use(attachUserToRequest);
// Set up routes
app.get("/", (req, res) => {
    const { user } = req.session;
    if (user) {
        return res.redirect("/index-user");
    }
    res.render("index");
});

app.get("/signup", (req, res) => {
    const { user } = req.session;
    if (user) {
        return res.redirect("/index-user");
    }
    res.render("signup");
});

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    // Hash the password using bcrypt
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
            return res.redirect("/signup");
        }

        // Create a new user object
        const user = new User({
            name,
            email,
            password: hash
        });
        // Save the user to the database
        user.save()
            .then(() => res.redirect("/login"))
            .catch(err => console.log(err));
    });
});

app.get("/login", (req, res) => {
    const { user } = req.session;
    if (user) {
        return res.redirect("/index-user");
    }
    res.render("login");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Find the user in the database
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.redirect("/login");
            }

            // Compare the password using bcrypt
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.redirect("/login");
                }

                if (result === true) {
                    req.session.user = user;
                    return res.redirect("/index-user");
                }

                res.redirect("/login");
            });
        })
        .catch(err => console.log(err));
});

app.get("/index-user", (req, res) => {
    const { user } = req.session;
    if (!user) {
        return res.redirect("/login");
    }
    res.render("index-user", { user });
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

// Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
