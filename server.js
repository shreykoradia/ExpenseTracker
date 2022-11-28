const express = require('express');
const app = express();
const  dotenv = require('dotenv');
const morgan = require("morgan");

dotenv.config({path: './config/config.env'})


app.use(express.json());
const transactions = require("./routes/transactions");
const connectDB = require("./config/db");

connectDB();
app.use("/api/v1/transactions",transactions)



/*if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }*/
const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});