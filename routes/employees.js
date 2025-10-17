import express from "express";
import employees from "../db/employees.js";

const router = express.Router();

// GET /employees
router.get("/", (request, response) => {
  response.json(employees);
});

// GET /employees/random
router.get("/random", (request, response) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  response.json(employees[randomIndex]);
});


