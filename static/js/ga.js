var arr = [15];
    var next = 10;
    document.onkeydown = function (e) { next = { '37': -1, '39': 1, '38': -10, '40': 10 }[(e ? e : event).keyCode] };
    var run = setInterval(function () {
      var list = ['-1&&arr[0]%10==0', '1&&arr[0]%10==9', '-10&&arr[0]<10', '10&&arr[0]>189'];
      var temp = arr[0] + next;
      if (list.some(function (x) { return eval('next==' + x) }) || arr.indexOf(temp) >= 0)
        return clearInterval(run);
      arr.unshift(temp);
      if (this.food == null || food == temp) {
        list = [];//(list=Array(200)).forEach(function(val,i){list[i]=i});
        for (var i = 0; i < 200; i++)
          list.push(i);
        list = list.filter(function (x) { return arr.indexOf(x) < 0 });
        food = list[Math.round(Math.random() * (list.length - 1))];
      }
      else
        arr.pop();
      var s = '';
      for (var j = 0; j < 200; j++) {
        if (j % 10 == 0 && j != 0)
          s += '<br/>';
        if (arr.indexOf(j) >= 0)
          s += '\u25a0';
        else if (j == food)
          s += '\u2605';
        else
          s += '&emsp;';
      }
      document.getElementById("box-1").innerHTML = s;
    }, 200);