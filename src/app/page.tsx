"use client";

// Hook dependencies
import useNavigate from "@/hooks/useNavigate";

// Component dependencies
import MainBackground from "@/components/MainBackground";

// Component dependencies
import Styles from "./page.module.scss";

// Main page component
export default function Page() {
  // Navigator
  const navigate = useNavigate();

  return (
    // Main page container
    <div className={Styles.MainPage}>
      {/* Main background for the main menu */}
      <MainBackground>
        {/* Main Title / Header for the WebGL Native App */}
        <div>
          <h1 className={Styles.Text}>WebGL Native App</h1>
        </div>

        {/* Examples navigator */}
        <div></div>
      </MainBackground>
    </div>
  );
}
