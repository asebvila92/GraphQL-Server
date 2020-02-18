function getUsers(context) {
  return context.prisma.prisma.users();
}
function getUserById(context, args, parent) {
  console.log(parent);
  return context.prisma.prisma.user({
    id: args.id,
    email: args.email
  })
}

module.exports = {
  getUsers,
  getUserById
}