import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCss from "./components/GlobalStyles";
import Personalizadas from "./pages/Personalizadas/Personalizadas";
import PaginaPadrao from "./pages/PaginaPadrao/PaginaPadrao";
import Todas from "./pages/Todas/Todas";
import Erro404 from "./pages/Erro404/Erro404";
import Home from "./pages/Home/Home"
import { CarrinhoProvider } from "./CarrinhoContext/CarrinhoContext";
import { CapinhasProvider } from "./CapinhasContext/CapinhasContext";
import PaginaDeCompra from "./pages/PaginaDeCompra/PaginaDeCompra";

function Rotas() {

  return (
    <BrowserRouter>
      <CapinhasProvider>
        <CarrinhoProvider>
          <ResetCss />
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Home />} />
              <Route path="/todas" element={<Todas />} />
              <Route path="/personalizadas" element={<Personalizadas />} />
              <Route path="/comprar" element={<PaginaDeCompra />} />
            </Route>
            <Route path="/erro404" element={<Erro404 />} />
          </Routes>
        </CarrinhoProvider>
      </CapinhasProvider>
    </BrowserRouter>
  )
}

export default Rotas
