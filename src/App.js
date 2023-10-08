
import { Route, BrowserRouter as Router,Routes} from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";


function App() {
  return (
   <Router>
     <Header/>
     <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/add-expense" Component={AddExpense}/>
     </Routes>
      <Footer/>
   </Router>    
      
  );
}

export default App;
