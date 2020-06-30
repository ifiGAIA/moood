var firebase;
$(function(){
  var $name = $('#name'),
      $content = $('#content'),
      $btn = $('#btn'),
      $show = $('#show'),
      ms = new Date().getTime();
  var config = {
    databaseURL: "https://project-3858022699616672036.firebaseio.com/"
  };
  firebase.initializeApp(config);
  var database = firebase.database().ref();
  
  $btn.on('click',write);

  function write(){
    window.location.reload();
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<10){
      h = '0'+h;
    }
    if(m<10){
      m = '0' + m;
    }
    if(s<10){
      s = '0' + s;
    }
    var now = h+':'+m+':'+s;
    var postData = {
      name:$('#name').val(),
      content:$('#content').val(),
      time:now,
      id:'id'+ms
    };
    database.push(postData);
    $content.val('');
    
  }
  
  database.once('value', function(snapshot) {
    $show.html('');
    for(var i in snapshot.val()){
       $show.prepend('<div class="mes animated pulse" id="mes">'+'太空人'+snapshot.val()[i].name+'：'+snapshot.val()[i].content+'<div class="time">'+snapshot.val()[i].time+'</div></div>');
    }
  });
  database.limitToLast(1).on('value', function(snapshot) {
    for(var i in snapshot.val()){
       $show.prepend('<div class="'+'太空人'+snapshot.val()[i].id+'"><div class="mes animated pulse" id="mes">'+snapshot.val()[i].name+'：'+snapshot.val()[i].content+'<div class="time">'+snapshot.val()[i].time+'</div></div></div>');
    }
  });    
});