








let einsteinRequest1 = new XMLHttpRequest();
einsteinRequest1.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("albertInfoBasic").innerHTML = myObj.name + "-" + myObj.dob;
  }
};
einsteinRequest1.open("GET", "einstein.json", true);
einsteinRequest1.send();


function loadBio() {
    const einsteinRequest2 = new XMLHttpRequest();
    einsteinRequest2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let myObj= JSON.parse(this.responseText);
        document.getElementById("albertInfoExtended").innerHTML = myObj.bio;
      }
    };
    einsteinRequest2.open("GET", "einstein.json", true);
    einsteinRequest2.send();
  }
