const fetch = require("node-fetch");
const yup = require("yup");

describe("1 - Comentários de Posts", () => {
  test("1.1 - Validação de nome", () => {
    const name = "John";

    expect(name).toBe("John");
    expect(name).not.toBe("João");
  });

  test("1.2 - Listagem de comentários de um post específico", async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1/comments`
    );

    expect(response.status).toEqual(200);

    const commentSchema = yup.object({
      postId: yup.number().positive().required(),
      id: yup.number().min(1).max(5).required(),
      name: yup.string().required(),
      email: yup.string().email().required(),
      body: yup.string().required(),
    });

    const commentsSchema = yup.array().of(commentSchema).required();
    const comments = await response.json();
    await commentsSchema.validate(comments);
  });
});
