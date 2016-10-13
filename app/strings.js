exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let regex = new RegExp("(\\w)\\1{" + amount + ",}", 'g');
    let ret = str.replace(regex, (match, p1, offset, string) => {
      return p1.repeat(amount);
    });
    return ret;
  },

  wordWrap: function(str, cols) {
    let ret = str.replace(/(\s)+[a-zA-Z]{2,}/g, (match) => {
      return '\n' + match.trimLeft();
    });

    return ret;
  },

  reverseString: function(str) {
    
    let ret = '', i = str.length - 1;
    for (; i >= 0; i--) {
      ret += str[i];
    }

    return ret;
  }
};
