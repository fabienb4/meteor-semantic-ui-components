Template.selectDropdown.helpers({
  required() {
    return this.required ? "required" : "";
  },
  divClasses() {
    var classes = "ui fluid selection dropdown";

    if (this.search || this.fullTextSearch) {
      classes += " search";
    }

    return classes;
  },
  placeholder() {
    return this.placeholder || "Select";
  },
  itemAtts() {
    return _.omit(this, ["label", "value"]);
  }
});

Template.selectDropdown.events({
	"click .ui.clear.button"(event) {
		$(event.target).closest(".ui.dropdown").dropdown("clear").dropdown("hide");
	}
});

Template.selectDropdown.onRendered(function() {
  this.$(".ui.dropdown").dropdown({ fullTextSearch: this.data.fullTextSearch || false });
});
