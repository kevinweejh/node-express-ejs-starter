# Node.js Express EJS Template

Template for a basic Node.js app, using Express for routing and EJS for templating.

## Features
- Node.js and Express for server-side logic
- EJS as the templating engine
- Organized folder structure
- Static file serving

## Prerequisites
- Node.js
- npm (Node Package Manager)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/node-express-ejs-template.git
   cd node-express-ejs-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Visit the app in your browser:**
   Open [http://localhost:3000](http://localhost:3000)

## Project Structure
```
my-express-app/
├── package.json
├── server.js
├── views/
│   ├── index.ejs
│   └── about.ejs
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
└── routes/
    └── index.js
```

## Adding New Routes
To add a new route, update the `routes/index.js` file:
```javascript
router.get('/new-route', (req, res) => {
  res.render('new-template', { title: 'New Route' });
});
```
Then, create a new EJS template in the views directory named `new-template.ejs`. 

## License
This project is licensed under the MIT License - see the LICENSE file for details.
