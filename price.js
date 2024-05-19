var time = new Date();
var Ltime = time.toLocaleTimeString();
var Ldate = time.toLocaleDateString();
document.write("<h4 style=\"text-align:left;\">" + Ltime + '  ' + Ldate + "</h4>");
function checkname() {
    var Fname = document.getElementById('name').value;

    if (Fname != "") {
      document.getElementById('Firstname').innerHTML = "<span>" + "" + "</span>";
      return true;
    }
    else {
      document.getElementById('Firstname').innerHTML = "<span style=\" color:red;\">" + " invalid enter" + "</span>";
      return false;
    }
  }
  function checkage() {
    var age = Number(document.getElementById('age').value);
    if (age <= 10 || age > 150) {
      document.getElementById('spanage').innerHTML = "<span style=\" color:red;\">" + " invalid enter" + "</span>";
      return false;
    }
    else { 
      document.getElementById('spanage').innerHTML = "<span>" + "" + "</span>";

      return true; }
  }
  var discount = "";
  function checktype() {
    var type = document.getElementsByName('type2');
    for (var i = 0; i < type.length; i++) {
      if (type[i].checked) {
        discount = type[i].value;
        break;
      }
    }
    if (discount == "worker") {
      discount = 0.20;
      document.getElementById('typesp').innerHTML = "<span style=\" color:red;\">" + " " + "</span>";
      return true;
    }
    else if (discount == "student") {
      discount = 0.50;
      document.getElementById('typesp').innerHTML = "<span style=\" color:red;\">" + " " + "</span>";
      return true;
    }
    else {
      discount = 0;
      document.getElementById('typesp').innerHTML = "<span style=\" color:red;\">" + " You must choose one" + "</span>";
      return false;
    }
  }
  function checksel() {
    var price = 0;
    var selected = Number(document.getElementById('selected').value);
    if (selected == 0) {
      document.getElementById('par').innerHTML = "<span style=\" color:red;\">" + " You must choose one course" + "</span>";
      price = 0;
      return false;
    }
    else {
      document.getElementById('par').innerHTML = "<span style=\" color:red;\">" + "" + "</span>";
      return true;
    }
  }
  function checkn() {
    var price = 0;
    var selected = Number(document.getElementById('selected').value);
    switch (selected) {
      case 1:
        selected = "Google Data Analytics Course";
        price = 550 - 550 * discount;
        break;
      case 2:
        selected = "Google IT support Course";
        price = 650 - 650 * discount;
        break;
      case 3:
        selected = "Google Project Management Course";
        price = 650 - 650 * discount;
        break;
      case 4:
        selected = "(IT)and Cloud Fundamentals Course";
        price = 500 - 500 * discount;
        break;
      case 5:
        selected = "IBM IT Support Professional Certificate Course";
        price = 400 - 400 * discount;
        break;
      case 6:
        selected = "Cybersecurity for Everyone Course";
        price = "free course";
        break;
      case 7:
        selected = "Introduction to Microsoft Excel Course";
        price = 270 - 270 * discount;
        break;
      case 8:
        selected = "Google IT Automation with Python Course";
        price = 500 - 500 * discount;
        break;
      case 9:
        selected = "Meta Front-End Developer Course";
        price = 150 - 150 * discount;
        break;
    }
    var nage = Number(document.getElementById('age').value);
    var Fname = document.getElementById('name').value;
    if (checkname() && checkage() && checksel() && checktype()) {
      document.getElementById('spanage').innerHTML = "<span>" + "" + "</span>";
      document.getElementById('Firstname').innerHTML = "<span>" + "" + "</span>";
      document.getElementById('result').value = "Your Name: " + Fname + "\nYour age is: " + nage + "\nChoosen course is: " + selected + "\nCourse price is: " + price + " JD" + "\nYour applied discount is: " + discount * 100 + "%\n";
    }
  }