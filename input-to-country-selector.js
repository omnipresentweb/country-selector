function updateHSCountryInputToSelect() {
  const inputElement = document.querySelector('input[name="country"]');
  const parentDiv = inputElement.parentElement;
  const selectElement = document.createElement("select");
  selectElement.name = "country";
  console.log("Ran input to select for Country updater");

  const hqCountryOptions = [
    { label: "Please Select", value: "" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "United States", value: "United States" },
    { label: "Canada", value: "Canada" },
    { label: "Åland", value: "Åland" },
    { label: "Afghanistan", value: "Afghanistan" },
    { label: "Albania", value: "Albania" },
    { label: "Algeria", value: "Algeria" },
    { label: "American Samoa", value: "American Samoa" },
    { label: "Andorra", value: "Andorra" },
    { label: "Angola", value: "Angola" },
    { label: "Anguilla", value: "Anguilla" },
    { label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
    { label: "Argentina", value: "Argentina" },
    { label: "Armenia", value: "Armenia" },
    { label: "Aruba", value: "Aruba" },
    { label: "Australia", value: "Australia" },
    { label: "Austria", value: "Austria" },
    { label: "Azerbaijan", value: "Azerbaijan" },
    { label: "Bahamas", value: "Bahamas" },
    { label: "Bahrain", value: "Bahrain" },
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "Barbados", value: "Barbados" },
    { label: "Belarus", value: "Belarus" },
    { label: "Bermuda", value: "Bermuda" },
    { label: "Belgium", value: "Belgium" },
    { label: "Belize", value: "Belize" },
    { label: "Benin", value: "Benin" },
    { label: "Bhutan", value: "Bhutan" },
    { label: "Bonaire", value: "Bonaire" },
    { label: "Bolivia", value: "Bolivia" },
    { label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
    { label: "Botswana", value: "Botswana" },
    { label: "Bouvet Island", value: "Bouvet Island" },
    { label: "Brazil", value: "Brazil" },
    { label: "British Virgin Islands", value: "British Virgin Islands" },
    {
      label: "British Indian Ocean Territory",
      value: "British Indian Ocean Territory",
    },
    { label: "Brunei", value: "Brunei" },
    { label: "Bulgaria", value: "Bulgaria" },
    { label: "Burkina Faso", value: "Burkina Faso" },
    { label: "Burundi", value: "Burundi" },
    { label: "Cambodia", value: "Cambodia" },
    { label: "Cameroon", value: "Cameroon" },
    { label: "Cape Verde", value: "Cape Verde" },
    { label: "Cayman Islands", value: "Cayman Islands" },
    { label: "Central African Republic", value: "Central African Republic" },
    { label: "Chad", value: "Chad" },
    { label: "Chile", value: "Chile" },
    { label: "China", value: "China" },
    { label: "Christmas Island", value: "Christmas Island" },
    { label: "Cocos [Keeling] Islands", value: "Cocos [Keeling] Islands" },
    { label: "Colombia", value: "Colombia" },
    { label: "Comoros", value: "Comoros" },
    { label: "Cook Islands", value: "Cook Islands" },
    { label: "Costa Rica", value: "Costa Rica" },
    { label: "Croatia", value: "Croatia" },
    { label: "Cuba", value: "Cuba" },
    { label: "Curacao", value: "Curacao" },
    { label: "Cyprus", value: "Cyprus" },
    { label: "Czech Republic", value: "Czech Republic" },
    { label: "Denmark", value: "Denmark" },
    { label: "Djibouti", value: "Djibouti" },
    { label: "Dominica", value: "Dominica" },
    { label: "Dominican Republic", value: "Dominican Republic" },
    { label: "East Timor", value: "East Timor" },
    { label: "Ecuador", value: "Ecuador" },
    { label: "Egypt", value: "Egypt" },
    { label: "El Salvador", value: "El Salvador" },
    { label: "Equatorial Guinea", value: "Equatorial Guinea" },
    { label: "Eritrea", value: "Eritrea" },
    { label: "Estonia", value: "Estonia" },
    { label: "Ethiopia", value: "Ethiopia" },
    { label: "Falkland Islands", value: "Falkland Islands" },
    { label: "Faroe Islands", value: "Faroe Islands" },
    { label: "Finland", value: "Finland" },
    { label: "Fiji", value: "Fiji" },
    { label: "France", value: "France" },
    { label: "French Guiana", value: "French Guiana" },
    { label: "French Polynesia", value: "French Polynesia" },
    {
      label: "French Southern Territories",
      value: "French Southern Territories",
    },
    { label: "Gabon", value: "Gabon" },
    { label: "Gambia", value: "Gambia" },
    { label: "Georgia", value: "Georgia" },
    { label: "Germany", value: "Germany" },
    { label: "Ghana", value: "Ghana" },
    { label: "Gibraltar", value: "Gibraltar" },
    { label: "Greece", value: "Greece" },
    { label: "Greenland", value: "Greenland" },
    { label: "Grenada", value: "Grenada" },
    { label: "Guadeloupe", value: "Guadeloupe" },
    { label: "Guam", value: "Guam" },
    { label: "Guatemala", value: "Guatemala" },
    { label: "Guinea", value: "Guinea" },
    { label: "Guinea-Bissau", value: "Guinea-Bissau" },
    { label: "Guinea Conakry", value: "Guinea Conakry" },
    { label: "Guernsey", value: "Guernsey" },
    { label: "Guyana", value: "Guyana" },
    { label: "Haiti", value: "Haiti" },
    {
      label: "Heard Island and McDonald Islands",
      value: "Heard Island and McDonald Islands",
    },
    { label: "Honduras", value: "Honduras" },
    { label: "Hong Kong", value: "Hong Kong" },
    { label: "Hungary", value: "Hungary" },
    { label: "Iceland", value: "Iceland" },
    { label: "India", value: "India" },
    { label: "Indonesia", value: "Indonesia" },
    { label: "Iran", value: "Iran" },
    { label: "Iraq", value: "Iraq" },
    { label: "Ireland", value: "Ireland" },
    { label: "Isle of Man", value: "Isle of Man" },
    { label: "Israel", value: "Israel" },
    { label: "Italy", value: "Italy" },
    { label: "Ivory Coast", value: "Ivory Coast" },
    { label: "Jamaica", value: "Jamaica" },
    { label: "Japan", value: "Japan" },
    { label: "Jersey", value: "Jersey" },
    { label: "Jordan", value: "Jordan" },
    { label: "Kazakhstan", value: "Kazakhstan" },
    { label: "Kenya", value: "Kenya" },
    { label: "Kiribati", value: "Kiribati" },
    { label: "Kosovo", value: "Kosovo" },
    { label: "Kuwait", value: "Kuwait" },
    { label: "Kyrgyzstan", value: "Kyrgyzstan" },
    { label: "Laos", value: "Laos" },
    { label: "Latvia", value: "Latvia" },
    { label: "Lebanon", value: "Lebanon" },
    { label: "Lesotho", value: "Lesotho" },
    { label: "Liberia", value: "Liberia" },
    { label: "Libya", value: "Libya" },
    { label: "Liechtenstein", value: "Liechtenstein" },
    { label: "Lithuania", value: "Lithuania" },
    { label: "Luxembourg", value: "Luxembourg" },
    { label: "Madagascar", value: "Madagascar" },
    { label: "Malawi", value: "Malawi" },
    { label: "Malaysia", value: "Malaysia" },
    { label: "Mali", value: "Mali" },
    { label: "Malta", value: "Malta" },
    { label: "Macao", value: "Macao" },
    { label: "Maldives", value: "Maldives" },
    { label: "Marshall Islands", value: "Marshall Islands" },
    { label: "Martinique", value: "Martinique" },
    { label: "Mauritania", value: "Mauritania" },
    { label: "Mauritius", value: "Mauritius" },
    { label: "Mayotte", value: "Mayotte" },
    { label: "Micronesia", value: "Micronesia" },
    { label: "Mexico", value: "Mexico" },
    { label: "Moldova", value: "Moldova" },
    { label: "Monaco", value: "Monaco" },
    { label: "Mongolia", value: "Mongolia" },
    { label: "Montenegro", value: "Montenegro" },
    { label: "Montserrat", value: "Montserrat" },
    { label: "Morocco", value: "Morocco" },
    { label: "Mozambique", value: "Mozambique" },
    { label: "Myanmar [Burma]", value: "Myanmar [Burma]" },
    { label: "Myanmar", value: "Myanmar" },
    { label: "Namibia", value: "Namibia" },
    { label: "Nauru", value: "Nauru" },
    { label: "Nepal", value: "Nepal" },
    { label: "Netherlands", value: "Netherlands" },
    { label: "New Caledonia", value: "New Caledonia" },
    { label: "New Zealand", value: "New Zealand" },
    { label: "Nicaragua", value: "Nicaragua" },
    { label: "Niger", value: "Niger" },
    { label: "Nigeria", value: "Nigeria" },
    { label: "Niue", value: "Niue" },
    { label: "Norfolk Island", value: "Norfolk Island" },
    { label: "North Korea", value: "North Korea" },
    { label: "North Macedonia", value: "North Macedonia" },
    { label: "Northern Mariana Islands", value: "Northern Mariana Islands" },
    { label: "Norway", value: "Norway" },
    { label: "Oman", value: "Oman" },
    { label: "Palau", value: "Palau" },
    { label: "Palestine", value: "Palestine" },
    { label: "Pakistan", value: "Pakistan" },
    { label: "Panama", value: "Panama" },
    { label: "Papua New Guinea", value: "Papua New Guinea" },
    { label: "Paraguay", value: "Paraguay" },
    { label: "Peru", value: "Peru" },
    { label: "Philippines", value: "Philippines" },
    { label: "Pitcairn Islands", value: "Pitcairn Islands" },
    { label: "Poland", value: "Poland" },
    { label: "Portugal", value: "Portugal" },
    { label: "Puerto Rico", value: "Puerto Rico" },
    { label: "Qatar", value: "Qatar" },
    { label: "Republic of the Congo", value: "Republic of the Congo" },
    { label: "Réunion", value: "Réunion" },
    { label: "Romania", value: "Romania" },
    { label: "Russia", value: "Russia" },
    { label: "Rwanda", value: "Rwanda" },
    { label: "Saint Barthélemy", value: "Saint Barthélemy" },
    { label: "Saint Helena", value: "Saint Helena" },
    { label: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
    { label: "Saint Lucia", value: "Saint Lucia" },
    { label: "Saint Pierre and Miquelon", value: "Saint Pierre and Miquelon" },
    {
      label: "Saint Vincent and the Grenadines",
      value: "Saint Vincent and the Grenadines",
    },
    { label: "Samoa", value: "Samoa" },
    { label: "San Marino", value: "San Marino" },
    { label: "São Tomé and Príncipe", value: "São Tomé and Príncipe" },
    { label: "Saudi Arabia", value: "Saudi Arabia" },
    { label: "Senegal", value: "Senegal" },
    { label: "Serbia", value: "Serbia" },
    { label: "Seychelles", value: "Seychelles" },
    { label: "Sierra Leone", value: "Sierra Leone" },
    { label: "Singapore", value: "Singapore" },
    { label: "Slovakia", value: "Slovakia" },
    { label: "Slovenia", value: "Slovenia" },
    { label: "South Africa", value: "South Africa" },
    {
      label: "South Georgia and the South Sandwich Islands",
      value: "South Georgia and the South Sandwich Islands",
    },
    { label: "South Korea", value: "South Korea" },
    { label: "South Sudan", value: "South Sudan" },
    { label: "Spain", value: "Spain" },
    { label: "Solomon Islands", value: "Solomon Islands" },
    { label: "Sri Lanka", value: "Sri Lanka" },
    { label: "Somalia", value: "Somalia" },
    { label: "Sudan", value: "Sudan" },
    { label: "Suriname", value: "Suriname" },
    { label: "Swaziland", value: "Swaziland" },
    { label: "Svalbard and Jan Mayen", value: "Svalbard and Jan Mayen" },
    { label: "Sweden", value: "Sweden" },
    { label: "Switzerland", value: "Switzerland" },
    { label: "Syria", value: "Syria" },
    { label: "Taiwan", value: "Taiwan" },
    { label: "Tanzania", value: "Tanzania" },
    { label: "Thailand", value: "Thailand" },
    { label: "Togo", value: "Togo" },
    { label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
    { label: "Tajikistan", value: "Tajikistan" },
    { label: "Tunisia", value: "Tunisia" },
    { label: "Tokelau", value: "Tokelau" },
    { label: "Tonga", value: "Tonga" },
    { label: "Tuvalu", value: "Tuvalu" },
    { label: "Turkey", value: "Turkey" },
    { label: "Turkmenistan", value: "Turkmenistan" },
    { label: "Turks and Caicos Islands", value: "Turks and Caicos Islands" },
    { label: "Uganda", value: "Uganda" },
    { label: "Ukraine", value: "Ukraine" },
    { label: "United Arab Emirates", value: "United Arab Emirates" },
    {
      label: "U.S. Minor Outlying Islands",
      value: "U.S. Minor Outlying Islands",
    },
    { label: "U.S. Virgin Islands", value: "U.S. Virgin Islands" },
    { label: "Uruguay", value: "Uruguay" },
    { label: "Uzbekistan", value: "Uzbekistan" },
    { label: "Vietnam", value: "Vietnam" },
    { label: "Vatican City", value: "Vatican City" },
    { label: "Venezuela", value: "Venezuela" },
    { label: "Western Sahara", value: "Western Sahara" },
    { label: "Vanuatu", value: "Vanuatu" },
    { label: "Wallis and Futuna", value: "Wallis and Futuna" },
    { label: "Yemen", value: "Yemen" },
    { label: "Zambia", value: "Zambia" },
    { label: "Zimbabwe", value: "Zimbabwe" },
    { label: "Saint Martin", value: "Saint Martin" },
    { label: "Republic of Congo", value: "Republic of Congo" },
    { label: "Sint Maarten", value: "Sint Maarten" },
    { label: "The Netherlands", value: "The Netherlands" },
  ];

  hqCountryOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.label;
    optionElement.value = option.value;
    if (option.label === "Please Select") {
      optionElement.disabled = true;
    }
    selectElement.appendChild(optionElement);
  });

  for (const { name, value } of inputElement.attributes) {
    if (name !== "name" && name !== "value") {
      selectElement.setAttribute(name, value);
    }
  }

  const inputValue = inputElement.value;
  const matchingOption = hqCountryOptions.find(
    (option) => option.value === inputValue
  );

  if (matchingOption) {
    selectElement.value = matchingOption.value;
  }

  parentDiv.insertBefore(selectElement, inputElement);
  parentDiv.removeChild(inputElement);
}
