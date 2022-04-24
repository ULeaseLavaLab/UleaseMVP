<template>
    <div class = "message-page">
        <div class = "top-buttons">
            <div class="toggle-button">
                <v-btn
                normal
                raised
                dark
                color="#202ADF"
                rounded
                @click=""
                >
                All messages 
                </v-btn>
            </div>
            <div class="toggle-button">
                <v-btn
                normal
                raised
                color="white"
                rounded
                @click=""
                >
                Group chats 
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
                    <img src="../assets/gateway.png" width = "62" height = "62" alt="">
                </div>
                 <div class = "name-tag-f"> 
                   University Gateway 
                </div>
                <a> Okay, thank you! I will let you know any further questions. </a>
                <div class = "first-button"> 
                    Just now
                    <v-btn
                    color="#ebebee"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot2.jpg" width = "62" height = "62" alt="">
                </div>
                 <div class = "name-tag"> 
                   Winston Tilton 
                </div>
                <h5> Hi, thanks for your interest! Yes, my place is still available to sublease if you are still looking at options! </h5>
                <div class = "expand-button"> 
                    5:53 PM
                    <v-btn
                    color="#717171"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot3.png" width = "62" height = "62" alt="">
                </div>
                <div class="unread"> </div>
                 <div class = "name-tag"> 
                   Sally Jade 
                </div>
                <h5> Thanks for reaching out! Sorry, I already found someone to sublease my place but I can connect you with my friend who's still looking for someone to room with their r... </h5>
                <div class = "expand-button"> 
                    4:24 PM
                    <v-btn
                    color="#717171"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot4.png" width = "62" height = "62" alt="">
                </div>
                <div class="unread"> </div>
                 <div class = "name-tag"> 
                   Frank Singh 
                </div>
                <h5> Yes, it's still available and it's a great place to stay for the summer, the location is right on Ellendale street so it's close to campus. Let me know if you have any ques... </h5>
                <div class = "expand-button"> 
                    1:08 PM
                    <v-btn
                    color="#717171"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot5.png" width = "62" height = "62" alt="">
                </div>
                 <div class = "name-tag"> 
                   Alice Rion
                </div>
                <h5> Hey! I saw that you were subleasing your place for summer 2022 and I was interested in your listing. Are you still looking for someone to sublease and will it b... </h5>
                <div class = "expand-button"> 
                    Yesterday
                    <v-btn
                    color="#717171"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot6.png" width = "62" height = "62" alt="">
                </div>
                 <div class = "name-tag"> 
                   Kelly Lopez
                </div>
                <h5> Is your place still available for a Summer 2022 sublease? </h5>
                <div class = "expand-button"> 
                    Yesterday
                    <v-btn
                    color="#717171"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot7.png" width = "62" height = "62" alt="">
                </div>
                 <div class = "name-tag"> 
                   Sam Trion 
                </div>
                <h5> Is your place still available for a Summer 2022 sublease? </h5>
                <div class = "expand-button"> 
                    Wednesday
                    <v-btn
                    color="#717171"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class = "message-box">
                <div class="img-space"> 
                    <img src="../assets/headshot8.png" width = "62" height = "62" alt="">
                </div>
                <div class = "name-tag"> 
                   AJ Walker 
                </div>
                <h5> Is your place still available for a Summer 2022 sublease? </h5>
                <div class = "expand-button"> 
                    Wednesday
                    <v-btn
                    color="#717171"
                    icon
                    @click=""
                    >
                    <v-icon>mdi-greater-than</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <div class = "right-side">
            <div class="contact-bar"> 
                <div class="upper-img-space">
                    <img src = "../assets/gateway.png" width = "52" height="52" alt = "gateway">
                </div>
                <div class = "te"> University Gateway </div>
                <div class = "ts"> Housing Company  </div>
                <div class = "tr"> Usually Responds in a Few Hours  </div>
            </div>
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

            <div class="messaging-side">
                <v-col sm="12" md = "12" cols = "12" class="text-box">
                    <v-text-field
                    label="Write a message..."
                    prefix=""
                    required
                    outlined
                    ></v-text-field>
                </v-col>
                <v-btn icon click="" class="add-ons"> <v-icon> mdi-image </v-icon> </v-btn>
                <v-btn icon click="" class="add-ons"> <v-icon> mdi-attachment </v-icon> </v-btn>
                <v-btn icon click="" class="add-ons"> <v-icon> mdi-link </v-icon> </v-btn>

                <v-btn
                normal
                raised
                dark
                color="#202ADF"
                class="send"
                @click=""
                >
                Send 
                </v-btn>
            </div>

        </div>
    </div>

