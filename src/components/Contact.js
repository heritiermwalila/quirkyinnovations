import React from 'react'
import Page from '../hoc/Page';
import {Helmet} from 'react-helmet'

const Contact = (props)=>(
    <Page>
        <Helmet>
                <title>Contact us | quirky innovations</title>
                <link rel="canonical" href="/contact-us" />
        </Helmet>
        <h1>Contact us</h1>
    </Page>
)

export default Contact