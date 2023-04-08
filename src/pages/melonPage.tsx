import React, { useEffect } from "react";
import { main } from "./services/crawling";

function MelonPage() {
    useEffect(() => {
        main();
    }, []);
    return <div>get melon api</div>;
}

export default MelonPage;
