const User = require('./User');
const Chat = require('./Chat');
const Message = require('./Message');

User.hasMany(Chat, {
    foreignKey: 'admin_id',
});

Chat.belongsTo(User, {
    foreignKey: 'admin_id',
});

Chat.hasMany(Message, {
    foreignKey: 'chat_id',
});

Message.belongsTo(Chat, {
    foreignKey: 'chat_id',
});

module.exports = { User, Chat, Message};