var answer = {StatusCode : 200,
      headers : {"Content-Type" : 'application/json'},
      body : ""};

var Songs = {
  Resource: {
    get: function(sid, callback) {
      answer.body = JSON.stringify({sid: sid});
      callback(null, answer);
    }
  },

  Collection: {
    get: function(callback) {
      answer.body = JSON.stringify({all: 'songs'});
      callback(null, answer);
    }
  }
};

module.exports = Songs;
