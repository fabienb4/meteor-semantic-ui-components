Template.selectDropdown.helpers({
  required: function() {
    return this.required ? "required" : "";
  },
  divClasses: function() {
    var classes = "ui fluid selection dropdown";

    if (this.search || this.fullTextSearch) {
      classes += " search";
    }

    return classes;
  },
  placeholder: function() {
    return this.placeholder || "Select";
  }
});

Template.selectDropdown.events({
	"click .ui.clear.button": function(event) {
		$(event.target).closest(".ui.dropdown").dropdown("clear");
	}
});

Template.selectDropdown.onRendered(function() {
  this.$(".ui.dropdown").dropdown({ fullTextSearch: this.data.fullTextSearch || false });
});
