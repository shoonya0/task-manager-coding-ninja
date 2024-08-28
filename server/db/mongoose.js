// Handle connection logic to MongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use JS promise instead of Bluebird

mongoose.connect(`${process.env.DB_LINK}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true // Add this line
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e) => {
    console.log("Error while connecting");
    console.log(e);
});

// Deprecation warnings
// mongoose.set('useCreateIndex', true); // Remove this line
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};
