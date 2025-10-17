import express from "express";
import employeesRouter from "./routes/employees.js";

const app = express();

app.use(express.json());

// root route
app.get("/", (request, response) => {
  request.send("Hello employees!");
});

// mount the employees router
app.use("/employees", employeesRouter);

// error handler
app.use((error, request, response, next) => {
  console.error(error.stack);
  request.status(500).send("Something broke");
});

export default app;