import React from 'react'
import './Choose.css'

const Choose = () => {
    return (
        <div className='choose-container'>
            <h1 className='choose-heading'>WHY <span>CHOOSE US</span></h1>
            <div className='choose-col-outer'>
                {/* <div className='choose-col'> */}
                <div className='choose-body'>
                    <div className='icon'>
                        <i class='bx bxs-wallet ic'></i></div>
                    <h3>CONNECT YOUR WALLET</h3>

                    <p>Use Trust Wallet, Metamast or to connect to the app.</p>
                </div>


                <div className='choose-body'>
                    <div className='icon'>
                        <i class='bx bx-select-multiple'></i></div>
                    <h3>SELECT YOUR QUANTITY</h3>
                    <p>Upload your crypto and set a title description and price.</p>
                </div>
                {/* </div> */}


                <div className='choose-body'>
                    <div className='icon'>
                        <i class='bx bxs-credit-card'></i></div>
                    <h3>CONFIRM TRANSACTION</h3>
                    <p>Earn by selling your ccrypto on our marketplace.</p>
                </div>
            </div>

            <img src={process.env.PUBLIC_URL + '/bit-img.png'} />
            <div className='choose-col-outer'>

                <div className='choose-body'>
                    <div className='icon'>
                        <i class='bx bxs-crown'></i></div>
                    <h3>RECEIVE YOUR OWN NFTS</h3>
                    <p>Invest all your crypto at one place on one platform.</p>
                </div>


                <div className='choose-body'>
                    <div className='icon'>
                        <i class='bx bxs-store-alt'></i></div>
                    <h3>TAKE A MARKET TO SELL</h3>
                    <p>Discover, collect right crypto collection to buy or sell.</p>
                </div>



                <div className='choose-body'>
                    <div className='icon'>
                        <i class='bx bx-collection' ></i></div>
                    <h3>DRIVE YOUR COLLECTION</h3>
                    <p>We make it easy to Discover, Invest and Manage.</p>
                </div>
            </div>
        </div>
    )
}

export default Choose