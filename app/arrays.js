exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let ret = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item){
        ret = i;
        break;
      }
    }
    return ret;
  },

  sum: function(arr) {
    return arr.reduce((prev, current) => prev += current);
  },

  remove: function(arr, item) {
    let ret = arr.slice(0);
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] === item && ret.splice(i, 1);
    }
    return ret;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] === item && arr.splice(i, 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.length = arr.length-1;
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    let idx = arr1.length;
    for (let i = 0; i < arr2.length; i++) {
      arr1[idx++] = arr2[i];
    }
    return arr1;

    // or could just do
    // return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((total, current) => {
      if (current === item) total++;
      return total;
    }, 0);
  },

  duplicates: function(arr) {
    let ret = [],
        len = arr.length;
    for (let x = 0; x < len; x++) {
      for (let y = x+1; y < len; y++) {
        if (arr[x] === arr[y] && ret.indexOf(x) === -1)
          ret.push(arr[x]);
      }
    }
    return ret;
  },

  square: function(arr) {
    return arr.map(x => x*x);
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((occ, current, i) => {
      current === target && occ.push(i); 
      return occ;
    }, []);
  }
};
