exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timer;

    function safeInterval() {
      if (start <= end) {
        console.log(start);
        timer = setTimeout(safeInterval, 100, start++);
      }
    }

    safeInterval();

    function cancel() {
      clearTimeout(timer);
    }

    return {
      cancel: cancel
    }
  }
};
