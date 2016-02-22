'use strict';

var DEFAULT_OPTIONS = {

};

var options = JSON.parse(/* localStorage.wfirmaEnhancer || */'{}');

document.addEventListener('DOMContentLoaded', function()
{
  Object.keys(DEFAULT_OPTIONS).forEach(function(optionKey)
  {
    if (typeof options[optionKey] === 'undefined')
    {
      options[optionKey] = DEFAULT_OPTIONS[optionKey];
    }

    applyOption(optionKey, options[optionKey]);

    document.getElementById(optionKey).addEventListener('change', function()
    {
      var value;

      switch (getOptionType(this))
      {
        case 'checkbox':
          value = this.checked ? 1 : 0;
          break;

        case 'number':
          value = this.valueAsNumber;
          break;

        case 'textarea':
          value = this.value;
          break;
      }

      if (typeof value !== 'undefined')
      {
        saveOption(optionKey, value);
      }
    });
  });
});

function getOptionType(optionEl)
{
  return optionEl.tagName === 'INPUT'
    ? optionEl.type
    : optionEl.tagName.toLowerCase()
}

function applyOption(optionKey, optionValue)
{
  var optionEl = document.getElementById(optionKey);

  if (optionEl === null)
  {
    console.warn("Unknown option: %s", optionKey);

    return;
  }

  var optionType = getOptionType(optionEl);

  switch (optionType)
  {
    case 'checkbox':
      optionEl.checked = optionValue === 1;
      break;

    case 'number':
    case 'textarea':
      optionEl.value = optionValue;
      break;

    default:
      console.warn("Unsupported option type: %s", optionType);
  }
}

function saveOption(optionKey, optionValue)
{
  var optionEl = document.getElementById(optionKey);

  if (optionEl === null)
  {
    console.warn("Unknown option: %s", optionKey);

    return;
  }

  switch (optionKey)
  {
		default:
			break;
  }

  options[optionKey] = optionValue;

  //localStorage.wfirmaEnhancer = JSON.stringify(options);
}
