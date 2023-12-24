// Pulled from Windows93
// Thank you, Jankenpopp

if (document.querySelector(".sf"))
  return;

////////////////////////////////////////////////////////////////  
// Javascript made by Rasmus - http://www.peters1.dk //  
////////////////////////////////////////////////////////////////  
var SNOW_Picture = "http://ekladata.com/LBDh9BTGxWqX_98QpM1c5LLaWDI.gif";
var SNOW_no = 50;  
var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;  
var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  
var SNOW_Time;  
var SNOW_dx, SNOW_xp, SNOW_yp;  
var SNOW_am, SNOW_stx, SNOW_sty;   
var i, SNOW_Browser_Width, SNOW_Browser_Height;   
if (SNOW_browser_IE_NS)  
{  
    SNOW_Browser_Width = document.body.clientWidth;  
    SNOW_Browser_Height = document.body.clientHeight;  
}  
else if (SNOW_browser_MOZ)  
{  
    SNOW_Browser_Width = self.innerWidth - 20;  
    SNOW_Browser_Height = self.innerHeight;  
}  
else if (SNOW_browser_IE7)  
{  
    SNOW_Browser_Width = document.documentElement.clientWidth;  
    SNOW_Browser_Height = document.documentElement.clientHeight;  
}  
SNOW_dx = new Array();  
SNOW_xp = new Array();  
SNOW_yp = new Array();  
SNOW_am = new Array();  
SNOW_stx = new Array();  
SNOW_sty = new Array();  
for (i = 0; i < SNOW_no; ++ i)   
{   
    SNOW_dx[i] = 0;   
    SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-50);  
    SNOW_yp[i] = Math.random()*document.documentElement.clientHeight-50;  
    SNOW_am[i] = Math.random()*20;   
    SNOW_stx[i] = 0.02 + Math.random()/10;  
    SNOW_sty[i] = 0.7 + Math.random();  
    if (i == 0) document.write("<\div class=\"sf\" id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><a href=\"http://www.peters1.dk\" target=\"_blank\"><\img src=\""+SNOW_Picture+"\" border=\"0\"></a><\/div>");  
    else document.write("<\div class=\"sf\" id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");  
}  
function SNOW_Weather()   
{   
for (i = 0; i < SNOW_no; ++ i)   
{   
    SNOW_yp[i] += SNOW_sty[i];  
    if (SNOW_yp[i] > document.documentElement.clientHeight-50)   
    {  
        SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-SNOW_am[i]-30);  
        SNOW_yp[i] = 0;  
        SNOW_stx[i] = 0.02 + Math.random()/10;  
        SNOW_sty[i] = 0.7 + Math.random();  
    }  
    SNOW_dx[i] += SNOW_stx[i];  
    document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";  
    document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px";  
}  
SNOW_Time = setTimeout("SNOW_Weather()", 10);  
}  
SNOW_Weather();
// xmass BG
var myBG = document.querySelector(".skin_background");
var myBGs = [
  "http://v1.windows93.net/c/sys/xmas/bg/11.gif",
  "http://v1.windows93.net/c/sys/xmas/bg/12.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/14235.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/17.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/18.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/1zZIM.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/20.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/23.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/24.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/25.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/26.png",
  "http://v1.windows93.net/c/sys/xmas/bg/27.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/28.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/29.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/30.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/3245345.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/33.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/5.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/524533.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/65431234.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/7.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/7YL1e82.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/9.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/MDnmx3M.png",
  "http://v1.windows93.net/c/sys/xmas/bg/Merry_5ab723_1408311.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/a5llmNW.gif",
  "http://v1.windows93.net/c/sys/xmas/bg/christmas-jammies2.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/destroy-Christmas.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/ezhjfdhzedb.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/gif-cat-christmas-tree-838731.gif",
  "http://v1.windows93.net/c/sys/xmas/bg/jzefhgj.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/kejzfhjzh.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/kjdf.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/o0R44.gif",
  "http://v1.windows93.net/c/sys/xmas/bg/snoop.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/wb3uH.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/zegyuzdgyud.jpg",
  "http://v1.windows93.net/c/sys/xmas/bg/zekhzeud.jpg"  
];
xBG = parseInt(Math.random()*myBGs.length);
myBG.style.backgroundImage = "url('"+myBGs[xBG]+"')"; 
myBG.style.backgroundSize = "cover";
myBG.style.backgroundPosition = "center center";
if (xBG==9||xBG==13||xBG==14||xBG==17||xBG==20) {
	myBG.style.backgroundPosition = "center top";
};
if (xBG==24) {
	myBG.style.backgroundPosition = "center bottom";
};
if (xBG==11||xBG==28) {
	myBG.style.backgroundSize = "contain";
};
