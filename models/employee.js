'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    name: DataTypes.TEXT,
    department: DataTypes.TEXT,
    location: DataTypes.TEXT,
    role: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};