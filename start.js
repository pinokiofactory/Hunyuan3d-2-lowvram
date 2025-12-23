module.exports = async (kernel) => {
  const port = await kernel.port()
  let cmd = `python gradio_app.py {{args.mode ? args.mode : ''}} --profile {{args.profile}} --enable_t23d --host 127.0.0.1 --port ${port}`
  if (kernel.platform === 'darwin') {
    cmd = `python gradio_app.py {{args.model_path ? '--model_path ' + args.model_path : ''}} {{ args.subfolder ? '--subfolder ' + args.subfolder : ''}} --enable_t23d --host 127.0.0.1 --port ${port} --device mps --enable_flashvdm`
  }
  return {
    requires: {
      bundle: "ai",
    },
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",
          env: { },
          path: "app",
          message: cmd,
          on: [{
            "event": "/http:\/\/[0-9.:]+/",
            "done": true
          }]
        }
      },
      {
        method: "local.set",
        params: {
          url: "{{input.event[0]}}"
        }
      }
    ]
  }
}
