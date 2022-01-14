// import { express } from "express";
// import { moduleToFetch } from "./index";


// const getDatabase = moduleToFetch.getDatabase;
// const newEntryToDatabase = moduleToFetch.newEntryToDatabase;
// const port = 8000;

// const app = express();

// app.use(express.static("public"));
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.get("/users", async (req, res) => {
//   const users = await getDatabase();
//   res.json(users);
// });

// app.post("/submit-form", async (req, res) => {
//   const name = req.body.name;
//   const role = req.body.role;
//   await newEntryToDatabase(name, role);
//   res.redirect("/");
//   res.end();
// });

// app.listen(port, console.log(`Server started on ${port}`));