var a_idx = 0; 

 $("body").click(function(e) { 
 var a = new Array("梦", "在", "这", "里", "腐", "了", "朽" ,"剩", "流", "泪"); 
 var $i = $("<span/>").text(a[a_idx]); 
 a_idx = (a_idx + 1) % a.length; 
 var x = e.pageX, 
 y = e.pageY; 
 $i.css({ 
 "z-index": 99999, 
 "top": y - 20, 
 "left": x, 
 "position": "absolute", 
 "font-weight": "bold", 
 "color": "#dadcdd"
 }); 
 $("body").append($i); 
 $i.animate({ 
 "top": y - 180, 
 "opacity": 0 
 }, 
 1500, 
 function() { 
 $i.remove(); 
 }); 
 }); 