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

async function register(context, args) {
  //const hashedPassword = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.prisma.createUser({
    email: args.email,
    password: args.password,
    name: args.name
  })
  return user
}

module.exports = {
  login,
  register
}