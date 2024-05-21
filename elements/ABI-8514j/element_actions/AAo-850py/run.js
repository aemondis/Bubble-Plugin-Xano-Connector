function(instance, properties, context) {
    
    let data = instance.data,
        publish = instance.publishState,
        trigger = instance.triggerEvent;
   	    
    // Post to the signup endpoint
    
    let body = {
        
        'email': properties.email,
        'password': properties.password,
        'name_first': properties.name_first,
        'name_last': properties.name_last
        
    }
    
    window.xanoSignUserUp(body);

}