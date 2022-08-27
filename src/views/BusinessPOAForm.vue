<template>
<body style="margin: 0;">

<div id="p1" style="overflow: hidden; position: relative; background-color: white; width: 935px; height: 1210px;">
<!-- End embedded font definitions -->




<!-- Begin text definitions (Positioned/styled in CSS) -->
<div id="business" class="t type">Business/Commercial Pet Import</div>
<div id="t1_1" class="t s1_1">CUSTOMS POWER OF ATTORNEY</div>
<div id="t2_1" class="t s2_1">(1)</div>
<div id="t3_1" class="t s3_1">Federal Tax ID</div>
<div id="t4_1" class="t s2_1">(2)</div>
<div id="t8_1" class="t s6_1">EIN/SSN</div>
<div id="t9_1" class="t s7_1">: {{ einssn }}</div>
<!--
<div id="t5_1" class="t s4_1">Check Appropriate Box</div>
<div id="t6_1" class="t s5_1">□</div>
<div id="t7_1" class="t s5_1">□          □            □           □ </div>

<div id="ta_1" class="t s4_1">Individual</div>
<div id="tb_1" class="t s4_1">Partnership</div>
<div id="tc_1" class="t s4_1">Corporation</div>
<div id="td_1" class="t s4_1">Sole Proprietorship</div>
<div id="te_1" class="t s8_1">L.L.C.</div>
-->
<div id="t5_1" class="t s4_1">Company type: {{style}}</div>
<div id="t_1e" class="t s2_1">(13)</div>
<div id="t_2e" class="t s4_1">Email:</div>
<div id="tf_1" class="t s4_1">KNOW ALL MEN BY THESE PRESENTS:</div>
<div id="tg_1" class="t s4_1">That</div>
<div id="th_1" class="t s8_1">,</div>
<div id="ti_1" class="t s2_1">(3)</div>
<div id="tj_1" class="t s9_1"> {{companyName}}</div>
<div id="tk_1" class="t s4_1">a corporation</div>
<div id="tl_1" class="t s3_1">(Full name of Individual, Partnership, Corporation, Sole Proprietorship, or LLC)</div>
<div id="tm_1" class="t s4_1">doing business under the laws of the State of</div>
<div id="tn_1" class="t s2_1">(4)</div>
<div id="to_1" class="t s3_1">{{corpState}}</div>
<div id="tp_1" class="t s4_1">or a</div>
<div id="tq_1" class="t s2_1">(5)</div>
<div id="tr_1" class="t s3_1">{{style}}</div>
<div id="ts_1" class="t s3_1">(State of Incorporation)</div>
<div id="tt_1" class="t s3_1">(Individual, Sole Proprietorship or Partnership)</div>
<div id="tu_1" class="t s4_1">doing business as</div>
<div id="tv_1" class="t s2_1">(6)</div>
<div id="tw_1" class="t s3_1">{{dba}}</div>
<div id="tx_1" class="t s4_1">residing at or having an office and place</div>
<div id="ty_1" class="t s3_1">(Name of Sole Proprietorship or Partnership, DBA/AKA of a Corporation)</div>
<div id="tz_1" class="t s4_1">of business at:</div>
<div id="t10_1" class="t s2_1">(7)</div>
<div id="t11_1" class="t s3_1">{{businessAdd}}, {{businessCity}}, {{businessState}}, {{businessZip}}</div>
<div id="t12_1" class="t s3_1">(Individual residence address or Company physical address in full)</div>
<div id="t13_1" class="t s4_1">hereby constitutes and appoints each of the following persons:</div>
<div id="t14_1" class="t s10_1">ORIOX CUSTOMS BROKER, INC</div>
<div id="t15_1" class="t s8_1">.</div>
<div id="t16_1" class="t s4_1">through any of its licensed</div>
<div id="t17_1" class="t s4_1">officers and employees authorized to act for by power of attorney, as a true and lawful agent and attorney of the grantor named above for and</div>
<div id="t18_1" class="t s4_1">in the name, place, and stead of said grantor from this date and in all Customs Districts, and in no other name, to make, endorse, sign,</div>
<div id="t19_1" class="t s4_1">declare, or swear to any entry, withdrawal, declaration, certificate, bill of lading, carnet or any other documents required by law or regulation</div>
<div id="t1a_1" class="t s4_1">in connection with such merchandise; to receive any merchandise deliverable to said grantor,</div>
<div id="t1b_1" class="t s4_1">To make endorsements on bills of lading conferring authority to transfer title, make entry or collect drawback, and to make, sign,</div>
<div id="t1c_1" class="t s4_1">declare, or swear to any statement, supplemental statement, schedule, supplemental schedule, certificate of delivery, certificate of</div>
<div id="t1d_1" class="t s4_1">manufacture, certificate of manufacture and delivery, abstract of manufacturing records, declaration of proprietor on drawback entry,</div>
<div id="t1e_1" class="t s4_1">declaration of exporter on drawback entry, or any other affidavit or document which may be required by law or regulation for drawback</div>
<div id="t1f_1" class="t s4_1">purposes, regardless of whether such bill of lading, sworn statement, schedule, certificate, abstract, declaration, or other affidavit or document</div>
<div id="t1g_1" class="t s4_1">is intended for filing in any customs district;</div>
<div id="t1h_1" class="t s4_1">To sign, seal, and deliver for and as the act of said grantor any bond required by law or regulation in connection with the entry or</div>
<div id="t1i_1" class="t s4_1">withdrawal of imported merchandise or merchandise exported with or without benefit of drawback, or in any connection with the entry,</div>
<div id="t1j_1" class="t s4_1">clearance, lading, unlading or navigation of any vessel or other means of conveyance owned or operated by said grantor, and any and all</div>
<div id="t1k_1" class="t s4_1">bonds which may be voluntarily given and accepted under applicable laws and regulations, consignee’s and owner’s declarations provided</div>
<div id="t1l_1" class="t s4_1">for in section 485, Tariff Act of 1930, as amended, or affidavits in connection with the entry of merchandise;</div>
<div id="t1m_1" class="t s4_1">To sign and swear to any document and to perform any act that may be necessary or required by law or regulation in connection</div>
<div id="t1n_1" class="t s4_1">with the entering, clearing, lading, unlading, or operation of any vessel or other means of conveyance owned or operated by said grantor;</div>
<div id="t1o_1" class="t s4_1">To authorize other Customs brokers to act as grantor’s agent; to receive, endorse and collect checks issued for Customs duty</div>
<div id="t1p_1" class="t s4_1">refunds in grantor’s name drawn on the Treasurer of the United States, to accept service of process on behalf of the grantor;</div>
<div id="t1q_1" class="t s4_1">And generally transact at the customhouses in any district any and all customs business, including making, signing, and filing of</div>
<div id="t1r_1" class="t s4_1">protests under section 514 of the Tariff Act of 1930, in which said grantor is or may be concerned or interested and which may properly be</div>
<div id="t1s_1" class="t s4_1">transacted or performed by an agent and attorney, giving to said agent and attorney full power and authority to do anything whatever requisite</div>
<div id="t1t_1" class="t s4_1">and necessary to be done in the premises as full as said grantor could do if present and acting, hereby ratifying and confirming all that the</div>
<div id="t1u_1" class="t s4_1">said agent and attorney shall lawfully do by virtue of these presents; the foregoing power of attorney to remain in full force and effect until</div>
<div id="t1v_1" class="t s4_1">notice of revocation in writing is duly given to and received by a District Director of Customs. If the donor of this power of attorney is a</div>
<div id="t1w_1" class="t s4_1">partnership, the said power shall in no case have any force or effect after the expiration of 2 years from the date of its execution.</div>
<div id="t1x_1" class="t s4_1">Per 19 CFR 111.29(b)(1) - If you are the importer of record, payment to the broker will not relieve you of liability for Customs</div>
<div id="t1y_1" class="t s4_1">charges (duties, taxes or other debts owed Customs) in the event the charges are not paid by the broker. Therefore, if you pay by check,</div>
<div id="t1z_1" class="t s4_1">Customs charges may be paid with a separate check payable to the “U.S. Customs and Border Protection” which shall be delivered to</div>
<div id="t20_1" class="t s4_1">Customs by the broker.</div>
<div id="t21_1" class="t s4_1">If the fees and charges are to be collected by or through the grantor’s forwarder(s) and/or freight agent(s), the grantor waives any</div>
<div id="t22_1" class="t s4_1">requirement of an invoice or statement of the Customs brokerage charges from Oriox Customs Broker, Inc. under 19 CRF 111.36 (c)(2)(i);</div>
<div id="t23_1" class="t s4_1">And contrary to 19 CFR 111.24, the grantor authorizes Oriox Customs Broker, Inc. to share all Customs-related information with the</div>
<div id="t24_1" class="t s4_1">grantor’s freight forwarder(s) and/or freight agent(s). However, the grantor retains the right to contact Oriox Customs Broker, Inc. directly</div>
<div id="t25_1" class="t s4_1">regarding any Customs –related matters as per 19 CFR 111.36(c)(3).</div>
<div id="t26_1" class="t s4_1">If the grantor is a Limited Liability Corporation, the signatory certifies that he/she has full authority to execute this instrument on</div>
<div id="t27_1" class="t s4_1">behalf of the grantor.</div>
<div id="t28_1" class="t s4_1">IN WITNESS WHEREOF, the said</div>
<div id="t29_1" class="t s2_1">(8)</div>
<div id="t2a_1" class="t s4_1"> {{ companyName }}</div>
<div id="t2b_1" class="t s3_1">(Full name of Corporation or Company)</div>
<div id="t2c_1" class="t s4_1">has caused these presents to be sealed and signed: (Signature)</div>
<div id="t2d_1" class="t s2_1">(9)</div>
<div id="t2e_1" class="t s4_1">__________________________________________________________</div>
<div id="t2f_1" class="t s3_1">(Must be signed by the owner or a corporate officer)</div>
<div id="t2g_1" class="t s2_1">(10)</div>
<div id="t2h_1" class="t s4_1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{firstName}} {{lastName}}</div>
<div id="t2i_1" class="t s2_1">(11)</div>
<div id="t2j_1" class="t s4_1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!--TITLE--></div>
<div id="t2k_1" class="t s2_1">(12)</div>
<div id="t2l_1" class="t s4_1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div id="t2m_1" class="t s4_1">(Print name of signatory)</div>
<div id="t2n_1" class="t s3_1">(Owner, President, Vice President, Secretary, Treasurer, CEO, CFO, Partner, Member)</div>
<div id="t_irs" class="t s7_1">: ____________________</div>
<div id="t_cname" class="t s9_1">______________________________________________________________________</div>
<div id="t_state" class="t s3_1">____________________</div>
<div id="t_prop" class="t s3_1">_______________________________________________________</div>
<div id="t_propn" class="t s3_1">_______________________________________________________________________</div>
<div id="t_add" class="t s3_1">______________________________________________________________________________________________________________,</div>
<div id="t_compn" class="t s4_1">________________________________________________________________________________</div>
<div id="t_sig" class="t s4_1">__________________________________________________________</div>
<div id="t_name" class="t s4_1">Name: ________________________________</div>
<div id="t_cap" class="t s4_1">Capacity: _____________________________</div>
<div id="t_cap1" class="t s4_1">{{ capacity }}</div>
<div id="t_date" class="t s4_1">Date: ___________________</div>
<div id="t_em" class="t s4_1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________________________</div>
<!--
<div id="t_db" class="t s4_1">DL: ______________</div>
<div id="t_db1" class="t s4_1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ dl }}</div>
<div id="t_db2" class="t s4_1">(14)</div>
-->
<div id="poid" class="t s4_1">If your EIN/SSN is new in customs system, the following documents are required as proof of ID:</div>
<div id="poid2" class="t s4_1"><strong>***</strong>EIN copy of SS-4 letter from IRS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>***</strong>Copy of Driver's License&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>***</strong>SSN: copy of Social Security Card</div>
<div id="t_ema" class="t s4_1">{{email}}</div> 
<div id="date1" class="t s4_1"> {{ currentDate() }}</div>
<!--
<div id="ssc_1" class="t s4_1">(15)</div>
<div id="ssc_2" class="t s4_1">SSC/SS4: _____________</div>
<div id="ssc_3" class="t s4_1">&nbsp;&nbsp;{{sscss4}}</div>
-->
<div id="tele_1" class="t s4_1">(14)</div>
<div id="tele_2" class="t s4_1">Tele: _____________________</div>
<div id="tele_3" class="t s4_1">&nbsp;{{phone}}</div>
<!-- End text definitions -->
</div>
</body>

