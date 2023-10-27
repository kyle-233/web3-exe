const { useState, useEffect } = require("react")

export const useClient = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);
    return isClient;
}