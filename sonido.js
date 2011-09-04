

soundManager.debugMode = false;
soundManager.preferFlash = false; // use HTML5 audio for MP3/MP4, if available
soundManager.onready(function(){
       // SM2 has loaded - now you can create and play sounds!
       music = soundManager.createSound({
               id: 'music',
               url: 'landing_party.mp3'
       // onload: myOnloadHandler,
       // other options here..
       });

       music.setVolume(100);
      music.play({
                 loops: 5
       });
     //  music.pause();
});




soundManager.onready(function(){
       // SM2 has loaded - now you can create and play sounds!
       music2 = soundManager.createSound({
               id: 'music2',
               url: 'op.mp3'
       // onload: myOnloadHandler,
       // other options here..
       });

       music2.setVolume(500);
      music2.play({
                 loops: 5
       });
     //  music.pause();
});