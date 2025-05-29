

## 🔹 Creating and Activating a Conda Virtual Environment (Python 3.12)

This guide walks you through the steps to create and activate a virtual environment using Conda with Python 3.12.

---

### ✅ Step 1: Create the Virtual Environment

```bash
conda create -p ./venv python=3.12
```

* `-p ./venv`: Specifies the path where the environment will be created (in this case, the `venv` folder in your current directory).
* `python=3.12`: Sets the Python version to 3.12.

> 💡 This will create a `venv` directory containing the environment.

---

### ✅ Step 2: Activate the Virtual Environment

```bash
conda activate ./venv
```

* Activates the virtual environment located at `./venv`.

> 💡 Ensure you include `./` before `venv` when activating a path-based environment.

---

### 🔁 Deactivating the Environment

To deactivate the current environment and return to the base environment:

```bash
conda deactivate
```

---

### 📌 Notes

* If you're using Git, consider adding `venv/` to your `.gitignore` file.
* Path-based environments (created with `-p`) are not stored in Conda’s default `envs` directory.
* You can verify the active environment with:

```bash
conda info --envs
```

---


