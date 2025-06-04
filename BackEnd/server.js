require('dotenv').config();
const app = require('./src/App')


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    
})