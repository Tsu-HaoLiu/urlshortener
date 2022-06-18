const Express = require('Express');
const connectDB = require('./config/db');

const app = Express();

// Connect to MongoDB
connectDB();

// Body Parser
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use('/', require('./routes/index'));
app.use('/api/v1', require('./routes/urls')); // URL:PORT/api/v1/CALLS

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
