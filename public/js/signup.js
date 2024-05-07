const signUp = async e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;


    if (fname && lname && email && pwd) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ fname, lname, email, pwd }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
      }
      
    e.preventDefault();
    };

 document.getElementById('form').addEventListener("click", function(e){

    signUp(e)
 })


