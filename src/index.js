import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { pizzaData } from './data.js';
/*inizio-data.js*/

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];

/*fine-data.js*/ 
function App()
{
    return (
     <div className='container'>
         <Header />
         <Menu />
         <Footer />
     </div>     
    );
}

function Header(){
    // const style =  {color:'red', fontSize:'47px', textTransform:"uppercase"};
    const style =  {color:'orange', fontSize:'47px', textTransform:"uppercase"};
    return <header className='header footer'>
          <h1  style={style}>Pizza Just React And Eat Co.</h1>
    </header> 
}

function Menu()
{
  const pizzas =  pizzaData;
    
  return (
        <main className='menu'>
           <h2>Menu Special</h2> 
           {
             pizzas.length>0 ?
            (
            <>
             <p style={{fontSize:'18px'}}>Welcome to JustEat Pizzeria, your go-to place for enjoying the best pizzas right at home! Our menu offers a wide selection of options, from classics like Margherita and Pepperoni to gourmet specialties made with fresh, high-quality ingredients. Customize your pizza with your favorite extras and choose from traditional, whole-grain, or gluten-free dough. Order now and experience the taste of authentic Italian pizza! 🍕</p>
            <br></br>
            <ul>
              {
                pizzas.map((pizza) => (
                  <Pizza key={pizza.name} pizzaObj={pizza} />
                ))
              }
            </ul>
            </>):(
            <p>Sold out sorry</p>
            )}     
        </main>
        )
}

function Pizza(props)
{ 
  if (props.pizzaObj.soldOut)
    return null;

  return <div className='pizza'>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
            <div>
              <h3>{props.pizzaObj.name}</h3>
              <p>{props.pizzaObj.ingredients}</p>
              {props.soldOut ?(<span>Sold Out</span>):(<p>{props.pizzaObj.price}</p>)}
              <button className='btn'>Pre-Order Now!</button>
            </div>
        </div>;    
}
      
function Footer()
{
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
   
   return  <footer className='footer'>
            { isOpen ? (
              <Order closeHour={closeHour} /> ):(
                <p>We're open from {openHour} come back later</p>
              )}
            </footer>;
}

function Order({closeHour})
{
  return(
    <div className='order'> 
        <p>We're open until {closeHour}:00pm </p>
        <button className='btn'>Order Now!</button>
   </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
