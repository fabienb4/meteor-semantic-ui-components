Template.ConnectionLost.helpers({
  text() {
    return this.text || "Connection to server was lost";
  },
  subText() {
    return this.subText || "Trying to reconnect...";
  }
})
