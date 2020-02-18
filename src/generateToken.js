const jwt = require('jsonwebtoken');
const data = {
  uid: 1,
  data: {
    user: {
      id: 1,
      username: 'test',
      email: 'test@towerhousestudio.com',
      password: '$2a$10$TLRlbK1VTA1LBkd4NU7ARO0.QDdsAEyjvfZ8a.hL05XbnveKCyn1G',
      created_at: '2020-02-13 14:06:03',
      updated_at: '2020-02-13 14:06:03'
    }
  },
  iat: 1581688469
}

const token = jwt.sign(data, "onepassword");

module.exports = {
  "token": token
}