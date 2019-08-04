import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = (props)=>(
    <div className="page page-container">
        <Header />
            <div className="container page__content">
                {props.children}
            </div>
        <Footer />
        
    </div>
)


export default Page