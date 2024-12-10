import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function resetProgress() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    showCheckout,
    hideCheckout: resetProgress,
    hideCart: resetProgress,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
