exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    let ret = [];
    let getFiles = ({ dir, files }, dirCheck) => {
      dirCheck = dirCheck || (!dirName || dir === dirName);
      for (let file of files) {
        let isString = typeof file === 'string';
        isString && dirCheck ? ret.push(file) : !isString && getFiles(file, dirCheck);
      }
    }
    
    getFiles(data);

    return ret;
  },

  permute: function(arr) {
    let combinationsList = [], combination = [];
    let loop = (values) => {

      for (let i = 0; i < values.length; i++) {
        combination.push(values.splice(i, 1)[0]);

        if (values.length === 0)
          combinationsList[combinationsList.length] = combination.slice(0);

        loop(values);
        values.splice(i, 0, combination.pop());
      }
    }

    loop(arr);
    return combinationsList;
  },

  fibonacci: function(n) {
    let sequence = [];
    let fib_gen = (prev, curr) => sequence.push(prev + curr) === n ? curr : fib_gen(curr, sequence[sequence.length-1]);

    return fib_gen(0, 1);
  },

  validParentheses: function(n) {
    let validPair = n  => {
      if (n === 0)
        return [''];

      let result = [], i;
      for (i = 0; i < n; ++i) {

        let lefts = validPair(i),
            rights = validPair(n - i - 1);

        for (let l = 0; l < lefts.length; ++l)
          for (let r = 0; r < rights.length; ++r)
            result.push("(" + lefts[l] + ")" + rights[r]);
      }

      return result;
    }

    let ret = validPair(n);
    return ret;
  }
};
