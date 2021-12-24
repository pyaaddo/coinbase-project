<template>
    <div class='main'>
        <div class='menu-items'>
        <ul>
            <li><span>></span> About</li>
            <li><span>></span> Affiliates</li>
            <li><span>></span> Blog</li>
        </ul>

        <ul>
            <li><span>></span> Careers</li>
            <li><span>></span> Support</li>
        </ul>


        <ul>
            <li>Learn all about coinbase</li>
            <li>We are building an open finanncial system for the world</li>
        </ul>
    </div>
    </div>
</template>


<script>
export default {
    name: 'Company'
}
</script>

<style scoped>
.main{
    margin-top: 250px;
    position: fixed;
    width: 100%;
    background: white;
    padding: 24px;
    border-bottom: 1px solid rgb(236, 239, 241);
    text-align: left;
}

.menu-items{
    display: flex;
    justify-content: center;
    gap: 64px;
    
}
li{
    margin-bottom: 16px;
    list-style-type: none;
    display: flex;
    gap: 10px;
    font-weight: 700;
}
ul:last-child li:last-child{
    max-width: 300px;
    font-weight: normal
}
</style>