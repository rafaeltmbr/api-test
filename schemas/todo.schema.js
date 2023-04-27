const yup = require("yup");

const todoSchema = yup.object({
  userId: yup.number().positive().required(),
  id: yup.number().positive().required(),
  title: yup.string().min(1).required(),
  completed: yup.boolean().required(),
});

module.exports = { todoSchema };
