const form = document.forms.orderForm;

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

// ORDER ITEMS LIST - DROPDOWN ARRAY JSON NONSENSE
  
  
// ORDER ITEMS LIST - PRICE TOTAL BUTTON
  

// ALLERGENS & REQUIREMENTS SECTION - CHECKBOXES
  let allergens = "";
  const allergenChecker = form.querySelectorAll('input[name="allergens"]:checked');
  for (let i = 0; i < allergenChecker.length; i++) {
    allergens += allergenChecker[i].value + ", ";
  }

  if (allergens === "") {
    allergens = "none";
  } else {
    allergens = allergens.slice(0, -2); // remove final comma and space
  }

  console.log(`Allergens: ${allergens}`); // Show the allergens

// EXTRA ITEMS SECTION - CHECKBOXES AND TEXT
  const milk = elements.milk.value;
  console.log(`Milk Type: ${milk}`);

  let extras = "";
  const extrasChecker = form.querySelectorAll('input[name="extras"]:checked');
  for (let i = 0; i < extrasChecker.length; i++) {
    allergens += extrasChecker[i].value + ", ";
  }

  if (extras === "") {
    extras = "none";
  } else {
    extras = extras.slice(0, -2); // remove final comma and space
  }

  console.log(`Extras: ${extras}`); // Show the extras

// MEMBERSHIP SECTION - COLOURBOX AND TEXT
  const color1 = elements.membership1.value;
  console.log(`MembershipColor: ${color1}`);

  const color2 = elements.membership2.value;
  console.log(`MembershipDeets: ${color2}`);

// END OF ORDER SECTION
    alert(`
    "Thank you for submitting your order!"
    Order Summary:
    Name: ${name}
    Email: ${email}
    Time: ${time}
    --------------
    Allergens: ${allergens}
    Milk Type: ${milk}
    Order List: ${orderlist}
    Extras: ${extras}
    --------------
    MembershipColor: ${color1}
    Other Notes: ${color2}
    `);
}

// EVENT LISTENER FOR FINAL SUBMIT BUTTON
form.addEventListener("submit", handleSubmit);