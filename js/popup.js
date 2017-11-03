$(function() {
  var socket;
  socket = new WebSocket('wss://ws.zaif.jp:8888/stream?currency_pair=mona_jpy');
  
  socket.onmessage = function(msg) {
    var obj = JSON.parse(msg.data);
    var arr = String(obj.last_price.price).split('.');
    if(arr[1] == undefined) {
      arr[1] = "0";
    }
    $('#monajpy').html('<span id="yen">￥</span>' + arr[0] + '.' + '<span id="float">' + arr[1] + '</span>');
  };
});

