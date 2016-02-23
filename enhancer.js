'use strict';

function enhance(options, first)
{
	delete window.console;

	if (self !== top)
	{
		console.log("[wfirma-enhancer] self !== top");

		return;
	}

	console.log("[wfirma-enhancer] starting with options=", options);

	$('.brand').css('backgroundImage', 'url(' + options.appLogo + ')');

	if ($('#tab-params').length)
	{
		addFileDrop();
		setInterval(addFileDrop, 500);
	}

	function addFileDrop()
	{
		var $tabParams = $('#tab-params');

		if ($tabParams.length && !$tabParams.data('fileDropAdded'))
		{
			$tabParams.on('dragover', function(e) { e.preventDefault(); });
			$tabParams.on('drop', onFileDrop);
			$tabParams.data('fileDropAdded', true);
		}
	}

	function onFileDrop(e)
	{
		e.preventDefault();

		e.dataTransfer = {
			files: e.originalEvent.dataTransfer.files
		};

		if (!e.dataTransfer.files.length)
		{
			return;
		}

		var checkableEl = e.target;

		while (checkableEl && !checkableEl.classList.contains('checkable'))
		{
			checkableEl = checkableEl.parentNode;
		}

		if (!checkableEl)
		{
			return;
		}

		checkableEl.dispatchEvent(new CustomEvent('contextmenu', {
			bubbles: true,
			cancellable: true,
			view: window
		}));

		var $uiContext = $('.ui-context');

		if (!$uiContext.length)
		{
			return;
		}

		var $documentsLink = $uiContext.find('.dialogboxlink[href^="/documents"]');

		if (!$documentsLink)
		{
			return;
		}

		$documentsLink.click();
		$uiContext.trigger('mouseout');

		waitForDialogBox('.dialogbox[data-params*="Dokumenty"]', function($docList)
		{
			$docList.find('.wf-common-plus-circle').parent().click();

			waitForDialogBox('.dialogbox[data-params*="Dodawanie dok"]', function($addDoc)
			{
				$addDoc.find('li[data-document-type="file"] > a').click();
				$addDoc.find('.upload-wrapper').triggerHandler(e);

				if (!e.ctrlKey && !e.altKey && !e.shiftKey)
				{
					waitAndSubmit($addDoc.find('form'));
				}
			});
		});
	}

	function waitForDialogBox(selector, done)
	{
		function wait(interval, time)
		{
			if (time > 5000)
			{
				return;
			}

			var $dialogBox = $(selector);

			if ($dialogBox.length)
			{
				return done($dialogBox);
			}

			setTimeout(wait, interval, interval, time + interval);
		}

		wait(50, 0);
	}

	function waitAndSubmit($form)
	{
		function wait(interval, time)
		{
			if (time > 60000 || !$form.closest('body').length)
			{
				return;
			}

			var $submit = $form.find('[type="submit"]');

			if ($submit.length && $submit.prop('disabled') === false)
			{
				return $submit.click();
			}

			setTimeout(wait, interval, interval, time + interval);
		}

		wait(100, 0);
	}
}

function contentEval(source, options)
{
  if (typeof source === 'function')
  {
    source = '(' + source + ')(' + options + ', true);';
  }

  var script = document.createElement('script');
  script.setAttribute('type', 'application/javascript');
  script.textContent = source;

  document.body.appendChild(script);
	document.body.removeChild(script);
}

chrome.runtime.sendMessage('getOptions', function(options)
{
  contentEval(enhance, options);
});

