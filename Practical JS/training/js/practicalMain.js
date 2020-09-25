const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
//
    //  wrapper.addEventListener('click', (event)=> {
    //   if ( event.target && event.target.tagName == 'BUTTON') {
    //       console.log('hello');
    //       
    //   }
    //   
    //  });
    //  
    //  wrapper.addEventListener('click', (event)=> {
    //    if ( event.target && event.target.matches('button.red')) {
    //        console.log('hello');
    //        
    //    }
    //    
    //   });
    //   
    // btns.forEach(item => {
    //     item.addEventListener('click', ()=> {
    //         console.log('jark');
    //     });
    // });

      const btn = document.createElement('button');
      btn.classList.add('red');
      wrapper.append(btn);
//console.log(btns[0].classList.length);// кол-во классов у эл.
//console.log(btns[0].classList.item(0));//получение класса эл-та по индексу
//console.log(btns[0].classList.contains('red'));//узнает существует ли класс у эл. возврщ. true или false
//console.log(btns[0].classList.add('add','second-class'));//добавоояет класс 
//console.log(btns[0].classList.remove());//удаляет класс
//console.log(btns[0].classList.toggle());//добавляет или удаляет класс

//btns[0].addEventListener('click', ()=> {
//    if (!btns[1].classList.contains('red')) {
//        btns[1].classList.add('red');
//    }else {
//        btns[1].classList.remove('red');
//    }
//});

//btns[0].addEventListener('click', ()=> {
//        btns[1].classList.toggle('red');
//});