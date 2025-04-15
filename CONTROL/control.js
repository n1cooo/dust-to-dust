


const bag = document.querySelector('.bag');  // Image inside the bag div
const gun = document.querySelector('.gun');  // Image inside the gun div
const joint = document.querySelector('.joint');
const textBox = document.getElementById('text-box');
const textBox2 = document.getElementById('text-box2');
const textBox3 = document.getElementById('text-box3');

// Function to toggle visibility of text-box for Bag
bag.addEventListener('click', function() {
  console.log('Bag image clicked!');  // Debugging log to check if the click works
  if (textBox.style.display === 'none' || textBox.style.display === '') {
    textBox.style.display = 'block';  // Show text-box
  } else {
    textBox.style.display = 'none';  // Hide text-box
  }
});

// Function to toggle visibility of text-box2 for Gun
gun.addEventListener('click', function() {
  console.log('Gun image clicked!');  // Debugging log to check if the click works
  if (textBox2.style.display === 'none' || textBox2.style.display === '') {
    textBox2.style.display = 'block';  // Show text-box2
  } else {
    textBox2.style.display = 'none';  // Hide text-box2
  }
});

joint.addEventListener('click', function() {
    console.log('Joint image clicked!');  // Debugging log to check if the click works
    if (textBox3.style.display === 'none' || textBox3.style.display === '') {
      textBox3.style.display = 'block';  // Show text-box3
    } else {
      textBox3.style.display = 'none';  // Hide text-box3
    }
  });