const copyToClipboard = () => {
    const contractText = document.getElementById('contract-text');
    const textToCopy = contractText.innerText;
  
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
    }
  function scrollToTop() {
    window.scrollTo(0, 0);
  }