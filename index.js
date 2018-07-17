var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
//this is middleware
//needs to be above the routing
//Will run EVERY TIME the application is freshed (f5)
var logger = function(req,res,next){
	console.log('Logging...');
	next();
}

app.use(logger);
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//body parser middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
//would put all my angular stuff in the public view
//if you have html it would override this 
app.use(express.static(path.join(__dirname, 'public')));


//send this like an api in the .get function
var people = [
	{name:'Jeff',age: 30},
	{name: 'Sara',age: 22},
	{name:'Bill',age:40}
]
var users = [
	{
		id: 1,
		first_name: 'John',
		last_name: 'Doe',
		email: 'johndoe@gmail.com'

	},
	{
		id: 2,
		first_name: 'Bob',
		last_name: 'Smith',
		email: 'bobsmith@gmail.com'

	},
	{
		id: 3,
		first_name: 'Jill',
		last_name: 'Jackson',
		email: 'jilljackson@gmail.com'

	}
];

//puts hello world on the page local host
app.get('/', function(req, res){
	//res.send('Hello');
	//res.json(people); //how to display people
	res.render('index', {
		title:'Customers',
		users: users
	});
});

//says were going to port 3000
app.listen(3000, function(){
	console.log('Server started on port 3000')
})