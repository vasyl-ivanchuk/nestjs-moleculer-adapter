module.exports = {
    name: 'test.service',
    actions: {
        getMessage() {
            return {
                message: 'Moleculer service data',
                timestamp: new Date()
            };
        },
    },
    events: {
        'entity.created': function (payload) {
            console.log('test.service::entity.created event handler. Payload:', payload);
        }
    }
};