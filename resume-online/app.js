const valueSpans = document.querySelectorAll('.value');
const commaSpans = document.querySelectorAll('.comma');

Array.from(valueSpans).forEach((valueSpan, index) => {
  valueSpan.addEventListener('mouseover', () => {
    commaSpans[index].style.right = '5px';
  });
  
  valueSpan.addEventListener('mouseout', () => {
    commaSpans[index].style.right = '0';
  });
});

// copy


  document.querySelectorAll('.copy').forEach(element => {
    const textToCopy = element.textContent.trim();
    element.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default click behavior
      navigator.clipboard.writeText(textToCopy).then(() => {
        element.style.setProperty('--tooltip-text', 'var(--tooltip-copied-text)');
        element.style.setProperty('--tooltip-color', 'var(--tooltip-success-color)');
        setTimeout(() => {
          element.style.setProperty('--tooltip-text', 'var(--tooltip-text)');
          element.style.setProperty('--tooltip-color', '#333');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  });


  // form (open in browser) 
  function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "Contact Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    var mailtoLink = "mailto:divani.amirmohammad@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
    return false; // Prevent form submission
}
  