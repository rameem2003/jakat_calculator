var calculate = document.getElementById("calculate");
var popup_close = document.getElementById("popup_close");
var reset = document.getElementById("reset");

calculate.addEventListener("click", (e) => {
    e.preventDefault();

    var nisab = 43000;
    // variable for all inputs
    var gold_amo = Number(document.getElementById("gold_amo").value);
    var silver_amo = Number(document.getElementById("silver_amo").value);
    var bank = Number(document.getElementById("bank").value);
    var save = Number(document.getElementById("save").value);
    var loan = Number(document.getElementById("loan").value);
    var invest = Number(document.getElementById("invest").value);

    var credit = Number(document.getElementById("credit").value);
    var worker_salary = Number(document.getElementById("worker_salary").value);
    var tax = Number(document.getElementById("tax").value);
    

    // variable for popup msg
    var app_body = document.getElementById("main_body");
    var popup_msg_box = document.getElementById("popup_msg_box");
    var msg_title = document.getElementById("msg_title");
    var print_amo = document.getElementById("print_amo");
    var print_nisab = document.getElementById("print_nisab");
    var achive = document.querySelector(".achive");


    // variables for result
    var asset = gold_amo + silver_amo + bank + save + loan + invest;
    var liabilities = credit + worker_salary + tax;

    var total_asset = asset - liabilities;

    if(total_asset >= nisab){
        var zakat = (total_asset * 2.5) / 100;
        popup_msg_box.classList.replace("alert-danger", "alert-success");
        popup_msg_box.style.zIndex = "99";
        popup_msg_box.style.opacity = "1";
        popup_msg_box.style.transform = "scale(1)";
        achive.classList.replace("fa-circle-xmark", "fa-circle-check");
        achive.style.color = "green";
        msg_title.innerHTML = "অভিনন্দন";
        print_nisab.innerHTML = "আপনার নিসাবের পরিমান " + total_asset + " টাকা";
        print_amo.innerHTML = "আপনার জাকাতের পরিমান " + zakat + " টাকা";
        app_body.style.opacity = "0.7";
        app_body.style.pointerEvents = "none";
    }
    
    
    else{
        popup_msg_box.classList.replace("alert-success", "alert-danger");
        popup_msg_box.style.zIndex = "99";
        popup_msg_box.style.opacity = "1";
        popup_msg_box.style.transform = "scale(1)";
        achive.classList.replace("fa-circle-check", "fa-circle-xmark");
        achive.style.color = "red";
        msg_title.innerHTML = "OPPS!!!";
        print_nisab.innerHTML = "আপনার নিসাবের পরিমান " + total_asset + " টাকা";
        print_amo.innerHTML = "আপনার জাকাত দেওয়ার মত পর্যাপ্ত নিসাব নাই!! ";
        app_body.style.opacity = "0.7";
        app_body.style.pointerEvents = "none";
    }

    
});




popup_close.addEventListener("click", () => {
    var popup_msg_box = document.getElementById("popup_msg_box");
    var app_body = document.getElementById("main_body");
    popup_msg_box.style.opacity = "0";
    popup_msg_box.style.zIndex = "-2";
    popup_msg_box.style.transform = "scale(0)";
    app_body.style.opacity = "1";
    app_body.style.pointerEvents = "all";
});




reset.addEventListener("click", () => {
    document.location.reload();
});