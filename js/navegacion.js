function carganfc() {
    $('#principal').hide();
    $('#principal').load("nfc.html");
    $('#principal').show('slow');

}

function cargaboro() {
    $('#principal').hide();
    $('#principal').load("boro.html");
    $('#principal').show('slow');

}

function recargaindex() {
    $('#principal').hide();
    $('#principal').load("reindex.html");
    $('#principal').show('slow');
}

$(function () {
    var handle = $("#custom-handle");
    $("#slider").slider({
        create: function () {
            handle.text($(this).slider("value"));
        },
        max: 8.8,
        step: 0.01,
        slide: function (event, ui) {
            handle.text(ui.value);
        }
    });
});
$(function () {
    var handle2 = $("#custom-handle2");
    $("#slider2").slider({
        create: function () {
            handle2.text($(this).slider("value"));
        },
        max: 3,
        step: 0.01,
        slide: function (event, ui) {
            handle2.text(ui.value);
        }
    });

});
$(function () {
    var handle3 = $("#custom-handle3");
    $("#slider3").slider({
        create: function () {
            handle3.text($(this).slider("value"));
        },
        max: 25,
        step: 0.1,
        slide: function (event, ui) {
            handle3.text(ui.value);
        }
    });
});
$(function () {
    var handle3 = $("#custom-handle4");
    $("#slider4").slider({
        create: function () {
            handle3.text($(this).slider("value"));
        },
        max: 100,
        step: 1,
        slide: function (event, ui) {
            handle3.text(ui.value);
        }
    });
});
$(function () {
    var handle3 = $("#custom-handle5");
    $("#slider5").slider({
        create: function () {
            handle3.text($(this).slider("value"));
        },
        max: 600,
        step: 2,
        slide: function (event, ui) {
            handle3.text(ui.value);
        }
    });
});
$(function () {
    var handle3 = $("#custom-handle6");
    $("#slider6").slider({
        create: function () {
            handle3.text($(this).slider("value"));
        },
        max: 150,
        step: 1.5,
        slide: function (event, ui) {
            handle3.text(ui.value);
        }
    });
});
$(function () {
    var handle3 = $("#custom-handle7");
    $("#slider7").slider({
        create: function () {
            handle3.text($(this).slider("value"));
        },
        max: 0.03,
        step: 0.001,
        slide: function (event, ui) {
            handle3.text(ui.value);
        }
    });
});
