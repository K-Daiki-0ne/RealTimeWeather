import { useState, useEffect } from 'react'

export const useTime = () => {
  const [time, setTime] = useState('')
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    setTime(`${hour}:${minute}`);
  }, [])
  return time
}