exports.activate = function() {}

exports.deactivate = function() {}

nova.commands.register("elixir-manual-formatter.formatFile", (workspace) => {
  const path = workspace.activeTextEditor?.document?.path;
  
  if (path) {
    mix(["format", path], workspace);
  }
});

nova.commands.register("elixir-manual-formatter.formatProject", (workspace) => {
  mix(["format"], workspace);
});

function mix(args, workspace) {
  const process = new Process("mix", { args: args, cwd: workspace.path, shell: true });

  process.onStdout(function(data) {
    if (data) {
      console.log(data);
    }
  });

  process.start();
}
