

<template>
    <div class='main'>
        <div class="menu-items">
            <ul>
                <li> <div class="item"> <span>></span> <div><p class='head'>Connect</p> <p>Enable users to buy, sell and store crypto</p></div>  </div> </li>
                <li><div class="item"> <span>></span> <div><p class='head'>Commerce</p> <p>Accept crypto from anyone</p></div>  </div></li>
                <li><div class="item"> <span>></span> <div><p class='head'>Pro</p> <p>Programatically manage crypto</p></div>  </div></li>
            </ul>


             <ul>
                <li> <div class="item"> <span>></span> <div><p class='head'>Bison Rails</p> <p>Pioneering blockchain infrastructure</p></div>  </div> </li>
                <li><div class="item"> <span>></span> <div><p class='head'>WalletLink</p> <p>Link your DApp mobile wallets</p></div>  </div></li>
                <li><div class="item"> <span>></span> <div><p class='head'>Rosetta</p> <p>Integrate your blockchain everywhere</p></div>  </div></li>
            </ul>
        <ul>
            <li>Build with coinbase cloud</li>
            <li>Tools and APIs for developers building with crypto</li>
            <li class='last'>Explore with coinbase</li>
        </ul>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Developers'
}
</script>

<style scoped>
.main{
    margin-top: 350px;
    position: fixed;
    width: 100%;
    background: white;
    padding: 24px;
    padding-right: 100px;
    border-bottom: 1px solid rgb(236, 239, 241);
    text-align: left;
}

.menu-items{
    display: flex;
    justify-content: space-around;
    width: (100/3)%;
    
}

.item{
    display: flex;
    gap: 16px;
}
ul{
    list-style-type: none;
}
.head{
    font-weight: 500;
}
.circle{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 1px 1px rgba(0,0,0,0.4)
}
li{
    margin-bottom: 16px;
}
.last{
    color: rgb(0, 82, 255);
    font-weight: 500;
    font-size: 16px;
}
/* ul:last-child, li:nth-child(2){
    max-width: 300px;
} */
span{
    font-weight: 800;
}
</style>