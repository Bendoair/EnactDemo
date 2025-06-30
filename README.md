# EnactDemo 🐱

Ez az Enact-alapú projekt egy **Kitten Demo-val** indult, majd kibővítettem, hogy tartalmazza a **Firebase Auth** és **Firestore** integrációt.

## 🧩 Mi ez?

- Kiindulópont: Enact (Sandstone téma) **Kitten Demo** – `Repeater`, `ImageItem`, `Spottable` használatával.
- Cél: Hitelesített hozzáférés (bejelentkezés/registráció) és a `kittens` adatok Firestore-ból való betöltése.
- Modern setup: React + Enact + Firebase moduláris felépítésben.

---

## 🛠️ Telepítés és futtatás

1. Klónozd a repót:

   ```bash
   git clone https://github.com/Bendoair/EnactDemo.git
   cd EnactDemo
   ```

2. Telepítsd a függőségeket:

   ```bash
   npm install
   # vagy
   yarn
   ```

3. Hozd létre a `.env.local` fájlt a projekt gyökerében:

   ```env
   REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
   REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
   REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
   ```

4. Indítsd el a fejlesztői szervert:

   ```bash
   npm start
   # vagy
   yarn start
   ```

---

## 🔑 Funkciók

- 🔐 Bejelentkezés és regisztráció Firebase Auth segítségével
- 🐱 Cicák listázása Firestore-ból
- 🎮 5-way Spotlight navigáció TV-re optimalizálva, de valamiért az onClock még hibás
- 📦 `Repeater` + `ImageItem` cicakártyákhoz
- ⚡ Dinamikus navigáció és részletnézet (`Detail`)

---

## 📁 Projekt struktúra

```
src/
  components/
    Auth/            # LoginPanel, SignupPanel
    Kitten/          # Spottable ImageItem komponensek
  contexts/
    AuthContext.js   # Firebase auth + context provider
  Views/
    List.js          # Repeater + ImageItem grid nézet
    Detail.js        # Részlet panel egy kiválasztott cicáról
  App.js            # Enact Panels + routing + auth wrapper
firebase.js         # Firebase inicializáció .env-ből
```

---

Ez az EnactDemo a **Kitten Demo** kibővített verziója, ami bemutatja, hogyan lehet Firestore-alapú adatbázist és felhasználó-kezelést integrálni egy Enact TV-alkalmazásba.