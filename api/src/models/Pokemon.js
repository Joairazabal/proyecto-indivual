const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    
    idPoke: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    idPokemon: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
    primaryKey: true
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: true
    },

     attack:{
      type:DataTypes.INTEGER,
      allowNull: true
    },

    speed:{
      type:DataTypes.INTEGER,
      allowNull: true
    },

    height:{
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
