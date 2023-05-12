import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./AppLayout/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./AppLayout/global/Sidebar";
import Dashboard from "./AppLayout/dashboard/index";
import Team from "./Applayout/team";
import Invoices from "./AppLayout/invoices";
import Contacts from "./AppLayout/contacts";
import Bar from "./AppLayout/bar";
import Form from "./AppLayout/form";
import Line from "./AppLayout/line";
import Pie from "./AppLayout/pie";
import FAQ from "./AppLayout/faq";
import Geography from "./AppLayout/geography";
import Calendar from "./AppLayout/calendar";


type ColorModeContextProps = {
  value: string;
};




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard/>}/> 
              <Route path="/team" element={<Team/>}/> 
              <Route path="/contacts" element={<Contacts/>}/> 
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/geography" element={<Geography/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;