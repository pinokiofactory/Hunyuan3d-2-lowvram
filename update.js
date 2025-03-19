module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",                // Edit this to customize the venv folder path
      path: "app",                // Edit this to customize the path to start the shell from
      message: [
        "uv pip install -r requirements.txt",
        "uv pip install sentencepiece"
      ]
    }
  }]
}
