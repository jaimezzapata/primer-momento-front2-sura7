function MenuItem({ nombre, precio }) {
  return (
    <li>
      {nombre} - ${precio}
    </li>
  );
}

export default MenuItem;