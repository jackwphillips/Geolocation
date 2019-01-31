({
    jsLoaded: function(component, event, helper) {
       let map = L.map('map', {zoomControl: false}).setView([37.784173, -122.401557], 14);
       L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
         {
               attribution: 'Tiles © Esri'
         }).addTo(map);
       component.set("v.map", map);
   },
   accountsLoaded: function(component, event, helper) {
      let map = component.get("v.map");
      let accounts = event.getParam("accounts");
      for (const account of accounts) {
          let latlng = [account.Location__Latitude__s, account.Location__Longitude__s];
          L.marker(latlng, {account: account}).addTo(map);
      }
   }
})