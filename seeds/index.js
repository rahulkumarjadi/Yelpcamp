
const mongoose = require('mongoose');
const cities = require('./cities');   //cities.js connected
const { places, descriptors } = require('./seedHelpers');  //seedHelpers.js connected;
const Campground = require('../models/campground');  //campground.js connected

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seeDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '68cdb9cead94aacde053b0b2',
            location: `${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti eos iure nisi recusandae, nobis illo voluptate necessitatibus enim dignissimos animi eaque excepturi rem sit est in! Porro, optio sunt.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dtvqcjbog/image/upload/v1758449448/YelCamp/magtnthwagacgxf8t5kw.jpg',
                    filename: 'YelCamp/magtnthwagacgxf8t5kw',
                },
                {
                    url: 'https://res.cloudinary.com/dtvqcjbog/image/upload/v1758449448/YelCamp/gitoywybskgb9hhkyt8y.jpg',
                    filename: 'YelCamp/gitoywybskgb9hhkyt8y',
                }
            ]
        })
        await camp.save();
    }
}

seeDB().then(() => {
    mongoose.connection.close()
})
