'use strict';

(function ($) {

    $(function () {
        var textOne = 'А между тем, пришло время, перейти к самой интересной части обучения – добавлению различных ' +
            'эффектов, именно то, из-за чего его берутся изучать многие люди. И в сегодняшней статье вы узнаете, ' +
            'как изменять CSS-свойства «на лету».';
        var textTwo = 'Прежде чем мы перейдем непосредственно к эффектам, давайте вернемся немного назад и взглянем ' +
            'на CSS. В предыдущих статьях, мы изменяли внешний вид страницы, путем добавления или удаления различных ' +
            'CSS-классов, которые перед этим, конечно же, должны быть созданы в CSS-файле. Как правило это правильный ' +
            'способ, потому что он считается с ролью CSS при формировании страницы.';
        var textThree = 'Однако бывают случаи, когда вам нужно изменить стиль CSS, которого нет в файле стилей, ' +
            'или который описать нельзя. Для таких случаев в JQuery существует метод .css().';
        var textFour = 'Для того чтобы получить значение CSS-свойства, мы должны просто передать имя свойства в ' +
            'качестве строки, примерно так .css(‘backgroundColor’).';
        var $textUnder = $('#textUnderUl');
        $('.ul li').on('click', function f(event) {
            $('.ul li').addClass('ulli').removeClass('ulLiCheked');
            var tab = event.target;
            console.log(tab.id);
            $(tab).addClass('ulLiCheked').removeClass('ulli');
            if (tab.id == 1) {
                $($textUnder).css('height', '0');
                $($textUnder).animate({
                    height: "150"
                }, 500);
                $textUnder.text(textOne);
                console.log($textUnder);
            } else if (tab.id == 2) {
                $($textUnder).css('height', '0');
                $($textUnder).animate({
                    height: "150"
                }, 500);
                $textUnder.text(textTwo);
                console.log($textUnder);
            } else if (tab.id == 3) {
                $($textUnder).css('height', '0');
                $($textUnder).animate({
                    height: "150"
                }, 500);
                $textUnder.text(textThree);
                console.log($textUnder);
            } else if (tab.id == 4) {
                $($textUnder).css('height', '0');
                $($textUnder).animate({
                    height: "150"
                }, 500);
                $textUnder.text(textFour);
                console.log($textUnder);
            }
            console.log(tab)
        })
    })
})(jQuery);