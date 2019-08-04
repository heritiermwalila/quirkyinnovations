import React from 'react'
import Page from '../hoc/Page';
import PageHead from '../utils/page-head';

const Home = (props)=>(
    <Page>
         <PageHead title="Web and mobile development" canonical="/contact-us" description=""/>
        <div className="home-banner">
            <h1>Innovating the future</h1>
            <p>We know that the digital world can be pretty intimidating.</p>
        </div>
    </Page>
)

export default Home