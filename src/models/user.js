const { Model, DataTypes } = require("sequelize");

const hooks = require("../hooks");
const sequelize = require("../config/connection");

const options = {
  hooks,
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
