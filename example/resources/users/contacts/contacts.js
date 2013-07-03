var answer = {StatusCode : 200,
      headers : {"Content-Type" : 'application/json'},
      body : ""};

var Contacts = {
  Resource: {
    get: function(uid, cid, callback) {
      answer.body = JSON.stringify({uid: uid, cid: cid});
      callback(null, answer);
    },

    post: function(uid, cid, callback) {
      answer.body = JSON.stringify({body: this.body});
      callback(null, answer);
    }
  },

  Collection: {
    get: function(uid, callback) {
      answer.body = JSON.stringify({uid: uid, all: 'contacts'});
      callback(null, answer);
    }
  }
};

module.exports = Contacts;
