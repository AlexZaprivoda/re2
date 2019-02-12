// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// var _body = document.body;

// var e1 = _body.childNodes[0];
// console.log(" -1", e1.previousSibling);
// console.log("current", e1);
// console.log(" +1", e1.nextSibling);

// console.log("0", _body.firstChild);
// console.log("lenght -1", _body.lastChild);

// var e1 = _body.children[0];
// console.log(e1);

// var h1 = document.getElementById("id-test");
// console.log(h1);

// console.log(document.querySelector("#id-test"));
//---------------------
//data

//data-plugin-date

// (function dataPlugin() {
//   var pluginContainer = document.querySelector("[data-plugin-date]");

//   function cycle() {
//     var date = new Date();

//     var dateObject = {
//       year: date.getFullYear(),
//       month: date.getMonth(),
//       day: date.getDay(),
//       hours: date.getHours(),
//       min: date.getMinutes(),
//       sec: date.getSeconds()
//     };

//     Object.keys(dateObject).forEach(function(e) {
//       var el = document.querySelector(`[data-plugin-${e}]`);
//       if (el) el.innerHTML = dateObject[e];
//     });
//   }

//   if (pluginContainer) {
//     setInterval(cycle, 1000);
//   }
// })();
//---------------------
function clock(className) {
  var wrapper = document.querySelector(className);
  var date = new Date();
  var h = date.getHours() * (360 / 12) + date.getMinutes() * (30 / 60);
  var m = date.getMinutes() * (360 / 60);
  var html = '<div class="circle">';
  html += getArrow(50, 3, m - 90);
  html += getArrow(35, 6, h - 90);

  for (let i = 0; i < 6; i++) {
    html += tiks(i * 30);
  }

  html += "</div>";
  wrapper.innerHTML = html;

  function getArrow(w, h, ang) {
    var arrow = `<div 
                    class="arrow" 
                    style="width:${w}%; height:${h}px; transform: rotate(${ang}deg);"></div>`;

    return arrow;
  }
  function tiks(ang) {
    var tiks = `<div 
    class="tiks" 
    style="transform: rotate(${ang}deg);"></div>`;

    return tiks;
  }
}

clock(".clock");
