const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => console.log('all is ok') )

app.get('/test', (req, res) => {

  res.send("if you want exute the mining send POST Request with this parametre \n {\"data\":\"1 2-2\"}  ");
});
app.post('/',function(req,res){

  //var myTab=req.body.po;
 var myTab=req.body.data;
   console.log(" 11 myTab = ",myTab);



function parse(){
    return new Promise(function(resolve, reject){
        request.post({ headers: {'content-type' : "application/json; charset=utf8" },url:'https://apptestmin.herokuapp.com/api/test/',
        body: myTab }, function (error, response) {
            // in addition to parsing the value, deal with possible errors
           
            try {
                // JSON.parse() can throw an exception 
                console.log("response mining",response.body)
               resolve( response.body);
            } catch(e) {
                reject(e);
            }
        });
    });
}

parse().then(function(val) {


    console.log(" val",val);
      console.log("myTab = ",myTab);
       res.end(val);
}).catch(function(err) {
    console.err(err);
});



 





  
  

  

 
        


});
app.listen(3000, () => console.log('server started'));
