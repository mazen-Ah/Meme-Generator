import react, { useState, useEffect } from "react";
import Header from "./header";

function Body() {
  const [meme, setMemes] = useState();
  const [allMemes, setAllMemes] = useState({
    topText: "SHUT UP",
    bottomText: "AND TAKE MY MONEY",
    url: "http://i.imgflip.com/1bij.jpg",
  });
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  function change(event) {
    const { name, value } = event.target;
    setAllMemes((prevAllMemes) => ({
      ...prevAllMemes,
      [name]: value,
    }));
  }
  function clicked() {
    let randomNum = Math.floor(Math.random() * meme.length);
    console.log(randomNum);
    setAllMemes((prevallMemes) => ({
      ...prevallMemes,
      url: meme[randomNum].url,
    }));
  }

  return (
    <div className="parent">
      <Header />
      <div>
        <input
          className="topText"
          type="text"
          onChange={change}
          name="topText"
          value={allMemes.topText}
        />
        <input
          className="bottomText"
          onChange={change}
          type="text"
          name="bottomText"
          value={allMemes.bottomText}
        />
        <button className="changeMeme" onClick={clicked}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="memes" src={allMemes.url} alt="" />
        <h3 className="top text">{allMemes.topText}</h3>
        <h3 className="bottom text">{allMemes.bottomText}</h3>
      </div>
    </div>
  );
}
export default Body;
