"use server";

export default async function Header() {
  return (
     <header className="header">
      <section>
            <div id="container">
                <div id="shopName"><a href="../"> <b>DELIRIO</b>MISTICO Y ARTESANAL</a></div>
                    <div id="collection">
                        <div id="clothing"><a href="#"> CLOTHING </a></div>
                        <div id="accessories"><a href="#"> ACCESSORIES </a></div>
                    </div>
                    <div id="search">
                        <i className="fas fa-search search"></i>
                    </div>
                    <div id="user">
                        <a href="#"> <i className="fas fa-shopping-cart addedToCart"><div id="badge"> 0 </div></i></a>
                        <a href="#"> <i className="fas fa-user-circle userIcon"></i> </a>
                    </div>
            </div>

        </section>
    </header>
  );
}