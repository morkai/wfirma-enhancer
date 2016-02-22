chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
  if (request == 'getOptions')
  {
    sendResponse(JSON.stringify({
			appLogo: chrome.extension.getURL('app_logo.png')
		}));
  }
  else
	{
		sendResponse(null);
	}
});
