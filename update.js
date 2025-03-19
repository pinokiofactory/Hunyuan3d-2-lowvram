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
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        // xformers: true   // uncomment this line if your project requires xformers
      }
    }
  }, {
    method: "shell.run",
    params: {
      build: true,
      venv: "env",                // Edit this to customize the venv folder path
      path: "app",                // Edit this to customize the path to start the shell from
      message: [
        "uv pip install --no-build-isolation diso==0.1.4",
        "uv pip install -r requirements.txt",
        "uv pip install sentencepiece"
      ]
    }
  }]
}
