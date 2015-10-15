///화면 확대 축소 시작 IE 전용
var nowZoom = 100; // 현재비율
var maxZoom = 200; // 최대비율(500으로하면 5배 커진다)
var minZoom = 80; // 최소비율
var viewTarget = "bodyViewCtrl";
//확대
function Handicap_ZoomIn_Main()
{
	if (nowZoom < maxZoom)
	{
		nowZoom += 10; //10%씩 커진다.
	}
	else
	{
		return;
	}
	document.getElementById(viewTarget).style.zoom = nowZoom + "%";
}

//화면 줄인다.
function Handicap_ZoomOut_Main()
{
	if (nowZoom > minZoom)
	{
		nowZoom -= 10; //10%씩 작아진다.
	}
	else
	{
		return;
	}
	document.getElementById(viewTarget).style.zoom = nowZoom + "%";
}

function Handicap_Default_Main()
{
	var doc = document;
	var element;
	document.body.style.zoom = "100%";
	document.getElementById(viewTarget).style.zoom = "100%";
	nowZoom = 100;
}
jQuery(function(){
	function userAgentChk(){
		if (navigator.userAgent.match(/msie/i) == null){
			alert('익스플로러 전용입니다. 브라우저 확대축소 기능을 이용하세요(컨트롤+플러스,마이너스,0)')
		}
		return false;
	}
	$(".font_plus").click(function(){
		userAgentChk();
		Handicap_ZoomIn_Main();return false;
	})
	$(".font_default").click(function(){
		userAgentChk();
		Handicap_Default_Main();return false;
	})
	$(".font_minus").click(function(){
		userAgentChk();
		Handicap_ZoomOut_Main();return false;
	})
});
