document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector("ul.menu").classList.toggle("show");
  });
  
  const whatsappNumber = "+351911919904";
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
  
    const message = document.getElementById('message').value;
    const whatsappMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappLink, "_blank");
  });
  