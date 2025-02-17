import { useNavigate } from "react-router-dom";
import ButtonNavigate from "./styles"; // Componente customizado

function Buttons() {
  const navigate = useNavigate();
  const buttons = [
    { path: "/Minha_Pag_Portifolio/Projetos", label: "Projetos" },
    { path: "/Minha_Pag_Portifolio/SobreMim", label: "Sobre Mim" },
    { path: "/Minha_Pag_Portifolio/Habilidades", label: "Habilidades" },
  ];

  return (
    <div className="gap-2 gap-md-4 mt-5 flex-wrap text-nowrap row flex-wrap container align-items-center justify-content-center">
      {buttons.map((button, index) => (
        <ButtonNavigate className="col-sm-12 col-md-auto col-lg-auto w-sm-100 w-md-auto d-flex justify-content-center align-items-center"
          key={index}
          onClick={() => navigate(button.path)}
        >
          {button.label}
        </ButtonNavigate>
      ))}
    </div>
  );
}

export default Buttons;