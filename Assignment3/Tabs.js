var t1,t2,t3,t4,t5;

function showTabs() {

  var w1=window.open("http://www.google.com");

  var w2=window.open("http://www.flipkart.com");

  var w3=window.open("http://www.weboniselab.com");

  var w4=window.open("https://www.amazon.com/");

  var w5=window.open("https://www.snapdeal.com/");

  t1=setTimeout(function() {
    w1.window.close();
  }, 3000);

  t2=setTimeout(function() {
    w2.window.close();
  }, 5000);

  t3=setTimeout(function() {
    w3.window.close();
  }, 7000);
  t4=setTimeout(function() {
    w4.window.close();
  }, 9000);

  t5=setTimeout(function() {
    w5.window.close();
  }, 11000);
}

function pause() {
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
  clearTimeout(t4);
  clearTimeout(t5);
}
