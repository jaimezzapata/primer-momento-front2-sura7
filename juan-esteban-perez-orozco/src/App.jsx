import {menu} from "./data.js";
import MenuItem from "./components/MenuItem";
import './App.css'

function App() {
    return (
        <section>
            {
                menu.map((menu)=> (
                    <MenuItem menu={menu} />
                ))
            }
        </section>



    )
}

export default App;
