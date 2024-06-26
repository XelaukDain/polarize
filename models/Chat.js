const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Chat extends Model {}

Chat.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      members: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'chat',
    }
  );
  
  module.exports = Chat;