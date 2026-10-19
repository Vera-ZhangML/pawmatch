// Sample data only. Replace with real shelter API data in a future version.
const dogs = [
  { name: 'Mochi', age: 2, size: 'Small', emoji: '🐶', description: 'A playful little companion who loves cuddles.' },
  { name: 'Buddy', age: 4, size: 'Large', emoji: '🐕', description: 'A friendly explorer who enjoys long walks.' },
  { name: 'Luna', age: 1, size: 'Medium', emoji: '🐕‍🦺', description: 'Curious, clever, and always ready to play.' },
  { name: 'Coco', age: 3, size: 'Small', emoji: '🐩', description: 'A gentle soul looking for a cozy home.' }
];
const grid = document.getElementById('dog-grid');
const filter = document.getElementById('size-filter');
const emptyMessage = document.getElementById('empty-message');
function renderDogs() {
  const matchingDogs = dogs.filter(dog => filter.value === 'all' || dog.size === filter.value);
  grid.innerHTML = '';
  matchingDogs.forEach(dog => {
    const card = document.createElement('article');
    card.className = 'dog-card';
    card.innerHTML = `<div class="dog-portrait" role="img" aria-label="Illustration of a dog">${dog.emoji}</div><div class="dog-info"><h3>${dog.name}</h3><div class="meta">${dog.age} years old · ${dog.size}</div><p class="description">${dog.description}</p><button type="button">I'm interested ♥</button></div>`;
    card.querySelector('button').addEventListener('click', () => alert(`Thanks for your interest in ${dog.name}! This is a demo; no adoption request was submitted.`));
    grid.appendChild(card);
  });
  emptyMessage.hidden = matchingDogs.length !== 0;
}
filter.addEventListener('change', renderDogs);
renderDogs();
