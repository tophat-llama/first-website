// GALLERY IMAGE SWAP ARROW FUNCTION
// Click-listener all sideImages class, store main src in temp const, swap clicked Image into Main, and swap temp const into the Side Image.
const mainImage = document.getElementById('imageMain');
const thumbnails = document.querySelectorAll('.sideImage');

thumbnails.forEach(sideImage => {
    sideImage.addEventListener('click', () => {
    const swappedImage = mainImage.src;
    mainImage.src = sideImage.src;
    sideImage.src = swappedImage;
    });
});

// MODAL EVENT EXPRESSION OF INTEREST FORM
// Click listener the modal button, set display from none to block. Show form content. On x-span thing click, set back to none again.

const modal = document.getElementById("formModal");
const btn = document.getElementById("modalButton");
const span = document.getElementsByClassName("close")[0];
const ksubmit = document.getElementById("karaokesubmit");

btn.onclick = function openBox() {
  modal.style.display = "block";
}

span.onclick = function closeBox() {
  modal.style.display = "none";
}

// COFFEE PREFERENCE QUIZ SUBMISSION
// Check name and radiobutton on pushing 'submit' button and return alert. Check if no input in each bit.
// Should add a summary of each drink with the alert. 

const submitButton = document.getElementById('coffeeprefsubmit');

submitButton.addEventListener('click', function() {
  const radios = document.getElementsByName('radiotest');
  let selected = null;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selected = radios[i].value;
      break;
    }
  }

  const nameInput = document.forms['quiz'].elements['name'].value.trim();

  if (!nameInput) {
    alert("Please enter your name.");
  } else if (selected) {
    alert("Thank you, " + nameInput + "! You voted for: " + selected);
  } else {
    alert("Please select a drink before submitting.");
  }
});

