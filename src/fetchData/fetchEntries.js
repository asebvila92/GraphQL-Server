//--------------fetch of Prisma server People with Data in mongoDB --------------------------------

function getEntries(context) {
  return context.prisma.prisma.entries()
}

function getEntryById(context, args) {
  return context.prisma.prisma.entry({
    id: args.id
  })
}

function getUserOfEntry(context, parent) {
  return context.prisma.prisma.entry({
    id: parent.id
  }).user()
}

function addEntry(context, args) {
  return context.prisma.prisma.createEntry({
    user_id: args.user_id,
    from: args.from,
    until: args.until,
    description: args.description
  });
}

module.exports = {
  getEntries,
  getEntryById,
  getUserOfEntry,
  addEntry
}
