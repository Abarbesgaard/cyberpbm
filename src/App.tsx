import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { RulesPage } from "@/pages/RulesPage";
import { RoleProvider } from "@/context/RoleContext";

export function App() {
  return (
    <RoleProvider>
      <BrowserRouter basename="/cyberpbm">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="rules" element={<RulesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}
