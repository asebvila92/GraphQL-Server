const jwt = require('jsonwebtoken')
const { generateToken } = require('../helpers/auth')

async function login(context, args) {
  const user = await context.prisma.prisma.user({
    email: args.email,
  })
  if (!user) {
    console.log('Error!')
    throw new Error('Invalid Login')
  }
  //const passwordMatch = await bcrypt.compare(args.password, user.password)
  if (args.password !== user.password) {
    console.log('Error!')
    throw new Error('Invalid Login')
  }
  delete user.password
  const token = generateToken(user);

  return {
    token,
    user
  }

}

module.exports = {
  login
}