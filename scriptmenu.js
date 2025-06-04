const includeCheckboxes = document.querySelectorAll('.filter-checkbox2');
const excludeCheckboxes = document.querySelectorAll('.filter-checkbox1');
const menuItems = document.querySelectorAll('.menuItemContainer');

for (let i = 0; i < includeCheckboxes.length; i++) {
  includeCheckboxes[i].addEventListener('change', filterMenu);
}
for (let i = 0; i < excludeCheckboxes.length; i++) {
  excludeCheckboxes[i].addEventListener('change', filterMenu);
}

function filterMenu() {
  const include = [];
  const exclude = [];

  for (let i = 0; i < includeCheckboxes.length; i++) {
    if (includeCheckboxes[i].checked) {
      include.push(includeCheckboxes[i].value);
    }
  }

  for (let i = 0; i < excludeCheckboxes.length; i++) {
    if (excludeCheckboxes[i].checked) {
      exclude.push(excludeCheckboxes[i].value);
    }
  }

  for (let j = 0; j < menuItems.length; j++) {
    const item = menuItems[j];
    let itemInclude = false;
    let itemExclude = false;

    if (include.length === 0) {
      itemInclude = true;
    } else {
      for (let k = 0; k < include.length; k++) {
        if (item.classList.contains(include[k])) {
          itemInclude = true;
          break;
        }
      }
    }

    for (let m = 0; m < exclude.length; m++) {
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