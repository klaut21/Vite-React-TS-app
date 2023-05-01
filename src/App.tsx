import './App.css';

function getImageUrl(name: string) {
  return new URL(`./assets/images/${name}.svg`, import.meta.url).href;
}

function App() {
  const message: string = 'Hello!';
  const sampleImgs: string[] = [
    getImageUrl('img0'),
    getImageUrl('img1'),
    getImageUrl('img2'),
  ];

  return (
    <>
      <h1>Image Gallery</h1>
      <div>
        <a href="#" target="_blank">
          <img src={sampleImgs[0]} className="logo" alt="img" />
        </a>
        <a href="#" target="_blank">
          <img src={sampleImgs[1]} className="logo" alt="img" />
        </a>
        <a href="#" target="_blank">
          <img src={sampleImgs[2]} className="logo" alt="img" />
        </a>
      </div>

      <div className="card">
        {message}
        <p></p>
      </div>
    </>
  );
}

export default App;
