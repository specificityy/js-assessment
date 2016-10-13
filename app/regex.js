exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\s*\d+\s*/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /\s*([A-Z])\1+\s*/i.test(str);
  },

  endsWithVowel: function(str) {
    return /\s*[aeiou]+\s*$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    let regex = /\s*\d{3}\s*/.exec(str);
    return regex ? regex[0] : false;
  },

  matchesPattern: function(str) {
    return /^s*\d{3}-\d{3}-\d{4}\s*$/.test(str);
  },

  isUSD: function(str) {
    return /^\s*\$(\d){1,3}(,(\d){3})*(\.\d{2})?\s*$/.test(str);
  }
};
