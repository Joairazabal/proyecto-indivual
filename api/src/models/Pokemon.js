const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idPokemon: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: true,
    prymarikey: true
    },
    life:{
      type: DataTypes.INTEGER,
      allowNull: true
    },

     attack:{
      type:DataTypes.INTEGER,
      allowNull: true
    },

    valocity:{
      type:DataTypes.INTEGER,
      allowNull: true
    },

    heigth:{
      type:DataTypes.INTEGER,
      allowNull: true
    },

    weight:{
      type:DataTypes.INTEGER,
      allowNull: true
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  });

};
