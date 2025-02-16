document.addEventListener("DOMContentLoaded", function(){

    let count = 0;
    
    let but = document.getElementById("but");
    const dis = document.getElementById("countic");
    
    but.addEventListener("click", function(){
       count += 1;
       dis.textContent = count;
    //.textContent для изменения текстового содержимого элемента
    if(count>=20) {
      but.ariaDisabled = true;
      //Блокирует кнопку
    }

    });
    let co = 0;
    let tim = document.getElementById("Timer"); 

    // setInterval позваоляет вызывать ф-цию регулярно, повторяя вызов через определ интервал
   const interval = setInterval( function(){
      co += 1;
      tim.textContent = co;

      if(co >= 10){
         clearInterval(interval);
      }
   },1000); //1000 - это 1 секунда

   let ct = 0;
   let intervalic;
   const ourtext = document.getElementById("tm");
   const Sb = document.getElementById("Sb");
   const St = document.getElementById("Stop");
   const Res = document.getElementById("Reset");

   Sb.addEventListener("click", function(){
      if(!intervalic){ //проверяем, не запущен ли таймер
         intervalic = setInterval(function(){
            ct++ //увеличиваем счетчик
            ourtext.textContent = ct;
         }, 1000);
      }
   })

   St.addEventListener("click", function(){
      clearInterval(intervalic); //stop our interval
      intervalic = null; //сбрасываем идентификатор интервала
   });

   Res.addEventListener("click", function(){
      clearInterval(intervalic);
      intervalic = null;
      ct = 0;
      ourtext.textContent = ct;
   });

    });