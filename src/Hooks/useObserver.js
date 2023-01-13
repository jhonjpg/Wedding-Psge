import React, { useEffect, useState } from 'react'

export const useObserver = (ref, options) => {


    const { rootMargin } = options;

    const [observerEntry, setobserverEntry] = useState(null)


    { rootMargin }


    useEffect(() => {

        const reference = ref.current;

        if (!reference) return;
        const observer = new IntersectionObserver(([entry]) => {


            setobserverEntry(entry)

            if (entry.isIntersecting) {

                observer.unobserve(entry.target)

            }


        });

        observer.observe(reference)



    }, [ref, rootMargin]);




    return observerEntry
}