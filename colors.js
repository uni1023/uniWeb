var Links = { // 객체화 시키는 과정
      setColor:function(color){
      var alist = document.querySelectorAll('a'); // document도 객체였다
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
        }

      }

    }
    var Body = { // 객체화 시키는 과정
      setColor:function(color){
        document.querySelector('body').style.color = color;
      }, // 객체는 property와 property를 구분할 때 , 를 넣어야함.
      setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
      }
    }

    function nightDayHandler(self){
      var target = document.querySelector('body');
  if (self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue')
 } else {
    Body.setBackgroundColor('white');
    Body.setColor = ('black');
    self.value = 'night';

    Links.setColor('blue')

}

}

