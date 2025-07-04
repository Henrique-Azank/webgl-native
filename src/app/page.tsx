// Component dependencies
import Styles from "./page.module.scss";

// Main page component
export default function Page() {
  return (
    <div>
      {/* Examples navigator */}
      <div>
        {/* Example 1 - Basic rendering of a 2D object using pure WebGL */}
        <div>
          <h1>Basic 2D rendering using WebGL</h1>
        </div>
        {/* Example 2 - Basic rendering of a 3D object using pure WebGL*/}
        <div>
          <h1>Basic 3D rendering using WebGL</h1>
        </div>
      </div>
    </div>
  );
}
