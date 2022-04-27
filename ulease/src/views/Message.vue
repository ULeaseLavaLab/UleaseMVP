<template>
    <div class="pa-4">
        <div class="d-flex justify-center">
            <div class="d-flex flex-column">
                <div class="top-section d-flex align-center">
                    <v-btn
                        class="c-blue t-button-text rounded-lg mr-1 py-5"
                        normal
                        outlined
                        dark
                        color="white"
                    >All messages </v-btn>
                    <v-btn
                        class="t-button-text rounded-lg py-5"
                        normal
                        outlined
                        color="var(--gainsboro)"
                    ><span class="c-black-text">Group chats</span></v-btn>

                    <v-spacer />

                    <Selector 
                        btn-class="mr-1 py-5"
                        value="Fall 2022"
                        outlined
                        dropdown-icon
                    />
                    <Selector 
                        btn-class="mr-2 py-5"
                        value="Lease"
                        outlined
                        dropdown-icon
                    />
                </div>
                <div class="" style="">
                    <div style="overflow-y: scroll; overflow-x: hidden; height: calc(100vh - 90px - 64px - 40px);"> 
                        <div class = "message-box-first">
                            <div class="img-space"> 
                                <img src="../assets/gateway.png" width = "62" height = "62" alt="">
                            </div>
                            <div class = "name-tag-f"> 
                            University Gateway 
                            </div>
                            <a> Okay, thank you! I will let you know any further questions about the contract. </a>
                            <div class = "first-button"> 
                                Just now
                                <v-btn
                                color="#ebebee"
                                icon
                                >
                                <v-icon>mdi-chevron-right</v-icon>
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
                                >
                                <v-icon>mdi-chevron-right</v-icon>
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
                                >
                                <v-icon>mdi-chevron-right</v-icon>
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
                                >
                                <v-icon>mdi-chevron-right</v-icon>
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
                                >
                                <v-icon>mdi-chevron-right</v-icon>
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
                                >
                                <v-icon>mdi-chevron-right</v-icon>
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
                                >
                                <v-icon>mdi-chevron-right</v-icon>
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
                                >
                                <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column">
                <div class="top-section contact-bar d-flex align-center py-2 px-4" style="column-gap: 10px;"> 
                    <img src = "../assets/gateway.png" width = "52" height="52" alt = "gateway">
                    <div class="flex">
                        <div class = "te"> University Gateway </div>
                        <div class="d-flex">
                            <div class = "ts"> Housing Company  </div>
                            <v-spacer />
                            <div class = "tr"> Usually responds in a few hours </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column flex">
                    <v-spacer />
                    <div class="pa-4" style="width: 682px;">
                        <div class="d-flex">
                            <v-spacer />
                            <div class="msg-bubble t-body rounded-xl c-blue white--text px-4 py-2 mb-1">
                                I am interested in the 2 bed 2 bath unit for an annual lease starting Fall 2022!
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="msg-bubble t-body rounded-xl c-platinum px-4 py-2 mb-1">
                                I am interested in the 2 bed 2 bath unit for an annual lease starting Fall 2022!
                            </div>
                            <v-spacer />
                        </div>
                        <div class="d-flex">
                            <div class="msg-bubble t-body rounded-xl c-platinum px-4 py-2 mb-1">
                                <div class="d-flex">
                                    <div>
                                        <div class="docusign">DocuSign</div>
                                        <div class="t-small c-silver-text"> app.docusign.com </div>
                                    </div>
                                    <v-spacer />
                                    <img src = "../assets/docusign.png" width = "42" height="42" style="border-radius: unset;" class="rounded-lg">
                                </div>
                            </div>
                            <v-spacer />
                        </div>
                        <div class="d-flex">
                            <v-spacer />
                            <div class="msg-bubble t-body rounded-xl c-blue white--text px-4 py-2 mb-1">
                                Okay, thank you! I will let you know any further questions about the contract.
                            </div>
                        </div>
                    </div>
                </div>

                <!--<div class="flex">
                    <div class="box">
                        <div class="left-center">
                            <div class="dialog-1" style="text-align: left;">
                                <div class="left-point"></div>
                                Hello, thank you for your interest! Please take a look at the leasing document below.
                            </div>
                            <div class="dialog-3" >
                                <div class="left-point"></div>
                                <div class="bolded">DocuSign</div>
                                <div class = "undertext"> app.docusign.com </div>
                                <img src = "../assets/docusign.png" width = "42" height="42" alt = "gateway" class="docimg">
                            </div>
                        <div class="right-center">
                            <div class="dialog-2" style="text-align: left;">
                                <div class="right-point"></div>
                                I am interested in the 2 bed 2 bath unit for an annual lease starting Fall 2022!
                            </div>
                            <div class="dialog-4" style="text-align: left;">
                                <div class="right-point"></div>
                                Okay, thank you! I will let you know any further questions about the contract.
                            </div>
                        </div>
                        </div>
                    </div>  
                </div>-->

                <div class="messaging-side pa-4">
                    <v-text-field
                        class="mb-2"
                        label="Write a message..."
                        prefix=""
                        required
                        outlined
                        hide-details
                        dense
                    ></v-text-field>
                    <div class="d-flex">
                        <v-btn icon> <v-icon> mdi-image </v-icon> </v-btn>
                        <v-btn icon> <v-icon> mdi-attachment </v-icon> </v-btn>
                        <v-btn icon> <v-icon> mdi-link </v-icon> </v-btn>

                        <v-spacer />

                        <v-btn
                            style="width: 100px;"
                            normal
                            raised
                            dark
                            color="var(--blue)"
                            class="t-button-text"
                        >
                        Send 
                        </v-btn>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
    .msg-bubble {
        width: 270px;
    }
    .docusign {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 600;
    }
    .top-section {
        height: 64px;
    }
    .contact-bar
    {
        border-style: solid;
        border-width: thin;
        border-color: #ebebeb;
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
    }
    .ts {
        font-family: 'Inter';
        color: #717171;
        font-size: 12px;
        font-weight: 100;
    }
    .tr {
        font-family: 'Inter';
        color: #717171;;
        font-size: 12px;
        font-weight: 100;
    }
    .toggle-button
    {
        color: #ebebeb;
        border-color: #DDDDDD;   
        border-radius: 20%;
        margin-left: 5px;
    }
    img {
        border-radius: 50%;
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
    .message-box-first {
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
        left: 12px;
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
        border: solid;
        border-style: solid;
        border-width: thin;
        border-color: #ebebeb;
    }

    .box{
        margin: 0 auto;
        width: 580px;
        height: 340px;
        position: relative;
        display:block;
        color: #ebebeb; 
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        text-align: center;
    }

    .left-center{
    	margin: 40px 0px 50px 20px;
        float:left;
    }

    .right-center{
        margin: 0px 20px 50px 0px;
        float: right;
    }

    .dialog-1{
  	height: 20%;
  	width: 40%;
  	background-color: #EBEBEB;
  	position: absolute;
  	border-radius: 10%;
    left: 0;
    color: #222;
    margin-top: 120px;
    margin-left: 20px;
    
    }


    .dialog-2{
  	height: 20%;
  	width: 40%;
  	background-color: #202ADF;
  	position: absolute;
  	border-radius: 10%;
  	right: 0;
    }
    .dialog-4{
  	height: 20%;
  	width: 40%;
  	background-color: #202ADF;
  	position: absolute;
  	border-radius: 10%;
  	right: 0;
    margin-top: 295px;
    
    }
    .dialog-3
    {
    height: 20%;
  	width: 40%;
  	background-color: #EBEBEB;
  	position: absolute;
  	border-radius: 10%;
    left: 0;
    color: #222;
    margin-top: 195px;
    margin-left: 20px; 
    text-align: left;
    }

    
    .bolded {
        font-weight: bold;
        font-size: 20px;
        position: absolute;
        left: 10px;
    }
    .undertext
    {
        font-weight: italic;
        color: #717171;
        left: 10px;
        top: 40px;
        position: absolute;
    }
    .docimg {
        left: 180px;
        top: 13px;
        border-radius: 0%;
        position: absolute;
        
    }
</style>

<script>
import Selector from '@/components/Selector'
export default {
    name: 'Message',

    components: {
        Selector,
    },
}
</script>
