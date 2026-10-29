function getDateNow()
{
 var now = new Date();
 var e =  now.getDate();
 d = e + ' ';
 var month = new Array(13);
     month[1] = "€нвар€";
     month[2] = "феврал€";
     month[3] = "марта";
     month[4] = "апрел€";
     month[5] = "ма€";
     month[6] = "июн€";
     month[7] = "июл€";
     month[8] = "августа";
     month[9] = "сент€бр€";
     month[10] = "окт€бр€";
     month[11] = "но€бр€";
     month[12] = "декабр€";
 var day = new Array(7);
     day[0]= "воскресенье";
     day[1]= "понедельник";
     day[2]= "вторник";
     day[3]= "среда";
     day[4]= "четверг";
     day[5]= "п€тница";
     day[6]= "суббота";
 nday=day[now .getDay()]
 nmonths =month[ (now.getMonth() + 1)];
 d += nmonths + ', ' +nday ;
 return '—егодн€ ' + d+'&nbsp; ' ;
}

//Time town
//---------
var times = new Array(96);
    times[0] = "0:00";
    times[1] = "0:15";
    times[2] = "0:30";
    times[3] = "0:45";
    times[4] = "1:00";
    times[5] = "1:15";
    times[6] = "1:30";
    times[7] = "1:45";
    times[8] = "2:00";
    times[9] = "2:15";
    times[10] = "2:30";
    times[11] = "2:45";
    times[12] = "3:00";
    times[13] = "3:15";
    times[14] = "3:30";
    times[15] = "3:45";
    times[16] = "4:00";
    times[17] = "4:15";
    times[18] = "4:30";
    times[19] = "4:45";
    times[20] = "5:00";
    times[21] = "5:15";
    times[22] = "5:30";
    times[23] = "5:45";
    times[24] = "6:00";
    times[25] = "6:15";
    times[26] = "6:30";
    times[27] = "6:45";
    times[28] = "7:00";
    times[29] = "7:15";
    times[30] = "7:30";
    times[31] = "7:45";
    times[32] = "8:00";
    times[33] = "8:15";
    times[34] = "8:30";
    times[35] = "8:45";
    times[36] = "9:00";
    times[37] = "9:15";
    times[38] = "9:30";
    times[39] = "9:45";
    times[40] = "10:00";
    times[41] = "10:15";
    times[42] = "10:30";
    times[43] = "10:45";
    times[44] = "11:00";
    times[45] = "11:15";
    times[46] = "11:30";
    times[47] = "11:45";
    times[48] = "12:00";
    times[49] = "12:15";
    times[50] = "12:30";
    times[51] = "12:45";
    times[52] = "13:00";
    times[53] = "13:15";
    times[54] = "13:30";
    times[55] = "13:45";
    times[56] = "14:00";
    times[57] = "14:15";
    times[58] = "14:30";
    times[59] = "14:45";
    times[60] = "15:00";
    times[61] = "15:15";
    times[62] = "15:30";
    times[63] = "15:45";
    times[64] = "16:00";
    times[65] = "16:15";
    times[66] = "16:30";
    times[67] = "16:45";
    times[68] = "17:00";
    times[69] = "17:15";
    times[70] = "17:30";
    times[71] = "17:45";
    times[72] = "18:00";
    times[73] = "18:15";
    times[74] = "18:30";
    times[75] = "18:45";
    times[76] = "18:00";
    times[77] = "19:15";
    times[78] = "19:30";
    times[79] = "19:45";
    times[80] = "20:00";
    times[81] = "20:15";
    times[82] = "20:30";
    times[83] = "20:45";
    times[84] = "21:00";
    times[85] = "21:15";
    times[86] = "21:30";
    times[87] = "21:45";
    times[88] = "22:00";
    times[89] = "22:15";
    times[90] = "22:30";
    times[91] = "22:45";
    times[92] = "23:00";
    times[93] = "23:15";
    times[94] = "23:30";
    times[95] = "23:45";
    times[96] = "42:00";

function CTime(form)
{
	var day = ', этого дн€';
	var baseCityTime = 30 * parseInt(form.timeChoice.options[form.timeChoice.selectedIndex].value);
	var offset = parseInt(form.firstCity.options[form.firstCity.selectedIndex].value ) -
		parseInt(form.secondCity.options[form.secondCity.selectedIndex].value);
	var selectedCityTime = (baseCityTime - offset) / 30;
	var targetTime = parseInt(form.timeChoice.options[form.timeChoice.selectedIndex].value ) +
		selectedCityTime;

	if (selectedCityTime < 0)
	{
		selectedCityTime = 48 + selectedCityTime;
		day = ', предыдущего дн€';
	} 
	
	else if (selectedCityTime > 47)
	{
		selectedCityTime = selectedCityTime - 48;
		day = ', следующего дн€';
	}

	if (selectedCityTime < 0)
		selectedCityTime=selectedCityTime * -1;

	form.time.value = times[selectedCityTime * 2] + day;
	
	return false;
}