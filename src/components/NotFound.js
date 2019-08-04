import React from 'react'
import Page from '../hoc/Page'
import {Helmet} from 'react-helmet'

const NotFound = ()=>(
    <Page>
        <Helmet>
                <title>Page not found| quirky innovations</title>
                <link rel="canonical" href="/contact-us" />
        </Helmet>
        <h1>Page not found</h1>
    </Page>
)


export default NotFound