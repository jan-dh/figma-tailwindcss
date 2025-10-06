import React, { useGlobal, Fragment } from 'reactn';
import { Link } from 'react-router-dom';
import FontFamilies from './FontFamilies.js';
import FontSizes from './FontSizes.js';
import messages from '../../helpers/randomMessages.js';

const Type = () => {
    const [fontSizes] = useGlobal('fontSize');
    const [fontFamilies] = useGlobal('fontFamily');
    const [baseFontSize] = useGlobal('baseFontSize');
    const hasFamilies = Object.keys(fontFamilies).length > 0;
    const hasSizes = Object.keys(fontSizes).length > 0;

    const emptyFamily =
        messages.emptyFamilies[
            Math.floor(Math.random() * messages.emptyFamilies.length)
        ];

    const emptySize =
        messages.emptySizes[
            Math.floor(Math.random() * messages.emptySizes.length)
        ];

    const validateFontSize = (e) => {
        if (!baseFontSize && Object.keys(fontSizes).length > 0) {
            e.preventDefault();
        }
    };

    const buttonClass =
        baseFontSize || !hasSizes
            ? 'button button--green'
            : 'button button--green opacity-50';

    return (
        <Fragment>
            <div className="w-full border-b border-gray-200 py-4">
                <h2 className="t-beta">Typography</h2>
                <p className="intro">Font families and font sizes</p>
            </div>
            <h3 className="t-gamma mt-4">Font families</h3>
            {hasFamilies ? (
                <FontFamilies />
            ) : (
                <div className="richtext mt-4">
                    <p>{emptyFamily}</p>
                </div>
            )}
            <div className="mt-8">
                <h3 className="t-gamma">Font sizes</h3>
                {hasSizes ? (
                    <FontSizes />
                ) : (
                    <div className="richtext mt-4">
                        <p>{emptySize}</p>
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-8">
                <Link to="/colors" className="button button--green">
                    Previous
                </Link>
                <Link
                    to="/effects"
                    className={buttonClass}
                    onClick={validateFontSize}
                >
                    Next
                </Link>
            </div>
        </Fragment>
    );
};
export default Type;
