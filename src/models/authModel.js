const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync("123456", 10);

const users = [{ id: 1, username: "admin", password: hashedPassword }];

module.exports = users;
