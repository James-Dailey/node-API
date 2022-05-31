let fs=require('fs');
let data=fs.readFileSync('chemistry.json');
let elements=JSON.parse(data);
const express = require("express");
const app = express();
const cors=require('cors');

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static('public'));
app.use(cors());
app.get('/elements',alldata);
function alldata(_request,response)
{
    response.send(elements);
}
app.get('/elements/:element/',searchElement);
function searchElement(request,response)
{
	let word=request.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
	if(elements[word])
	{
		let reply=elements[word];
		
	}
	else
	{
		let reply={
			status:"Not Found"
		}
	}
    console.log(reply.boil);
	response.send(reply);

}