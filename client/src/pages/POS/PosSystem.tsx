import { Link } from "react-router-dom";
import "./PosSystem.css"

export default function PosSystem() {
  return (
    <div>
      <nav>
        <Link to="/">Back Home</Link>
      </nav>

      <h1>POS System</h1>
      <p>Welcome to the Point Of Sale system.</p>
    </div>
  );
}
