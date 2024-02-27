# JSON && XML
- JSON (JavaScript Object Notation) and XML (eXtensible Markup Language) are both data interchange formats used to structure and transmit data between different systems, particularly in web applications and APIs. While they serve similar purposes, they have distinct characteristics and syntax:

JSON (JavaScript Object Notation):

JSON is a lightweight data interchange format inspired by JavaScript object literal syntax.
It is easy for humans to read and write and easy for machines to parse and generate.
JSON is based on key-value pairs and supports various data types, including strings, numbers, arrays, objects, booleans, and null values.
It is often used for serializing and transmitting structured data between a client and a server in web applications.
JSON Example:
 {
  "name": "John",
  "age": 30,
  "isStudent": false,
  "favorites": ["apple", "banana", "orange"]
}


# XML
- XML (eXtensible Markup Language):

XML is a markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.
It uses tags to define elements and attributes to provide additional information about elements.
XML documents have a hierarchical structure with a root element containing child elements and attributes.
XML is often used for representing structured data and exchanging information between different systems and platforms.
XML Example:
 <person>
  <name>John</name>
  <age>30</age>
  <isStudent>false</isStudent>
  <favorites>
    <favorite>apple</favorite>
    <favorite>banana</favorite>
    <favorite>orange</favorite>
  </favorites>
</person>



# object destructure
# type 1
- const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const { name, age, address: { city, country } } = person;

console.log(city); // Output: 'New York'
console.log(country); // Output: 'USA'

# type 2
- const { name, age, city, country = 'USA' } = person;

console.log(country); // Output: 'USA'

- const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};


# type 3
// Using different variable names
const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Output: 'John'
console.log(personAge); // Output: 30
console.log(personCity); // Output: 'New York'
