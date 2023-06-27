import HttpStatusCode from "../exceptions/HttpStatusCode.js";

async function getAllStudent(req, res) {
  res.status(HttpStatusCode.OK).json({
    message: " Get all student success",
    data: [
      {
        name: "Lâm",
        age: "23",
        email: "123@gmail.com",
      },
      {
        name: "Hảo",
        age: "23",
        email: "ngochaor@gmail.com",
      },
    ],
  });
}
async function getStudentById(req, res) {}
async function updateStudent(req, res) {}
async function insertStudent(req, res) {}

export default {
  getAllStudent,
  getStudentById,
  insertStudent,
  updateStudent,
};
