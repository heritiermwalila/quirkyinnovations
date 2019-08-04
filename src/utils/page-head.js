import React from 'react'
import {Helmet} from 'react-helmet'
const PageHead = (props)=>(

    <Helmet>
        <title>{props.title}</title>
        <link rel="canonical"  href={props.canonical}/>
        <meta name="description" content={props.description} />
    </Helmet>
)

export default PageHead