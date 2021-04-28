'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Doctor, {
        foreignKey: 'doctorId',
        onDelete: 'CASCADE'
      });
    }
  };
  Record.init({
    userId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};