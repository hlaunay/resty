var answer = {StatusCode : 200,
      headers : {"Content-Type" : 'application/json'},
      body : ""};

var Users = {
  Resource: {
    get: function(uid, callback) {
      answer.body = JSON.stringify({uid: uid, query: this.query});
      callback(null, answer);
    }
  },

  Collection: {
    get: function(callback) {
      answer.body = JSON.stringify({all: 'users'});
      callback(null, answer);
    }
  }
};

module.exports = Users;
