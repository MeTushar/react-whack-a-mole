import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TimeUp.css';

const TimeUp = ({ show, text, tag: Tag, onCloseClick }) => (
    <div className={classnames('timeup', {'show': show})}>
        <div className="timeup__text-container">
            <Tag className="timeup__text" data-text={text}>{text}</Tag>
            <div className="timeup__close" onClick={onCloseClick}>&#10539;</div>
        </div>
    </div>
);

TimeUp.propTypes = {
    show: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    onCloseClick: PropTypes.func.isRequired
};

export default TimeUp;