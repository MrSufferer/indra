import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ThirdwebProvider } from 'thirdweb/react';

import Home from './pages/Home';
import WalletAddress from './pages/WalletAddress';
import PayPalEmail from './pages/PayPalEmail';
import ContinueOne from './pages/ContinueOne';
import EnterAmount from './pages/EnterAmount';
import Review from './pages/Review';
import ConfirmPayment from './pages/ConfirmPayment';
import Successful from './pages/Successful';
import Checkout from './pages/Checkout';
import Test from './pages/Test';
import Connect from './pages/Connect';
import PayPal from './pages/PayPal';
import Receiver from './pages/Receiver';
import Amount from './pages/Amount';
import Success from './pages/Success';
import MayanWidget from './pages/MayanWidget';
function App() {
    return (
        <ThirdwebProvider>
            <Router>
                <Routes>
                    <Route path="/connect" element={<Connect />} />
                    <Route path="/paypal" element={<PayPal />} />
                    <Route path="/receiver" element={<Receiver />} />
                    <Route path="/amount" element={<Amount />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/success" element={<Success />} />

                    <Route path="/" element={<Home />} />
                    <Route path="/walletaddress" element={<WalletAddress />} />
                    <Route path="/paypalemail" element={<PayPalEmail />} />
                    <Route path="/continue-one" element={<ContinueOne />} />
                    <Route path="/enteramount" element={<EnterAmount />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/confirm" element={<ConfirmPayment />} />
                    <Route path="/successful" element={<Successful />} />

                    <Route path="/widget" element={<MayanWidget />} />
                </Routes>
            </Router>
        </ThirdwebProvider>
    );
}

export default App;
