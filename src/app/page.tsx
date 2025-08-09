"use client";

// Base dependencies
import { useRouter } from "next/navigation";

// Component dependencies
import Styles from "./page.module.scss";

// Main page component
export default function Page() {
  // Initialize router
  const router = useRouter();

  return (
    <div className={Styles.MainPage}>
      {/* Main Title / Header for the WebGL Native App */}
      <div>
        <h1 className={Styles.Text}>WebGL Native App</h1>
      </div>

      {/* Examples navigator */}
      <div>
        {/* Example 1 - Basic rendering of a 2D object using pure WebGL */}
        <div
          className={Styles.Text}
          onClick={() => router.push("/examples/basic-2d")}
        >
          <h3>Basic 2D rendering using WebGL</h3>
        </div>

        {/* Example 2 - Basic rendering of a 3D object using pure WebGL */}
        <div
          className={Styles.Text}
          onClick={() => router.push("/examples/basic-3d")}
        >
          <h3>Basic 3D rendering using WebGL</h3>
        </div>
      </div>
    </div>
  );
}
