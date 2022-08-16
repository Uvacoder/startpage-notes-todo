import {useState, useEffect, useRef} from 'react'

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter(){
        setHovered(true)
    }
    function leave(){
        setHovered(false)
    }

    useEffect(()=>{
        const el = ref.current

        if(el){
            el.addEventListener('mouseenter', enter)
            el.addEventListener('mouseleave', leave)
            return () => {
                el.removeEventListener('mouseenter', enter)
                el.removeEventListener('mouseleave', leave)
            }
        }
    }, [])

    return [hovered, ref]
}

export default useHover