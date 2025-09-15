import "./App.css"

const App = () => {
    const slot1 : number= Math.floor(Math.random() * 5)
    const slot2 : number= Math.floor(Math.random() * 5)
    const slot3 : number= Math.floor(Math.random() * 5)
    
    const images : string[] = [
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-cherry-cce8464b32439efb4f79fba017477125.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-lemon-52cd7112e8b6d398f97e69f8ce2da623.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-melon-593489676a762d464eaea97127970d28.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-prune-e486170eb7c22e6e9aed5de0316b5209.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-seven-e71e0d10655b5491197925624b5ac139.png"
    ]

    const hasWon : boolean = slot1 === slot2 && slot2 === slot3;
    return (
        <>
            <h1>Labo 1 : Slots</h1>
            {images.map((image, index)=> (
              <img key={index} src={image} alt="" />
              )
            )}

            {/* 
            <img src={images[1]} alt="" />
            <img src={images[2]} alt="" />
            <img src={images[3]} alt="" />
            <img src={images[4]} alt="" /> 
            */}

            { hasWon ? <p>Je hebt gewonnen!</p> : <p>Je bent verloren.</p>}

            <div>
              <img src={images[slot1]} alt="" />
              <img src={images[slot2]} alt="" />
              <img src={images[slot3]} alt="" />
            </div>
        </>
    );
}

export default App;