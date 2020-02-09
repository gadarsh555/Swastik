
        var mymap = L.map('mapid').setView([20.5937, 78.9629], 5);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoiaW1hbmtpdHJhaiIsImEiOiJjazZlc3puZncwZnl5M25tdnpjZmw5MmI5In0.o-2wDVX-tbqa4h8CCRGhRA',
        }).addTo(mymap);
        var address =[
          'Ruby Hall Clinic Wanowrie, Maharashtra, India',
          'Fortis Memorial Research Institute, Gurgaon, India',
          'Ahmedabad Civil Hospital, Ahmedabad, Gujarat, India',
          'Aakrithi Hospital, Vijayawada, Andhra Pradesh, India',
          'VOC Port Trust Hospital, Muttayyapuram, Tamil Nadu , India',
          'Vihar Hospital, Anand, Gujarat, India',
          'Advanced Centre for Eyes, Kitchlu Nagar, Ludhiana, Punjab, India',
          'Delhi Heart Hospital, Jagriti Enclave, Anand Vihar, Delhi, India',
          'Nighasan Hospital, Nighasan, Uttar Pradesh, India',
          'Apple Hospital, Surat, Gujarat, India',
          'Primary Health Centre, Gejjalagere, Karnataka, India',
          '32 Smile Stone Dental Clinic, New Delhi, Delhi, India',
          'Veterinary Polyclinic, Hoshiarpur, Punjab, India',
          'Hashmika Child Clinic, Visakhapatnam, Andhra Pradesh, India',
          'Padmini Nursing Home, Chetpet, Chennai, Tamil Nadu, India',
          'Subham Diagnostic & Polyclinic, Rajhati, West Bengal, India',
          'Smile Art Dental Clinic, Ravet, Pimpri-Chinchwad, Maharashtra, India',
          'Asilo Hospital, Mapusa, Goa, India',
          'eneral Hospital, Jangipara, Hooghly, West Bangali, India',
          'Western India Institute Of Neurosciences, Nagala Park, Kolhapur, Maharashtra, India',
          'MGM Hospital and Research Center, Katni, Madhya Pradesh, India',
          'Primary Health Care Center, Pataka, Athmallik, Odisha, India',
          'Jyotirmayee Medicine Store, Pataka, Athmallik, Odisha, India',
          'Androbest Andrology & Urology Center, Sai Nagar, LB Nagar, Hyderabad, Telangana, India',
          'ADORN Cosmetic Clinic, Ahmedabad, Gujarat, India',
          'Vignesh Hospital, Porur, Ramapuram, Chennai, Tamil Nadu, India',
          'Chennai Jayanth Acupuncture Hospital, Anna Nagar, Chennai, Tamil Nadu, India',
          'Srinivas Priya Hospital Pvt Ltd, Patel Road, Perambur, Chennai, India',
          'RELAX Hospital, Cuttack, Orrisa, Odisha, India',
          'Governmental Hospital, Bachannapet, Telangana, India',
          'Governmental Hospital of Thalaivasal, Thalaivasal, Tamil Nadu, India',
          'Dr deepa shama\'s DEEP Hospital, Hathras, Uttar Pradesh, India',
          'Aark Foundation, Donje Phata, Pune, Maharashtra, India',
          'Sant Blood Bank, Jhansi, Uttar Pradesh, India',
          'Riddhi Siddhi CHS, Borivali West, Mumbai, Maharashtra, India',
          'MAURYA Eye Care Center, Manikpur, Uttar Pradesh, India',
          'Dental Panacea, Faridabad, Hayrana, India',
          'Srirangam Government Hospital, Tiruchirappalli, Tamil Nadu, India',
          'Nithya Homoeo Pharmacy, Puducherry, India',
          'Bairabi hospital, Bairabi, Mizoram, India',
          'Khuangpuilam Clinic, Kolasib, Mizoram, India',
          'Nityanand Hospital, Katraj, Pune, Maharashtra, India',
          'Hojai Civil Hospital, Hojai, Assam, India',
          'Apollo BSR Hospital, Bhilai Nagar, Chhattisgarh, India',
          'Usha Vision Care, Srirampura, Bengaluru, Karnataka, India',
          'Keshav Madhav Blood Bank, Bareilly, Uttar Pradesh, India',
          'Mukta Dental Clinic, Shahid Bhagat Singh Nagar, Rajasthan, India',
          'MJM Hospital, Shivajinagar, Pune, Maharashtra, India',
          'Sarthak Manav Kusthashram, Jhotwara, Jaipur, Rajasthan, India',
          'Janta Clinic, Sector 3, Jaipur, Rajasthan, India',
          'Pashu Hospital Maheshwar, Maheshwar, Madhya Pradesh, India',
          'Sagar Hospital, KumaraSwamy layout, Bangalore, Karnataka, India',
          'Dr.Shruthi and Dr.Rajesh Patil, Rajatagiri, Dharwad, Karnataka, India',
          'UHP District General Hospital, Armavti, Maharashtra, India',
          'MGM Hospital, CBD Belapur, Mumbai, Maharashtra, India',
          'Pramathana Dental Care, Ideal Homes TWP, Bengaluru, Karnataka, India',
          'Joshi Hospital, Dabhade, Pune, Maharashtra, India',
          'Rural Hospital Solankur, Solankur, Maharashtra, India',
          '32 Gems Dental Care, Dosarka, Punjab, India',
          'Subham hospital, Mendarda, Sardarbag, Junagadh, Gujarat, India',
          'Hiranandani Hospital, Thane West, Mumbai, Maharashtra',
          'Sadar Hospital East Singhbhum, Tata Nagar, Khasmahal, Jugsalai, Bagbera, Jharkhand, India',
          'Fairbank James Friendship memorial Hospital, Ahmednagar, Maharashtra, India',
          'Medicare Skin & Cosmetic Clinic, Jayanagar, Bangalore, India',
          'Banglore Hospital, Bengaluru, Karnataka, India',
          'Indus Hospital, Sector 60, Punjab, India',
          'Naini, Allahabad, Uttar Pradesh, India',
          'Allahabad, Uttar Pradesh, India',
          'Raipur, Uttarakhand, India',
          'Tiruvalla Medical Mission Hospital, Thiruvalla, Kerala, India'
        ];
        var layerGroup = L.layerGroup().addTo(mymap);
        var data = [
            [18.48, 73.90],
            [	28.456789	,77.072472],
            [23.053967,	72.603844],
            [16.511965	,80.633163],
            [8.749402	,78.168137],
            [22.554609,	72.967361],
            [30.912411,	75.819412],
            [28.653229,	77.308601],
            [28.231674,	80.862534],
            [21.182947,	72.831581],
            [12.571047,	77.001183],
            [28.575552,	77.262192],
            [31.524620,	75.902008],
            [17.733288,	83.275429],
            [13.072790,	80.234421],
            [22.674788,	87.827484],
            [18.643318,	73.756042],
            [15.589379,	73.816574],
            [22.742229,	88.051460],
            [16.709822,	74.227463],
            [23.830975,	80.407120],
            [20.651484,	84.629814],
            [20.650694,	84.631775],
            [17.357861,	78.557442],
            [23.025570,	72.527458],
            [13.030947,	80.171585],
            [13.095658,	80.206116],
            [13.109593,	80.246666],
            [20.457838,	85.871536],
            [17.786711,	79.026970],
            [11.578299,	78.753654],
            [27.597265,	78.045441],
            [18.399286,	73.769058],
            [25.458599,	78.615517],
            [19.227650,	72.840012],
            [25.766827,	81.414467],
            [28.386002,	77.307678],
            [10.857012,	78.691162],
            [11.929894,	79.824852],
            [24.184324,	92.533638],
            [24.209656,	92.679642],
            [18.457527,	73.867668],
            [26.001802,	92.848373],
            [21.216276,	81.323608],
            [12.996090,	77.569672],
            [28.367180,	79.430153],
            [24.558990,	73.722801],
            [18.524338,	73.843887],
            [26.940351,	75.769493],
            [26.889633,	75.839554],
            [22.179298,	75.586754],
            [12.907950,	77.565063],
            [15.437003,	75.015060],
            [20.933424,	77.761139],
            [19.025806,	73.041550],
            [12.923236,	77.518456],
            [18.970409,	76.753838],
            [16.413506,	74.050575],
            [31.697235,	75.788933],
            [21.323082,	70.441826],
            [19.252562,	72.980057],
            [22.758648,	86.201385],
            [19.092508,	74.749596],
            [12.906529,	77.585831],
            [13.006752,	77.561737],
            [30.705317,	76.725052],
            [25.379194,	81.877068],
            [25.473034,	81.878357],
            [30.316700,	78.099998],
            [9.393924,	76.578423],
        ]
        for(var i=0;i<70;i++){
          marker = L.marker(data[i]).addTo(layerGroup);
          marker.bindPopup(address[i]).openPopup();
        }
