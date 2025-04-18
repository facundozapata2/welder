(function(){
    const copyBtn = document.getElementById('copyPhoneBtn');
    const copyIcon = document.getElementById('copyIcon');
    // phone 
    const phoneUri = '+5491132782419';

    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(phoneUri);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = phoneUri;
          textarea.style.position = 'fixed';
          textarea.style.top = 0;
          textarea.style.left = 0;
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        // Al éxito, cambiamos icono
        copyIcon.classList.replace('fa-clipboard-user', 'fa-clipboard-check');
        // Opcional: cambiar aria-label para accesibilidad
        copyBtn.setAttribute('aria-label', 'Número copiado');
        // Después de 2 s, volvemos al icono original
        setTimeout(() => {
          copyIcon.classList.replace('fa-clipboard-check', 'fa-clipboard-user');
          copyBtn.setAttribute('aria-label', 'Copiar número');
        }, 2000);
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
        // Podrías mostrar un mensaje al usuario si falla
      }
    });
  })();