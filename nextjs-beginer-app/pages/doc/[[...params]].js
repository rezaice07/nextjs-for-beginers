import { useRouter } from 'next/router';
import React from 'react';

const Params = () => {

    const router = useRouter();

    console.log(router.query)


    if (router.query.type === '1') {
        return (
            <div>
                <h1>Type 01</h1>
                <p>Catch all routing</p>
            </div>
        )
    }

    if (router.query.type === '2') {
        return (
            <div>
                <h1>Type 02</h1>
                <p>Catch all routing</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Params</h1>
            <p>Catch all routing</p>
        </div>
    )
}

export default Params