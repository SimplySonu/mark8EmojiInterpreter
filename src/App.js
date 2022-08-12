import "./styles.css";
import React from "react";

export default function App() {
  const emoji = [
    { "😀": "smile" },
    { "🤫": "Silent" },
    { "😂": "Laugh" },
    { "🤣": "Laugh" },
    { "😎": "Cool" },
    { "😍": "Love" },
    { "🤗": "Hug" },
    { "🤐": "Shut" },
    { "😴": "Sleep" },
    { "😤": "Angry" },
    { "😭": "Cry" }
  ];
  const [emojiTxt, setEmojiTxt] = React.useState();
  const [emojiMeaning, setEmojiMeaning] = React.useState(
    "Please Paste an imoji in the above text field!"
  );
  const [emojiPicMeaning, setEmojiPicMeaning] = React.useState(
    "Please Click an imoji from above list!"
  );
  function getMeaning() {
    let flag = true;
    for (let i = 0; i < emoji.length; i++) {
      if (emojiTxt === Object.keys(emoji[i])[0]) {
        setEmojiMeaning(Object.values(emoji[i])[0]);
        setEmojiTxt("");
        flag = false;
        return;
      }
    }
    if (flag) {
      setEmojiMeaning("Sorry We Could'nt find the meaning 😣");
      setEmojiTxt("");
    }
  }
  function getEmoji(name) {
    setEmojiPicMeaning(name);
  }
  let emojiPics = emoji.map((obj, i) => {
    return (
      <span key={i} onClick={() => getEmoji(Object.values(obj)[0])}>
        {Object.keys(obj)[0]}
      </span>
    );
  });

  return (
    <div className="App">
      <h1>Emoji Finder</h1>
      <input
        placeholder="Type The Emoji Here"
        value={emojiTxt}
        onChange={(event) => setEmojiTxt(event.target.value)}
        className="input"
      ></input>
      <button className="button" onClick={getMeaning}>
        Get Meaning
      </button>
      <p className="text">{emojiMeaning}</p>
      <div className="container">{emojiPics}</div>
      <p className="text">{emojiPicMeaning}</p>
    </div>
  );
}
