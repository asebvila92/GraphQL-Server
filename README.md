README...

Inside of prismaServer folder run docker-compose up -d
yarn install inside of GraphQL_Server
go to localhost:4000 and write a query or mutation


DateTime

The DateTime type can be used to store date and/or time values. A good example might be a person's date of birth or the time/data when a specific event is happening.

When used as arguments in an operation, DateTime fields have to be specified in ISO 8601 format and are typically passed as strings, here are a few examples:

    "2015"
    "2015-11"
    "2015-11-22"
    "2015-11-22T13:57:31.123Z".