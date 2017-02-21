function semafor(){
var boje = document.getElementsByClassName('boje');
var boje1 = document.getElementsByClassName('boje1');
var boje2 = document.getElementsByClassName('boje2');
boje[0].style.background ='rgb(255, 51, 0';
boje[1].style.background ='gray';
boje[2].style.background ='gray';
boje[3].style.background ='gray';
boje[4].style.background ='gray';
boje[5].style.background ='rgb(0, 255, 0)';
boje1[0].style.background ='rgb(255, 51, 0)';
boje1[1].style.background ='gray';
boje1[2].style.background ='gray';
boje1[3].style.background ='rgb(0, 255, 0)';;
boje2[0].style.background ='rgb(0, 255, 0)';
boje2[1].style.background ='gray';
function greenToGrey1(){
boje[5].style.background='gray';
boje1[3].style.background ='gray';
}
function greyToGreen1(){
boje[5].style.background='rgb(0, 255, 0)';
boje1[3].style.background ='gray';
}

function changeToYellow(){

boje[1].style.background ='rgb(255, 204, 0)';
boje[4].style.background ='rgb(255, 204, 0)';
boje[5].style.background ='gray';
boje1[0].style.background ='rgb(255, 51, 0)';
boje1[1].style.background ='gray';
boje1[2].style.background ='rgb(255, 51, 0';
boje1[3].style.background ='gray';
boje2[0].style.background ='rgb(0, 255, 0)';
boje2[1].style.background ='gray';
}
function changeToGreen(){
boje[0].style.background ='gray';
boje[1].style.background ='gray';
boje[2].style.background ='rgb(0, 255, 0)';
boje[3].style.background ='rgb(255, 51, 0';
boje[4].style.background ='gray';
boje1[0].style.background ='gray';
boje1[1].style.background ='rgb(0, 255, 0)';
boje1[2].style.background ='rgb(255, 51, 0';
boje1[3].style.background ='gray';
boje2[0].style.background ='gray';
boje2[1].style.background ='rgb(0, 255, 0)';
}
function greenToGrey(){
boje[2].style.background='gray';
boje1[1].style.background ='gray';
}
function greyToGreen(){
boje[2].style.background='rgb(0, 255, 0)';
boje1[1].style.background ='rgb(0, 255, 0)';
}
function changeToZutoSamo(){
boje[1].style.background ='rgb(255, 204, 0';
boje[2].style.background ='gray';
boje[4].style.background ='rgb(255, 204, 0';
boje1[0].style.background ='rgb(255, 51, 0';
boje1[1].style.background ='gray';
boje1[2].style.background ='rgb(255, 51, 0';
boje1[3].style.background ='gray';
boje2[0].style.background ='gray';
boje2[1].style.background ='rgb(0, 255, 0)';
}

var g=setTimeout(greenToGrey1,7000);
var h=setTimeout(greyToGreen1,7500);
var g=setTimeout(greenToGrey1,8000);
var h=setTimeout(greyToGreen1,8500);
var g=setTimeout(greenToGrey1,9000);
var h=setTimeout(greyToGreen1,9500);
var x=setTimeout(changeToYellow,10000);
var y=setTimeout(changeToGreen,13000);
var e=setTimeout(greenToGrey,23000);
var f=setTimeout(greyToGreen,24000);
var e=setTimeout(greenToGrey,24500);
var f=setTimeout(greyToGreen,25000);
var e=setTimeout(greenToGrey,25500);
var f=setTimeout(greyToGreen,26000);
var z=setTimeout(changeToZutoSamo,26500);
var start = setInterval(semafor,29500);	
}
semafor();

//function greenToGrey(){
	//		boje[0].style.background='grey';
		//	boje[1].style.background='grey';
			//boje[2].style.background='grey';
	//	}
		//function greyToGreen(){
			//boje[0].style.background='grey';
			//boje[1].style.background='grey';
		//	boje[2].style.background='green';
		//}

