/* eslint-disable import/no-unresolved */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import ApplicationCard from '../components/ApplicationCard';

const applications = [
    {
        title: 'Microsoft Azure',
        description: 'Information about Azure, DevOps, PowerShell and more.',
        buttonText: 'Read more',
        linkTo: '/azure',
    },
    {
        title: '.NET',
        description: 'Programming blogs about C# and the .NET (Core) framework.',
        linkTo: '/dotnet',
    },
    {
        title: 'Web',
        description: 'Blogs about web development and frameworks.',
        linkTo: '/macos',
    },
    {
        title: 'Miscellaneous',
        description: "Guides and how-to's that do not fit into a category.",
        linkTo: '/other',
    },
];

const Home = () => {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout title={siteConfig.title} description='tfisicaro.dev'>
            <header className={clsx('hero', styles.heroBanner)}>
                <div className='container'>
                    <h1 className='hero__title h1-gradient'>{siteConfig.title}</h1>
                    <p className='hero__subtitle'>{siteConfig.tagline}</p>
                    <h2>About me 👋</h2>
                    <p>
                        Hi, My name is Tim Fisicaro. I love to program and thinker with hardware. On
                        this blog I will publish guides and some of the interestings things that I
                        work with.
                    </p>

                    <a href='/blog' className='button button--primary'>
                        See my recent blogs
                    </a>
                </div>
            </header>
            <main>
                <section>
                    {applications?.length > 0 && (
                        <section className={styles.applications}>
                            <div className='container'>
                                <div className='row'>
                                    {applications.map((props, idx) => (
                                        <ApplicationCard key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </section>
            </main>
        </Layout>
    );
};

export default Home;
