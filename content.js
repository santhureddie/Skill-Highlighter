function highlightSkills(root) {
    if (!window.skillKeywords || !root) return;
  
    const escapedKeywords = window.skillKeywords.map(kw => kw.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'));
    const regex = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "gi");
  
    const walk = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          return node.parentNode &&
                 node.parentNode.nodeName !== "SCRIPT" &&
                 node.parentNode.nodeName !== "STYLE" &&
                 node.nodeValue.trim().length > 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      },
      false
    );
  
    const nodes = [];
    while (walk.nextNode()) {
      nodes.push(walk.currentNode);
    }
  
    nodes.forEach(node => {
      const span = document.createElement("span");
      const html = node.nodeValue.replace(regex, match => {
        return `<span class="highlight-skill">${match}</span>`;
      });
  
      if (html !== node.nodeValue) {
        span.innerHTML = html;
        node.parentNode.replaceChild(span, node);
      }
    });
  }
  
  // Observe changes in DOM to wait for dynamic job descriptions
  const observer = new MutationObserver((mutations, obs) => {
    const body = document.querySelector("body");
    if (body) {
      highlightSkills(body);
      obs.disconnect(); // Stop after first highlight pass
    }
  });
  
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  