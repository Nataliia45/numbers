function performTasks() {

    let str1 = document.getElementById("input1").value;
    let str2 = document.getElementById("input2").value;
    let str3 = document.getElementById("input3").value;

    const concatenatedStrings = str1 + ' ' + str2 + ' ' + str3;
    document.getElementById("concatenatedStrings").innerText = concatenatedStrings;

  
    const number = 12345;
    const digitArray = number.toString().split('').join(' ');
    document.getElementById("splitDigits").innerText =  digitArray;
  }