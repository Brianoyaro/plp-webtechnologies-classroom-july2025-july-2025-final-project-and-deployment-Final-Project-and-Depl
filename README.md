# 🏠 HomeFinder - Real Estate Website

> A modern, responsive real estate website built with HTML5, CSS3, and JavaScript, featuring dark/light mode toggle and comprehensive property search functionality.

🌐 **Live Demo:** [https://brianoyaro.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/](https://brianoyaro.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Installation](#installation)
- [Usage](#usage)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

HomeFinder is a comprehensive real estate website designed to help users find their dream properties. The application features a modern, clean interface with advanced search functionality, property listings, agent profiles, and detailed company information. Built with a mobile-first approach, it ensures optimal user experience across all devices.

### Purpose
- **Primary Goal:** Connect property buyers and sellers through an intuitive, feature-rich platform
- **Target Audience:** Home buyers, property investors, real estate agents, and sellers
- **Key Value:** Streamlined property search with professional agent support

---

## ✨ Features

### 🔍 **Property Search & Filtering**
- Advanced search with multiple filters (location, price, beds, baths, property type)
- Real-time search results with interactive filtering
- Property cards with essential details and high-quality images
- Price range slider and dropdown filters

### 🌙 **Dark/Light Mode Toggle**
- Seamless theme switching with CSS custom properties
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Optimized contrast for accessibility

### 📱 **Responsive Design**
- Mobile-first approach with breakpoint optimization
- Flexible grid layouts and fluid typography
- Touch-friendly navigation and interactions
- Optimized images and performance

### 🏢 **Professional Features**
- Agent profiles with experience and statistics
- Company information and values
- Contact forms with validation
- Service offerings and consultation booking

### 🎨 **Modern UI/UX**
- Clean, minimalist design with professional aesthetics
- Smooth animations and micro-interactions
- Consistent typography and spacing system
- Accessible color schemes and navigation

### 🚀 **Performance Optimized**
- Optimized images with proper sizing
- Efficient CSS and JavaScript bundling
- Fast loading times and smooth interactions
- SEO-friendly semantic HTML structure

---

## 💻 Technologies Used

### **Frontend Core**
- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality

### **CSS Features**
- CSS Custom Properties (Variables)
- Flexbox and CSS Grid layouts
- Media queries for responsive design
- CSS animations and transitions

### **JavaScript Features**
- DOM manipulation and event handling
- Local storage for theme persistence
- Form validation and user feedback
- Mobile navigation and search functionality

### **Development Tools**
- Git version control
- GitHub Pages deployment
- Responsive design testing
- Cross-browser compatibility

---

## 📁 Project Structure

```
HomeFinder/
├── 📄 index.html                 # Homepage
├── 📁 pages/
│   ├── 📄 properties.html        # Property listings
│   ├── 📄 services.html          # Services and agents
│   ├── 📄 about.html             # Company information
│   └── 📄 contact.html           # Contact forms
├── 📁 css/
│   └── 📄 styles.css             # Main stylesheet
├── 📁 js/
│   └── 📄 script.js              # JavaScript functionality
├── 📁 images/                    # Property and agent photos
│   ├── 🖼️ property-images/       # Property photos
│   └── 🖼️ agent-photos/         # Team member photos
├── 📄 README.md                  # Project documentation
└── 📄 todo.txt                   # Development notes
```

### **File Organization Principles**
- **Separation of Concerns:** HTML, CSS, and JS in dedicated folders
- **Semantic Naming:** Descriptive file and class names
- **Modular Structure:** Reusable components and consistent patterns
- **Asset Management:** Organized image folders with proper naming

---

## 📄 Pages

### 🏠 **Homepage (`index.html`)**
- **Hero Section** with property search form
- **Featured Properties** showcase
- **Company Overview** and value proposition
- **Call-to-Action** buttons for user engagement

### 🏢 **Properties (`pages/properties.html`)**
- **Advanced Search Filters** (location, price, bedrooms, bathrooms)
- **Property Grid/List Views** with toggle functionality
- **Property Cards** with images, details, and action buttons
- **Pagination** and sorting options

### 🛠️ **Services (`pages/services.html`)**
- **Service Offerings** (buying, selling, renting, management)
- **Agent Profiles** with photos, experience, and statistics
- **Consultation Booking** and contact information
- **Success Stories** and testimonials

### ℹ️ **About (`pages/about.html`)**
- **Company Story** and mission statement
- **Team Introduction** with professional photos
- **Core Values** and community involvement
- **Company Statistics** and achievements

### 📞 **Contact (`pages/contact.html`)**
- **Contact Forms** with validation and error handling
- **Office Information** with address and business hours
- **Interactive Map** placeholder for location
- **Quick Contact Options** for different needs

---

## 🚀 Installation

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Brianoyaro/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl.git
   ```

2. **Navigate to project directory**
   ```bash
   cd plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl
   ```

3. **Open in browser**
   - Option 1: Double-click `index.html`
   - Option 2: Use Live Server extension in VS Code
   - Option 3: Set up local server (recommended for development)

### **Local Development Server**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Then visit: http://localhost:8000
```

---

## 🎯 Usage

### **For Visitors**
1. **Browse Properties:** Use the search filters to find properties matching your criteria
2. **View Details:** Click on property cards to see detailed information
3. **Contact Agents:** Use contact forms or direct contact information
4. **Theme Preference:** Toggle between light and dark modes using the theme switcher

### **For Developers**
1. **Customize Styling:** Modify CSS custom properties in `styles.css`
2. **Add Properties:** Update property data in HTML files or integrate with a CMS
3. **Extend Functionality:** Add new JavaScript features in `script.js`
4. **Deploy Changes:** Push to GitHub for automatic deployment

### **Theme Customization**
```css
/* Light Mode Colors */
:root {
    --primary-color: #2563eb;
    --background: #ffffff;
    --text-primary: #1e293b;
}

/* Dark Mode Colors */
[data-theme="dark"] {
    --primary-color: #3b82f6;
    --background: #0f172a;
    --text-primary: #f1f5f9;
}
```

---

## 📱 Responsive Design

### **Breakpoint Strategy**
- **Mobile First:** Base styles for mobile devices (320px+)
- **Tablet:** Medium screens (768px+)
- **Desktop:** Large screens (1024px+)
- **Large Desktop:** Extra large screens (1200px+)

### **Responsive Features**
- **Flexible Grids:** CSS Grid and Flexbox for layout adaptation
- **Fluid Typography:** Responsive font sizes and spacing
- **Touch Optimization:** Larger tap targets and gesture support
- **Image Optimization:** Responsive images with proper sizing

### **Testing Approach**
- Chrome DevTools device simulation
- Physical device testing (iOS and Android)
- Browser compatibility testing
- Performance optimization validation

---

## 🌐 Browser Support

### **Fully Supported**
- **Chrome** 90+ (Chromium-based browsers)
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

### **Partially Supported**
- **Internet Explorer 11** (basic functionality only)
- **Older mobile browsers** (with graceful degradation)

### **Features with Fallbacks**
- CSS Grid (Flexbox fallback)
- CSS Custom Properties (static values fallback)
- Modern JavaScript (polyfills available)

---

## 🤝 Contributing

We welcome contributions to improve HomeFinder! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Bug Reports:** Submit issues with detailed descriptions
- 💡 **Feature Requests:** Suggest new functionality or improvements
- 🔧 **Code Contributions:** Submit pull requests with enhancements
- 📚 **Documentation:** Help improve README and code comments

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper testing
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### **Code Standards**
- Follow existing code style and formatting
- Write meaningful commit messages
- Test changes across different browsers
- Update documentation as needed

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ **Commercial use** allowed
- ✅ **Modification** allowed
- ✅ **Distribution** allowed
- ✅ **Private use** allowed
- ❗ **License and copyright notice** required

---

## 👨‍💻 Developer

**Brian Oyaro**
- 🌐 **Website:** [https://brianoyaro.github.io/Portfolio/]
- 📧 **Email:** [brianoyaro20002gmail.com]
- 💼 **LinkedIn:** [www.linkedin.com/in/brianmokouaoyaro]
- 🐦 **Twitter:** [@BrianOyaro9]

---

## 🙏 Acknowledgments

- **Power Learn Project** for the comprehensive web development course
- **Unsplash/Pexels** for high-quality stock images
- **CSS Grid Garden & Flexbox Froggy** for layout learning resources
- **MDN Web Docs** for technical documentation and best practices

---

## 📊 Project Statistics

- **Total Files:** 15+
- **Lines of Code:** 2,500+
- **Pages:** 5 responsive pages
- **Features:** 20+ interactive features
- **Supported Devices:** Mobile, Tablet, Desktop
- **Performance Score:** 90+ (Lighthouse)

---

*Built with ❤️ for the Power Learn Project Web Technologies Course*

**Last Updated:** September 2025
