
export default function Home(){
 return (
 <main>
  <nav className="container">
   <strong>Pizza Best 2.0</strong>
  </nav>

  <section className="hero container">
   <h1>Pizza, Burger, Gyros és frissensültek egy helyen</h1>
   <p>Modern Pizza Best redesign Sprint 1</p>
   <a href="#" className="btn">Rendelés most</a>
  </section>

  <section className="container">
   <h2>Kategóriák</h2>
   <div className="grid">
    <div className="card">🍕 Pizza</div>
    <div className="card">🍔 Burger</div>
    <div className="card">🥙 Gyros</div>
    <div className="card">🍝 Tészta</div>
   </div>
  </section>
 </main>
 )
}
