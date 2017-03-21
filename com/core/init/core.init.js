/**
 * Initialize libraries
 * @param  {object} object [scalar.lib]
 * @return {bool}
 */
scalar.init = function (object) {
  this.config = scalar.init.config;
  try {
    if (object.TYPE == 'text/css') {
      this.htmlElement = document.createElement(object.ELEMENT);
      this.htmlElement.type = object.TYPE;
      this.htmlElement.href = object.SRC;
      this.htmlElement.rel = 'stylesheet';
      document.head.appendChild(this.htmlElement);
      scalar.log.success.push('Initialization complete : [' + object.SRC + ']');
    } else {
      this.htmlElement = document.createElement(object.ELEMENT);
      this.htmlElement.type = object.TYPE;
      this.htmlElement.src = object.SRC;
      document.head.appendChild(this.htmlElement);
      scalar.log.success.push('Initialization complete : [' + object.SRC + ']');
    }
    return true;
  } catch (e) {
    this.log.error.push('Initialization rejected : [' + object.SRC + ']');
    return false;
  }
}

scalar.lib = {
  UI: {
    ELEMENT: 'script',
    TYPE: "text/javascript",
    SRC: "com/ui/ui.js"
  },
  LAUNCHER: {
    ELEMENT: 'script',
    TYPE: "text/javascript",
    SRC: "com/ui/launcher/ui.launcher.js"
  },  
  DESKTOP: {
    ELEMENT: 'script',
    TYPE: "text/javascript",
    SRC: "com/ui/desktop/ui.desktop.js"
  },
  WAVE: {
    ELEMENT: 'script',
    TYPE: "text/javascript",
    SRC: "com/ui/desktop/wave/ui.desktop.wave.js"
  }
}

scalar.init.config = {};

scalar.init(scalar.lib.UI);