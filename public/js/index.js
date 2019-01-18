let socket = io();

socket.on('connect', function () {
    console.log('connected to server');

});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('new message', message);
    let li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'John',
//     text: 'Hello'
// }, function(data) {
//     console.log('Got it!!', data);
// });

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    console.log('in the form processor');
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
})