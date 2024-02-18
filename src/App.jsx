import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const imageFiles = require.context(
    "../public/images",
    true,
    /\.(jpg|jpeg|png)$/
  );

  const images = imageFiles.keys().map(imageFiles);
  // console.log(images);
  return (
    <div className="container">
      <h1>Antimicrobial Resistance</h1>
      <hr />
      <div className="row">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="col-md-6"
            alt={`Antimicrobial Resistance Poster ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
