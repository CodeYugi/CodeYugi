
function showTab(tabId) {
    // Hide all code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => block.classList.add('hidden'));
  
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Show the selected code block
    document.getElementById(tabId).classList.remove('hidden');
  
    // Highlight the active tab
    event.target.classList.add('active');
  }
  