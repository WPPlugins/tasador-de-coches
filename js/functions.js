/**
 * Created by juancarlosrico on 14/09/2016.
 */
(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };

    $.fn.removeOptions = function() {
        return this.each(function() {
            $(this).find('option')
                .remove();
        });
    };

    $.fn.display = function() {
        return this.each(function() {
            $(this).css("display", "block");
        });
    };
    $.fn.hidden = function() {
        return this.each(function() {
            $(this).css("display", "none");
        });
    };

    $.fn.ForceNumericOnly =
        function()
        {
            return this.each(function()
            {
                $(this).keydown(function(e)
                {
                    var key = e.charCode || e.keyCode || 0;
                    // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
                    // home, end, period, and numpad decimal
                    return (
                    key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 110 ||
                    key == 190 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
                });
            });
        };
}(jQuery));
