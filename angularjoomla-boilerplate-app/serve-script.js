const { LiveReloadCompiler } = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'angularjoomla-boilerplate-app'
});
compiler.run();
