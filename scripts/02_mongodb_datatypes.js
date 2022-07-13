// Lets create a java scipt object with four key value pairs

var obj = {a: "", b: {}, c: [], d: true}
print(obj);

// print the object data type
typeof obj.a
typeof obj.b
typeof obj.c // arays are also treated as object in javascript
typeof obj.d

// BSON types will be assigned when these objects will be passed to mongodb server

ObjectId() // a newly creaed objectid will be created and returned


// all dates are stored in ISO Date format

ISODate() // returns the current date and returns the date object
Date() // formatted date 
new Date() // new ISODate object gets created

// convert a string to date format - All three will produce three different results
new Date("2020 January 15") 
new Date("2020-01-15")
new Date(2020, 01, 15) // 01 means February .. because for january it is 00

// add another java script object to demonstrate various numeric data types of mongodb
// If type is not mentioned, mongodb will store all numeric types as double
obj = {a: 10, b: 0, c: 5.75, d: NumberInt(10), e: NumberLong(123)}