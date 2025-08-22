# 🔮 Tarot STEM

A simple **React application** to display and explore tarot cards using a public API created by [@MAlexGG](https://github.com/MAlexGG).  
Each card combines a **tarot arcane** with the story of a **woman in STEM**, turning them into contemporary goddesses 👩‍🔬.  

This project is developed under the **Factoria F5** framework, a bootcamp that empowers women and promotes inclusion in tech.  

---

## 📚 Note

This project is a **student project** created for learning purposes only.  
It has no commercial use and is intended exclusively for **educational purposes**.

---

## ✨ Features

- Display all tarot cards (face down by default).  
- Click on a card to see its **arcane meaning** and the **STEM goddess** associated with it.  

---

## 🛠️ Tech Stack

- **React 18** with Vite  
- **React Router DOM** for navigation  
- **Axios / fetch** for API requests  
- **Hooks**: `useState`, `useEffect`, `useParams`  
- Modularized code with `services.js` for API logic  

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**
   ```
   git clone https://github.com/your-username/tarot-stem.git
   cd tarot-stem

2. **Install dependencies**
   ```
   npm install

3. **Run the development server**
   ```
   npm run dev
   
4. **Open in your browser**
Go to 👉 http://localhost:5173

# 📡 API Reference

All tarot data comes from this public API:  
👉 [https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot](https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot)  
The API is public and does not require authentication.

---

## 🔑 Endpoints

### 1. Get all cards
   ```
   GET /api/v1/tarot
   ````
Response: An array of tarot cards.

### 2. Get a card by ID
   ```
   GET /api/v1/tarot/:id
   ```
   Response: A single card object.

## 🃏 Card Object Structure
   ```
   {
  "id": "1",
  "arcaneNumber": "0",
  "arcaneName": "El Loco",
  "arcaneDescription": "Detailed description of the arcane meaning.",
  "arcaneImage": {
    "imageSrc": "URL of the tarot card image",
    "author": "Author of the image",
    "license": "License of use"
  },
  "goddessName": "Name of the associated contemporary goddess",
  "goddessDescription": "Biographical or relevant information about the STEM goddess.",
  "goddessImage": {
    "imageSrc": "URL of the goddess image",
    "author": "Author of the image",
    "licenseUrl": "URL of the usage license"
  }
}
   ```
