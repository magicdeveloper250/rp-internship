import "./App.css";
// import LoginForm from "./components/LoginForm";
import MyButton from "./components/MyButton";
// import SignupForm from "./components/SignupForm";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  console.log("App component rendered");
  return (
    <div className="app-container">
      <h1> Welcome to notepad</h1>
       {/* <LoginForm/> */}
       <ForgotPassword/>
    </div>
  );
}

export default App;
