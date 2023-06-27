const getAllStudent = async ({ page, size, searchString }) => {
  console.log("get all student");
};

const insertStudent = async ({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) => {
  console.log("insert student");
};

export default {
  getAllStudent,
  insertStudent,
};
