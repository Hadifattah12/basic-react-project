import reactimg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactrandom=["fundamnental","core","crucial"];
function getrandomnb(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
    const descreption = reactrandom[getrandomnb(2)];
    return(
       <header>
      <img src={reactimg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
         {descreption} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    );
  }