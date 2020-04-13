const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api', (request, response) => {
     console.log(request.body); 
     response.json({
          status: 'success',
          win: false,
          profit: null,
     });
});

app.listen(3000, () => console.log('listening on 3000 bruv'));
