import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message-container').append(data.mod_message)
    if ($('#messages').length > 0) {
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
      
    }
    // Called when there's incoming data on the websocket for this channel
    if(Notification.permission === 'granted'){
      var title = 'New Message from ' + data.u;
      var body = data.mess
      var options = { body: body}
      new Notification(title,options)
    }
  }
});
