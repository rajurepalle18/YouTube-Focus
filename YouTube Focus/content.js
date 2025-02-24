function hideDistractions() {
  // Hide homepage recommendations
  const style = document.createElement('style');
  style.textContent = `
    ytd-rich-grid-renderer,
    ytd-rich-grid-row,
    ytd-shelf-renderer,
    ytd-watch-next-secondary-results-renderer {
      display: none !important;
    }
    
    /* Keep the search bar and header visible */
    ytd-searchbox,
    ytd-masthead {
      display: block !important;
    }
    
    /* Keep the video player visible on video pages */
    ytd-watch-flexy #primary-inner {
      display: block !important;
    }
  `;
  document.head.appendChild(style);
}

// Run when page loads
hideDistractions();

// Run when navigation happens within YouTube
const observer = new MutationObserver(hideDistractions);
observer.observe(document.body, { childList: true, subtree: true }); 