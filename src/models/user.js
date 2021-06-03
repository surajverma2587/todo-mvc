const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection");

const options = {
  hooks: {
    beforeBulkCreate: async (users) => {
      const promises = users.map((user) => {
        return bcrypt.hash(user.password, 10);
      });

      const passwords = await Promise.all(promises);

      passwords.forEach((password, index) => {
        users[index].password = password;
      });
    },
  },
  sequelize,
  modelName: "user",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      unique: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class User extends Model {}

User.init(schema, options);

module.exports = User;
