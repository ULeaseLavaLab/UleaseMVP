<template>
    <div class = "message-page">
        <div class = "left-side"> 
            <div class = "message-box-first">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "94" height = "94" alt="">>
                </div>
                <a> Hey! I am interested in your property... </a>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "94" height = "94" alt="">>
                </div>
                <a> Hey! I am interested in your property... </a>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "94" height = "94" alt="">>
                </div>
                <a> Hey! I am interested in your property... </a>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "94" height = "94" alt="">>
                </div>
                <a> Hey! I am interested in your property... </a>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "94" height = "94" alt="">>
                </div>
                <a> Hey! I am interested in your property... </a>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "94" height = "94" alt="">>
                </div>
                <a> Hey! I am interested in your property... </a>
            </div>
        </div>
        <div class = "right-side">
            <div class="right-message">
            </div>
            <br> <br> <br>
            <div class="left-message"> 
            </div>
            <div class="left-message"> 
            </div>
            <div class="left-message"> 
            </div>
            <br> <br> <br>
            <div class="right-message">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .left-message {
        text-align: center;
        margin: 10px 10px;
        border-radius: 95%;
        width: 200px;
        height: 60px;
        background: white;
        border-style: solid;
        border-color: blue;;
        color: blue;
        font-size: 10px; 
    }
    .right-message {
        text-align: center;
        margin: 10px 10px 10px 0px;
        border-radius: 95%;
        width: 200px;
        height: 60px;
        background: blue;
        color: white;
        float: right;
        font-size: 10px;
    }
    .right-side {
        margin: 10px 10px 0px 0px;
        float: right;
        height:650px;
        width: 50%;
        border: solid;
        border-width: thin;
    }
    .img-space {
        height:100px;
        width:100px;
        
        border: solid;
        fill: aliceblue;
    }
    .left-side {
        float: left;
        width: 45%;
        height: 100%;
    }
    .message-box-first {
        margin: 10px 0px 0px 50px;
        width : 625px;
        height : 100px;
        text-align: center;
        border-style: solid;
        background: lightblue;
        border-width: thin;
        border-color: black; 
    }
    .message-box 
    {
        margin: 10px 0px 0px 50px;
        width : 625px;
        height : 100px;
        text-align: center;
        border-style: solid;
        
        border-width: thin;
        border-color: black;
    }
    a {
        top: -60px;
        position: relative;
        color: black;
    }
</style>

<script>
export default {
    
}
</script>
