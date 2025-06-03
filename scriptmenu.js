var includeCheckboxes = document.querySelectorAll('.filter-checkbox2');
var excludeCheckboxes = document.querySelectorAll('.filter-checkbox1');
var menuItems = document.querySelectorAll('.menuItemContainer');

for (var i = 0; i < includeCheckboxes.length; i++) {
  includeCheckboxes[i].addEventListener('change', filterMenu);
}
for (var i = 0; i < excludeCheckboxes.length; i++) {
  excludeCheckboxes[i].addEventListener('change', filterMenu);
}

function filterMenu() {
  var include = [];
  var exclude = [];

  for (var i = 0; i < includeCheckboxes.length; i++) {
    if (includeCheckboxes[i].checked) {
      include.push(includeCheckboxes[i].value);
    }
  }

  for (var i = 0; i < excludeCheckboxes.length; i++) {
    if (excludeCheckboxes[i].checked) {
      exclude.push(excludeCheckboxes[i].value);
    }
  }

  for (var j = 0; j < menuItems.length; j++) {
    var item = menuItems[j];
    var itemInclude = false;
    var itemExclude = false;

    if (include.length === 0) {
      itemInclude = true; 
    } else {
      for (var k = 0; k < include.length; k++) {
        if (item.classList.contains(include[k])) {
          itemInclude = true;
          break;
        }
      }
    }

    for (var m = 0; m < exclude.length; m++) {
      if (item.classList.contains(exclude[m])) {
        itemExclude = true;
        break;
      }
    }

    if (itemInclude && !itemExclude) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  }
}