var calculate = document.getElementById("calculate");

calculate.addEventListener("click", (e) => {
    e.preventDefault();

    var nisab = 43000;

    var gold_amo = Number(document.getElementById("gold_amo").value);
    var silver_amo = Number(document.getElementById("silver_amo").value);
    var bank = Number(document.getElementById("bank").value);
    var save = Number(document.getElementById("save").value);
    var loan = Number(document.getElementById("loan").value);
    var invest = Number(document.getElementById("invest").value);

    var credit = Number(document.getElementById("credit").value);
    var worker_salary = Number(document.getElementById("worker_salary").value);
    var tax = Number(document.getElementById("tax").value);


    var asset = gold_amo + silver_amo + bank + save + loan + invest;
    var liabilities = credit + worker_salary + tax;

    var total_asset = asset - liabilities;

    if(total_asset >= nisab){
        var zakat = (total_asset * 2.5) / 100;
        alert(zakat.toFixed(2) +  "You can pay jakat");
    }else{
        alert("You can't pay jakat");
    }

    
});