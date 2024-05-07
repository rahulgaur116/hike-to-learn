async function login(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    
    if (email && pwd) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, pwd }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
      }

    e.preventDefault();
}
document.getElementById('form').addEventListener("click", function(e){

    login(e)
 })
