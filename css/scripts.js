
<<<<<<< HEAD
var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var dayOfTheWeek =["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
function checkgender() {
    var month =parseInt(document.getElementById("month").value);
    var year =parseInt(document.getElementById("year").value);
    var day=parseInt(document.getElementById("day").value);
    var gender=checkout();
    var date=new Date(year + "/" + month + "/" + day);
    var day=date.getDay();
    var akan; 
    if(gender === "male") {
        akan =akanMale[day];
    }
        else{
            akan =akanFemale[day];
        }
            alert("You were born on " + dayOfTheWeek [day] + "and your akan name is " + akan);
}
function checkout(){
    var gender=document.getElementsByName("gender");
    for(i=0; i<gender.length; i++){
        if(gender[i].checked){
            return(gender[i].value)
        }
    }
}

=======
>>>>>>> 86429c0fff7f405429d6248165d88d86f3da93b4
