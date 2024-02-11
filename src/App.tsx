import clsx from "clsx";
import cn from "./App.module.scss";
import { useCallback, useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [hovered, setHovered] = useState(false);

  const accepted = useCallback(() => {
    Swal.fire("Awh, love you too!");
  }, []);

  return (
    <div className={cn.container}>
      <div className={cn.content}>
        <h1>Will you be my Valentines?</h1>

        <div className={cn.buttons}>
          <button className={clsx(cn.button, cn.yes)} onClick={accepted}>
            Yes
          </button>
          <button
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            className={clsx(cn.button, hovered && cn.disappear)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
