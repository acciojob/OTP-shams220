//your JS code here. If required.
      const inputs = document.querySelectorAll('input');
inputs[0].focus();
    inputs.forEach((input, index) => {
      input.addEventListener('keyup', (e) => {
        if (e.key.match(/^[a-zA-Z0-9]$/)) {
          const next = inputs[index + 1];
          if (next) next.focus();
        }

        if (e.key === 'Backspace' && input.value === '') {
          const prev = inputs[index - 1];
          if (prev) prev.focus();
        }
      });
    });