import React, { useEffect, useRef } from 'react'

function useTitle({description,title}) {
    const prevDescription = useRef();
    document.title = title;
    useEffect(()=>{
        const previousDescription = prevDescription.current;
        const metaDescription = document.querySelector('meta[name="description"');
        if(description){
            metaDescription.setAttribute('content',description);
        }
        return ()=>metaDescription.setAttribute('content',previousDescription);
    },[description]);
}

export default useTitle
