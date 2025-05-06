document.addEventListener('click', function (event) {
    // Κλείσε όλα τα <details> dropdowns αν κάνεις click έξω από οποιοδήποτε <details>
    document.querySelectorAll('details').forEach(detail => {
      if (!detail.contains(event.target)) {
        detail.removeAttribute('open');
      }
    });
  });
  