</template>

<style scoped>
    .contact-bar
    {
        position: relative;
        top: -68px;
        left:32px;
        border-style: solid;
        border-width: thin;
        border-color: #ebebeb;
        margin: 0px 0px 5px;
        width: 638px;
        height: 67px;
        
    }
    .t-s 
    {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 100;
        color: #ebebeb;
    }
    .te {
        font-family: 'Poppins';
        font-size: 14.5px;
        color: #222;;
        font-weight: 500;
        position: relative;
        top: -70px;
        left: 75px;
    }
    .ts {
        font-family: 'Inter';
        color: #717171;
        font-size: 12px;
        font-weight: 100;
        position: relative;
        top: -70px;
        left: 76px;
    }
    .tr {
        font-family: 'Inter';
        color: #717171;;
        font-size: 12px;
        font-weight: 100;
        position: relative;
        top: -87px;
        left: 436px;
    }
    .toggle-button
    {
        position: relative;
        float: left;
        top: 30px;
        left: 45px;
        color: #ebebeb;
        border-color: #DDDDDD;   
        border-radius: 20%;
        margin-left: 5px;
    }
    img {
        border-radius: 50%;
    }
    .left-message {
        text-align: center;
        margin: 10px 50px;
        border-radius: 95%;
        width: 200px;
        height: 60px;
        background: #ebebeb;
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
        
        height:762px;
        width: 670px;
        border: solid;
        border-width: thin;
        border-color:#DDDDDD;
        border-left-style: none;
        
    }
    .img-space {
        height:62px;
        width:62px;
        fill: aliceblue;
        border-radius: 50%;   
        position: relative;
        left: 20px;
        top: 14px; 
    }
    .left-side {
        position: absolute;
        float: left;
        top: 100px;
        width: 682px;
        height: 762px;
        border-style: solid;
        border-width: thin;
        border-right: none;
        border-top: none;
    }
    .message-box-first {
        margin: 0px 0px 0px 50px;
        width : 682px;
        height : 95px;
        text-align: center;
        border-style: solid;
        background: #202ADF;
        border-width: thin;
        border-color: #ebebeb; 
        color: white;
        border-right-style: none;
        box-shadow: 2px 0px #DDDDDD;

    }
    .message-box 
    {
        margin: 0px 0px 0px 50px;
        width : 682px;
        height : 95px;
        text-align: center;
        border-style: solid;
        border-width: thin;
        border-color: #ebebeb;
        box-shadow: 1px 0px #DDDDDD;
    }
    .name-tag {
        font-family: 'Poppins';
        font-size: 14.5px;
        color: #222;
        font-weight: 500;
        position: relative;
        top: -50px;
        left: 100px;
        text-align: left;
    }
    .name-tag-f {
        font-family: 'Poppins';
        font-size: 14.5px;
        color: white;
        font-weight: 500;
        position: relative;
        top: -50px;
        left: -170px;
    }
    a {
        left: -50px;
        top: -47px;
        position: relative;
        color: white;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 200;
        width: 700px;
    }
    h5 {
        width: 557px;
        height: 37px;
        top: -50px;
        left: 100px;
        position: relative;
        color: #717171; 
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 200;
        text-align: left;
    }
    .upper-img-space
    {
        position: relative;
        margin: 5px 10px 20px 15px;
    }
    .unread{
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: #202ADF;
        position: relative;
        float: right;
        left: -665px;
        top: -23px; 
    }
    .expand-button
    {
        position: relative;
        color: #717171; 
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 200;
        text-align: right;
        top: -115px;
    }
    .first-button{
        position: relative;
        color: #ebebee; 
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 200;
        text-align: right;
        top: -105px;
    }
    .messaging-side
    {
        width: 638px;
        height: 179px;
        border: solid;
        position: relative;
        top: 144px;
        left:32px;
        border-style: solid;
        border-width: thin;
        border-color: #ebebeb;
    }
    /deep/ .v-text-field
    {
        border-color: #ebebeb;
        width: 600px;
        height: 21px; 
        top: -60px;
    }
        .add-ons
    {
        top:-30px;
        left: 4px;
    }
    .send {
        width: 123px;
        height: 34px;
        float: right;
        right: 22px;
        top: -10px;
        color: #ebebee; 
    }
    /deep/ .v-btn
    {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 200;
    }
    $rounded: (
        null: $border-radius-root / 3
    );
</style>

<script>
export default {
    
}
</script>
