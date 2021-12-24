<template>
    <div id='main'>
        <div class="footer-contents">

            <div class="items1">
                <div class="logo"><img src="../assets/Coinbase.svg" alt=""></div>
                <select name="languages" id="language">
                    <option value="English">English</option>
                    <option value="French">French</option>
                </select>

                <div class="copyright">© 2021 Coinbase</div>

                <ol class='blogs'>
                    <li>Blog</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ol>
            </div>


            <div class="items2">
                <ul>
                    <li>Company</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>Investors</li>
                    <li>Legal & privacy</li>
                    <li>Cookie Policy</li>
                    <li>Cookie Preferences</li>
                </ul>

                <ul>
                    <li>Learn</li>
                    <li>Browse crypto prices</li>
                    <li>Coinbase Bytes newsletter</li>
                    <li>Crypto basics</li>
                    <li>Tips and tutorials</li>
                    <li>Market Updates</li>
                    <li>What is Bitcoin?</li>
                    <li>What is Crypto?</li>
                    <li>What is Blockchain?</li>
                    <li>How to set up a Crypto wallet</li>
                    <li>How to send taxes</li>
                </ul>

            </div>

            <div class="items3">
                <ul>
                    <li>Individuals</li>
                    <li>buy & sell</li>
                    <li>Earn free crypto</li>
                    <li>Wallet</li>
                    <li>Card</li>
                </ul>


                <ul>
                    <li>Businesses</li>
                    <li>Prime</li>
                    <li>Custody</li>
                    <li>asset hub</li>
                    <li>commerce</li>
                </ul>

                <ul>
                    <li>Developers</li>
                    <li>Coinbase cloud</li>
                    <li>connect</li>
                    <li>commerce</li>
                    <li>pro</li>
                    <li>bison trails</li>
                    <li>walletLink</li>
                    <li>Roseta</li>
                    <li>USDC</li>
                </ul>
            </div>

        <div class="items4">
            <ul>
                <li>support</li>
                <li>help center</li>
                <li>contact us</li>
                <li>create account</li>
                <li>ID verification</li>
                <li>Account information</li>
                <li>payment methods</li>
                <li>Account access</li>
                <li>Supported crypto</li>
                <li>supported countries</li>
                <li>status</li>
            </ul>
        </div>

        </div>
    </div>
</template>


<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

.main {
    width: 100%;
}


.footer-contents{
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
  
}

.logo img {
   text-align: center;
    height: 20px;
    width: 112px;
    margin-bottom: 20px;
}

#language{
    padding: 4px;
    border-radius: 4px;
    border: 1px solid gray;
    width: 15vw;
}
.copyright{
    font-size: 16px;
    opacity: 0.7;
    margin-top: 16px;
}
ol{
    display: flex;
    margin-top: 16px;
    font-size: 16px;
    opacity: 0.7;
    font-weight: 400;
}
ol li:first-child{
    list-style-type: none;
}
ol li:nth-child(2), ol li:last-child{
    list-style-type: disc;
}
ol li{
    margin-right: 30px;
}
ul{
    margin-bottom: 32px;
    list-style-type: none;
    text-transform: capitalize;
}
li{
    margin-bottom: 8px;
    text-align: left;
}
ul li:first-child{
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 16px;
    color: rgba(17, 51, 85, 1);
    opacity: 1
}
ul{
    margin-top: 24px;
        font-size: 16px;
    line-height: 1.3;
    
    color: rgba(17, 51, 85, 0.7);
  
    max-width: 200px;
}
</style>