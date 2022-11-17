/* eslint-disable import/no-unresolved */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const Privacy = () => {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout title={siteConfig.title} description='Zorgeloos in de Cloud'>
            <header className={clsx('hero', styles.heroBanner)}>
                <div className='container'>
                    <h1 className='hero__title h1-gradient'>Privacy policy</h1>

                    <h3>What are cookies?</h3>
                    <p>
                        As is common practice with almost all professional websites this site uses
                        cookies, which are tiny files that are downloaded to your computer, to
                        improve your experience. This page describes what information they gather,
                        how we use it and why we sometimes need to store these cookies. We will also
                        share how you can prevent these cookies from being stored however this may
                        downgrade or 'break' certain elements of the sites functionality.
                    </p>

                    <h3>Which cookies do we use?</h3>
                    <ul>
                        <li>Site preferences cookies</li>
                    </ul>
                    <p>
                        In order to provide you with a great experience on this site we provide the
                        functionality to set your preferences for how this site runs when you use
                        it. In order to remember your preferences we need to set cookies so that
                        this information can be called whenever you interact with a page is affected
                        by your preferences.
                    </p>

                    <ul>
                        <li>Third-party cookies</li>
                    </ul>
                    <p>
                        Third party analytics are used to track and measure usage of this site so
                        that we can continue to produce engaging content. These cookies may track
                        things such as how long you spend on the site or pages you visit which helps
                        us to understand how we can improve the site for you.
                    </p>

                    <p>
                        Hopefully that has clarified things for you and as was previously mentioned
                        if there is something that you aren't sure whether you need or not it's
                        usually safer to leave cookies enabled in case it does interact with one of
                        the features you use on our site. For more general information on cookies,
                        please read the Cookies Policy article. However if you are still looking for
                        more information then you can contact us through one of our preferred
                        contact methods:
                    </p>
                    <ul>
                        <li>Email: privacy@xenial.cloud</li>
                    </ul>

                    <br />
                    <a href='/' className='button button--secondary'>
                        Back to home
                    </a>
                </div>
            </header>
        </Layout>
    );
};

export default Privacy;
