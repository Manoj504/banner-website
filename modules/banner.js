// backend/models/banner.js
module.exports = (sequelize, DataTypes) => {
    const Banner = sequelize.define('Banner', {
      description: DataTypes.TEXT,
      timer: DataTypes.INTEGER,
      link: DataTypes.TEXT,
      isVisible: DataTypes.BOOLEAN
    });
  
    return Banner;
  };
  