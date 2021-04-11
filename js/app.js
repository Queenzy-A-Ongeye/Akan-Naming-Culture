// giving variables values
function getAkanName () {
  let year = document.getElementById("year").value;
  let month = Number(document.getElementById("month").value);
  let dayOfTheMonth = Number(document.getElementById("dayOfTheMonth").value);

  let genders = document.getElementsById("genders");

  //the gender function
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      } 
    }
  }

  let myGenderValue = getGender();

  console.log(myGenderValue);

  // function validator
  function monthValidator () {
    if (month < 1 || month > 12) {
      return false;
    } else {
      return true;
    }
  }
// validating the day
  function dayValidator () {
    if (monthOf === 2 && Number(year)%4 === 0) {
      if (dayOfTheMonth > 28 || dayOfTheMonth < 1) {
        return false;
      } else if (month === 2 && dayOfTheMonth > 29) {
        return false;
      } else if (month === 2 && dayOfTheMonth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfTheMonth < 1 || dayOfTheMonth > 31){
      return false;
    } else {
      return true;
    }
  }

  //variables validator
  let monthValid = monthValidator();
  let dayValid = dayValidator();

  //how to determine the date of birth
  let dayOfWeekNumber = Math.floor((((Number(year.slice(0,2))/4)-2*Number(year.slice(0,2))-1)+
          ((5*Number(year.slice(2,4))/4))+((26*(month+1)/10))+dayOfTheMonth)%7);

  //introducing the male and the female name arrays
  let maleAkanNames = [
      "KWASI", "KWADWO", "KWABENA", "KWAKU", "KWAKU", "YAW", "KOFI", "KWAME"
    ];
  
    let femaleAkanNames = [
      "AKOSUA", "ADWOA", "ABENAA", "AKUA", "YAA", "AFUA", "AMA"
    ];
    let nameDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

  //making sure that the input is valid
  if (myGenderValue == "male" && monthValid && dayValid){
    switch (dayOfWeekNumber) {
       
      //male...
      case 1:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[0] + "your Akan name is " + maleAkanNames[0];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 2:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[1] + "your Akan name is " + maleAkanNames[1];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 3:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[2] + "your Akan name is " + maleAkanNames[2];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 4:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[3] + "your Akan name is " + maleAkanNames[3];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 5:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[4] + "your Akan name is " + maleAkanNames[4];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 6:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[5] + "your Akan name is " + maleAkanNames[5];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 7:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[6] + "your Akan name is " + maleAkanNames[6];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 0:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[0] + "your Akan name is " + maleAkanNames[0];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        default:
          alert("mmh no Akan name for you");
  
      }

      //female..

    } else if(myGenderValue == "female" && monthValid && dayValid) {
      switch (dayOfWeekNumber) {
        case 1:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[0] + "your Akan name is " + femaleAkanNames[0];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 2:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[1] + "your Akan name is " + femaleAkanNames[1];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          alert("Kwadwo");
          break;
        case 3:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[2] + "your Akan name is " + femaleAkanNames[2];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 4:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[3] + "your Akan name is " + femaleAkanNames[3];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 5:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[4] + "your Akan name is " + femaleAkanNames[4];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 6:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[5] + "your Akan name is " + femaleAkanNames[5];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 7:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[6] + "your Akan name is " + femaleAkanNames[6];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        case 0:
          document.getElementById('result').textContent = "Your Birthday was on" + nameDays[0] + "your Akan name is " + femaleAkanNames[0];
          document.getElementById('display-name').textContent = "Here is your Akan name: ";
          return false;
          break;
        default:
          alert("mmh no Akan name for you");
        }
      } else{
        alert("You entered invalid month or day");
      }
    }