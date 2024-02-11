import clsx from "clsx";
import cn from "./App.module.scss";
import { useCallback, useState } from "react";
import Swal from "sweetalert2";

interface ButtonOffset {
  top: string;
  left: string;
  position: "fixed";
}

function App() {
  const [buttonPos, setButtonPos] = useState<ButtonOffset>();
  const accepted = useCallback(() => {
    Swal.fire("Awh, love you too!");
  }, []);

  const moveButtonRandomly = useCallback(() => {
    const topOffset = Math.random() * 80 + 10;
    const leftOffset = Math.random() * 80 + 10;

    setButtonPos({
      top: topOffset + "%",
      left: leftOffset + "%",
      position: "fixed",
    });
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
            onMouseOver={moveButtonRandomly}
            onClick={moveButtonRandomly}
            className={clsx(cn.button, cn.no)}
            style={buttonPos ?? {}}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
