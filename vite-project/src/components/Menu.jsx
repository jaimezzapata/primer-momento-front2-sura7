import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <MenuItem nombre="Taco al pastor" precio="10000" />
        <MenuItem nombre="Taco de pollo" precio="9000" />
      </ul>
    </div>
  );
}

export default Menu;