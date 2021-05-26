const url = "https://localhost:44393/api/beanvariety/";
const coffeeUrl = "https://localhost:44393/api/coffee";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const coffeeButton = document.querySelector("#coffee-menu");
button.addEventListener("click", () => {
    getAllCoffee()
        .then(coffeeMenu => {
            console.log(coffeeMenu);
        })
})


function getAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}

function getCoffeeById(id) {
    return fetch(`${coffeeUrl}/${coffeeId}`).then(resp => resp.json());
}


function addCoffee() {
    const coffeeTitle = document.getElementById('coffee-title');
    const beanVarietyId = document.getElementById('bean-variety-id');
  
    const coffee = {
      Title: coffeeTitle.value.trim(),
      BeanVarietyId: parseInt(beanVarietyId.value.trim())
    };
  
    fetch(coffeeUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coffee)
    })
      .then(response => response.json())
      .catch(error => console.error('Unable to add item.', error));
}


function editCoffe(id) {
    getCoffeeById(id)
    const coffee = coffeeMenu.find(coffee => coffee.id === id);
    
    document.getElementById('edit-title').value = coffee.Title;
    document.getElementById('edit-id').value = coffee.Id;
    document.getElementById('edit-bean-variety-id').value = coffee.BeanVarietyId;
  }
  
  let coffeeMenu = []
  function updateCoffee() {
    const coffeeId = document.getElementById('edit-id').value;
    const beanVarietyId = document.getElementById('edit-bean-variety-id').value.trim()
    const coffee = {
      Id: parseInt(coffeeId),
      Title: document.getElementById('edit-title').checked,
      BeanVarietyId: parseInt(beanVarietyId)
    };
  
    fetch(`${coffeeUrl}/${coffeeId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coffee)
    })
    .then(() => getItems())
    .catch(error => console.error('Unable to update coffee.', error));
  
    closeInput();
  
    return false;
  }

  function closeInput() {
    document.getElementById('editForm').style.display = 'none';
  }
  