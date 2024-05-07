const signUp = async e => {
   
    let username = document.getElementById('username').value;
    let  email = document.getElementById('email').value;
    let  password = document.getElementById('pwd').value;
    

    if (username && email && password) {
        const response = await fetch('/api/user', {
          method: 'POST',
          body: JSON.stringify({ username, email, password}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
      
    e.preventDefault();
    };

 document.getElementById('form').addEventListener("click", function(e){

    signUp(e)
 })


