"use client";

import {useMemo,useState} from "react";

const products=[
{id:1,name:"Blush Heart Tee",price:699,oldPrice:899,tag:"BESTSELLER",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85"},
{id:2,name:"Everyday Smile Tee",price:649,oldPrice:799,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"},
{id:3,name:"Cherry Pop Tee",price:749,oldPrice:899,tag:"NEW IN",image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85"},
{id:4,name:"Weekend Vibes Tee",price:699,oldPrice:799,image:"https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85"}];

export default function Home(){
 const [cart,setCart]=useState([]),[wish,setWish]=useState([]),[q,setQ]=useState(""),[show,setShow]=useState(false);
 const list=useMemo(()=>products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())),[q]);
 const add=p=>setCart(c=>[...c,p]);
 return <main>
  <div className="announcement">FREE SHIPPING ON ORDERS OVER ₹999 <span>•</span> EASY RETURNS <span>•</span> NEW DROP IS HERE</div>
  <header className="siteHeader">
   <div className="wrap headerTop">
    <button className="mobileMenu" aria-label="Menu">☰</button>
    <div className="headerSide"><button onClick={()=>setShow(true)}>SEARCH</button></div>
    <a className="brand" href="#">LOLA <em>ENGLAND</em></a>
    <div className="headerSide right"><button onClick={()=>setShow(true)}>♡</button><button onClick={()=>setShow(true)}>BAG ({cart.length})</button></div>
   </div>
   <nav className="mainNav">
    <a href="#new">NEW IN</a><a href="#shop">T-SHIRTS</a><a href="#collections">COLLECTIONS</a><a href="#about">OUR STORY</a><a href="#contact">CONTACT</a>
   </nav>
  </header>

  <section className="editorialHero">
   <div className="heroCopy"><small>LOLA ENGLAND • NEW SEASON</small><h1>Made for<br/><i>everyday magic.</i></h1><p>Playful girls' T-shirts, happy colours and easy styles made for all her little adventures.</p><a className="heroButton" href="#shop">SHOP THE COLLECTION</a></div>
  </section>

  <section className="intro wrap">
   <small>WELCOME TO LOLA ENGLAND</small>
   <h2>Playful pieces for<br/>little personalities.</h2>
   <p>Discover easy-to-wear T-shirts designed to bring a little more colour, comfort and fun to every day.</p>
  </section>

  <section className="collectionStrip wrap" id="collections">
   <a className="collectionCard collectionOne" href="#shop"><div><small>01</small><h3>NEW IN</h3><span>SHOP NOW →</span></div></a>
   <a className="collectionCard collectionTwo" href="#shop"><div><small>02</small><h3>EVERYDAY TEES</h3><span>SHOP NOW →</span></div></a>
   <a className="collectionCard collectionThree" href="#shop"><div><small>03</small><h3>BESTSELLERS</h3><span>SHOP NOW →</span></div></a>
  </section>

  <section className="productsSection wrap" id="shop">
   <div className="sectionTitle"><div><small>THE LOLA EDIT</small><h2>Our favourites</h2></div><div className="shopTools"><button onClick={()=>setShow(true)}>SEARCH</button><button onClick={()=>setShow(true)}>VIEW ALL</button></div></div>
   <div className="productGrid">{list.map(p=><Card key={p.id} p={p} wish={wish.includes(p.id)} onWish={()=>setWish(w=>w.includes(p.id)?w.filter(x=>x!==p.id):[...w,p.id])} onAdd={()=>add(p)}/>)}</div>
  </section>

  <section className="storyFeature wrap" id="about">
   <div className="storyImage"></div><div className="storyText"><small>OUR LITTLE WORLD</small><h2>Colourful clothes.<br/>Happy days.</h2><p>Lola England is all about fun, comfort and pieces that feel as good as they look. From school mornings to weekend adventures, these are T-shirts made to be lived in.</p><a href="#shop">DISCOVER LOLA ENGLAND →</a></div>
  </section>

  <section className="benefits">
   <div className="wrap benefitGrid">
    <div><b>Easy returns</b><span>Simple & stress-free returns</span></div>
    <div><b>Premium comfort</b><span>Soft, everyday-friendly fabrics</span></div>
    <div><b>Made for girls</b><span>Playful styles for every day</span></div>
    <div><b>Secure shopping</b><span>Safe and simple checkout</span></div>
   </div>
  </section>

  <footer id="contact">
   <div className="wrap footerGrid">
    <div><a className="brand footerBrand" href="#">LOLA <em>ENGLAND</em></a><p>Girls' T-shirts made for everyday smiles.</p></div>
    <div><h4>SHOP</h4><a href="#new">New In</a><a href="#shop">T-Shirts</a><a href="#collections">Collections</a></div>
    <div><h4>HELP</h4><a href="#contact">Contact</a><a href="#contact">Delivery</a><a href="#contact">Returns</a></div>
    <div><h4>STAY IN THE LOOP</h4><p>New drops, offers and Lola news.</p><div className="newsletter"><input placeholder="Your email"/><button>→</button></div></div>
   </div>
   <div className="wrap copyright">© 2026 Lola England · All rights reserved.</div>
  </footer>

  {show&&<div className="overlay"><div className="modal"><div className="sectionTitle"><h2>Your bag</h2><button onClick={()=>setShow(false)}>CLOSE</button></div><input className="search" placeholder="Search T-shirts..." value={q} onChange={e=>setQ(e.target.value)}/>{cart.length===0?<p className="empty">Your bag is empty. Add something cute!</p>:cart.map((p,i)=><div className="row" key={i}><img src={p.image} alt={p.name}/><div><b>{p.name}</b><p>₹{p.price}</p></div><button onClick={()=>setCart(c=>c.filter((_,x)=>x!==i))}>REMOVE</button></div>)}{cart.length>0&&<h3 className="total">Total: ₹{cart.reduce((s,p)=>s+p.price,0)}</h3>}</div></div>}
 </main>
}

function Card({p,wish,onWish,onAdd}){
 return <article className="productCard"><div className="productPhoto"><img src={p.image} alt={p.name}/>{p.tag&&<span>{p.tag}</span>}<button className="heart" onClick={onWish}>{wish?"♥":"♡"}</button></div><div className="productInfo"><h3>{p.name}</h3><div><b>₹{p.price}</b>{p.oldPrice&&<del>₹{p.oldPrice}</del>}</div><button className="addButton" onClick={onAdd}>ADD TO BAG</button></div></article>
}
