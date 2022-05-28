public class WF_Free_Usage_LWC_Controller {
    @AuraEnabled
    public static List<WF_Free_Usage__c> getRecords(Id accountId) {
        return [SELECT Id, Name, Account__c, Contract_No__c, Hour__c, Request_free_usage_day__c
                FROM WF_Free_Usage__c 
                WHERE Account__c =:accountId];
    }
}