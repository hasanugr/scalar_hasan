/*scalar.ui.launcher = function () {
  this.config = scalar.ui.launcher.config;
  scalar.exec('cd com/bash && bash applicationList.sh', function (output) {
    output = '[' + output.slice(0, output.length - 2) + ']';
    window.asd = eval(output);
    for (var i = 0; i < window.asd.length; i++) {
      scalar.ui.append('#launcher', scalar.ui.createElement('div', { 'id': 'app-' + i,'text': window.asd[i].title }));
      console.log(window.asd[i].title)
    }
  });
};

scalar.ui.launcher.config = {

};
scalar.ui.launcher.prototype = {

};



scalar.ui.launcher = new scalar.ui.launcher();

*/