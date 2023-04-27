const fetch = require("node-fetch");
const yup = require("yup");

const { todoSchema } = require("../schemas/todo.schema");

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("2 - TODO", () => {
  test("2.1 - Mostrar TODO específico", async () => {
    const response = await fetch(`${BASE_URL}/users/1/todos/1`);

    expect(response.ok).toBe(true);
    expect(response.status).toEqual(200);

    const data = await response.json();

    await todoSchema.validate(data);
  });

  test.only("2.2 - Listagem de TODOS", async () => {
    const response = await fetch(`${BASE_URL}/users/1/todos`);

    expect(response.ok).toBe(true);
    expect(response.status).toEqual(200);

    const data = await response.json();

    const todosSchema = yup.array().of(todoSchema).required();
    await todosSchema.validate(data);
  });
});
