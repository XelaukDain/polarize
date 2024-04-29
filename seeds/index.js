const sequelize = require('../config/connection');
const seedChats = require('./chatData');
const seedMessages = require('./messageData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedChats();

  await seedMessages();

  process.exit(0);
};

seedAll();