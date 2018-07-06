var express = require('express');
var route = express.Router();
var template = require('../lib/template.js');

route.get('/',function(request,response){

 
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `
      <h2>${title}</h2>${description}
      <img src= "images/coding.jpg">
      `,
      `<a href="/topic/create">create</a>`
    );
  
    response.send(html);
  
});
module.exports = route;