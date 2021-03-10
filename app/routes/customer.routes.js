module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer
  app.post("/devicetype", customers.create);

  // Retrieve all Customers
  app.get("/devicetype", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/devicetype/:devicetypeId", customers.findOne);

  // Update a Customer with customerId
  app.put("/devicetype/:devicetypeId", customers.update);

  // Delete a Customer with customerId
  app.delete("/devicetype/:devicetypeId", customers.delete);

  // Create a new Customer
  app.delete("/devicetype", customers.deleteAll);
};
