Template.selectDropdown.helpers({
  required() {
    return this.required ? "required" : "";
  },
  dropdownClasses() {
    var classes = "ui dropdown";

		// Add selection class
		if (this.selection) {
			classes += " selection";
		}

    // Add search class, also add selection for proper design
    if (this.search || this.fullTextSearch) {
      classes += " search selection";
    }

		// Add multiple class
		if (this.multiple) {
			classes += " multiple";
		}

    // Add custom classes
    if (this.classNames) {
      classes += " " + this.classNames;
    }

    return classes;
  },
  placeholder() {
    return this.placeholder || "Select";
  }
});

Template.selectDropdown.events({
	"click .ui.clear.button"(event) {
		$(event.target).closest(".ui.dropdown").dropdown("clear").dropdown("hide");
	}
});

Template.selectDropdown.onRendered(function() {
  this.$(this.firstNode).dropdown({
    fullTextSearch:         this.data.fullTextSearch || false,
		allowAdditions:         this.data.allowAdditions || false,
		maxSelections:          this.data.maxSelections || false,
    allowCategorySelection: this.data.allowCategorySelection || false,
		useLabels:              this.data.useLabels === false ? false : true
  });
});

Template.selectDropdownRecursive.helpers({
  itemHtmlAtts() {
    return _.extend(
			{ class: "item" },
			_.omit(this, "label", "value", "icon", "label", "description", "itemGroup", "category", "items")
		);
  }
});
