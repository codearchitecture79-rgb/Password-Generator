# Password Generator

A simple, user-friendly web application for generating secure passwords with customizable options.

**Live Demo:** https://passwordking.netlify.app/

## Features

- 🔐 **Generate Secure Passwords** - Create random passwords of any length
- 🔤 **Customizable Options** - Choose to include:
  - Uppercase letters
  - Numbers
  - Special characters
- 📋 **Easy Copy** - Click the copy icon to quickly copy generated passwords to clipboard
- 🎨 **Clean UI** - Modern, intuitive interface with purple theme

## How to Use

1. Enter the desired password length in the input field
2. Select which character types to include (optional):
   - Check "contains uppercase letters" for A-Z
   - Check "contains numbers" for 0-9
   - Check "contains special characters" for symbols
3. Click the **Generate** button
4. Your password appears in the display box
5. Click the copy icon to copy the password to your clipboard

## Technologies Used

- **HTML** - Structure
- **CSS** - Styling and design
- **JavaScript** - Password generation logic

## Project Structure

```
Password Generator/
├── index.html      # Main HTML file
├── script.js       # Password generation logic
├── style.css       # Styling
└── README.md       # This file
```

## Password Generation Logic

The application generates passwords by:
- Creating random characters within specified ASCII ranges
- Uppercase letters: A-Z (ASCII 65-90)
- Lowercase letters: a-z (ASCII 97-122)
- Numbers: 0-9 (ASCII 48-57)
- Special characters: Various symbols (ASCII 33-47, 58-64, 123-126)

## Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start generating passwords!

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use and modify.
