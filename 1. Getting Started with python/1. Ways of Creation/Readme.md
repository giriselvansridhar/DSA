Here’s a consolidated and simplified **master note** for setting up and working with a Conda environment (Python 3.12), running scripts, notebooks, using ipykernel, and managing dependencies:

---

## 🐍 Python Project Setup with Conda (Python 3.12)

### ✅ 1. Create a Conda Virtual Environment

```bash
conda create -p ./venv python=3.12
```

* `-p ./venv`: Creates the environment in the `venv/` folder in your current directory.
* `python=3.12`: Specifies Python version.

---

### ✅ 2. Activate the Environment

```bash
conda activate ./venv
```

* Use `./venv` to activate path-based environments.

---

### 🔁 3. Deactivate the Environment

```bash
conda deactivate
```

* Returns to the base environment.

---

### 📌 4. Notes

* Add `venv/` to `.gitignore` if using Git.
* Path-based environments aren’t stored in the default `envs` folder.
* To see all environments:

```bash
conda info --envs
```

---

## ▶️ Run Python Code

### 🟢 Run a Python Script

```bash
python app.py
```

### 🟢 Run a Jupyter Notebook

If Jupyter is installed:

```bash
jupyter notebook
```

---

## 🧠 Add Conda Env to Jupyter

To use your virtual environment in Jupyter:

```bash
python -m ipykernel install --user --name=venv --display-name "Python (venv)"
```

* `--name=venv`: Internal kernel name.
* `"Python (venv)"`: Display name in Jupyter.

---

## 📦 Install Dependencies

To install required packages from `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

Let me know if you'd like this exported as a **Markdown** or **PDF** file!
