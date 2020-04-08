(function() {
    const controlls = document.querySelectorAll('.menu__link');
    const controllsDays = document.querySelectorAll('.days__item');
    const activeClass = 'menu__item--active';
    const activeClassDays = 'days__item--active';

    controlls.forEach(function(control, key){

        control.addEventListener('click', function(e){
            e.preventDefault;
            
            controlls.forEach(function(link, key){
                controllsDays[key].closest('.days__item').classList.remove(activeClassDays);
                link.closest('.menu__item').classList.remove(activeClass);
            })
            control.closest('.menu__item').classList.add(activeClass);
            controllsDays[key].closest('.days__item').classList.add(activeClassDays);
        })

    })
}())