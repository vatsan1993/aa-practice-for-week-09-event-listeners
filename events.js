// Your code here
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM has loaded');
  let turnRed = (event) => {
    let value = event.target.value;
    if (value.toLowerCase() == 'red') {
      event.target.classList.add('red');
    }
  };

  let addNewItem = (event) => {
    let value = document.querySelector('#list-add').value;
    let li = document.createElement('li');
    li.textContent = value;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
  };

  let changeParentColor = (event) => {
    let color = event.target.value;
    event.target.parentNode.style.backgroundColor = color;
  };

  let hoverEvent = (event) => {
    event.target.textContent = 'Hovering over this div';
  };

  let hoverOut = (event) => {
    event.target.textContent = '';
  };

  let spaceTyped = (event) => {
    alert('space typed');
  };

  let addAllEvents = (event) => {
    document.querySelector('#red-input').addEventListener('input', turnRed);
    document.querySelector('#add-item').addEventListener('click', addNewItem);
    document
      .querySelector('#color-select')
      .addEventListener('change', changeParentColor);

    document
      .querySelector('#hover-div')
      .addEventListener('mouseover', hoverEvent);
    document.querySelector('#hover-div').addEventListener('mouseout', hoverOut);

    window.addEventListener('keypress', (event) => {
      let pressedKey = event.key;
      if (pressedKey == ' ') {
        spaceTyped();
      }
    });
  };

  addAllEvents();
  document.querySelector('#part-4').addEventListener('click', () => {
    addAllEvents();
  });
  document
    .querySelector('#remove-listeners')
    .addEventListener('click', (event) => {
      document
        .querySelector('#red-input')
        .removeEventListener('input', turnRed);
      document
        .querySelector('#add-item')
        .removeEventListener('click', addNewItem);
      document
        .querySelector('#color-select')
        .removeEventListener('change', changeParentColor);
    });
});
