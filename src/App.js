
import image from './fruits.jpg';
import './App.css';
import ListeFruits from './ListeFruits';
import ListeBaies from './ListeBaies';

function App() {
  //function showAlert() {
    //alert("Clicked!");
  //}
  const buttonOne = () => {
    console.log("Coucou!");
  }
  const buttonTwo = () => {
    console.log("By!");
  }
  return (
    <div>
        <img src={image} alt="fruits" width="300px" />
        <ListeFruits />
        <ListeBaies />
        <button onClick={buttonOne}>Coucou!</button>
        <button onClick={buttonTwo}>By!</button>
    </div>
  );
}

export default App;
