async function login(e) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
    
    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }

    e.preventDefault();
}
document.getElementById('form').addEventListener("click", function(e){

    login(e)
 })
