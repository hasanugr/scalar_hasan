scalar.ui = function() {
  this.config = scalar.ui.config;
  scalar.init(scalar.lib.DESKTOP);
  scalar.init(scalar.lib.WAVE);
  scalar.init(scalar.lib.LAUNCHER);
  
}
scalar.ui.config = {};
scalar.ui.prototype = {
  createElement: function(type, attribute) {
    this.htmlElement = document.createElement(type);
    this.attribute = attribute;
    if (this.attribute != undefined) {
      if (Object.keys(this.attribute).length) {
        Object.keys(this.attribute).indexOf("id") >= 0 ? this.htmlElement.id = this.attribute.id : undefined;
        Object.keys(this.attribute).indexOf("class") >= 0 ? this.htmlElement.setAttribute('class',this.attribute.class) : undefined;
        Object.keys(this.attribute).indexOf("src") >= 0 ? this.htmlElement.setAttribute("src", this.attribute.src) : undefined;
        Object.keys(this.attribute).indexOf("background") >= 0 ? this.htmlElement.style.background = this.attribute.background : undefined;
        Object.keys(this.attribute).indexOf("text") >= 0 ? this.htmlElement.innerHTML = this.attribute.text : undefined;
        Object.keys(this.attribute).indexOf("href") >= 0 ? this.htmlElement.setAttribute("href", this.attribute.href) : undefined;
        Object.keys(this.attribute).indexOf("placeholder") >= 0 ? this.htmlElement.setAttribute("placeholder", this.attribute.placeholder) : undefined;
        Object.keys(this.attribute).indexOf("type") >= 0 ? this.htmlElement.setAttribute("type", this.attribute.type) : undefined;
        Object.keys(this.attribute).indexOf("target") >= 0 ? this.htmlElement.setAttribute("target", this.attribute.target) : undefined;
        Object.keys(this.attribute).indexOf("scope") >= 0 ? this.htmlElement.setAttribute("scope", this.attribute.scope) : undefined;
        Object.keys(this.attribute).indexOf("onlogin") >= 0 ? this.htmlElement.setAttribute("onlogin", this.attribute.onlogin) : undefined;
        Object.keys(this.attribute).indexOf("onkeypress") >= 0 ? this.htmlElement.setAttribute("onkeypress", this.attribute.onkeypress) : undefined;
        Object.keys(this.attribute).indexOf("width") >= 0 ? this.htmlElement.setAttribute("width", this.attribute.width) : undefined;
        Object.keys(this.attribute).indexOf("height") >= 0 ? this.htmlElement.setAttribute("height", this.attribute.height) : undefined;
        Object.keys(this.attribute).indexOf("frameborder") >= 0 ? this.htmlElement.setAttribute("frameborder", this.attribute.frameborder) : undefined;
        Object.keys(this.attribute).indexOf("allowtransparency") >= 0 ? this.htmlElement.setAttribute("allowtransparency", this.attribute.allowtransparency) : undefined;
        Object.keys(this.attribute).indexOf("style") >= 0 ? this.htmlElement.setAttribute("style", this.attribute.style) : undefined;
        Object.keys(this.attribute).indexOf("onclick") >= 0 ? this.htmlElement.setAttribute("onclick", this.attribute.onclick) : undefined;
      }
    }
    return this.htmlElement;
  },
  append: function(target, element) {
    typeof element === 'object' ? document.querySelector(target).appendChild(element) : undefined;
    typeof element === 'string' || typeof element === 'number' || typeof element === 'number' ? document.querySelector(target).innerHTML = document.querySelector(target).innerHTML + element : undefined;
  },
  selectAll: function(query) {
    this.query = query;
    return document.querySelectorAll(query)
  },
  select: function(query) {
    this.query = query;
    return document.querySelector(query)
  }
};
scalar.ui = new scalar.ui();
 
scalar.ui.append('body',scalar.ui.createElement('div',{'id':'desktop'}));
 

  scalar.ui.append('#desktop',scalar.ui.createElement('div',{'id':'dock'}));
    scalar.ui.append('#dock',scalar.ui.createElement('div',{'id':'dock-container'}));
      scalar.ui.append('#dock-container',scalar.ui.createElement('span',{'id':'dc-1'}));
        scalar.ui.append('#dc-1',scalar.ui.createElement('b',{'style':'','onclick':'scalar.ui.desktop.wave.scalarDirekt("youtube.com");'}));
      scalar.ui.append('#dock-container',scalar.ui.createElement('span',{'id':'dc-2'}));
        scalar.ui.append('#dc-2',scalar.ui.createElement('b',{'style':'','onclick':'scalar.ui.desktop.wave.scalarDirekt("google.com");'}));
      scalar.ui.append('#dock-container',scalar.ui.createElement('span',{'id':'dc-3'}));
        scalar.ui.append('#dc-3',scalar.ui.createElement('b',{'style':'','onclick':'scalar.ui.desktop.wave.scalarDirekt("instagram.com");'}));
      scalar.ui.append('#dock-container',scalar.ui.createElement('span',{'id':'dc-4'}));
        scalar.ui.append('#dc-4',scalar.ui.createElement('b',{'style':'','onclick':'scalar.ui.desktop.wave.scalarDirekt("pinterest.com");'}));
      scalar.ui.append('#dock-container',scalar.ui.createElement('span',{'id':'dc-5'}));
        scalar.ui.append('#dc-5',scalar.ui.createElement('b',{'style':'','onclick':'scalar.ui.desktop.wave.scalarDirekt("netflix.com");'}));

 
 
scalar.ui.append('body',scalar.ui.createElement('div',{'id':'launcher'}));