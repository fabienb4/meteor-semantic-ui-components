Template.selectDropdown.helpers({
  placeholder: function() {
    return this.placeholder || "Select";
  },
  required: function() {
    return this.isRequired ? "required" : "";
  },
  search: function() {
    return this.isSearchable ? "search" : "";
  }
});

Template.selectDropdown.onRendered(function() {
  this.$(".ui.dropdown").dropdown({ fullTextSearch: this.data.fullTextSearch || false });
});
