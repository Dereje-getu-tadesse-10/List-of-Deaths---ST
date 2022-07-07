import { useState } from "react";
import Button from "../Button/Button"

export const Alert = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    if(!setIsVisible(!isVisible)){
      setIsVisible(true);
      e.target.parentElement.classList.add('visible')
      e.target.parentElement.children[0].remove();
      e.target.remove()
    }
  }

  return (
    <div className='res'>
      <h3>Spoiler Alert</h3>
      <Button onClick={handleClick} />
    </div>
  )
}
