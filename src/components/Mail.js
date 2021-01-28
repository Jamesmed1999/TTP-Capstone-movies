import React from 'react'
import '../App.css';
function onSibmit()
{
let em = document.getElementById('fname').value
let tx = document.getElementById('txt').value
 fetch('https://capstone-movie-db-server.herokuapp.com/mailing-lists', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: em,
              name: tx
              
            }),
          })
            .then(response => response.json())
            .then(data => console.log(data)); 
            getLastEmail()

           document.getElementById('fname').value = " "
document.getElementById('txt').value = " "
}
function getLastEmail()
{
    fetch('https://capstone-movie-db-server.herokuapp.com/mailing-lists', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => 
          sendMail(data[data.length-1].email, data[data.length-1].name)
            
            
            );
        
            
}

function sendMail(user,name)
{
  console.log(name)
  fetch('https://capstone-movie-db-server.herokuapp.com/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: "jamesmed1999@gmail.com",
      to: user,
      replyTo: "jamesmed1999@gmail.com",
      subject: "Sign up confirmed",
      html: "<p> Hello thanks " +name + "<p>for signing up to capstone movies, in the COVID19 age learning about all the new relases can be hard so capstone movies is here to help <br>  <br> search to your heart's contnent  "
      
    }),
  })
    .then(response => response.json())
    .then(data => console.log("sent email to ",user));
}

export default function Mail() {
    
  /*   fetch('http://localhost:1337/mailing-lists', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => console.log(data));
       
        fetch('http://localhost:1337/mailing-lists', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: 'john@gmail.com',
              name: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious'
              
            }),
          })
            .then(response => response.json())
            .then(data => console.log(data)); */
    
    return (
        <div>
            <p>subscribe to the mailing list:</p>
            <form >
            
  <label for="fname"></label>
  <input type="email" id="fname" name="fname" placeholder ="Email" className = "form-field"/>
  <input type="text" id="txt" name="txt" placeholder ="Name" className = "form-field"/>
            </form>
            <button onClick={onSibmit}>submit</button>
            



        </div>
    )
}
