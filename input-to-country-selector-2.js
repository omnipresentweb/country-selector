function updateHSCountryInputToSelect(){const a=document.querySelector('input[name="country"]');if(!a)return void console.error("Input element not found.");const n=a.parentElement,e=document.createElement("select");e.name="country";const i=["United Kingdom","United States","Canada","Åland","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Bermuda","Belgium","Belize","Benin","Bhutan","Bonaire","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Virgin Islands","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos [Keeling] Islands","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Finland","Fiji","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guinea Conakry","Guernsey","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Mali","Malta","Macao","Maldives","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Micronesia","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar [Burma]","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","North Macedonia","Northern Mariana Islands","Norway","Oman","Palau","Palestine","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Réunion","Romania","Russia","Rwanda","Saint Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","Solomon Islands","Sri Lanka","Somalia","Sudan","Suriname","Swaziland","Svalbard and Jan Mayen","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tajikistan","Tunisia","Tokelau","Tonga","Tuvalu","Turkey","Turkmenistan","Turks and Caicos Islands","Uganda","Ukraine","United Arab Emirates","U.S. Minor Outlying Islands","U.S. Virgin Islands","Uruguay","Uzbekistan","Vietnam","Vatican City","Venezuela","Western Sahara","Vanuatu","Wallis and Futuna","Yemen","Zambia","Zimbabwe","Saint Martin","Republic of Congo","Sint Maarten"],r={label:"Please Select",value:""};[r,...i].map((a=>{const n=document.createElement("option");return n.textContent=a.label,n.value=a.value,a===r&&(n.disabled=!0),n})).forEach((a=>{e.appendChild(a)}));for(const{name:n,value:i}of a.attributes)"name"!==n&&"value"!==n&&e.setAttribute(n,i);const o=a.value;(i.includes(o)||o===r.value)&&(e.value=o);try{n.insertBefore(e,a),n.removeChild(a)}catch(a){console.error("Error updating elements:",a)}}
updateHSCountryInputToSelect();