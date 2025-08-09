/**
 * Custom hook for navigation
 * using the useRouter hook as a base.
 *
 * Returns a callback function to be used
 * on onClick contexts.
 */

// Base dependencies
import { useCallback } from "react";
import { useRouter } from "next/navigation";

// Main hook function
const useNavigate = () => {
  // Instantiate the router
  const router = useRouter();

  // Returns the callback
  return useCallback(
    /**
     * Navigate to a new page
     * @param path The path to navigate to
     * @returns A function that navigates to the specified path
     */
    (path: string) => {
      // Returns the navigation callback
      return () => router.push(path);
    },
    [router]
  );
};

// Export default the hook
export default useNavigate;
