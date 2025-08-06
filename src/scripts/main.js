'use strict';


const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

function createTree(element, data) {
    const ul = document.createElement('ul');
    element.appendChild(ul);

    for (const key1 in data) {
        const li1 = document.createElement('li');
        li1.textContent = key1;
        ul.appendChild(li1);

        const ul2 = document.createElement('ul');
        li1.appendChild(ul2);

        for (const key2 in data[key1]) {
            const li2 = document.createElement('li');
            li2.textContent = key2;
            ul2.appendChild(li2);

            const ul3 = document.createElement('ul');
            li2.appendChild(ul3);

            for (const key3 in data[key1][key2]) {
                const li3 = document.createElement('li');
                li3.textContent = key3;
                ul3.appendChild(li3);
            }
        }
    }
}
createTree(tree, food);






