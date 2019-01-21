$( function() {
    function runEffect() {
      var selectedEffect = $( "#effectTypes" ).val();
      var options = {};
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
       $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
     $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
  } );

function showError(container, errorMessage) {
	container.className = 'error';
	var msgElem = document.createElement('span');
	msgElem.className = "error-message";
	msgElem.innerHTML = errorMessage;
	container.appendChild(msgElem);
	}

	function resetError(container) {
		container.className = '';
		if (container.lastChild.className == "error-message") {
			container.removeChild(container.lastChild);
		}
	}

	function validate(form) {
		var elems = form.elements;

		resetError(elems.from.parentNode);
		if (!elems.from.value.match(/[A-ZА-Яa-zа-яё]+/g)) {
			showError(elems.from.parentNode, 'Имя должно содержать только буквы.');
		}
		resetError(elems.eMail.parentNode);
		if (!elems.eMail.value.match(/\w+\@\w+\.\w+/)) {
			showError(elems.eMail.parentNode, 'Введите e-mail согласно шаблону: name@example.com');
		}

		resetError(elems.message.parentNode);
		if (!elems.datepicker.value) {
		showError(elems.datepicker.parentNode, 'Введите дату.');
		}

		resetError(elems.message.parentNode);
		if (!elems.message.value) {
		showError(elems.message.parentNode, 'Отсутствует текст.');
		}

	};

function userName()
{
		var us = document.getElementById("usersName");
		document.getElementById("user").innerHTML = us.value;
}
function userEmail()
{
		var us = document.getElementById("usersEmail");
		document.getElementById("userEmail").innerHTML = us.value;
}

function userData()
{
		var us = document.getElementById("datepicker");
		document.getElementById("userData").innerHTML = us.value;
}

function users()
{
		var us = document.getElementById("otziv");
		document.getElementById("userOtziv").innerHTML = us.value;
}

$( function() {
	$("#datepicker").datepicker({
		monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август", "Сентябрь","Октябрь","Ноябрь","Декабрь"],
		dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
		firstDay:1,
		dateFormat:"dd.mm.yy"
	});
});

function viewdiv(id) {
	var el = document.getElementById("formOtziv");
	var link = document.getElementById('addcom');
	if (el.style.display == "block") {
		el.style.display = "none";
		link.innerText = link.getAttribute('data-text-hide');
	} else {
		el.style.display = "block";
		link.innerText = link.getAttribute('data-text-show');
	}
}

var largeImg = document.getElementById('largeImg');

var thumbs = document.getElementById('thumbs');

thumbs.onclick = function(e) {
	var target = e.target;

	while (target != this) {

	if (target.nodeName == 'A') {
	showThumbnail(target.href, target.title);
	return false;
	}
	target = target.parentNode;
	}
}

function showThumbnail(href, title) {
	largeImg.src = href;
	largeImg.alt = title;
}

var imgs = thumbs.getElementsByTagName('img');
	for (var i = 0; i < imgs.length; i++) {
		var url = imgs[i].parentNode.href;
		var img = document.createElement('img');
		img.src = url;
	}


$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#sendСomment" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );