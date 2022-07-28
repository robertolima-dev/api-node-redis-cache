'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            value: DataTypes.FLOAT,
            discount: DataTypes.FLOAT,
            status: DataTypes.BOOLEAN,
            inventory: DataTypes.INTEGER
        },
        {
            timestamps: true,
            paranoid: true
        }
    )

    return Product
}

