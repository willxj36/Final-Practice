import * as React from 'react';
import { useState, useEffect } from 'react';

interface TemplateProps {}

const Template = () => {

    const [state, setState] = useState(null);

    // useEffect(() => {
    //     (async () => {

    //     })();
    // }, []);

    // useEffect(() => {}, []);

    return(
        <div>Template</div>
    )

}

export default Template;