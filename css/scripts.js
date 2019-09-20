function formCheck(){
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year =parseInt(document.getElementById("year").value);
    var century =parseInt(document.getElementById("century").value);

    if(date<= 0 || date >31){
        alert("invalid date");
    }else if (month <= 0 || month > 12){
        alert("invalid month");
    }else if((year <= 0) || year > 2019){
        alert("invalid year");
    }else{
        return null;
    }

}