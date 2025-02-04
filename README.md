# Color Scheme Generator 🎨

A sleek web application for generating harmonious color schemes. Built with vanilla HTML, CSS, and JavaScript, utilizing The Color API for color combinations.

This project was built as part of the [Frontend Developer Career Path](https://scrimba.com/learn/frontend) on Scrimba.

## 🌐 Live Demo
[View Live Demo](https://shymochkaa.github.io/color-scheme-generator/) <!-- Add your live demo link -->

## ✨ Features
- 🎨 Interactive color picker
- 📊 7 different color scheme modes
- 📋 One-click copy to clipboard
- 💫 Smooth tooltip animations
- 🎯 Clean, modern interface
- 🖼️ Real-time color preview
- 📱 Cross-device compatibility
- 🔄 Dynamic color updates

## 📂 Project Structure
```
color-scheme-generator/
├── index.html          # Main application page
├── css/
│   └── index.css      # Styles and animations
├── scripts/
│   └── index.js       # Core functionality
└── images/
    └── arrow-down.svg # Dropdown arrow icon
```

## 🔧 Dependencies
- Google Fonts:
  - Inter (weights: 100-900, including italics)
- [The Color API](https://www.thecolorapi.com/)
- No other external libraries required

## 🚀 Setup Instructions
1. Clone the repository
2. No build process required - this is a static website
3. Open `index.html` in your browser to view the application

## 🎯 Features in Detail

### 🎨 Color Selection
- Custom-styled color picker
- Real-time color preview
- Seven color scheme modes:
  - Monochrome
  - Monochrome Dark
  - Monochrome Light
  - Analogic
  - Complement
  - Analogic-complement
  - Triad

### 📋 Color Display
- Five harmonious colors
- Clickable hex codes
- Copy to clipboard functionality
- Visual feedback via tooltips
- Dynamic color updates

### 🔄 Interactive Features
The application includes several JavaScript-powered features:
```javascript
// Color Scheme Generation
- Captures form data
- Makes API requests
- Updates DOM elements dynamically

// Copy to Clipboard
- One-click copy functionality
- Tooltip feedback
- Automatic tooltip reset
```

## 🎨 CSS Structure
The stylesheet follows these key principles:
- Clean component organization
- Consistent spacing
- Custom form styling
- Interactive states
- Tooltip animations
- Flexbox layouts
- Modern CSS features

## 🌐 API Integration
The application uses The Color API for generating color schemes:
```javascript
fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&format=json&mode=${selectedMode}&count=6`)
```

## 🚀 Future Enhancements
Potential areas for expansion:
1. Save favorite color schemes
2. Export palettes in different formats
3. Color scheme history
4. Advanced color adjustments
5. Accessibility features
6. Dark/light mode toggle
7. Share functionality

## 🙏 Acknowledgments
This project was created as part of Scrimba's Frontend Developer Career Path. Thanks to:
- The Scrimba team for the project requirements and learning experience
- [The Color API](https://www.thecolorapi.com/) for the color scheme generation service

▶️ [Check out the course on Scrimba](https://scrimba.com/learn/frontend)
