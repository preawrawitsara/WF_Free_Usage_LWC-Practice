import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { subscribe, unsubscribe, onError } from 'lightning/empApi';
 
export default class Lwc_WF_Free_Usage extends NavigationMixin(LightningElement) { 

    // variable declaration
 
    subscription = {};
    CHANNEL_NAME = 'Your platform event name';
 
    connectedCallback() {
        subscribe(this.CHANNEL_NAME, -1, this.refreshList).then(response => {
            this.subscription = response;
        });
        onError(error => {
            console.error('Server Error--->'+error);
        });
    }
    refreshList = ()=> {
        // Your imperative method
    }
 
    getRecords(){
        getRecords()
        .then(result => {
            //  Your code
        })
        .catch(error => {
            // Your code
        });
    }

    handleNew() {
        // Your code
    }

    handleEdit() {
        // Your code
    }

    handleDelete() {
        //  Your code
    }
 
    disconnectedCallback() {
        unsubscribe(this.subscription, () => {
            console.log('Unsubscribed Channel');
        });
    }
}

