const zmq = require('zeromq');
const subscriber = zmq.socket('sub')
subscriber.connect('tcp://localhost:3000')

subscriber.subscribe('ByFilename')

subscriber.on('message', (topic, data) => {
    const message = JSON.parse(data)
    const date = new Date(message.timestamp)
    console.log(`Файл ${message.file} изменён `);
})

