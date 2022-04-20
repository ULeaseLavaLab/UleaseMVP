<template>
    <div class = "message-page">
        <div class = "top-buttons">
            <div class="toggle-button">
                <v-btn
                normal
                raised
                dark
                color="#202ADF"
                
                @click=""
                >
                All messages 
                </v-btn>
            </div>
            <div class="toggle-button">
                <v-btn
                normal
                raised
                dark
                color="white"
                
                @click=""
                >
                <a class="t-s"> Group chats </a>
                </v-btn>

            </div>
            <div class="toggle-button">
                
            </div>
            <div class="toggle-button">

            </div>

        </div>
        <div class = "left-side"> 
            <div class = "message-box-first">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <a> Hey! I am interested in your property... </a>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <h5> Hey! I am interested in your property... </h5>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <h5> Hey! I am interested in your property... </h5>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <h5> Hey! I am interested in your property... </h5>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <h5> Hey! I am interested in your property... </h5>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <h5> Hey! I am interested in your property... </h5>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <h5> Hey! I am interested in your property... </h5>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot.jpeg" width = "70" height = "70" alt="">
                </div>
                <h5> Hey! I am interested in your property... </h5>
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
    .t-s 
    {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: white;
    }
    .toggle-button
    {
        position: relative;
        float: left;
        top: 30px;
        left: 45px;
        color: white;
        border-color: #DDDDDD;   
        border-radius: 20%;
        margin-left: 5px;
    }
    img {
        border-radius: 50%;
    }
    .left-message {
        text-align: center;
        margin: 10px 10px;
        border-radius: 95%;
        width: 200px;
        height: 60px;
        background: white;
        border-style: solid;
        border-color: #DDDDDD;
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
        top: 90px;
        left: 700px;
        position: absolute;
        
        height:650px;
        width: 50%;
        border: solid;
        border-width: thin;
        border-color:#DDDDDD;
    }
    .img-space {
        height:100px;
        width:100px;
        fill: aliceblue;
        border-radius: 50%;    
    }
    .left-side {
        position: absolute;
        float: left;
        top: 100px;
        width: 49.29%;
        height: 650px;
        border-style: solid;
        border-width: thin;
        border-color:#DDDDDD;
    }
    .message-box-first {
        margin: 0px 0px 0px 50px;
        width : 650px;
        height : 75px;
        text-align: center;
        border-style: solid;
        background: #202ADF;
        border-width: thin;
        border-color: #ebebeb; 
        color: white;
    }
    .message-box 
    {
        margin: 0px 0px 0px 50px;
        width : 650px;
        height : 75px;
        text-align: center;
        border-style: solid;
        border-width: thin;
        border-color: #ebebeb;
    }
    a {
        top: -72px;
        position: relative;
        color: white;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }
    h5 {
        top: -72px;
        position: relative;
        color: #717171; 
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }
</style>

<script>
export default {
    
}
</script>
