const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);




/* object mein key ko string batane ki jrrut nhin hai par json mein need hoti hai ye ki key ager string hai to use string ke form mein hi likhen */
// getting api response as an obj
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// can also get api response in the form of an array aw
[
    {},
    {},
    {}
]