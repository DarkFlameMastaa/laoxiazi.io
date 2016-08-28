function lxz() {
	var num = 2;
	var reduce = 60; //控制难度的 越大越简单 越小越难
	var colors = [];
	var BOX_WIDTH = 600; // 这里不写px  在下面赋值时候再加像素   是因为如果加了像素
	// 在给li赋值宽高时候,BOX_WIDTH/li.length如果有px就没法除了
	var BOX_HEIGHT = 600;

	function constructorColor(red, green, blue) {
		this.r = red;
		this.g = green;
		this.b = blue;
	}
	//颜色接口
	function colorPrice() {
		colors[0] = new constructorColor(229, 57, 53);
		colors[1] = new constructorColor(186, 104, 200);
		colors[2] = new constructorColor(92, 107, 192);
		colors[3] = new constructorColor(255, 167, 38);
		colors[4] = new constructorColor(46, 126, 50);
		colors[5] = new constructorColor(238, 255, 65);
		colors[6] = new constructorColor(109, 76, 65);
		colors[7] = new constructorColor(38, 198, 218);
		colors[8] = new constructorColor(0, 77, 64);
	}

	function randomColor() {
		var ran = Math.floor(Math.random() * colors.length);
		return ran;
	}

	function randomNum() {
		var ran = Math.floor(Math.random() * num * num);
		return ran;
	}
	function addColor() {
		var luck = randomNum();
		var luckColor = randomColor();
		var r = colors[luckColor].r;
		var g = colors[luckColor].g;
		var b = colors[luckColor].b;
		var rl = colors[luckColor].r - parseInt(reduce / num);
		var gl = colors[luckColor].g - parseInt(reduce / num);
		var bl = colors[luckColor].b - parseInt(reduce / num);
		$('li').css("background-color","rgb(" + r + "," + g + "," + b + ")");
		$('li').eq(luck).css("background-color", "rgb(" + rl + "," + gl + "," + bl + ")").addClass("luck");
	}
	function addKuai() {
		for (var i = 0; i < num * num; i++) {
			if ((i + 1) % num == 0) {
				$("#box").append("<li class='hideborder'></li>");
			} else {
				$("#box").append("<li></li>")
			};
		}
	}
	function addWidth() {
		$('li').css({
			'width': (BOX_WIDTH - num + 1) / Math.sqrt($('li').size()) + 'px',
			"height": (BOX_HEIGHT - num + 1) / Math.sqrt($('li').size()) + 'px'
		});
		var val = $("#lxz").width()//差了几像素
		var x=0;
		for (var i = 0; i < $('li').length; i++) {
			x+=$('#lxz li').eq(i).width();
		}

		console.log(val-x);
	}

	//初始化的代码，将他放到立即执行函数里，执行完了就释放内存
	(function() {
		colorPrice();
		var luckColor = randomColor();
		$("#box").css({
			"width": BOX_WIDTH + 'px',
			"height": BOX_HEIGHT + "px"
		});
		addKuai();
		addColor();
		addWidth();
	})();


	$('.luck').click(function add() {
		num++;
		$("li").remove();
		addKuai();
		addColor();
		addWidth();
		$('li').click(add);

	})
}

addOnLoad(lxz);
