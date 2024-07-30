function myFunction() {
  var point1 = parseFloat(document.querySelector(".point-1").value);
  var point2 = parseFloat(document.querySelector(".point-2").value);
  var year = document.querySelector(".year").value;
  var diem;
  var hocLuc;

  if (year == 1) {
    diem = (point1 + point2 * 3) / 4;
  } else if (year == 2) {
    diem = (point1 + point2 * 3) / 4;
  } else if (year == 3) {
    diem = (point1 + point2 * 4) / 5;
  }

  var summary;
  if (diem > 8.5) {
    summary = diem.toFixed(2);
    hocLuc = "HOC SINH GIOI";
  } else if (diem > 6.5) {
    summary = diem.toFixed(2);
    hocLuc = "HOC SINH KHA";
  } else if (diem > 5) {
    summary = diem.toFixed(2);
    hocLuc = "HOC SINH TB";
  } else {
    summary = diem.toFixed(2);
    hocLuc = "HOC SINH YEU";
  }

  document.querySelector("#hoc-luc").innerHTML = hocLuc;
  document.querySelector(".summarise").value = summary;
}

function xoa() {
  document.querySelector(".point-1").value = "";
  document.querySelector(".point-2").value = "";
  document.querySelector(".year").value = "";
  document.querySelector(".summarise").value = "";
  document.querySelector("#hoc-luc").innerHTML = "";
}
