/* eslint-disable prettier/prettier */
import React from 'react';

function useMediaQuery(query: string) {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches); // query에 전달된 사이즈로 웹 페이지에 방문했을 경우를 대비해 필요
        const listener = () => {
            if (media.matches === matches) return;
            setMatches(media.matches);
        };

        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;