</template>

<script>
    export default {
      name: 'BusinessPOAForm',
      props: ['capacity', 'style', 'companyName', 'firstName', 'lastName', 'einssn', 'dba', 'businessAdd', 'businessCity', 'businessState','businessZip','companyAdd','companyCity','companyState','companyZip','corpState','phone','email'],
      methods: {
        currentDate() {
           const current = new Date();
           const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
           return date;
        }
    }
	}
</script>

<style lang="scss">
.t {
	-webkit-transform-origin: bottom left;
	-ms-transform-origin: bottom left;
	transform-origin: bottom left;
	-webkit-transform: scale(0.25);
	-ms-transform: scale(0.25);
	transform: scale(0.25);
	z-index: 2;
	position: absolute;  
	white-space: pre;
	overflow: visible;
}
#business{left:338px;bottom:1145px;word-spacing:0.4px;}
#t1_1{left:248px;bottom:1165px;word-spacing:0.4px;}
#t2_1{left:96px;bottom:1128px;letter-spacing:0.1px;}
#t3_1{left:113px;bottom:1119px;letter-spacing:-0.3px;word-spacing:1.2px;}
#t4_1{left:256px;bottom:1119px;letter-spacing:-0.3px;}
#t5_1{left:273px;bottom:1119px;word-spacing:-0.1px;}
#t6_1{left:446px;bottom:1116px;}
#t7_1{left:518px;bottom:1116px;letter-spacing:-0.2px;word-spacing:0.2px;}
#t8_1{left:95px;bottom:1099px;letter-spacing:0.2px;}
#t9_1{left:144px;bottom:1099px;word-spacing:13.4px;}
#ta_1{left:424px;bottom:1099px;letter-spacing:-0.1px;}
#tb_1{left:501px;bottom:1099px;letter-spacing:0.1px;}
#tc_1{left:591px;bottom:1099px;letter-spacing:-0.1px;}
#td_1{left:689px;bottom:1099px;letter-spacing:0.1px;word-spacing:-0.9px;}
#te_1{left:814px;bottom:1098px;letter-spacing:-0.2px;}
#tf_1{left:77px;bottom:1064px;word-spacing:0.1px;}
#tg_1{left:77px;bottom:1028px;letter-spacing:-0.1px;}
#th_1{left:102px;bottom:1028px;}
#ti_1{left:111px;bottom:1037px;letter-spacing:0.1px;}
#tj_1{left:327px;bottom:1027px;}
#tk_1{left:778px;bottom:1028px;letter-spacing:0.1px;word-spacing:-0.1px;}
#tl_1{left:264px;bottom:1013px;letter-spacing:-0.1px;}
#tm_1{left:77px;bottom:978px;letter-spacing:0.1px;word-spacing:-0.2px;}
#tn_1{left:326px;bottom:987px;letter-spacing:0.1px;}
#to_1{left:377px;bottom:979px;letter-spacing:-0.1px;}
#tp_1{left:472px;bottom:978px;letter-spacing:0.4px;word-spacing:-0.5px;}
#tq_1{left:499px;bottom:987px;letter-spacing:-0.3px;}
#tr_1{left:616px;bottom:979px;letter-spacing:-0.1px;}
#ts_1{left:349px;bottom:963px;letter-spacing:-0.1px;word-spacing:0.1px;}
#tt_1{left:559px;bottom:963px;letter-spacing:-0.1px;word-spacing:0.4px;}
#tu_1{left:77px;bottom:943px;word-spacing:-0.1px;}
#tv_1{left:176px;bottom:952px;letter-spacing:0.1px;}
#tw_1{left:294px;bottom:943px;letter-spacing:-0.1px;}
#tx_1{left:631px;bottom:943px;word-spacing:-0.1px;}
#ty_1{left:212px;bottom:928px;letter-spacing:-0.1px;word-spacing:0.2px;}
#tz_1{left:77px;bottom:894px;letter-spacing:0.1px;word-spacing:-0.4px;}
#t10_1{left:159px;bottom:903px;letter-spacing:-0.3px;}
#t11_1{left:273px;bottom:894px;letter-spacing:-0.1px;}
#t12_1{left:288px;bottom:879px;letter-spacing:-0.1px;word-spacing:-0.1px;}
#t13_1{left:77px;bottom:848px;word-spacing:-0.2px;}
#t14_1{left:427px;bottom:848px;letter-spacing:0.1px;word-spacing:0.1px;}
#t15_1{left:663px;bottom:848px;}
#t16_1{left:671px;bottom:848px;letter-spacing:0.1px;word-spacing:-0.6px;}
#t17_1{left:77px;bottom:832px;word-spacing:0.6px;}
#t18_1{left:77px;bottom:816px;letter-spacing:-0.1px;word-spacing:0.3px;}
#t19_1{left:77px;bottom:800px;word-spacing:-0.1px;}
#t1a_1{left:77px;bottom:784px;word-spacing:0.3px;}
#t1b_1{left:132px;bottom:768px;word-spacing:3.2px;}
#t1c_1{left:77px;bottom:753px;word-spacing:18.5px;}
#t1d_1{left:77px;bottom:737px;word-spacing:13.2px;}
#t1e_1{left:77px;bottom:721px;word-spacing:6.5px;}
#t1f_1{left:77px;bottom:705px;word-spacing:0.2px;}
#t1g_1{left:77px;bottom:689px;word-spacing:-0.1px;}
#t1h_1{left:132px;bottom:674px;word-spacing:2.8px;}
#t1i_1{left:77px;bottom:658px;word-spacing:7.5px;}
#t1j_1{left:77px;bottom:642px;word-spacing:5.7px;}
#t1k_1{left:77px;bottom:626px;word-spacing:4.6px;}
#t1l_1{left:77px;bottom:610px;word-spacing:0.2px;}
#t1m_1{left:132px;bottom:594px;word-spacing:3.6px;}
#t1n_1{left:77px;bottom:579px;}
#t1o_1{left:132px;bottom:563px;word-spacing:9px;}
#t1p_1{left:77px;bottom:547px;word-spacing:0.1px;}
#t1q_1{left:132px;bottom:531px;word-spacing:4.4px;}
#t1r_1{left:77px;bottom:515px;word-spacing:2.7px;}
#t1s_1{left:77px;bottom:500px;word-spacing:0.3px;}
#t1t_1{left:77px;bottom:484px;word-spacing:3.8px;}
#t1u_1{left:77px;bottom:468px;word-spacing:3px;}
#t1v_1{left:77px;bottom:452px;word-spacing:4.8px;}
#t1w_1{left:77px;bottom:436px;word-spacing:0.2px;}
#t1x_1{left:132px;bottom:420px;word-spacing:4.9px;}
#t1y_1{left:77px;bottom:405px;word-spacing:6px;}
#t1z_1{left:77px;bottom:389px;word-spacing:8.9px;}
#t20_1{left:77px;bottom:373px;word-spacing:-0.4px;}
#t21_1{left:132px;bottom:357px;word-spacing:3.1px;}
#t22_1{left:77px;bottom:341px;word-spacing:3.6px;}
#t23_1{left:77px;bottom:326px;word-spacing:10.6px;}
#t24_1{left:77px;bottom:310px;word-spacing:4.6px;}
#t25_1{left:77px;bottom:294px;word-spacing:-0.1px;}
#t26_1{left:132px;bottom:278px;word-spacing:2.8px;}
#t27_1{left:77px;bottom:262px;letter-spacing:0.1px;word-spacing:-0.6px;}
#t28_1{left:77px;bottom:226px;word-spacing:0.2px;}
#t29_1{left:277px;bottom:235px;letter-spacing:0.1px;}
#t2a_1{left:452px;bottom:226px;}
#t2b_1{left:424px;bottom:211px;letter-spacing:-0.2px;word-spacing:0.3px;}
#t2c_1{left:94px;bottom:175px;word-spacing:0.1px;}
#t2d_1{left:441px;bottom:184px;letter-spacing:-0.3px;}
#t2e_1{left:458px;bottom:175px;}
#t2f_1{left:506px;bottom:160px;letter-spacing:-0.1px;word-spacing:-0.1px;}
#t2g_1{left:94px;bottom:133px;letter-spacing:-0.1px;}
#t2h_1{left:168px;bottom:125px;word-spacing:0.3px;}
#t2i_1{left:378px;bottom:133px;letter-spacing:-0.3px;}
#t2j_1{left:453px;bottom:125px;word-spacing:0.3px;}
#t2k_1{left:662px;bottom:133px;letter-spacing:-0.1px;}
#t2l_1{left:691px;bottom:125px;word-spacing:13.5px;}
#t2m_1{left:180px;bottom:108px;letter-spacing:-0.1px;word-spacing:0.4px;}
#t2n_1{left:340px;bottom:108px;letter-spacing:-0.2px;word-spacing:0.5px;}
#t_1e{left:94px;bottom:80px;letter-spacing:-0.1px;}
#t_2e{left:116px;bottom:72px;letter-spacing:0.3px;}
#t_irs{left:144px;bottom:1099px;word-spacing:13.4px;}
#t_cname{left:127px;bottom:1027px;}
#t_state{left:347px;bottom:979px;letter-spacing:-0.1px;}
#t_prop{left:516px;bottom:979px;letter-spacing:-0.1px;}
#t_propn{left:194px;bottom:943px;letter-spacing:-0.1px;}
#t_add{left:173px;bottom:894px;letter-spacing:-0.1px;}
#t_compn{left:302px;bottom:226px;}
#t_sig{left:458px;bottom:175px;}
#t_name{left:118px;bottom:125px;word-spacing:0.3px;}
#t_cap{left:403px;bottom:125px;word-spacing:0.3px;}
#t_cap1{left:473px;bottom:125px;word-spacing:0.3px;}
#t_date{left:691px;bottom:125px;word-spacing:13.5px;}
#t_em{left:116px;bottom:72px;word-spacing:13.4px;}
#t_db{left:360px;bottom:72px;word-spacing:13.4px;}
#t_db1{left:360px;bottom:72px;word-spacing:13.4px;}
#t_db2{left:334px;bottom:80px;word-spacing:13.4px;}
#poid{left:94px;bottom:22px;word-spacing:13.4px;}
#poid2{left:94px;bottom:7px;word-spacing:13.4px;}
#t_ema{left:176px;bottom:72px;word-spacing:13.4px;}
#date1{left:741px;bottom:125px;word-spacing:13.5px;}
#tele_1{left:662px;bottom:80px;letter-spacing:-0.1px;}
#tele_2{left:691px;bottom:72px;word-spacing:13.5px;}
#tele_3{left:741px;bottom:72px;word-spacing:13.5px;}
#ssc_1{left:490px;bottom:80px;letter-spacing:-0.1px;}
#ssc_2{left:516px;bottom:72px;letter-spacing:0.3px;}
#ssc_3{left:576px;bottom:72px;letter-spacing:0.3px;}
.type{
	font-size: 70px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}
.s1_1{
	font-size: 110px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s2_1{
    font-weight: bold;
	font-size: 49.1px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s3_1{
	font-size: 49.1px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s4_1{
	font-size: 55px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s5_1{
    font-weight: bold;
	font-size: 122.4px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s6_1{
	font-size: 55px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s7_1{
    font-style: italic;
    font-weight: bold;
	font-size: 55px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s8_1{
	font-size: 60.9px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s9_1{
	font-size: 73.3px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}

.s10_1{
    font-weight: bold;
	font-size: 60.9px;
	font-family: 'Times New Roman';
	color: rgb(0,0,0);
}



</style>