window.onload=function(){
		//let ele=document.getElementByName('user');
		//let s=document.getElementById('submit-box');
		//if(ele!="2004")
		/*s.onclick=function(){
			alert("账号错误!");
		}*/

			//  div拖动代码
		  var div=document.querySelector('#test');
             var x,y,dx,dy;
             div.addEventListener('touchstart',function(e){
                 var f=e.targetTouches;
                       x=f[0].pageX;				   
                      y=f[0].pageY;  				//获取初始手指坐标
                      dx=div.offsetLeft;
                      dy=div.offsetTop;				//获取初始盒子坐标
                this.addEventListener('touchmove',function(e){
                     var finger=e.targetTouches;
                     div.style.left=dx+(finger[0].pageX-x)+'px';
                       div.style.top=dy+(finger[0].pageY-y)+'px';		//原来盒子坐标加上手指移动的距离
                          e.preventDefault();                        //阻止屏幕滑动，
                  });
                 
             })

}