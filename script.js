document.querySelector("button").addEventListener("click", randomjoke);

function randomjoke() {
    const xhttp = new XMLHttpRequest;

    xhttp.open("GET", "https://api.icndb.com/jokes/random/1", true);

        xhttp.onload = function(){
            if(this.status === 200){
                let lablague = JSON.parse(this.responseText);
                document.querySelector("section").innerHTML = `
                <div class="card bg-dark">
                    <div class="card-header">
                        Random joke
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>${lablague.value[0].joke}</p>
                            <footer class="blockquote-footer">Obviously Someone famous <cite title="Source Title"> T'inquiète </cite></footer>
                        </blockquote>
                    </div>
                </div>
                `;
            }
            else{
                console.log("Erreur");
            }
        }

    xhttp.send();
    /* e.preventDefault(); */
}