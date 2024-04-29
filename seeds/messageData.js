const { Message } = require('../models');

const messagedata = [
    {
        date: '2021-06-01 12:00:00',
        image: null,
        text: 'Hello, world!',
        poster: '1',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:01:00',
        image: null,
        text: 'How are you?',
        poster: '1',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:02:00',
        image: null,
        text: 'I am good, thank you!',
        poster: '2',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:03:00',
        image: null,
        text: 'How are you?',
        poster: '2',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:04:00',
        image: null,
        text: 'I am good, thank you!',
        poster: '1',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:05:00',
        image: null,
        text: 'How are you?',
        poster: '1',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:06:00',
        image: null,
        text: 'I am good, thank you!',
        poster: '2',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:07:00',
        image: null,
        text: 'How are you?',
        poster: '2',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:08:00',
        image: null,
        text: 'I am good, thank you!',
        poster: '1',
        chat_id: '1',
    },
    {
        date: '2021-06-01 12:09:00',
        image: null,
        text: 'How are you?',
        poster: '1',
        chat_id: '1',
    },
];

const seedMessages = () => Message.bulkCreate(messagedata);

module.exports = seedMessages;

