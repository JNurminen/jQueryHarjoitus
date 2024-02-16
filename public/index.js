$(document).ready(function(){

  $(".content").empty();
  var txt1 = $("<p></p>").text("Tervetuloa uudistettuun sivustoomme!");
  $(".content").append(txt1)

  $("#b1").click(function(){
    $(".content").empty();
    var txt1 = $("<p></p>").text("Asus ROG Strix G15CE-NE001T Hinta:1499e");
    var txt2 = $("<p></p>").text("Msi Infinite S 10TD-089EU Hinta:1999e");
    var txt3 = $("<p></p>").text("Macbook air 13,3 Hinta:999e");
    var txt4 = $("<p></p>").text("Samsung Galaxy Book Pro 360 Hinta:1299e");
    var txt5 = $("<p></p>").text("Dell Näyttö 27 Hinta:299e");
    var txt6 = $("<p></p>").text("Samsung Odyssey G7 Hinta:699e");
    var txt7 = $("<p></p>").text("Asus TUF Gaming VG27AQ Hinta:499e");
    var txt8 = $("<p></p>").text("Samsung Odyssey G9 Hinta:1299e");
    var txt9 = $("<p></p>").text("Logitech mk850 Hinta:99e");
    var txt10 = $("<p></p>").text("Razer BlackWidow V3 Hinta:149e");
    var txt11 = $("<p></p>").text("Corsair K70 RGB MK.2 Hinta:169e");
    var txt12 = $("<p></p>").text("SteelSeries Apex Pro Hinta:199e");
    var txt13 = $("<p></p>").text("HyperX Alloy Elite 2 Hinta:129e");
    $(".content").append(txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11, txt12, txt13)
      
    })
    $("#b3").click(function(){
    $(".content").empty();
    var txt1 = $("<p></p>").text("Meiltä löydät tietokoneet ja oheislaitteet.");
    var tx = $("<p></p>").text("Myymme myös asennuspalveluita ja huollamme tietokoneita.");
    $(".content").append(txt1, tx)
      
    })
    $("#b4").click(function(){
      $(".content").empty();      
      var txt2 = $("<p></p>").text("Hp Dragonfly g4  Hinta: 1499e ovh: 1999e");
      var txt3 = $("<p></p>").text("Lenovo Thinkpad X1 Carbon 14 Hinta: 1199e ovh: 1599e");
      var txt4 = $("<p></p>").text("Dell Latitude 5420 14 Hinta: 999e ovh: 1299e");
      var txt5 = $("<p></p>").text("Asus Zenbook 14 Hinta: 799e ovh: 999e");
    $(".content").append(txt2, txt3, txt4, txt5)
    })

    $("#b5").click(function(){
      $(".content").empty();
      var txt1 = $("<p></p>").text("Teppo Testaaja p. 050-0012334");
      var tx = $("<p></p>").text("tt@gmail.com");
      $(".content").append(txt1, tx)        
    });
    
    })