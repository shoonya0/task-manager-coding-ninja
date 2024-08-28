// Handle connection logic to MongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use JS promise instead of Bluebird

mongoose.connect('mongodb+srv://krish200599:L1jBNa54wb3ep5vK@cluster0.nf5fm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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
