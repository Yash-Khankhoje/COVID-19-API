function Executer(){
    let Country = document.getElementById('Country').value;
    let Status = document.getElementById('Status').value;

    if(Country.length === 0 || Country === '' || Country === ' '){
        return alert('Please enter a specific country name.: ');
    }
    else if(Country.length != 0){
        if(Status.length === 0){
            let request = new XMLHttpRequest();
            let apiLink = "https://covid-api.mmediagroup.fr/v1/cases?country="+Country;   
            request.open('Get',apiLink,true)
            request.send();
            request.onload = function() {
                var data = JSON.parse(this.response)
                console.log(data);
                let myOutput = JSON.stringify(data);
                console.log('myOutput = ', myOutput);
                let output = document.getElementById('output-box');
                output.innerHTML=myOutput;
            }
        }
        else{
            let request = new XMLHttpRequest();
            let apiLink = "https://covid-api.mmediagroup.fr/v1/history?country="+Country+"&status="+Status;   
            request.open('Get',apiLink,true)
            request.send();
            request.onload = function() {
                var data = JSON.parse(this.response)
                console.log(data);
                let myOutput = JSON.stringify(data);
                console.log('myOutput = ', myOutput);
                let output = document.getElementById('output-box');
                output.innerHTML=myOutput;
            }
        }
    }
}