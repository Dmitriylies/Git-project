window.addEventListener('DOMContentLoaded', ()=> {
   
    const tabParent = document.querySelector('.tabheader__items'),
          tabItem = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent');
    const objTab = {
        hideTabContent: function hideTabContent() {
            tabContent.forEach( item => {
                item.classList.add('hide', 'fade');
            });
            tabItem.forEach( item => {
                item.classList.remove('tabheader__item_active', 'fade');
            });
        },
        showTabContent: function showTabContent(i = 0) {
            tabContent[i].classList.remove('hide');

            tabItem[i].classList.add('tabheader__item_active');
        },
        tabListener: function tabListener(event) {
            const target = event.target;
            if (target && target.classList.contains('tabheader__item')) {
                tabItem.forEach( (item, i) => {
                    if (target == item) {
                        objTab.hideTabContent();
                        objTab.showTabContent(i);
                    }
                 });
            }
        },
    };
        objTab.hideTabContent();
        objTab.showTabContent();
        tabParent.addEventListener('click', objTab.tabListener);
        
});
