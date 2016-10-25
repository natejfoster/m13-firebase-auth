// JavaScript file

$(function() {
    // Chats reference
    var chats = firebase.database().ref('chats');

    // Listen for children being added:fired once on load, then each time a child is added
    chats.on('child-added', function(current) {
      var data = current.val();
      renderChat(current.key, data);
    })


    // Function to render each chat
    var renderChat = function(id, data) {
        // Build appropriate DOM elements and add them to the DOM
        var newChat = $('div');
        var name = $

    };


    // Assign event listener to the chat button

        // Push in a new element to the chats reference


});
