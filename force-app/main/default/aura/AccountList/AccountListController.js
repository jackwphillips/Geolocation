({
    doInit : function(component, event, helper) {
        console.log("Init for AccountList called.");
        let action = component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
