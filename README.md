README...

You need to install docker in your computer to run this project

1- Inside of prismaServer folder run "docker-compose up -d". It will up two containers In the first MongoDB, in the other Prisma.
2- install prisma globaly: "yarn global add prisma"
3- run "prisma deploy"
2- run "yarn install" inside of GraphQL_Server to install dependencies which define in package.json.
3- run "yarn start"
4- go to localhost:4000 and write a query or mutation. 



---------DateTime------------------------------------------------------------------------------

The DateTime type can be used to store date and/or time values. A good example might be a person's date of birth or the time/data when a specific event is happening.

When used as arguments in an operation, DateTime fields have to be specified in ISO 8601 format and are typically passed as strings, here are a example:

    "2015-11-22T13:57:31.123Z".

-----------------------------------------------------------------------------------------------
Peste and run this mutations to save users in Mongo DB:

mutation adduser1{
  register(email:"asebvila@gmail.com", password:"099136646", name:"Andres Vila"){
    id
  }
}
mutation adduser2{  
  register(email:"micaela@gmail.com", password:"micaela123", name:"Micaela"){
    id
  }
}
mutation adduser3{
  register(email:"user@gmail.com", password:"user123", name:"user user"){
    id
  }
}

