// const express = require("express");
// const { PORT = 3001 } = process.env;
// const app = express();

// ///////////////////-------------------------------------------- Middleware

// app.use((req, res, next) => {
//     console.log("---------------------");
//     console.log("req.url:", req.url);
//     console.log("req.method:", req.method);
//     console.log("req.session:", req.session);
//     console.log("---------------------");
//     next();
// });
// //------------------------------------------------ Cookie Session
// const cookieSession = require("cookie-session");
// app.use(
//     cookieSession({
//         secret: `Awesome`,
//         maxAge: 1000 * 60 * 60 * 24 * 14,
//     })
// );

// app.use(compression());

// app.use(express.static(path.join(__dirname, "..", "client", "public")));

// app.use(express.urlencoded({ extended: false }));
// // json parser
// app.use(express.json());

// //check if user is logged in from the session
// app.get("/user/id.json", (req, res) => {
//     console.log(req.session.userId);
//     res.json({
//         userId: req.session.userId,
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });
