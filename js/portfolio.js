function animate (elem) {
          var effect = elem.data("effect");
          elem.addClass("animated " + effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            elem.removeClass("animated " + effect);
          });

        }
          $(document) .ready(function() {
            $(".aaa").mouseenter (function() {
              animate ($(this));
            });

          });