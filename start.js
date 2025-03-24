module.exports = async (kernel) => {
  const port = await kernel.port()
  let cmd = `python gradio_app.py {{args.mode ? args.mode : ''}} --profile {{args.profile}} --enable_t23d --host 127.0.0.1 --port ${port}`
  if (kernel.platform === 'darwin') {
    cmd = `python gradio_app.py {{args.model_path ? '--model_path ' + args.model_path : ''}} {{ args.subfolder ? '--subfolder ' + args.subfolder : ''}} --enable_t23d --host 127.0.0.1 --port ${port} --device mps --enable_flashvdm`
  }
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          env: { },                   // Edit this to customize environment variables (see documentation)
          path: "app",                // Edit this to customize the path to start the shell from
          message: cmd,
          on: [{
            // The regular expression pattern to monitor.
            // When this pattern occurs in the shell terminal, the shell will return,
            // and the script will go onto the next step.
            "event": "/http:\/\/[0-9.:]+/",   

            // "done": true will move to the next step while keeping the shell alive.
            // "kill": true will move to the next step after killing the shell.
            "done": true
          }]
        }
      },
      {
        // This step sets the local variable 'url'.
        // This local variable will be used in pinokio.js to display the "Open WebUI" tab when the value is set.
        method: "local.set",
        params: {
          // the input.event is the regular expression match object from the previous step
          url: "{{input.event[0]}}"
        }
      }
    ]
  }
}
