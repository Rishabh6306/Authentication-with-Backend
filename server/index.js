import express from 'express';
import cors from 'cors';
import { config as configDotenv } from 'dotenv';
import { connectToDb } from './config/db.js';
import router from './routes/routes.js'

// Load environment variables from .env file
configDotenv();

// Create an Express app
const app = express();
app.use(express.json());

// Configure CORS to allow connections from http://localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB
connectToDb();

// Attach the router to handle routes
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// iske liya ek acchi se readme.md  file banao jisme sab kuch explain kro ki humne login aur signup page banaya hai jisme user login kar sakta hai aur signup bhi kar sakta hai ise hmne databse se connect kiya hai isme humne react vite app aur nodejs express js axois monoogse mognodb atlas ke helop se banya hai in sab ek baare me 1 1 line likh dena isme user same firdt apna account create karata hai signup par jaakar account create hone ke  baad user login karta hai email aur paasoerf se iske baad user hme page par redirect ho jaata hai          ,                  Iska folder strcuter  main folder name-- Authenataion with backend iske andar server aur client naam ke do folder hai jisme clent ke andar hmen apni ssaare frontedn likha hai aur server ke andar humne sab backend ka part likha hai client me humne react vite app ka setup kiya hai  sab ka strcutre dikha dena isme src ke andar humne component me HomePage naam ka ek folder aur Login&SignUp ka ek folder banaya hai . IS FOLDER ME loginForm.jsx aur SignupForm.jsx files hai aur Login&SignupForm.css hai jiske andar mere login aur singup dono ke css likhe hue hai loginform file me login page ke liya coding aur signupform.jsx me signup ke liya coding ki gyi hai,        app.js me ise humene import kiya hai in compnents ko aur app.css me kuch kuchstyling ki hai body ki                     now fronted part completed.                                                                         In server folder isme humne packege.json , packege-lock.json index.js files hai aur config controller modules routes naam ke folder hai inke andar .jsx files hai inke humne port aur MONGODB_URI ko .env se liya hai aap yha pane Mongodb_uri aur port use kare isme agar aap  run karna chahte hai ise apne system me iske baad config controller modules routes index.js jisme jo hai 1-1 line uske baare me bata dena kya kisme ho rha hai iske baad now backend part completed  ab agar aap ise apne system me run karna chate hai to aapko kuch baate dyan rakhna ho hoga aur kuch depesnis install karne hogi first make sure ki  nodeJS ho aapke system me iske  baad aap server aur client dono me npm install kar le aur phir dono  ko run karna ke liya client ke liya aap npm run dev         run kare terminal me is folder ke andar jaakr cd client se aur ek new termianl open kare isme aap server ko run kare nodemon start or node index.js se   ab dono hi aaple syustem  me run ho gya hai isme aapm apni MONGODB_URI AUR PORT NO ADD KARENGE TABHI YE SAHI SE WROK KARNA START KARENGE To aap confirm kar le ki ye dono add hai ya nahi that's all my project  if you feel anyoyhing else then pull request kar sakte hai ya hmare linkidn pr linkidin url usenrma rishabh6306 par  hmse baat kr sakte hai ya hme rishabhsrivastav722@gmail.com par mail kar sakte hai 