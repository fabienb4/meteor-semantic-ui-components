Template.selectDropdown.helpers({
  required() {
    return this.required ? "required" : "";
  },
  dropdownAtts() {
    var atts = { class: "ui dropdown" };

		// Add custom classes or default
		if (_.isString(this.classNames)) {
			atts += " " + this.classNames;
		} else {
			atts += " fluid selection";
		}

    // Add search class, also add selection for proper design
    if (this.search || this.fullTextSearch) {
      atts.class += " search";

      if (! _.includes(atts.class, "selection")) {
        atts.class += " selection";
      }
    }

		// Add multiple class
		if (this.multiple) {
			atts.class += " multiple";
		}

    return atts;
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
			_.omit(this, "label", "value", "icon", "circularLabel", "description", "itemGroup", "category", "items")
		);
  }
});
