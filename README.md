# Hello World Project - Salamander Tech Hub

<p align="center">
build🚀. burn 🔥. evolve 🦎
</p>

<p align="center">
A collaborative project where everyone can add their own personalized Hello World page!
</p>

## 🚀 Quick Start

1. **Fork this repository**
   - Click the "Fork" button in the top right

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/hello-world.git
   cd hello-world
   ```

3. **Create your Hello World page**
   ```bash
   # Create a directory with your username
   mkdir your_username
   
   # Create your HTML and CSS files
   touch your_username/index.html
   touch your_username/style.css
   ```

4. **Add your content**
   - Edit `your_username/index.html` with your Hello World page
   - Add styles in `your_username/style.css`
   - Make sure to link your CSS file in your HTML
   - Feel free to use the Salamander Tech Hub branding (logo and colors)

5. **Test locally**
   ```bash
   # Start a local server
   python3 -m http.server 8000
   # Visit http://localhost:8000/your_username/
   ```

6. **Commit and push**
   ```bash
   git add your_username/
   git commit -m "add: my hello world page"
   git push origin main
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "Pull requests" → "New pull request"
   - Select "compare across forks"
   - Choose your fork and branch
   - Click "Create pull request"

## 📝 File Structure

Your files should follow this structure:
```
hello-world/
└── your_username/
    ├── index.html
    ├── style.css
    └── assets/
        └── images/
            └── salamander-logo-yellow.svg  # Optional: if you want to use the logo
```

## 🎨 Design Guidelines

### Colors
- Primary: Black (#000000)
- Secondary: Yellow (#FFED00)
- Background: Off-white (#F6F4F0)

### Typography
- Font: Geist
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Example HTML Template

Here's a basic template to get you started:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Your Name's] Hello World</title>
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <a href="#" class="logo">
            <img src="assets/images/salamander-logo-yellow.svg" alt="Salamander">
        </a>
    </nav>

    <main class="main-content">
        <img src="assets/images/salamander-logo-yellow.svg" alt="Salamander Tech Hub" class="salamander-logo">
        <div class="card">
            <h1>Hello, World! 👋</h1>
            <p class="subtitle">Welcome to my Hello World page</p>
            <div class="content">
                <p>Your content goes here!</p>
            </div>
            <button class="cta-button">Learn More // 👓</button>
            <div class="footer">
                <p>Created with ❤️ by Your Name</p>
            </div>
        </div>
    </main>
</body>
</html>
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 💡 Tips

- Be creative with your design while maintaining the Salamander Tech Hub branding
- Make sure your page is responsive
- Keep your code clean and well-commented
- Feel free to add JavaScript if you want to make it interactive
- You can customize the content while keeping the structure

## 📫 Support

If you need help:
- Open an issue on GitHub
- Contact the Salamander Tech Hub community

---

Made with ❤️ by Salamander Tech Hub 