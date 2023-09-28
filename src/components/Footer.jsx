import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Senac</h4>
                        <p>2023 - Todos os direitos reservados</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Características</h4>
                        <ul className="list-group">
                            <li className="list-group-item"><Link to= ""></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}