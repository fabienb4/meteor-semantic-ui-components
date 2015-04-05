Template.progressBar.helpers({
  percent: function() {
    var percent = (this.current / this.total) * 100;

    percent = Math.round(percent * 100) / 100;

    if (percent > 100)
      return 100;
    else if (percent < 0)
      return 0;

    return percent;
  },
  completeClass: function() {
    if (this.current === this.total) {
      if (this.showComplete)
        return this.completeClass ? this.completeClass : "green";

      return this.completeClass;
    }
  },
  lowBar: function() {
    if (this.current <= this.veryLow) {
      return "flashing fast";
    } else if (this.current <= this.low) {
      return "flashing";
    } else {
      return "";
    }
  }
});
