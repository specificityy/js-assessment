exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let deferred = $.Deferred();
    setTimeout(() => deferred.resolve(value), 100);
    return deferred.promise();
  },

  manipulateRemoteData: function(url) {
    let deferred = $.Deferred(),
        get = $.ajax({ url: url });

    get.done(({ people }) => {
      let names = [];
      for (let { name } of people) {
        names.push(name);
      }

      deferred.resolve(names.sort());
    });

    return deferred.promise();
  }
};
