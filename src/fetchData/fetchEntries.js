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
    from: args.from,
    until: args.until,
    description: args.description,
    user: {
      connect: {
        id: args.user_id
      }
    }
  });
}

function deleteEntry(context, args) {
  return context.prisma.prisma.deleteEntry({
    id: args.entry_id
  })
}

module.exports = {
  getEntries,
  getEntryById,
  getUserOfEntry,
  addEntry,
  deleteEntry
}
