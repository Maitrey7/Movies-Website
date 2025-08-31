// Theme toggle + animated background
const btn = document.getElementById('themeToggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Change button text based on theme
  if (document.body.classList.contains('dark')) {
    btn.textContent = "Light Theme"; // now button shows Light Theme
  } else {
    btn.textContent = "Dark Theme";  // back to Dark Theme
  }

  // Tiny spark animation on click
  btn.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }],
    { duration: 250, easing: 'ease-out' }
  );
});

// Star rating interaction with simple animation
document.querySelectorAll('.stars').forEach(group => {
  const stars = Array.from(group.querySelectorAll('span'));
  stars.forEach((star, idx) => {
    star.addEventListener('mouseenter', () => highlight(idx));
    star.addEventListener('mouseleave', () => restore());
    star.addEventListener('click', () => select(idx + 1));
  });

  function highlight(i) {
    stars.forEach((s, si) => s.classList.toggle('active', si <= i));
  }

  function restore() {
    const selected = Number(group.dataset.selected || 0);
    stars.forEach((s, si) => s.classList.toggle('active', si < selected));
  }

  function select(count) {
    group.dataset.selected = String(count);
    // subtle pop animation
    group.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }, { transform: 'scale(1)' }],
      { duration: 220, easing: 'ease-out' }
    );
    restore();
  }
});
