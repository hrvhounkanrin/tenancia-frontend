<template>
    <div class="modal fade" id="share-quittance" tabindex="-1" role="dialog" aria-labelledby="share-quittance" aria-hidden="true"  v-show="value">
        <div class="modal-dialog" role="document">
            <div class="modal-content col-12">
                <div class="modal-header">
                    <h5 class="modal-title">Share</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body">
                    <div class="icon-container1 d-flex">
                        <!--<div class="smd"> 
                            <font-awesome-icon icon="twitter" style="color:#4c6ef5;background-color: aliceblue"/>
                            <p>Twitter</p>
                        </div>
                        <div class="smd"> 
                            <font-awesome-icon icon="facebook-messenger"  style="color: #3b5998;background-color: #eceff5;" />
                            <p>Messenger</p>
                        </div>
                            <div class="smd"> 
                            <font-awesome-icon icon="whatsapp"  style="color: #25D366;background-color: #cef5dc;" />
                            <p>whatsapp</p>
                        </div>-->
                    
                    </div>
                    <div class="icon-container1 d-flex">
                        <!--<div class="smd"> 
                            <font-awesome-icon icon="twitter" style="color:#4c6ef5;background-color: aliceblue"/>
                            <p>Twitter</p>
                        </div>
                        <div class="smd"> 
                            <font-awesome-icon icon="facebook-messenger"  style="color: #3b5998;background-color: #eceff5;" />
                            <p>Messenger</p>
                        </div>
                            <div class="smd"> 
                            <font-awesome-icon icon="whatsapp"  style="color: #25D366;background-color: #cef5dc;" />
                            <p>whatsapp</p>
                        </div>-->
                    
                    </div>
                </div>
                <div class="modal-footer"> 
                    <label style="font-weight: 600">Page Link <span class="message"></span></label><br />
                    <div class="row"> 
                        <input class="col-10 ur" type="url" placeholder="https://www.arcardio.app/acodyseyy" id="myInput" aria-describedby="inputGroup-sizing-default" style="height: 40px;"> 
                        <button class="cpy" ><font-awesome-icon icon="copy" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

export default {
  name: 'ShareQuittance',
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
   props: {
        value: {
            required: true
        }
    },
        methods: {
        close() {
            this.$emit("input", !this.value);
        }            
    }
}
</script>

<style>
body {
    background-color: #F57F17
}

.mt-100 {
    margin-top: 100px
}

.modal {
    background-image: linear-gradient(rgb(35, 79, 71) 0%, rgb(36, 121, 106) 100.2%)
}

.modal-title {
    font-weight: 900
}

.modal-content {
    border-radius: 13px
}

.modal-body {
    color: #3b3b3b
}

.img-thumbnail {
    border-radius: 33px;
    width: 61px;
    height: 61px
}

.fab:before {
    position: relative;
    top: 13px
}

.smd {
    width: 200px;
    font-size: small;
    text-align: center
}

.modal-footer {
    display: block
}

.ur {
    border: none;
    background-color: #e6e2e2;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px
}

.cpy {
    border: none;
    background-color: #e6e2e2;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer
}

button.focus,
button:focus {
    outline: 0;
    box-shadow: none !important
}

.ur.focus,
.ur:focus {
    outline: 0;
    box-shadow: none !important
}

.message {
    font-size: 11px;
    color: #ee5535
}
</style>