var express =  require('express');
var cors = require('cors');
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.use(ejsLayouts);

app.set('port', (process.env.PORT || 8080));

// INDEX PAGE
app.get('/', function(request, response) {
  response.send('Website working fine')
});

// GET ONE AUTHOR
app.get('/blog/author/:author_id', function(req, res, next) {
        // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
        // dummy author response - no need to call database
        var author = {"id": 1,"first_name":"Bob","last_name":"Smith","email":"bob@gmail.com"};
        // change id = 2 and test for when :author_id
        res.render('pages/author_detail', { title: 'Author Details', author: author, layout: 'layouts/detail'} );
});
// GET ONE POST
app.get('/blog/employee/:employee_id', function(req, res, next) {
        // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
        // dummy author response - no need to call database
        var employee = {"id": 1,"first_name":"Oluwasanmi","last_name":"Awelewa","gender":"Male","email":"supersanmi01@gmail.com","mobile_number":"2348029614315","home_address_line":"478 Schmedeman Hill","salary":"$2000", "joined_comapny_at": "03-02-2020"};
        var employee = {"id": 2,"first_name":"Jane","last_name":"Smith","gender":"Female","email":"janesmith@gmail.com","mobile_number":"4143723472","home_address_line":"6 Esch Way","salary":"$2500", "joined_comapny_at": "10-06-2015"};
        var employee = {"id": 3,"first_name":"John","last_name":"Smith","gender":"Male","email":"johnsmith01@gmail.com","mobile_number":"9545527434","home_address_line":"398 Coolidge Junction","salary":"$1500", "joined_comapny_at": "04-01-1989"};
        var employee = {"id": 4,"first_name":"Jeno","last_name":"Bonnell","gender":"Female","email":"jbonnell@gmail.com","mobile_number":"6178013307","home_address_line":"56 Luster Hill","salary":"$1700", "joined_comapny_at": "26-11-1990"};
        var employee = {"id": 5,"first_name":"Tom","last_name":"Townsend","gender":"Male","email":"tomtown@gmail.com","mobile_number":"9417580995","home_address_line":"0 Bowman Pass","salary":"$3000", "joined_comapny_at": "21-04-2010"};
        // change id = 2 and test for when :author_id
        res.render('pages/employee_detail', { title: 'Employee Details', employee: employee, layout: 'layouts/detail'} );
});

// GET ALL AUTHORS
app.get('/blog/authors', function(req, res) {
          // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
         // dummy authors response - no need to call database
         var authors = [
           {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
          {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
          {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}];
        res.render('pages/author_list', { title: 'Author List', authors: authors, layout: 'layouts/detail'} );
});


// GET ALL EMPLOYEES
app.get('/blog/employees', function(req, res) {
          // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
         // dummy authors response - no need to call database
         var employees = [
          {"id": 1,"first_name":"Oluwasanmi","last_name":"Awelewa","gender":"Male","email":"supersanmi01@gmail.com","mobile_number":"2348029614315","home_address_line":"478 Schmedeman Hill","salary":2000, "joined_comapny_at": "03-02-2020"},
          {"id": 2,"first_name":"Jane","last_name":"Smith","gender":"Female","email":"janesmith@gmail.com","mobile_number":"4143723472","home_address_line":"6 Esch Way","salary":2500, "joined_comapny_at": "10-06-2015"},
          {"id": 3,"first_name":"John","last_name":"Smith","gender":"Male","email":"johnsmith01@gmail.com","mobile_number":"9545527434","home_address_line":"398 Coolidge Junction","salary":1500, "joined_comapny_at": "04-01-1989"},
          {"id": 4,"first_name":"Jeno","last_name":"Bonnell","gender":"Female","email":"jbonnell@gmail.com","mobile_number":"6178013307","home_address_line":"56 Luster Hill","salary":1700, "joined_comapny_at": "26-11-1990"},
          {"id": 5,"first_name":"Tom","last_name":"Townsend","gender":"Male","email":"tomtown@gmail.com","mobile_number":"9417580995","home_address_line":"0 Bowman Pass","salary":3000, "joined_comapny_at": "21-04-2010"}
        ];
        res.render('pages/employee_list', { title: 'Employee List', employees: employees, gender: ["Female","Male"], layout: 'layouts/detail'} );
});


 

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});