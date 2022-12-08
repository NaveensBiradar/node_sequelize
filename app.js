const {sequelize} = require('./models')
const express = require('express')
const PORT = 3100;
const app = express();
app.use(express.json);


console.log(sequelize.models.User.all); // true
app.listen(PORT, function(err){
    if (err) throw err;
    sequelize.sync()
    console.log("Server is running on the port",PORT);
})


// async function main (){
//     await sequelize.sync()
// }

// main()   