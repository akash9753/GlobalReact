import React from 'react';
import JsxFragment2 from './JsxFragment2';

const JsxFragment1 = () => {
    return (
        <div>
            <h1>React Fragment</h1>
            <table>
                <tbody>
                    <tr>
                        <JsxFragment2/>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default JsxFragment1;