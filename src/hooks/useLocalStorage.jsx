import { useState, useEffect } from 'react'


const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(()=>{
        try{
            //store value to local storage
            const localValue = window.localStorage.getItem(key)
            return localValue ? JSON.parse(localValue) : initialValue
        }
        catch(e){
            return initialValue
        }
    })

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
    
      
    }, [key, value])
    

  return [value, setValue]
}

export default useLocalStorage