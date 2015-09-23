Template.progressBar.helpers({
  percent() {
    let percent = Math.round((((this.current / this.total) * 100) * 100) / 100);

    if (percent > 100) {
      return 100;
    } else if (percent < 0) {
      return 0;
    }

    return percent;
  },
  completeClass() {
    if (this.current === this.total) {
      if (this.showComplete) {
        return this.completeClass ? this.completeClass : "green";
      }

      return this.completeClass;
    }
  },
  lowBar() {
    if (this.current <= this.veryLow) {
      return "flashing fast";
    } else if (this.current <= this.low) {
      return "flashing";
    } else {
      return "";
    }
  }
});
