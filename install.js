module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          //"git clone {{platform === 'darwin' ? 'https://github.com/peanutcocktail/Hunyuan3D-2' : 'https://github.com/deepbeepmeep/Hunyuan3D-2GP'}} app",
          "git clone {{platform === 'darwin' ? 'https://github.com/Tencent/Hunyuan3D-2' : 'https://github.com/deepbeepmeep/Hunyuan3D-2GP'}} app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        build: true,
        env: {
          USE_NINJA: 0,
          DISTUTILS_USE_SDK: 1,
        },
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install setuptools==65.5.0 wheel",
          "{{gpu === 'nvidia' ? 'uv pip install --no-build-isolation diso==0.1.4' : null}}",
          "{{platform === 'darwin' ? 'uv pip install numba>0.60.0' : null}}",
          "uv pip install -r requirements.txt",
          "uv pip install sentencepiece",
//          "uv pip install transformers==4.49.0"
        ]
      }
    },
    {
      when: "{{platform === 'linux'}}",
      method: "shell.run",
      params: {
        message: [
          "conda install -y -c conda-forge 'gxx<12'",
          "which g++"
        ]
      }
    },
    {
      when: "{{platform === 'linux'}}",
      method: "shell.run",
      params: {
        build: true,
        venv: "../../../env",                // Edit this to customize the venv folder path
        env: {
          USE_NINJA: 0,
          DISTUTILS_USE_SDK: 1,
          NVCC_PREPEND_FLAGS: "-ccbin {{which('g++')}}"
        },
        path: "app/hy3dgen/texgen/custom_rasterizer",                // Edit this to customize the path to start the shell from
        message: [
          "python setup.py install"
        ]
      }
    },
    {
      when: "{{platform === 'win32'}}",
      method: "shell.run",
      params: {
        build: true,
        venv: "../../../env",                // Edit this to customize the venv folder path
        env: {
          USE_NINJA: 0,
          DISTUTILS_USE_SDK: 1
        },
        path: "app/hy3dgen/texgen/custom_rasterizer",                // Edit this to customize the path to start the shell from
        message: [
          "where link",
          "where cl",
          "{{platform === 'win32' ? 'set' : ''}}",
          "python setup.py install"
        ]
      }
    },
    {
      when: "{{platform === 'linux'}}",
      method: "shell.run",
      params: {
        build: true,
        venv: "../../../env",                // Edit this to customize the venv folder path
        env: {
          USE_NINJA: 0,
          DISTUTILS_USE_SDK: 1,
          NVCC_PREPEND_FLAGS: "-ccbin {{which('g++')}}"
        },
        path: "app/hy3dgen/texgen/differentiable_renderer",                // Edit this to customize the path to start the shell from
        message: [
          "python setup.py install"
        ]
      }
    },
    {
      when: "{{platform === 'win32'}}",
      method: "shell.run",
      params: {
        build: true,
        venv: "../../../env",                // Edit this to customize the venv folder path
        env: {
          USE_NINJA: 0,
          DISTUTILS_USE_SDK: 1
        },
        path: "app/hy3dgen/texgen/differentiable_renderer",                // Edit this to customize the path to start the shell from
        message: [
          "python setup.py install"
        ]
      }
    },
    //{
    //  method: "fs.link",
    //  params: {
    //    venv: "app/env"
    //  }
    //}
  ]
}
