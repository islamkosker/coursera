function calculate(){
    var amunot = document.getElementById("amount").value;
    if (amunot =="" || amunot<=0){
    alert ("Warning!: Wrong Entry")
    document.getElementById("amount").focus();
    return ;}

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = amunot * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML =  "final amount:" + "<span class='highlight'>"  + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";

   
    

}

function Slider(){
    var slider = document.getElementById("rate")
    var o_put = document.getElementById("rate_display")
    o_put.innerHTML = slider.value;

    slider.oninput = function()
    {
        o_put.innerHTML = this.value;
    }
}


