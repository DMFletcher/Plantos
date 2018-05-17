module.exports = function(sequelize, Sequelize) {
 
  var User = sequelize.define('user', {


      email: {
          type: Sequelize.STRING,
          validate: {
              isEmail: true
          }
      },

      password: {
          type: Sequelize.STRING,
          allowNull: false
      },

      last_login: {
          type: Sequelize.DATE
      },

      status: {
          type: Sequelize.ENUM('active', 'inactive'),
          defaultValue: 'active'
      }


  });

  User.associate = function (models) {
      // Associating User with Plants
      User.belongsToMany(models.Plant, {
        foreignKey: {
          allowNull: false
        },
        through: "plantUser"
      });
    };

  return User;

}