import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Applayout/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./Applayout/global/Sidebar";
import Dashboard from "./Applayout/dashboard";
import Team from "./Applayout/team/";
import Invoices from "./Applayout/invoices";
import Contacts from "./Applayout/contacts";
import Bar from "./Applayout/bar";
import Form from "./Applayout/form";
import Line from "./Applayout/line";
import Pie from "./Applayout/pie";
import FAQ from "./Applayout/faq";
import Geography from "./Applayout/geography";
import Calendar from "./Applayout/calendar";


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