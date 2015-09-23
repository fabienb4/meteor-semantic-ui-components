Template.menu.onRendered(function() {
  this.$(".ui.dropdown").dropdown();
});

Template.menu.helpers({
  isArray(value) {
    return _.isArray(value);
  }
});
