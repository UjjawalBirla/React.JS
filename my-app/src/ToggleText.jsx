import { useState } from "react";
function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={()  => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          hic iusto optio ab quas modi quod numquam blanditiis culpa pariatur
          sapiente recusandae iste molestias dolore ut dicta nobis, voluptatum
          ex.
        </p>
      )}
    </div>
  );
}

export default ToggleText;
