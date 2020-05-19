function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React from 'react';

___$insertStyle(".test-component {\n  background-color: #e0e0e0;\n  border: 1px solid #131111;\n  padding: 16px;\n  text-align: center;\n  width: 360px;\n}\n.test-component .heading {\n  font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: bold;\n}\n.test-component.test-component-secondary {\n  background-color: #131111;\n  color: #e0e0e0;\n}");

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + theme },
        React.createElement("h1", { className: "heading" }, "I'm the test component"),
        React.createElement("h2", null, "Made with love by sila1")));
};

export { TestComponent };
//# sourceMappingURL=index.esm.js.map
