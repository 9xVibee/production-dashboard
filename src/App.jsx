import {
  ThemeProvider,
  TooltipProvider,
  createTheme,
} from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import theme from "./../twigs.config";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Home";

const App = () => {
  const mode = useSelector((store) => store.lightDARK_MODE.lightDARK_MODE);
  const strRef = useRef("");

  useEffect(() => {
    if (strRef.current)
      document.documentElement.classList.remove(strRef.current);

    strRef.current = createTheme(theme.theme[mode]);
    document.documentElement.classList.add(strRef.current);
  }, [mode]);

  return (
    <ThemeProvider
      theme={{
        fonts: {
          body: "DM Sans, Poppins",
        },
      }}
    >
      <TooltipProvider delayDuration={0}>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
