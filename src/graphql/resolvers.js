const { isAuthenticated } = require('../helpers/auth');
const { getEntryById, getUserOfEntry, getEntries, addEntry } = require('../fetchData/fetchEntries');
const { getUsers, getUserById } = require('../fetchData/fetchUsers');
const { login } = require('../fetchData/auth')

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = {
  Query: {
    entry: (parent, args, context) => isAuthenticated(context.user) ? getEntryById(context, args, parent) : null,
    entries: (parent, args, context) => isAuthenticated(context.user) ? getEntries(context, parent) : null,
    user: (parent, args, context) => isAuthenticated(context.user) ? getUserById(context, args, parent) : null,
    users: (parent, args, context) => isAuthenticated(context.user) ? getUsers(context) : null,
  },
  Mutation: {
    addEntry: (parent, args, context) => isAuthenticated(context.user) ? addEntry(context, args) : null,
    login: (parent, args, context) => login(context, args)
  },
  Entry: {
    user: (parent, args, context) => isAuthenticated(context.user) ? getUserOfEntry(context, parent) : null
  }
}


module.exports = {
  resolvers
}