const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('tipo', {
        idTpo:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: true,
            prymarikey: true
        },
        
        name: {
            type: DataTypes.ENUM(
              'normal',
              'poison',
              'bug',
              'fire',
              'electric',
              'dragon',
              'unknown',
              'fighting',
              'ground',
              'ghost',
              'water',
              'psychic',
              'dark',
              'shadow',
              'flying',
              'rock',
              'steel',
              'grass',
              'ice',
              'fairy'
            ),
        },
        
    })
}