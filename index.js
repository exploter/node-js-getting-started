const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
//  .get('/', (req, res) => res.render('pages/index'))
//  .res.redirect(301, 'http://example.com')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  response.writeHead(301,
    {Location: 'http://whateverhostthiswillbe:8675/'+newRoom}
  );
  response.end();
  
