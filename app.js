var century, year, month, date;
// get the input
function getInput() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayofthemonth = parseInt(document.getElementById("monthday").value);
}
if ((century == "") && (century <= 0) && (century >= 30)){
    if ((century=="")){
        alert("Please put in the correct gender");
    }else if ((year == "") && (year <= 0) && (year > 1900)){
        return false;
    }else if((year == "")){
        alert("Please enter the correct year");
    }else if ((month == "") && (month > 12) && (month <=0)){
        return false;
    }else if ((month == "")){
        alert("Please enter the correct month");
    }else if ((dayofthemonth == "") && (dayofthemonth > 31) && (dayofthemonth <= 0)){
        return false;
    }else if ((dayofthemonth == "")){
        alert("Please enter the correct date");
        return false;
    }
}