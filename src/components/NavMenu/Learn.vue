<template>
<div class='menu'>
<div class="menuitems">
    <ul>
        <li><span>></span> Tips and Tutorials</li>
        <li><span>></span> Crypto basics</li>
        <li><span>></span> Market Updates</li>
    </ul>

    <ul>
        <li><span>></span> Crypto questions answered</li>
        <li><span>></span> Guides and explains for your Crypto Questions</li>
        <li><span>></span> Market Updates</li>
        <li> <a href="" id='articles'>See all articles</a> </li>
    </ul>
</div>
</div>
    
</template>

<script>
export default {
    name: 'Learnmenu'
}
</script>

<style scoped>
.menu{
    margin-top: 300px;
    position: fixed;
    width: 100%;
    background: white;
    text-align: left;
}
.menuitems{
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 20px 0;
    border-bottom: 1px solid rgb(236, 239, 241);
}
ul{
    list-style-type: none;
}
li{
    font-weight: 500;
    margin-bottom: 20px;
}
span{
    font-weight: 700;
    
}
ul:nth-child(2) li:nth-child(2), ul:nth-child(2) li:nth-child(3){
    font-weight: normal;
}
.guides{
    width: 20%;
}
#articles{
    color: rgb(0, 82, 255)
}
</style>