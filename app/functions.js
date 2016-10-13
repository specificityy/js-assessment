exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return (str1) => `${str}, ${str1}`;
  },

  makeClosures: function(arr, fn) {
    return arr.slice(0).map(x => () => x*x);
  },

  partial: function(fn, str1, str2) {
    return (str3) => fn(str1, str2, str3);
  },

  useArguments: function() {
    var args = Array.from(arguments);
    return args.reduce((prev, current) => prev += current);
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    var args1 = Array.prototype.slice.call(arguments, 1);

    return function() {
      var args2 = Array.from(arguments);
      return fn.apply(this, args1.concat(args2));
    }
  },

  curryIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1),
        missingArgs = fn.length - args.length,
        argsAccumulator = [];
    
    function curry(arg) {
      argsAccumulator.push(arg);
      missingArgs--;
      return missingArgs
        ? function(arg) { return curry(arg); }
        : fn.apply(this, argsAccumulator);
    }

    return curry;
  }

};