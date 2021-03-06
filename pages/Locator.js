import React from 'react';
import { Location } from "./../components";

const locationsData = [{
  id:"klm",
  location:"Kalamassery",
  zomatoUrl:"http://zoma.to/r/900400",
  address:"21/62 E Sheba Square, University Road, South Kalamassery, Kochi, Kerala 682022",
  mapUrl:"https://www.google.com/search?q=burger%20spot&rlz=1C5CHFA_enDE873DE873&oq=burgerspot&aqs=chrome..69i57j0i10i457j0i402j0i10j69i60l4.941j0j4&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1,lf_ui:9&tbm=lcl&rflfq=1&num=10&rldimm=8556233940458807975&lqi=CgtidXJnZXIgc3BvdEj_ru_G96qAgAhaIgoLYnVyZ2VyIHNwb3QQABABGAAYASILYnVyZ2VyIHNwb3SSARRoYW1idXJnZXJfcmVzdGF1cmFudA&phdesc=-FkJafWBrwI&ved=2ahUKEwib5rCVkZnvAhXaxzgGHcKmCvsQvS4wAHoECAQQLw&rlst=f#",
},{
  id:"kkd",
  location:"Kakkanad",
  zomatoUrl:"http://zoma.to/r/900589",
  address:"Seaport - Airport Rd, near Sunrise Hospital, Thrikkakara, Kakkanad, Kerala 682030",
  mapUrl:"https://www.google.com/search?q=burger%20spot&rlz=1C5CHFA_enDE873DE873&oq=burgerspot&aqs=chrome..69i57j0i10i457j0i402j0i10j69i60l4.941j0j4&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1,lf_ui:9&tbm=lcl&rflfq=1&num=10&rldimm=8556233940458807975&lqi=CgtidXJnZXIgc3BvdEj_ru_G96qAgAhaIgoLYnVyZ2VyIHNwb3QQABABGAAYASILYnVyZ2VyIHNwb3SSARRoYW1idXJnZXJfcmVzdGF1cmFudA&phdesc=-FkJafWBrwI&ved=2ahUKEwib5rCVkZnvAhXaxzgGHcKmCvsQvS4wAHoECAQQLw&rlst=f#",
},{
  id:"edp",
  location:"Edappally",
  zomatoUrl:"http://zoma.to/r/900565",
  address:"ECRA-8, Pallikadavu Rd, Ponekkara, Edappally, Kochi, Kerala 682024",
  mapUrl:"https://www.google.com/search?q=burger%20spot&rlz=1C5CHFA_enDE873DE873&oq=burgerspot&aqs=chrome..69i57j0i10i457j0i402j0i10j69i60l4.941j0j4&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1,lf_ui:9&tbm=lcl&rflfq=1&num=10&rldimm=8556233940458807975&lqi=CgtidXJnZXIgc3BvdEj_ru_G96qAgAhaIgoLYnVyZ2VyIHNwb3QQABABGAAYASILYnVyZ2VyIHNwb3SSARRoYW1idXJnZXJfcmVzdGF1cmFudA&phdesc=-FkJafWBrwI&ved=2ahUKEwib5rCVkZnvAhXaxzgGHcKmCvsQvS4wAHoECAQQLw&rlst=f#",
},{
  id:"pmly",
  location:"Panampilly Nagar",
  zomatoUrl:"http://zoma.to/r/19323490",
  address:"KV Nagar, Panampilly Nagar, Ernakulam, Kerala 682036",
  mapUrl:"https://www.google.com/search?q=burger%20spot&rlz=1C5CHFA_enDE873DE873&oq=burgerspot&aqs=chrome..69i57j0i10i457j0i402j0i10j69i60l4.941j0j4&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1,lf_ui:9&tbm=lcl&rflfq=1&num=10&rldimm=8556233940458807975&lqi=CgtidXJnZXIgc3BvdEj_ru_G96qAgAhaIgoLYnVyZ2VyIHNwb3QQABABGAAYASILYnVyZ2VyIHNwb3SSARRoYW1idXJnZXJfcmVzdGF1cmFudA&phdesc=-FkJafWBrwI&ved=2ahUKEwib5rCVkZnvAhXaxzgGHcKmCvsQvS4wAHoECAQQLw&rlst=f#",
}]


const Locator = () => {
  return <div className="locator">
    {locationsData.map((item)=>(
      <Location key={item.id} address={item.address} mapUrl={item.mapUrl} location={item.location} zomatoUrl={item.zomatoUrl} />
    ))}
  </div>
}

export default Locator;
