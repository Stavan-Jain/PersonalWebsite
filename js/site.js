// Year auto‑update
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Optional: dark‑mode toggle – add a button somewhere if desired
function toggleDark() {
  document.documentElement.classList.toggle('dark');
}
// End site.js