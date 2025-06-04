// ACCESS THE ORDER FORM
const form = document.forms.orderForm;

// ADD MENU ITEMS TO ARRAY SECTION WITH 'add' BUTTON AND REMOVE FROM ARRAY SECTION WITH 'remove' BUTTON.
// CHECK ARRAY AND TOTAL PRICE AFTER PUSH 'pricetotal' BUTTON
let basket = [];

function updateOrderList() {
  const orderList = document.getElementById("orderlist");
  orderList.innerHTML = "";
  basket.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${parseFloat(item.price).toFixed(2)} Bells`;
    orderList.appendChild(li);
  });
}

function addItem() {
  const select = document.getElementById("orderOptionsDropdown");
  const selectedOption = select.options[select.selectedIndex];
  const dataArray = JSON.parse(selectedOption.getAttribute("data-array"));

  const itemObj = {
    name: dataArray[0],
    price: parseFloat(dataArray[1]),
    category: dataArray[2],
    tags: dataArray.slice(3)
  };

  basket.push(itemObj);
  updateOrderList();
}

function removeItem() {
  if (basket.length > 0) {
    basket.pop();
    updateOrderList();
  } else {
    alert("Basket is empty.");
  }
}

function calculateTotal() {
  const total = basket.reduce((sum, item) => sum + item.price, 0);
  const summary = {
    itemCount: basket.length,
    totalPrice: `${total.toFixed(2)} Bells`,
    items: basket.map(item => item.name)
  };

  const totalSpan = document.getElementById("total");
  if (totalSpan) {
    totalSpan.textContent = `${total.toFixed(2)} Bells`;
  }

  console.log("Order Submitted:", summary);

  return summary;
}

document.getElementById("add").addEventListener("click", addItem);
document.getElementById("remove").addEventListener("click", removeItem);
document.getElementById("pricetotal").addEventListener("click", calculateTotal);

// RECORD ALL FORM INPUT ON PRESSING THE 'submit' BUTTON
function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");

  const elements = form.elements;
  console.log(elements);

// PERSONAL DETAILS SECTION - TEXT INPUT
  const name = elements.name.value;
  const email = elements.email.value;
  const time = elements.time.value

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Time: ${time}`);

// ALLERGENS & REQUIREMENTS SECTION - CHECKBOXES
  let allergens = "";
  const allergenChecker = form.querySelectorAll('input[name="allergens"]:checked');
  for (let i = 0; i < allergenChecker.length; i++) {
    allergens += allergenChecker[i].value + ", ";
  }

  if (allergens === "") {
    allergens = "none";
  } else {
    allergens = allergens.slice(0, -2); 
  }

  console.log(`Allergens: ${allergens}`); 

// EXTRA ITEMS SECTION - CHECKBOXES AND TEXT
  const milk = elements.milk.value;
  console.log(`Milk Type: ${milk}`);

  let extras = "";
  const extrasChecker = form.querySelectorAll('input[name="extras"]:checked');
  for (let i = 0; i < extrasChecker.length; i++) {
    extras += extrasChecker[i].value + ", ";
  }

  if (extras === "") {
    extras = "none";
  } else {
    extras = extras.slice(0, -2); 
  }

  console.log(`Extras: ${extras}`); 

// MEMBERSHIP SECTION - COLOURBOX AND TEXT
  const color1 = elements.membership1.value;
  console.log(`MembershipColor: ${color1}`);

  const color2 = elements.membership2.value;
  console.log(`MembershipDeets: ${color2}`);

  const summary = calculateTotal();

// END OF ORDER SECTION
    alert(`
    "Thank you for submitting your order!"
    Order Summary:
    Name: ${name}
    Email: ${email}
    Time: ${time}
    --------------
    Basket Summary:
    Items: ${summary.itemCount}
    Total: ${summary.totalPrice}
    Items List: \n    ${summary.items.join("\n    ")}
    --------------
    Allergens: ${allergens}
    Milk Type: ${milk}
    Extras: Add ${extras}
    --------------
    MembershipColor: ${color1}
    Other Notes: ${color2}
    `);
}

// EVENT LISTENER FOR FINAL SUBMIT BUTTON
form.addEventListener("submit", handleSubmit);