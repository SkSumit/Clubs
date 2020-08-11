const clubs = document.getElementById('clubs');

if (localStorage.getItem("club[1]") === null) {

  fetch("https://api2.hackclub.com/v0.1/Operations/Clubs")
  .then((resp) => resp.json())
  .then(function (data) {
     
      localStorage.setItem('club[1]', JSON.stringify(data[1]));
      console.log("api used")
      datashow();
  }) 
  
}else{
  console.log("api not used")
  var los = localStorage.getItem('club[1]')
  console.log(JSON.parse(los))
  datashow();
}

function datashow ()  {
  var los = localStorage.getItem('club[1]');
  console.log(JSON.parse(los))
  var string = JSON.parse(los)
  clubs.innerHTML=`Club Name :  ${string.fields.Name} <br> 
 Location :  ${string.fields["Address City"]}, ${string.fields["Address State"]}, ${string.fields["Address Country"]}  <br>
  Leaders:  ${string.fields["Leader Names"][0]} <br>`;
 } 


console.log("Running");
// localStorage.clear();