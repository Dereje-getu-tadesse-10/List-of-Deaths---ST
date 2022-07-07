import { useState } from "react";
import Button from "../Button/Button"

export const Alert = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    if(!setIsVisible(!isVisible)){
      e.target.parentElement.classList.add('visible')
      e.target.remove()
    }
  }


  return (
    <div className='res'>
      <Button onClick={handleClick} />
    </div>
  )
}
