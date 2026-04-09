import "./App.css";
 import LoginForm from "./components/LoginForm";
import MyButton from "./components/MyButton";
import SignupForm from "./components/SignupForm";
import ForgotPassword from "./components/ForgotPassword";
import TestComponent from "./components/TestComponent";
function App() {
  console.log("App component rendered");
  return (
    <div className="app-container">
      <h1> Welcome to notepad</h1>
      <SignupForm/>
       {/* <LoginForm/> */}
       {/* <ForgotPassword/> */}
       {/* <TestComponent/> */}
    </div>
  );
}

export default App;
