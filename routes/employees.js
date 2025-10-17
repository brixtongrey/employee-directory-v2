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

// GET /employees/:id
router.get("/:id", (request, response) => {
  const { id } = request.params;
  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return response.status(404).send("Employee not found");
  }

  response.json(employee);
});

// POST /employees
router.post("/", (request, response) => {
  const { name } = request.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return response.status(400).send("Invalid request: 'name' is required");
  }

  const newEmployee = {
    id: employees.length ? employees[employees.length - 1].id + 1 : 1,
    name: name.trim(),
  };

  employees.push(newEmployee);
  response.status(201).json(newEmployee);
});

export default router;
