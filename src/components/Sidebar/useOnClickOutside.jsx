import { useCallback, useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {

    const optimizedHandler = useCallback(handler, []);

    useEffect(() => {
        const listener = (event) => {
            console.log(event.target);
            const logoId = document.getElementById('logo').id;
            const logoContainerId = document.getElementById('logo-container').id;
            const logoSvgId = document.getElementById('logo-svg').id;
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            if (
                event.target.id !== logoId &&
                event.target.id !== logoContainerId &&
                event.target.id !== logoSvgId
            ) {
                optimizedHandler(event);
            }
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, optimizedHandler]);
};
