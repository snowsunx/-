/**轮播图**/
var List = document.getElementById("pic").getElementsByTagName("li")
var Btn = document.getElementById("btn").getElementsByTagName("a")
var Left = document.getElementById("left")
var Right = document.getElementById("right")
var banner = document.getElementById("banner")
var i = 0,
	f = 0
List[i].className = "bl"
Btn[f].className = "white"
while(f < Btn.length) {
	Btn[f].index = f
	Btn[f].onclick = function() {
		i = this.index //点击的时候修改i，并且传到下面的方法
		var f = 0
		while(f < Btn.length) {
			Btn[f].className = ""
			List[f].className = ""
			f++
		}
		this.className = "white"
		List[this.index].className = "bl"
	}
	f++
}

function play() {
	var e = i
	i < List.length - 1 ? i++ : i = 0
	List[e].className = ""
	List[i].className = "bl"
	Btn[e].className = ""
	Btn[i].className = "white"
}

Right.onclick = play
Left.onclick = function() {
	var e = i
	i > 0 ? i-- : i = List.length - 1
	List[e].className = ""
	List[i].className = "bl"
	Btn[e].className = ""
	Btn[i].className = "white"
}

var time = setInterval(play, 1800)
banner.onmousemove = function() {
	clearInterval(time)
}
banner.onmouseout = function() {
	time = setInterval(play, 1800)
}