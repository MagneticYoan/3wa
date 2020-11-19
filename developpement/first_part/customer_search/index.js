console.log('ok');

function myFunction() {
    console.log('OK DESU');
}

document.getElementById('customer').onkeypress = function() { 
    
    setTimeout(() => {   
        
    let query = this.value;
    console.log(query);
    
        fetch("index.php", 
                {
                  method: 'post',
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({customer: query})
                }
              ).then((r) => {
                console.log(r.json())
              }).catch((r) => {
                console.log(r, "WHAT DID U DO")
              })
    
    }, 100);
};