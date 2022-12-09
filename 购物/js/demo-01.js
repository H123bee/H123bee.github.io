window.onload=function(){
	var min=document.getElementById('min');
	var max=document.getElementById('max');
	  max.onchange=function(){
	  	var minvalue=document.getElementById('min').value;
	    var maxvalue=document.getElementById('max').value;
         alert(minvalue+","+maxvalue);
	  }
}