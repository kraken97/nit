$(function () {
    var defaultCount = 1;
    var item = $(".item").hide().clone();
    var stat = $(".stat").hide().clone();

    $(".item-form").submit(function (e) {
        e.preventDefault();
        var fieldValue = $(this).serializeArray()[0].value;
        $(this)[0].reset();
        addItem(fieldValue);

        
    })

    function addItem(fieldValue){
        if (fieldValue) {

            var elem = item.clone();
            var stat_elem = stat.clone();
            var counter = $(elem).find(".counter")
            var stat_num = stat_elem.find(".num");
            var stat_text = stat_elem.find(".title");
            var decr_butt=  $(elem).find(".decr")
            var itemname = $(elem).find(".itemname")

            elem.find(".del").click(function (e) {
                elem.fadeOut(400,function(){
                    elem.remove();
                     stat_elem.remove();
                })
               
            });

        
            itemname.text(fieldValue);
            itemname.click(function () {
                $(this).attr("contenteditable", "true");
            }).focusout(function () {
                var itemtext = itemname.text();
                itemname.text(itemname.text());
                stat_text.text(itemtext);
            });

            stat_text.text(fieldValue);
            counter.text(defaultCount);
            stat_num.text(defaultCount);

            $(elem).find(".inc").click(function (e) {
                var num = parseInt(counter.text()) + 1;
                counter.text(num);
                stat_num.text(num);
                decr_butt.prop("disabled", num <= 1);


            })
            decr_butt.click(function (e) {
                var counter_num = parseInt(counter.text());
                var num = counter_num > 1 ? counter_num - 1 : 1;
                decr_butt.prop("disabled", num <= 1);
                counter.text(num);
                stat_num.text(num);
            });

            elem.find(".sold").click(function (e) {
                $(".content-sold").append(stat_elem);
                elem.toggleClass("solded");
            });
             elem.find(".unsold").click(function (e) {
                $(".content-availble").append(stat_elem);
                elem.toggleClass("solded");
            });

            console.log(elem);
            $(".item-container").append(elem.fadeIn());
            $(".content-availble").append(stat_elem.show());

        }
    }

    addItem("pim")
    addItem("pom")
    addItem("pum")

});