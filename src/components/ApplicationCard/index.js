/* eslint-disable import/no-unresolved */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ApplicationCard = ({ title, linkTo, description, buttonText }) => {
    return (
        <div className={clsx('col col--3', styles.application)}>
            <div className='card shadow--md'>
                <div className='card__header'>
                    <h3>{title}</h3>
                </div>
                <div className={clsx('card__body', styles.body)}>
                    <p>{description}</p>
                </div>
                <div className='card__footer'>
                    <a href={linkTo} className='button button--secondary button--block'>
                        {buttonText ? buttonText : 'Read more'}
                    </a>
                </div>
            </div>
        </div>
    );
};

ApplicationCard.propTypes = {
    title: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
};

export default ApplicationCard;
